import type { Metadata } from "next";
import { Fragment } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/lib/db";
import { decodeParam } from "@/lib/url-param";
import { absoluteUrl } from "@/lib/site";
import { faDate, faDigits } from "@/lib/post-format";
import { getHomeSectionPosts, getLiveStream, getNavCategories } from "@/lib/home-data";
import SiteHeader from "@/components/petro/site-header";
import SiteFooter from "@/components/petro/site-footer";
import BackToTop from "@/components/petro/back-to-top";
import SmartImage from "@/components/petro/smart-image";
import { ChevronLeft, ChevronRight, Clock, Play, Tag, Newspaper } from "lucide-react";

export const dynamic = "force-dynamic";

const PAGE_SIZE = 12;

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
};

async function getCategory(rawSlug: string) {
  const slug = decodeParam(rawSlug);
  return db.category.findUnique({ where: { slug } });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategory(slug);
  if (!category) return { title: "یافت نشد" };
  const canonical = absoluteUrl(`/category/${category.slug}`);
  return {
    title: category.name,
    description: `آرشیو اخبار و تحلیل‌های ${category.name} در اکو تایمز`,
    alternates: { canonical },
    openGraph: {
      title: `${category.name} | اکو تایمز`,
      description: `آرشیو اخبار و تحلیل‌های ${category.name} در اکو تایمز`,
      url: canonical,
      siteName: "اکو تایمز",
      type: "website",
    },
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const [{ slug }, sp] = await Promise.all([params, searchParams]);
  const category = await getCategory(slug);
  if (!category) notFound();

  const page = Math.max(1, parseInt(sp.page ?? "1", 10) || 1);

  // "magazine" is a homepage section rather than a real category: its posts
  // are attached via SectionPlacement, so the archive page reads from there
  // and renders them in the same grid as any other category.
  const isMagazine = category.slug === "magazine";
  const canonical = absoluteUrl(`/category/${category.slug}`);

  type CategoryPost = {
    id: string;
    slug: string;
    title: string;
    lead: string;
    kicker: string | null;
    publishedAt: Date;
    hasOwnPage: boolean;
    homeImageAlt: string | null;
    homeImage: { url: string } | null;
    category: { name: string; slug: string };
  };

  let posts: CategoryPost[];
  let total: number;
  if (isMagazine) {
    const placements = await db.sectionPlacement.findMany({
      where: {
        section: { key: "magazine" },
        post: { status: "PUBLISHED", publishedAt: { lte: new Date() } },
      },
      orderBy: { position: "asc" },
      include: { post: { include: { category: true, homeImage: true } } },
    });
    const all = placements.map((pl) => pl.post);
    total = all.length;
    posts = all.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  } else {
    const where = {
      status: "PUBLISHED" as const,
      publishedAt: { lte: new Date() },
      OR: [
        { categoryId: category.id },
        { postCategories: { some: { categoryId: category.id } } },
      ],
    };
    posts = await db.post.findMany({
      where,
      orderBy: { publishedAt: "desc" },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
      include: { category: true, homeImage: true },
    });
    total = await db.post.count({ where });
  }

  const [navCategories, breaking, live, categoryVideo] = await Promise.all([
    getNavCategories(),
    getHomeSectionPosts("breaking"),
    getLiveStream(),
    getHomeSectionPosts("category-video"),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "صفحه اصلی", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: category.name, item: canonical },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <SiteHeader
        navItems={navCategories}
        breaking={breaking.map((p) => ({ title: p.title, href: p.href }))}
        liveEnabled={Boolean(live?.enabled)}
      />
      <main className="flex-1 bg-zinc-50">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-6 py-6 sm:py-8">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-[11px] sm:text-xs text-zinc-500 mb-4">
            <Link href="/" className="hover:text-blue-700 transition-colors">
              صفحه اصلی
            </Link>
            <ChevronLeft className="w-3 h-3 text-zinc-400" />
            <span className="text-zinc-700">{category.name}</span>
          </nav>

          {/* Section header */}
          <div className="border-b-2 border-navy pb-2 mb-5 sm:mb-6 flex items-end justify-between">
            <div className="flex items-end gap-3">
              <h1 className="section-heading text-2xl sm:text-3xl font-black uppercase tracking-tight">
                {category.name}
              </h1>
              <span className="text-xs text-zinc-500 mb-1.5 tabular-nums">
                {faDigits(total)} خبر
              </span>
            </div>
          </div>

          {posts.length === 0 ? (
            <div className="bg-white border border-zinc-200 rounded-xl py-16 text-center">
              <Newspaper className="w-10 h-10 text-zinc-300 mx-auto mb-3" />
              <p className="text-sm text-zinc-500">
                هنوز خبری در دسته «{category.name}» منتشر نشده است.
              </p>
            </div>
          ) : (
            <>
              {/* Cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
                {posts.map((post, index) => (
                  <Fragment key={post.id}>
                    <Link
                      key={post.id}
                      href={post.hasOwnPage ? `/news/${post.slug}` : "#"}
                      className="group lift-on-hover bg-white border border-zinc-200 rounded-xl overflow-hidden"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                        <SmartImage
                          src={post.homeImage?.url}
                          alt={post.homeImageAlt || post.title}
                          ratio="auto"
                          category={category.slug}
                          className="!w-full !h-full"
                        />
                        <div className="absolute top-2 right-2">
                          <span className="bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded inline-flex items-center gap-1">
                            <Tag className="w-2.5 h-2.5" />
                            {category.name}
                          </span>
                        </div>
                      </div>
                      <div className="p-3 sm:p-4">
                        <h2 className="font-bold text-sm sm:text-base text-zinc-900 group-hover:text-blue-700 transition-colors leading-relaxed line-clamp-2 mb-2">
                          {post.title}
                        </h2>
                        <p className="text-xs text-zinc-600 leading-relaxed line-clamp-2 mb-3">
                          {post.lead}
                        </p>
                        <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-3 border-t border-zinc-100">
                          <span className="inline-flex items-center gap-1 tabular-nums">
                            <Clock className="w-3 h-3" />
                            {faDate(new Date(post.publishedAt))}
                          </span>
                          <span className="inline-flex items-center gap-1 text-blue-600 group-hover:gap-2 transition-all font-medium">
                            ادامه
                            <ChevronLeft className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </Link>
                    {index === 0 && categoryVideo[0] && (
                      <Link
                        href={categoryVideo[0].href ?? "#"}
                        className="group lift-on-hover bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                          <SmartImage
                            src={categoryVideo[0].imageUrl}
                            alt={categoryVideo[0].imageAlt}
                            ratio="auto"
                            category={category.slug}
                            className="!w-full !h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                          <div className="absolute top-2 right-2">
                            <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded inline-flex items-center gap-1">
                              <Play className="w-2.5 h-2.5" />
                              ویدیو
                            </span>
                          </div>
                          <div className="absolute bottom-2.5 left-2.5 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded tabular-nums">
                            {categoryVideo[0].videoDuration}
                          </div>
                        </div>
                        <div className="p-3 sm:p-4">
                          <h2 className="font-bold text-sm sm:text-base text-white group-hover:text-red-400 transition-colors leading-relaxed line-clamp-2">
                            {categoryVideo[0].title}
                          </h2>
                        </div>
                      </Link>
                    )}
                  </Fragment>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  {page > 1 && (
                    <Link
                      href={`/category/${category.slug}?page=${page - 1}`}
                      className="inline-flex items-center gap-1 text-sm bg-white border border-zinc-300 hover:border-blue-500 hover:text-blue-700 rounded-lg px-4 py-2 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                      جدیدتر
                    </Link>
                  )}
                  <span className="text-xs text-zinc-500 tabular-nums px-3">
                    صفحه {faDigits(page)} از {faDigits(totalPages)}
                  </span>
                  {page < totalPages && (
                    <Link
                      href={`/category/${category.slug}?page=${page + 1}`}
                      className="inline-flex items-center gap-1 text-sm bg-white border border-zinc-300 hover:border-blue-500 hover:text-blue-700 rounded-lg px-4 py-2 transition-colors"
                    >
                      قدیمی‌تر
                      <ChevronLeft className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
}
