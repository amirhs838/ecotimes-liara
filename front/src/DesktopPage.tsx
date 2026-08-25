import advertiseImage from "./imports/DivScrollSpyContainer/9c3bea2ab16af8de0d4b67b15f6646a6b15243bc.png";
import wallexImage from "./imports/DivScrollSpyContainer/6334ff254527b64d0a4b3e95213654683cd6fabe.png";
import coinBtcImage from "./imports/DivScrollSpyContainer/c05bf090b9669767870e5de4641445ccc4eb261c.png";
import coinEthImage from "./imports/DivScrollSpyContainer/ba64993282e1849c68688dc61507ba8d638efc1d.png";
import coinBnbImage from "./imports/DivScrollSpyContainer/ea96dd87c4daee1c1c7de083c6be3f74487bd602.png";
import coinXrpImage from "./imports/DivScrollSpyContainer/072c287437aa52016c1b5a6470ea0a9c665e68b3.png";
import coinSolImage from "./imports/DivScrollSpyContainer/13fc82c7bdbbc2e1b4ebef690ef9ba20e913a018.png";
import coinTrxImage from "./imports/DivScrollSpyContainer/coin-5.png";
import coinHypeImage from "./imports/DivScrollSpyContainer/coin-6.png";
import logoImage from "./imports/DivScrollSpyContainer/logo.png";
import type { ReactNode } from "react";
import { useState } from "react";
import { API_URL, absoluteAsset, articleUrl, type HomePost, type NavItem } from "./lib/api";
import { useHomeData, useHomeFailed, useMarket } from "./lib/use-home-data";
import TickerMarquee from "./TickerMarquee";
import LoadingScreen from "./LoadingScreen";
import AutoPlayVideo from "./AutoPlayVideo";

const tickerSymbols = ["BTC", "ETH", "BNB", "XRP", "SOL", "TRX", "HYPE"];

const coinImages: Record<string, string> = {
  BTC: coinBtcImage,
  ETH: coinEthImage,
  BNB: coinBnbImage,
  XRP: coinXrpImage,
  SOL: coinSolImage,
  TRX: coinTrxImage,
  HYPE: coinHypeImage,
};

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
      <path d="m16 16 4 4" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" className="size-7" fill="none" viewBox="0 0 24 24">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" className="size-7" fill="none" viewBox="0 0 24 24">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function PlayIcon({ small = false }: { small?: boolean }) {
  return (
    <span className={`grid place-items-center rounded-full bg-[rgba(20,22,24,.75)] text-white backdrop-blur-sm ${small ? "size-11" : "size-16"}`}>
      <svg aria-hidden="true" className={small ? "size-5" : "size-7"} fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.5 6.6a1 1 0 0 1 1.52-.85l8.1 5.4a1 1 0 0 1 0 1.7l-8.1 5.4a1 1 0 0 1-1.52-.84V6.6Z" />
      </svg>
    </span>
  );
}

function StoryLink({
  href,
  block = false,
  className = "",
  onClick,
  children,
}: {
  href?: string | null;
  block?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: ReactNode;
}) {
  const cls = `${block ? "block " : ""}no-underline text-inherit ${className}`.trim();
  if (!href) return <span className={cls} onClick={onClick}>{children}</span>;
  return (
    <a className={cls} href={href} onClick={onClick}>
      {children}
    </a>
  );
}

function PostImage({
  post,
  className = "",
  eager = false,
}: {
  post: HomePost;
  className?: string;
  eager?: boolean;
}) {
  const src = absoluteAsset(post.imageUrl);
  if (!src) return <div className={`${className} bg-[#f4f5f6]`} aria-label={post.imageAlt} />;
  return (
    <img
      alt={post.imageAlt}
      className={`${className} object-cover`}
      src={src}
      loading={eager ? "eager" : "lazy"}
      decoding={eager ? "sync" : "async"}
      {...(eager ? { fetchPriority: "high" as const } : {})}
    />
  );
}

function SectionHeading({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <div className={`mb-6 flex items-center gap-4 border-b pb-3 ${dark ? "border-[#515662]" : "border-[#cbced4]"}`}>
      <h2 className={`text-[26px] font-bold tracking-[-0.66px] ${dark ? "text-white" : "text-[#141618]"}`}>{children}</h2>
      <span className="h-[3px] flex-1 bg-[#c93035]" />
    </div>
  );
}

function MenuDropdown({ nav, onClose }: { nav: NavItem[]; onClose: () => void }) {
  const links = nav.length ? nav : [];
  return (
    <div className="absolute inset-x-0 top-[88px] z-50 bg-white shadow-xl" dir="rtl">
      <div className="grid grid-cols-2 gap-x-8 gap-y-1 px-7 py-6">
        {links.map((item) => (
          <a
            className="border-b border-[#f0f1f3] py-2.5 text-[14px] font-bold text-[#141618] transition-colors hover:text-[#990108]"
            href={item.href === "/" ? "/" : `${API_URL}${item.href}`}
            key={item.label}
            onClick={onClose}
          >
            {item.label}
          </a>
        ))}
        <a
          className="border-b border-[#f0f1f3] py-2.5 text-[14px] font-bold text-[#141618] transition-colors hover:text-[#990108]"
          href="#videos"
          onClick={onClose}
        >
          ویدیو
        </a>
        <a
          className="border-b border-[#f0f1f3] py-2.5 text-[14px] font-bold text-[#141618] transition-colors hover:text-[#990108]"
          href="#photos"
          onClick={onClose}
        >
          عکس
        </a>
      </div>
    </div>
  );
}

function DesktopHeader() {
  const home = useHomeData();
  const market = useMarket();
  const [menuOpen, setMenuOpen] = useState(false);
  const nav: NavItem[] = home?.nav ?? [];
  const navLinks = [
    ...nav.slice(0, 4).map((item) => [item.label, item.href === "/" ? "/" : `${API_URL}${item.href}`] as const),
    ["ویدیو", "#videos"] as const,
    ["عکس", "#photos"] as const,
  ];
  return (
    <header className="relative">
      <div className="bg-[#c93035] text-white">
        <div className="mx-auto flex h-[88px] max-w-[1280px] items-center justify-between px-7">
          <button
            aria-label="منو"
            className="grid size-11 place-items-center"
            onClick={() => setMenuOpen((v) => !v)}
            type="button"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <img alt="اکو تایمز" className="h-[80px] w-[107px] object-contain" src={logoImage} />
          <button aria-label="جستجو" className="grid size-11 place-items-center" type="button">
            <SearchIcon />
          </button>
        </div>
      </div>
      {menuOpen && <MenuDropdown nav={nav} onClose={() => setMenuOpen(false)} />}
      <nav className="border-b border-[#cbced4] bg-white" aria-label="دسته‌بندی‌ها">
        <div className="mx-auto flex h-[52px] max-w-[1280px] items-center justify-center gap-10 px-7 text-[14px] font-bold text-[#141618]">
          {navLinks.map(([label, href]) => (
            <a className="transition-colors hover:text-[#990108]" href={href} key={label}>{label}</a>
          ))}
        </div>
      </nav>
      <TickerMarquee
        className="mx-auto flex h-[48px] max-w-[1280px] items-center border-b border-[#cbced4] bg-[rgba(255,255,255,.95)] px-7 font-['Arimo:Bold',sans-serif]"
        dataName="top-crypto-tickers"
        gap={40}
        speed={1.1}
      >
        {tickerSymbols.map((symbol, i) => {
          const value = market?.[i]?.[1] ?? null;
          const change = market?.[i]?.[2] ?? null;
          const num = change ? Number.parseFloat(change) : NaN;
          const hasChange = Number.isFinite(num);
          const isUp = hasChange ? num >= 0 : null;
          return (
            <div className="flex shrink-0 items-center gap-2 whitespace-nowrap" key={symbol}>
              {coinImages[symbol] && (
                <img
                  alt=""
                  className="size-[22px] shrink-0 rounded-[11px] border border-[#e2e6ef] bg-white object-cover"
                  src={coinImages[symbol]}
                />
              )}
              <span className="text-[11px] tracking-[.85px] text-[#687086]">{symbol}</span>
              <strong className="text-[13px] text-[#121728]">{value ?? "—"}</strong>
              <span
                className={`text-[11px] ${isUp === null ? "text-[#687086]" : isUp ? "text-[#087b55]" : "text-[#c93444]"}`}
              >
                {hasChange ? `${isUp ? "▲" : "▼"} ${Math.abs(num).toFixed(2)}%` : "—"}
              </span>
            </div>
          );
        })}
      </TickerMarquee>
    </header>
  );
}

function NewsCard({ post }: { post: HomePost }) {
  return (
    <article className="group min-w-0 border-b border-[#cbced4] pb-5">
      <StoryLink block href={articleUrl(post.href)}>
        <div className="aspect-video overflow-hidden rounded-[6px] bg-[#f4f5f6]">
          <PostImage className="size-full transition-transform duration-300 group-hover:scale-[1.02]" post={post} />
        </div>
        <p className="mt-4 text-[14px] font-medium text-[#990108]">{post.category}</p>
        <h3 className="mt-2 text-[18px] font-bold leading-[1.65] text-[#141618]">{post.title}</h3>
      </StoryLink>
    </article>
  );
}

function DesktopPage() {
  const home = useHomeData();
  const failed = useHomeFailed();
  const section = (key: string): HomePost[] => home?.sections[key] ?? [];

  if (!home && !failed) return <LoadingScreen />;

  const heroPost = section("hero")[0] ?? null;
  const allVideos = section("videos");
  const heroVideo = allVideos[0] ?? null;
  const videos = allVideos.slice(1, 5);
  const topStories = section("top-stories");
  const heroSideNews = section("hero-video");
  const asideNews = topStories;
  const latest = home?.latest ?? [];
  const latestFirst = latest.slice(0, 6);
  const featuredPosts = heroSideNews.length ? heroSideNews : latestFirst;
  const magazinePosts = section("magazine");
  const magazineMain = magazinePosts[0] ?? null;
  const magazineList = magazinePosts.slice(1, 5);
  const digitalPosts = section("digital-economy");
  const digitalMain = digitalPosts[0] ?? null;
  const digitalList = digitalPosts.slice(1, 3);
  const adOne = section("ad-1")[0] ?? null;
  const adTwo = section("ad-2")[0] ?? null;
  const galleryPhotos = section("photos");
  const galleryBig = galleryPhotos[0] ?? null;
  const galleryTiles = galleryPhotos.slice(1, 5);

  return (
    <div className="min-h-screen bg-white font-['IRANSansX',sans-serif] text-[#141618]" dir="rtl">
      <DesktopHeader />

      <main>
        <section className="mx-auto grid max-w-[1280px] grid-cols-12 gap-7 px-7 py-9">
          <article className="col-span-8 overflow-hidden rounded-[6px] bg-[#f4f5f6]">
            {heroPost && (
              <StoryLink block href={articleUrl(heroPost.href)}>
                <PostImage className="aspect-[16/8.2] w-full" post={heroPost} eager />
                <div className="p-7">
                  {heroPost.kicker && <p className="text-[15px] font-medium text-[#990108]">{heroPost.kicker}</p>}
                  <h2 className="mt-3 text-[37px] font-bold leading-[1.35] tracking-[-1px]">{heroPost.title}</h2>
                  {heroPost.lead && (
                    <p className="mt-4 max-w-[760px] text-[16px] font-medium leading-8 text-[#22252a]">{heroPost.lead}</p>
                  )}
                </div>
              </StoryLink>
            )}
          </article>

          <aside className="col-span-4 flex flex-col">
            {heroVideo && (
              <>
                <StoryLink block href={articleUrl(heroVideo.href)}>
                  <div className="relative overflow-hidden rounded-[6px] bg-[#000e2c]">
                    {heroVideo.isUploadedVideo ? (
                      <AutoPlayVideo className="aspect-video w-full" post={heroVideo} />
                    ) : (
                      <>
                        <PostImage className="aspect-video w-full" post={heroVideo} />
                        <div className="absolute inset-0 grid place-items-center"><PlayIcon /></div>
                      </>
                    )}
                  </div>
                </StoryLink>
                <div className="mt-4 flex items-center justify-between border-b border-[#cbced4] pb-4">
                  <span className="rounded-[4px] bg-[#990108] px-3 py-1.5 text-[12px] text-white">● VIDEO</span>
                  <span className="text-[14px] font-bold">{heroVideo.category}</span>
                </div>
              </>
            )}
            {asideNews.length > 0 && (
              <div className="mt-5 rounded-[6px] bg-[#f4f5f6] p-5">
                <h2 className="border-b border-[#cbced4] pb-3 text-[21px] font-bold">اخبار برتر</h2>
                <ol className="divide-y divide-[#cbced4]">
                  {asideNews.slice(0, 6).map((story, index) => (
                    <li className="flex gap-3 py-3.5" key={story.id}>
                      <span className="font-['Arimo:Bold',sans-serif] text-[18px] font-bold text-[#c93035]">{index + 1}</span>
                      <p className="text-[14px] font-bold leading-6">
                        <StoryLink href={articleUrl(story.href)}>{story.title}</StoryLink>
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </aside>
        </section>

        {featuredPosts.length > 0 && (
          <section className="mx-auto max-w-[1280px] px-7 pb-12">
            <SectionHeading>برگزیده</SectionHeading>
            <div className="grid grid-cols-3 gap-x-7 gap-y-8">
              {featuredPosts.map((post) => <NewsCard post={post} key={post.id} />)}
            </div>
          </section>
        )}

        {videos.length > 0 && (
          <section className="bg-[#000e2c] py-12" id="videos">
            <div className="mx-auto max-w-[1280px] px-7">
              <SectionHeading dark>ویدیو</SectionHeading>
              <div className="grid grid-cols-3 gap-7">
                {videos.map((post) => (
                  <article className="group" key={post.id}>
                    <StoryLink block href={articleUrl(post.href)}>
                      <div className="relative aspect-video overflow-hidden rounded-[6px]">
                        {post.isUploadedVideo ? (
                          <AutoPlayVideo className="absolute inset-0" post={post} />
                        ) : (
                          <>
                            <PostImage className="size-full transition-transform duration-300 group-hover:scale-[1.02]" post={post} />
                            <div className="absolute inset-0 grid place-items-center"><PlayIcon small /></div>
                          </>
                        )}
                      </div>
                      <p className="mt-4 text-[14px] font-medium text-[#cbced4]">{post.category}</p>
                      <h3 className="mt-2 text-[18px] font-bold leading-8 text-white">{post.title}</h3>
                    </StoryLink>
                  </article>
                ))}
              </div>
              <p className="mt-8 border-t border-[#515662] pt-4 text-left text-[13px] text-[#cbced4]" dir="ltr">
                {allVideos.length} Videos
              </p>
            </div>
          </section>
        )}

        {magazineMain && (
          <section className="border-b border-[#e4e4e7] bg-white py-14">
            <div className="mx-auto max-w-[1280px] px-7">
              <div className="grid grid-cols-12 gap-12 bg-[#f8f6f1] p-10">
                <div className="col-span-4 flex justify-center">
                  <StoryLink block href={articleUrl(magazineMain.href)}>
                    <div className="h-[560px] w-[374px] overflow-hidden bg-[#f4f5f6] shadow-[0_25px_50px_-12px_rgba(0,0,0,.35)]">
                      <PostImage className="size-full" post={magazineMain} />
                    </div>
                  </StoryLink>
                </div>
                <div className="col-span-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-[12px] font-bold tracking-[1.98px] text-[#71717b]" dir="ltr">
                    <span>MONTHLY EDITION</span><span>|</span><span className="text-[#27272a]">AUGUST 2026</span>
                  </div>
                  <h2 className="mt-5 text-[38px] font-black text-[#09090b]">{magazineMain.title}</h2>
                  {magazineMain.lead && <p className="mt-3 text-[15px] leading-8 text-[#52525c]">{magazineMain.lead}</p>}
                  {magazineList.length > 0 && (
                    <div className="mt-5 grid grid-cols-2 gap-x-8">
                      {magazineList.map((story) => (
                        <article className="border-t border-[#e3dfd6] py-5" key={story.id}>
                          <StoryLink block href={articleUrl(story.href)}>
                            <h3 className="text-[17px] font-bold leading-7 text-[#09090b]">{story.title}</h3>
                            {story.lead && <p className="mt-2 text-[14px] leading-7 text-[#52525c]">{story.lead}</p>}
                          </StoryLink>
                        </article>
                      ))}
                    </div>
                  )}
                  <div className="mt-5 flex items-center gap-3 text-[14px] font-bold">
                    <StoryLink href={`${API_URL}/category/magazine`}>بیشتر بخوانید</StoryLink>
                    <span className="grid size-8 place-items-center rounded-full bg-[#09090b] text-white">←</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {digitalMain && (
          <section className="mx-auto max-w-[1280px] px-7 py-14">
            <SectionHeading>اقتصاد دیجیتال</SectionHeading>
            <div className="grid grid-cols-12 gap-7">
              <article className="col-span-7">
                <StoryLink block href={articleUrl(digitalMain.href)}>
                  <div className="aspect-video overflow-hidden rounded-[6px] bg-[#f4f5f6]">
                    <PostImage className="size-full" post={digitalMain} />
                  </div>
                  <p className="mt-4 text-[14px] font-medium text-[#990108]">{digitalMain.category}</p>
                  <h3 className="mt-2 text-[21px] font-bold leading-9">{digitalMain.title}</h3>
                </StoryLink>
              </article>
              <div className="col-span-5 divide-y divide-[#cbced4] border-y border-[#cbced4]">
                {digitalList.map((story) => (
                  <article className="group grid grid-cols-[1fr_180px] gap-5 py-6" key={story.id}>
                    <StoryLink href={articleUrl(story.href)} className="contents">
                      <div>
                        <p className="text-[14px] font-medium text-[#990108]">{story.category}</p>
                        <h3 className="mt-2 text-[18px] font-bold leading-8">{story.title}</h3>
                      </div>
                      <div className="aspect-video w-[180px] overflow-hidden rounded-[6px] bg-[#f4f5f6]">
                        <PostImage className="size-full" post={story} />
                      </div>
                    </StoryLink>
                  </article>
                ))}
                {digitalMain && (
                  <div className="py-5 text-[14px] font-bold">
                    <StoryLink href={articleUrl(digitalMain.href)}>بیشتر بخوانید ←</StoryLink>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        <aside className="mx-auto max-w-[1280px] px-7 pb-14">
          <div className="overflow-hidden rounded-[6px] bg-[#000e2c] p-4">
            <p className="mb-3 text-left font-['Inknut_Antiqua:Bold',serif] text-[13px] text-white" dir="ltr">ADVERTISE</p>
            <StoryLink block href={articleUrl(adOne?.href ?? null)}>
              {adOne && absoluteAsset(adOne.imageUrl) ? (
                <PostImage className="h-[210px] w-full" post={adOne} />
              ) : (
                <img alt="ADVERTISE" className="h-[210px] w-full object-cover" src={advertiseImage} />
              )}
            </StoryLink>
          </div>
        </aside>

        <section className="bg-[#000e2c] text-white">
          <div className="mx-auto grid max-w-[1280px] grid-cols-2 items-center gap-10 px-7 py-10">
            <StoryLink block href={articleUrl(adTwo?.href ?? null)}>
              {adTwo && absoluteAsset(adTwo.imageUrl) ? (
                <PostImage className="aspect-video w-full rounded-[6px]" post={adTwo} />
              ) : (
                <img alt="صرافی والکس" className="aspect-video w-full rounded-[6px] object-cover" src={wallexImage} />
              )}
            </StoryLink>
            <div className="text-center">
              {adTwo ? (
                <>
                  <h2 className="text-[23px] font-bold leading-10">{adTwo.title}</h2>
                  {adTwo.lead && <p className="mt-5 text-[14px] leading-7 text-[#cbced4]">{adTwo.lead}</p>}
                </>
              ) : (
                <>
                  <h2 className="text-[23px] font-bold leading-10">صرافی والکس معتبرترین و پیشرفته ترین پلتفرم معامله ارزهای دیجیتال ایران با پشتیبانی ۲۴/۷ و امکانات رایگان، در دنیای آینده قدم بزن!</h2>
                  <p className="mt-5 text-[14px] leading-7 text-[#cbced4]" dir="ltr">Wallex Exchange, Iran’s most trusted and advanced cryptocurrency trading platform, offering 24/7 support and free features. Step into the future of digital finance!</p>
                </>
              )}
            </div>
          </div>
        </section>

        {latestFirst.length > 0 && (
          <section className="bg-[#f4f5f6] py-14">
            <div className="mx-auto max-w-[1280px] px-7">
              <SectionHeading>آخرین اخبار</SectionHeading>
              <div className="grid grid-cols-2 gap-x-12 gap-y-0">
                {latestFirst.map((post) => (
                  <article className="group flex min-h-[138px] items-center gap-5 border-b border-[#cbced4] py-5" key={post.id}>
                    <StoryLink href={articleUrl(post.href)} className="contents">
                      <div className="size-[112px] shrink-0 overflow-hidden rounded-[6px] bg-[#f4f5f6]">
                        <PostImage className="size-full transition-transform duration-300 group-hover:scale-[1.02]" post={post} />
                      </div>
                      <div>
                        <p className="text-[14px] font-medium text-[#990108]">{post.category}</p>
                        <h3 className="mt-2 text-[17px] font-bold leading-8">{post.title}</h3>
                      </div>
                    </StoryLink>
                  </article>
                ))}
              </div>
              <button className="mt-8 h-11 w-full rounded-[6px] bg-[#656c7a] text-[14px] font-bold text-[#f4f5f6]" type="button">
                بیشتر بخوانید
              </button>
            </div>
          </section>
        )}

        {galleryPhotos.length > 0 && (
          <section className="mx-auto max-w-[1280px] px-7 py-14" id="photos">
            <SectionHeading>عکس</SectionHeading>
            <h3 className="mb-6 text-[24px] font-bold">{galleryBig?.title ?? ""}</h3>
            <div className="grid grid-cols-12 grid-rows-2 gap-3">
              <StoryLink href={articleUrl(galleryBig?.href ?? null)} className="contents">
                {galleryBig && absoluteAsset(galleryBig.imageUrl) ? (
                  <PostImage className="col-span-6 row-span-2 h-[520px] w-full rounded-[6px]" post={galleryBig} />
                ) : (
                  <div className="col-span-6 row-span-2 h-[520px] w-full rounded-[6px] bg-[#f4f5f6]" />
                )}
              </StoryLink>
              {galleryTiles.map((post) => (
                <StoryLink href={articleUrl(post.href)} className="contents" key={post.id}>
                  {absoluteAsset(post.imageUrl) ? (
                    <PostImage className="col-span-3 h-[254px] w-full rounded-[6px]" post={post} />
                  ) : (
                    <div className="col-span-3 h-[254px] w-full rounded-[6px] bg-[#f4f5f6]" />
                  )}
                </StoryLink>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="bg-[#c93035] text-white">
        <div className="mx-auto max-w-[1280px] px-7 py-12">
          <div className="flex items-start justify-between border-b border-[#969ca8] pb-10">
            <img alt="اکو تایمز" className="h-[86px] w-[140px] object-contain" src={`${API_URL}/ecotimes-logo-white.png`} />
            <div className="flex gap-20 text-[14px] font-bold">
              <a href="/about">درباره ما</a><a href="/about">ارتباط با ما</a><a href="#">پیوند ها</a>
            </div>
          </div>
          <div className="flex items-end justify-between gap-10 pt-8 text-[#e5e6e9]">
            <div className="text-[11px] leading-6" dir="ltr">
              <p>Privacy Policy &nbsp;&nbsp; Terms of Use &nbsp;&nbsp; Image/Video Solicitation Rights Confirmation Terms</p>
              <p>All rights to Echo Times content are reserved, and the use and redistribution of its content with proper attribution are permitted under the Creative Commons Attribution 4.0 International License.</p>
              <p>© 2026 ECOTIMES</p>
            </div>
            <div className="flex shrink-0 gap-2" aria-label="شبکه‌های اجتماعی">
              {["f", "X", "in", "▶", "◎"].map((item) => <span className="grid size-8 place-items-center rounded-full bg-white text-[11px] font-bold text-black" key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DesktopPage;