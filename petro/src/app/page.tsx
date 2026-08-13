import SiteHeader from "@/components/petro/site-header";
import HeroSection from "@/components/petro/hero-section";
import TopStoriesSection from "@/components/petro/top-stories-section";
import TrendingVideosSection from "@/components/petro/trending-videos-section";
import MagazineSection from "@/components/petro/magazine-section";
import EnergySpotlight from "@/components/petro/energy-spotlight";
import BlockModelA from "@/components/petro/block-model-a";
import BlockModelB from "@/components/petro/block-model-b";
import AdBanner from "@/components/petro/ad-banner";
import FeatureSplit from "@/components/petro/feature-split";
import TrendingStories from "@/components/petro/trending-stories";
import BlockModelC from "@/components/petro/block-model-c";
import BlockModelD from "@/components/petro/block-model-d";
import PhotoSlideshow from "@/components/petro/photo-slideshow";
import BottomRow from "@/components/petro/bottom-row";
import LiveSection from "@/components/petro/live-section";
import SiteFooter from "@/components/petro/site-footer";
import BackToTop from "@/components/petro/back-to-top";
import {
  getHomeSectionPosts,
  getLatestPosts,
  getLiveStream,
  getMostViewedPosts,
  getNavCategories,
} from "@/lib/home-data";
import { absoluteUrl, siteName, siteUrl } from "@/lib/site";

// homepage always reflects the latest published content
export const dynamic = "force-dynamic";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  name: siteName,
  url: siteUrl,
  logo: absoluteUrl("/og-default.png"),
};

export default async function Home() {
  const [
    breaking, hero, videos, photos,
    ai, digitalEconomy, health, biotech, micro, energy, water, food, creative,
    spotlight, videoCarousel,
    magazine,
    latest, mostViewed, navItems, live,
  ] = await Promise.all([
    getHomeSectionPosts("breaking"),
    getHomeSectionPosts("hero"),
    getHomeSectionPosts("videos"),
    getHomeSectionPosts("photos"),
    getHomeSectionPosts("ai"),
    getHomeSectionPosts("digital-economy"),
    getHomeSectionPosts("health"),
    getHomeSectionPosts("biotech-nano"),
    getHomeSectionPosts("microelectronics"),
    getHomeSectionPosts("energy"),
    getHomeSectionPosts("water-environment"),
    getHomeSectionPosts("food-security"),
    getHomeSectionPosts("creative-industries"),
    getHomeSectionPosts("energy-spotlight"),
    getHomeSectionPosts("video-carousel"),
    getHomeSectionPosts("magazine"),
    getLatestPosts(6),
    getMostViewedPosts(8),
    getNavCategories(),
    getLiveStream(),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <SiteHeader
        navItems={navItems}
        breaking={breaking.map((p) => ({ title: p.title, href: p.href }))}
        liveEnabled={Boolean(live?.enabled)}
      />
      <main className="flex-1">
        <HeroSection hero={hero[0] ?? null} />
        <TopStoriesSection cards={breaking.slice(0, 8)} mostViewed={mostViewed} />
        <TrendingVideosSection videos={videos} />
        <MagazineSection items={magazine} />
        <EnergySpotlight items={spotlight} videos={videoCarousel} />
        <BlockModelA items={ai} />
        <BlockModelB items={digitalEconomy} />
        <AdBanner />
        <FeatureSplit items={health} />
        <TrendingStories items={latest} />
        <BlockModelC items={biotech} />
        <BlockModelD first={micro} second={energy} />
        <PhotoSlideshow items={photos} />
        <BottomRow
          columns={[
            {
              title: water[0]?.category ?? "آب و محیط‌زیست",
              href: "/category/water-environment",
              items: water,
            },
            {
              title: food[0]?.category ?? "امنیت غذایی",
              href: "/category/food-security",
              items: food,
            },
            {
              title: creative[0]?.category ?? "صنایع خلاق",
              href: "/category/creative-industries",
              items: creative,
            },
            { title: "اسلایدشو", href: "/#photos", items: photos, arrow: false },
          ]}
        />
        <LiveSection live={live} />
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
}
