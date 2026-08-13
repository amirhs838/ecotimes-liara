import leadImage from "./imports/DivScrollSpyContainer/1f369ec9c752c5ebe514f523bde92d9cca2d8186.png";
import videoCover from "./imports/DivScrollSpyContainer/f0bc7b6eb0394faadd792ee110aef1c4d491a399.png";
import healthImage from "./imports/DivScrollSpyContainer/47a2a67f4f2837b8636b645b748e016e996b8314.png";
import serumImage from "./imports/DivScrollSpyContainer/5a079c71bdc9cc31fa323f7aa572956db3f22727.png";
import digitalHealthImage from "./imports/DivScrollSpyContainer/7ec078a70741686ed79bfc5397debeaf7e45afe5.png";
import stressImage from "./imports/DivScrollSpyContainer/a4e9d7a9d621e2d06e109090fd9ca69a3f4b408d.png";
import governanceImage from "./imports/DivScrollSpyContainer/b6c48806909862cbb8a52c56fa301365073a2662.png";
import brainImage from "./imports/DivScrollSpyContainer/5b32298064da7b3e45f20313ad4e3f961a80c02b.png";
import firstVideoImage from "./imports/DivScrollSpyContainer/c68f4f0be23326ed17de4525253731cb88f7cdda.png";
import secondVideoImage from "./imports/DivScrollSpyContainer/6d48b2e124f6406b1a9cac2d6c8762d12b5b199d.png";
import thirdVideoImage from "./imports/DivScrollSpyContainer/97f92a52e6ee7c160c6efcc5075091f08d7ccddf.png";
import magazineCover from "./imports/DivScrollSpyContainer/48f91a8cb84a3336a75764a4715ae0f6f49026a5.png";
import digitalMainImage from "./imports/DivScrollSpyContainer/bf41736ae5a0e090ce95ba71f1fd7f7b7a137c1a.png";
import digitalSecondImage from "./imports/DivScrollSpyContainer/e3d923e2d4264cb7f5d7927105c246c7f1396613.png";
import digitalThirdImage from "./imports/DivScrollSpyContainer/3538b62f506278deac80220dce6d979fcb279556.png";
import advertiseImage from "./imports/DivScrollSpyContainer/9c3bea2ab16af8de0d4b67b15f6646a6b15243bc.png";
import wallexImage from "./imports/DivScrollSpyContainer/6334ff254527b64d0a4b3e95213654683cd6fabe.png";
import latestOneImage from "./imports/DivScrollSpyContainer/0a57b56d5863c25159cde44728c21dfe46688eb1.png";
import latestTwoImage from "./imports/DivScrollSpyContainer/06a12c4088a414b34652477f501112976622487a.png";
import latestThreeImage from "./imports/DivScrollSpyContainer/5ebfcbea5b4121c2a3f40be1905ded5f15f8330c.png";
import latestFourImage from "./imports/DivScrollSpyContainer/0cbbe013a74781f429e324cb05567c24294e0cf2.png";
import latestFiveImage from "./imports/DivScrollSpyContainer/a73e24e8094e75a5627f6ef99c40701412959dcc.png";
import latestSixImage from "./imports/DivScrollSpyContainer/020c2945301494dba1398e57ab63d4d457a4423e.png";
import galleryOne from "./imports/DivScrollSpyContainer/7586824e423d3839b8ce72c1d9f6214d34faf8e0.png";
import galleryTwo from "./imports/DivScrollSpyContainer/e7b819ab3fbf8af6b0abf14df0b693b0b0a7fed3.png";
import galleryThree from "./imports/DivScrollSpyContainer/b37d429ee7d8375ebb4f33904b24096fe3ff35c3.png";
import galleryFour from "./imports/DivScrollSpyContainer/701a8229b01625d046449a82f68b657c4e48a84f.png";
import galleryFive from "./imports/DivScrollSpyContainer/723884ecb125e94828d6870c0c6de46d2dbd6a7a.png";
import footerLogo from "./imports/DivScrollSpyContainer/5ebe0a821e4b54a4e643c895ba1be6a544f83528.png";

type NewsItem = {
  category: string;
  title: string;
  image: string;
};

const leadStories: NewsItem[] = [
  {
    category: "سلامت و درمان",
    title: "هوش مصنوعی در اتاق عمل؛ افزایش دقت جراحی با استفاده از فناوری‌های هوشمند",
    image: healthImage,
  },
  {
    category: "سلامت و درمان",
    title: "سرم آزمایشی بازسازی اندام؛ گامی بزرگ برای بازسازی اندام های انسان",
    image: serumImage,
  },
  {
    category: "اقتصاددیجیتال",
    title: "تحول دیجیتال در خدمات درمانی بریتانیا با استفاده از هوش مصنوعی",
    image: digitalHealthImage,
  },
  {
    category: "سلامت و درمان",
    title: "برچسب هوشمند پایش لحظه ­ای استرس",
    image: stressImage,
  },
  {
    category: "اقتصاددیجیتال",
    title: "معماری جدید حکمرانی علم و فناوری کلید خورد",
    image: governanceImage,
  },
  {
    category: "هوش مصنوعی",
    title: "هوش مصنوعی برای پیشگیری از بیماری‌های مغزی",
    image: brainImage,
  },
];

const topStories = [
  "فناوری ویرایش ژن به دنبال حذف ریشه‌ای HIV از بدن انسان",
  "هوش مصنوعی در خدمت مقابله با تهدیدات زیستی",
  "بازار نرم‌افزارهای مدیریت کربن شتاب گرفت",
  "بالکن‌ها به نیروگاه‌های کوچک خورشیدی تبدیل می‌شوند",
  "هوش مصنوعی فرآیند توسعه دارو را متحول کرد",
  "دانش‌بنیان‌ها؛ حلقه مفقوده بهره‌وری در اقتصاد ایران",
  "سامسونگ وارد عصر ربات‌ها شد",
];

const videoStories = [
  {
    category: "میکرو الکترونیک",
    title: "انقلاب نوری در دنیای تراشه‌ها؛ دانشمندان مسیر حرکت الکترون‌ها را با لیزر کنترل کردند",
    image: firstVideoImage,
  },
  {
    category: "سلامت و درمان",
    title: "از اسکن قرنیه تا شخصی سازی لنز در ۲۰ دقیقه",
    image: secondVideoImage,
  },
  {
    category: "انرژی",
    title: "نسل جدید عملیات مبتنی بر هوش مصنوعی در صنعت نفت و گاز",
    image: thirdVideoImage,
  },
];

const resilienceStories = [
  {
    title: "کشاورزی هوشمند برای تولید بیشتر با منابع کمتر",
    description:
      "گرمایش زمین، افزایش هزینه‌های کشاورزی و کاهش بهره‌وری محصولات، تولید غذا را به یکی از چالش‌های بزرگ جهان تبدیل کرده است",
  },
  {
    title: "مدیریت هوشمند آب با کمک هوش مصنوعی",
    description: "او مدعی شد می‌تواند بازار فناوری را یک‌پارچه کند؛ اما حقیقت پیچیده‌تر بود",
  },
  {
    title: "هوش مصنوعی در خدمت مقابله با تهدیدات زیستی",
    description: "نسل جدیدی از بیمه‌نامه‌های زندگی که ایرانیان را به پس‌انداز تشویق می‌کند",
  },
  {
    title: "هوش مصنوعی فرآیند توسعه دارو را متحول کرد",
    description: "هوش مصنوعی در حال تغییر روند تحقیق و توسعه دارو است",
  },
];

const digitalStories = [
  {
    category: "تماس تبلیغاتی ناخواسته در فرانسه ممنوع شد",
    title:
      "در فرانسه، تماس‌های تلفنی بی‌وقفه برای تبلیغ پنل‌های خورشیدی، سقف‌ها، پمپ‌های حرارتی و سایر اقلام از روز سه‌شنبه ۱۱ اوت با اجرای قانون ممنوعیت تماس‌های تلفنی ناخواسته، ممنوع خواهد شد",
    image: digitalMainImage,
  },
  {
    category: "اقتصاد دیجیتال",
    title: "حمله سایبری گسترده علیه بخش‌های هوانوردی، انرژی و آموزش امارات",
    image: digitalSecondImage,
  },
  {
    category: "اقتصاد دیجیتال",
    title: "توسعه کشور در شرایط جنگی متوقف نشد/کاهش زمان ‌پاسخگویی به مردم",
    image: digitalThirdImage,
  },
];

const latestStories: NewsItem[] = [
  {
    category: "اقتصاد دیجیتال",
    title: "قدرت‌بنیان؛ پارادایم تازه برای حکمرانی فناوری ایران",
    image: latestOneImage,
  },
  {
    category: "اقتصاد دیجیتال",
    title: "بانک توسعه فناوری و ابزارهای نوین مالی؛ بسته جدید صندوق برای زیست‌بوم نوآوری",
    image: latestTwoImage,
  },
  {
    category: "سلامت و درمان",
    title: "سرم آزمایشی بازسازی اندام؛ گامی بزرگ برای بازسازی اندام های انسان",
    image: latestThreeImage,
  },
  {
    category: "سلامت و درمان",
    title: "نسخه آزمایشگاهی مغز، امید تازه‌ای برای بیماران مبتلا به آلزایمر",
    image: latestFourImage,
  },
  {
    category: "انرژی‌",
    title: "نسل جدید عملیات مبتنی بر هوش مصنوعی در صنعت نفت و گاز",
    image: latestFiveImage,
  },
  {
    category: "انرژی",
    title: "بالکن‌ها به نیروگاه‌های کوچک خورشیدی تبدیل می‌شوند",
    image: latestSixImage,
  },
];

const marketItems = [
  ["BTC", "$63,895.00", "1.97%"],
  ["ETH", "$1,872.68", "2.60%"],
  ["BNB", "$599.59", "1.47%"],
  ["SOL", "$145.26", "2.40%"],
];

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

function PlayIcon({ small = false }: { small?: boolean }) {
  return (
    <span className={`grid place-items-center rounded-full bg-[rgba(20,22,24,.75)] text-white backdrop-blur-sm ${small ? "size-11" : "size-16"}`}>
      <svg aria-hidden="true" className={small ? "size-5" : "size-7"} fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.5 6.6a1 1 0 0 1 1.52-.85l8.1 5.4a1 1 0 0 1 0 1.7l-8.1 5.4a1 1 0 0 1-1.52-.84V6.6Z" />
      </svg>
    </span>
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

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group min-w-0 border-b border-[#cbced4] pb-5">
      <div className="aspect-video overflow-hidden rounded-[6px] bg-[#f4f5f6]">
        <img alt={item.title} className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" src={item.image} />
      </div>
      <p className="mt-4 text-[14px] font-medium text-[#990108]">{item.category}</p>
      <h3 className="mt-2 text-[18px] font-bold leading-[1.65] text-[#141618]">{item.title}</h3>
    </article>
  );
}

function DesktopHeader() {
  return (
    <header>
      <div className="bg-[#c93035] text-white">
        <div className="mx-auto flex h-[88px] max-w-[1280px] items-center justify-between px-7">
          <button aria-label="منو" className="grid size-11 place-items-center" type="button">
            <MenuIcon />
          </button>
          <img alt="ECO TIMES" className="h-[76px] w-[102px] object-contain" src={footerLogo} />
          <button aria-label="جستجو" className="grid size-11 place-items-center" type="button">
            <SearchIcon />
          </button>
        </div>
      </div>
      <nav className="border-b border-[#cbced4] bg-white" aria-label="دسته‌بندی‌ها">
        <div className="mx-auto flex h-[52px] max-w-[1280px] items-center justify-center gap-10 px-7 text-[14px] font-bold text-[#141618]">
          {['اقتصاد دیجیتال', 'سلامت و درمان', 'هوش مصنوعی', 'انرژی', 'ویدئو', 'عکس'].map((item) => (
            <a className="transition-colors hover:text-[#990108]" href="#" key={item}>{item}</a>
          ))}
        </div>
      </nav>
      <div className="overflow-hidden border-b border-[#cbced4] bg-[rgba(255,255,255,.95)]" dir="ltr">
        <div className="mx-auto flex h-[48px] max-w-[1280px] items-center justify-between gap-8 px-7 font-['Arimo:Bold',sans-serif]">
          {marketItems.map(([symbol, value, change]) => (
            <div className="flex items-center gap-2 whitespace-nowrap" key={symbol}>
              <span className="text-[11px] tracking-[.85px] text-[#687086]">{symbol}</span>
              <strong className="text-[13px] text-[#121728]">{value}</strong>
              <span className="text-[11px] text-[#c93444]">▼ {change}</span>
            </div>
          ))}
          <span className="text-[11px] font-bold tracking-[.8px] text-[#687086]">CRYPTO MARKET</span>
        </div>
      </div>
    </header>
  );
}

function DesktopPage() {
  return (
    <div className="min-h-screen bg-white font-['IRANSansX',sans-serif] text-[#141618]" dir="rtl">
      <DesktopHeader />

      <main>
        <section className="mx-auto grid max-w-[1280px] grid-cols-12 gap-7 px-7 py-9">
          <article className="col-span-8 overflow-hidden rounded-[6px] bg-[#f4f5f6]">
            <img alt="قدرت‌بنیان؛ پارادایم تازه برای حکمرانی فناوری ایران" className="aspect-[16/8.2] w-full object-cover" src={leadImage} />
            <div className="p-7">
              <p className="text-[15px] font-medium text-[#990108]">معاون علمی رئیس جمهور:</p>
              <h1 className="mt-3 text-[37px] font-bold leading-[1.35] tracking-[-1px]">قدرت‌بنیان؛ پارادایم تازه برای حکمرانی فناوری ایران</h1>
              <p className="mt-4 max-w-[760px] text-[16px] font-medium leading-8 text-[#22252a]">
                حسین افشین، معاون علمی رئیس‌جمهور از تغییر رویکرد سیاست‌گذاری علم و فناوری کشور خبر داد و «قدرت‌بنیان» را پارادایم جدید حکمرانی فناوری ایران معرفی کرد
              </p>
            </div>
          </article>

          <aside className="col-span-4 flex flex-col">
            <div className="relative overflow-hidden rounded-[6px] bg-[#000e2c]">
              <img alt="ویدئو" className="aspect-video w-full object-cover" src={videoCover} />
              <div className="absolute inset-0 grid place-items-center"><PlayIcon /></div>
            </div>
            <div className="mt-4 flex items-center justify-between border-b border-[#cbced4] pb-4">
              <span className="rounded-[4px] bg-[#990108] px-3 py-1.5 text-[12px] text-white">● VIDEO</span>
              <span className="text-[14px] font-bold">ویدئو</span>
            </div>
            <div className="mt-5 rounded-[6px] bg-[#f4f5f6] p-5">
              <h2 className="border-b border-[#cbced4] pb-3 text-[21px] font-bold">اخبار برتر</h2>
              <ol className="divide-y divide-[#cbced4]">
                {topStories.slice(0, 5).map((story, index) => (
                  <li className="flex gap-3 py-3.5" key={story}>
                    <span className="font-['Arimo:Bold',sans-serif] text-[18px] font-bold text-[#c93035]">{index + 1}</span>
                    <p className="text-[14px] font-bold leading-6">{story}</p>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </section>

        <section className="mx-auto max-w-[1280px] px-7 pb-12">
          <SectionHeading>آخرین اخبار</SectionHeading>
          <div className="grid grid-cols-3 gap-x-7 gap-y-8">
            {leadStories.map((item) => <NewsCard item={item} key={item.title} />)}
          </div>
        </section>

        <section className="bg-[#000e2c] py-12">
          <div className="mx-auto max-w-[1280px] px-7">
            <SectionHeading dark>ویدئو</SectionHeading>
            <div className="grid grid-cols-3 gap-7">
              {videoStories.map((item) => (
                <article className="group" key={item.title}>
                  <div className="relative aspect-video overflow-hidden rounded-[6px]">
                    <img alt={item.title} className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" src={item.image} />
                    <div className="absolute inset-0 grid place-items-center"><PlayIcon small /></div>
                  </div>
                  <p className="mt-4 text-[14px] font-medium text-[#cbced4]">{item.category}</p>
                  <h3 className="mt-2 text-[18px] font-bold leading-8 text-white">{item.title}</h3>
                </article>
              ))}
            </div>
            <p className="mt-8 border-t border-[#515662] pt-4 text-left text-[13px] text-[#cbced4]" dir="ltr">11 Videos</p>
          </div>
        </section>

        <section className="border-b border-[#e4e4e7] bg-white py-14">
          <div className="mx-auto max-w-[1280px] px-7">
            <div className="grid grid-cols-12 gap-12 bg-[#f8f6f1] p-10">
              <div className="col-span-4 flex justify-center">
                <img alt="تاب آوری" className="h-[560px] w-[374px] object-cover shadow-[0_25px_50px_-12px_rgba(0,0,0,.35)]" src={magazineCover} />
              </div>
              <div className="col-span-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-[12px] font-bold tracking-[1.98px] text-[#71717b]" dir="ltr">
                  <span>MONTHLY EDITION</span><span>|</span><span className="text-[#27272a]">AUGUST 2026</span>
                </div>
                <h2 className="mt-5 text-[38px] font-black text-[#09090b]">تاب آوری</h2>
                <div className="mt-5 grid grid-cols-2 gap-x-8">
                  {resilienceStories.map((story) => (
                    <article className="border-t border-[#e3dfd6] py-5" key={story.title}>
                      <h3 className="text-[17px] font-bold leading-7 text-[#09090b]">{story.title}</h3>
                      <p className="mt-2 text-[14px] leading-7 text-[#52525c]">{story.description}</p>
                    </article>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3 text-[14px] font-bold">
                  <span>بیشتر بخوانید</span><span className="grid size-8 place-items-center rounded-full bg-[#09090b] text-white">←</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-7 py-14">
          <SectionHeading>اقتصاد دیجیتال</SectionHeading>
          <div className="grid grid-cols-12 gap-7">
            <article className="col-span-7">
              <img alt={digitalStories[0].category} className="aspect-video w-full rounded-[6px] object-cover" src={digitalStories[0].image} />
              <p className="mt-4 text-[14px] font-medium text-[#990108]">{digitalStories[0].category}</p>
              <h3 className="mt-2 text-[21px] font-bold leading-9">{digitalStories[0].title}</h3>
            </article>
            <div className="col-span-5 divide-y divide-[#cbced4] border-y border-[#cbced4]">
              {digitalStories.slice(1).map((story) => (
                <article className="grid grid-cols-[1fr_180px] gap-5 py-6" key={story.title}>
                  <div>
                    <p className="text-[14px] font-medium text-[#990108]">{story.category}</p>
                    <h3 className="mt-2 text-[18px] font-bold leading-8">{story.title}</h3>
                  </div>
                  <img alt={story.title} className="aspect-video w-[180px] rounded-[6px] object-cover" src={story.image} />
                </article>
              ))}
              <div className="py-5 text-[14px] font-bold">بیشتر بخوانید ←</div>
            </div>
          </div>
        </section>

        <aside className="mx-auto max-w-[1280px] px-7 pb-14">
          <div className="overflow-hidden rounded-[6px] bg-[#000e2c] p-4">
            <p className="mb-3 text-left font-['Inknut_Antiqua:Bold',serif] text-[13px] text-white" dir="ltr">ADVERTISE</p>
            <img alt="ADVERTISE" className="h-[210px] w-full object-cover" src={advertiseImage} />
          </div>
        </aside>

        <section className="bg-[#f4f5f6] py-14">
          <div className="mx-auto max-w-[1280px] px-7">
            <SectionHeading>آخرین اخبار</SectionHeading>
            <div className="grid grid-cols-2 gap-x-12 gap-y-0">
              {latestStories.map((item) => (
                <article className="flex min-h-[138px] items-center gap-5 border-b border-[#cbced4] py-5" key={item.title}>
                  <img alt={item.title} className="size-[112px] shrink-0 rounded-[6px] object-cover" src={item.image} />
                  <div>
                    <p className="text-[14px] font-medium text-[#990108]">{item.category}</p>
                    <h3 className="mt-2 text-[17px] font-bold leading-8">{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
            <button className="mt-8 h-11 w-full rounded-[6px] bg-[#656c7a] text-[14px] font-bold text-[#f4f5f6]" type="button">بیشتر بخوانید</button>
          </div>
        </section>

        <section className="bg-[#000e2c] text-white">
          <div className="mx-auto grid max-w-[1280px] grid-cols-2 items-center gap-10 px-7 py-10">
            <img alt="صرافی والکس" className="aspect-video w-full rounded-[6px] object-cover" src={wallexImage} />
            <div className="text-center">
              <h2 className="text-[23px] font-bold leading-10">صرافی والکس معتبرترین و پیشرفته ترین پلتفرم معامله ارزهای دیجیتال ایران با پشتیبانی ۲۴/۷ و امکانات رایگان، در دنیای آینده قدم بزن!</h2>
              <p className="mt-5 text-[14px] leading-7 text-[#cbced4]" dir="ltr">Wallex Exchange, Iran’s most trusted and advanced cryptocurrency trading platform, offering 24/7 support and free features. Step into the future of digital finance!</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-7 py-14">
          <SectionHeading>عکس</SectionHeading>
          <h3 className="mb-6 text-[24px] font-bold">گرامیداشت روز ملی صنعت و معدن با حضور رئیس جمهور</h3>
          <div className="grid grid-cols-12 grid-rows-2 gap-3">
            <img alt="گرامیداشت روز ملی صنعت و معدن با حضور رئیس جمهور" className="col-span-6 row-span-2 h-[520px] w-full rounded-[6px] object-cover" src={galleryOne} />
            {[galleryTwo, galleryThree, galleryFour, galleryFive].map((image, index) => (
              <img alt="گرامیداشت روز ملی صنعت و معدن با حضور رئیس جمهور" className="col-span-3 h-[254px] w-full rounded-[6px] object-cover" key={image} src={image} />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#000e2c] text-white">
        <div className="mx-auto max-w-[1280px] px-7 py-12">
          <div className="flex items-start justify-between border-b border-[#969ca8] pb-10">
            <img alt="ECO TIMES" className="h-[86px] w-[140px] object-contain" src={footerLogo} />
            <div className="flex gap-20 text-[14px] font-bold">
              <a href="#">درباره ما</a><a href="#">ارتباط با ما</a><a href="#">پیوند ها</a>
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
