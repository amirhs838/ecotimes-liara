import svgPaths from "./svg-v93c2weif6";
import imgTimthumbPhp from "./c05bf090b9669767870e5de4641445ccc4eb261c.png";
import imgTimthumbPhp1 from "./ba64993282e1849c68688dc61507ba8d638efc1d.png";
import imgTimthumbPhp2 from "./ea96dd87c4daee1c1c7de083c6be3f74487bd602.png";
import imgTimthumbPhp3 from "./072c287437aa52016c1b5a6470ea0a9c665e68b3.png";
import imgTimthumbPhp4 from "./13fc82c7bdbbc2e1b4ebef690ef9ba20e913a018.png";
import imgTimthumbPhp5 from "./coin-5.png";
import imgTimthumbPhp6 from "./coin-6.png";
import imgRectangle1 from "./1f369ec9c752c5ebe514f523bde92d9cca2d8186.png";
import imgChatGptImageAug62026011630Pm1 from "./f0bc7b6eb0394faadd792ee110aef1c4d491a399.png";
import imgModernaHqApJt2608041785874475703HpMain16X9Jpg from "./47a2a67f4f2837b8636b645b748e016e996b8314.png";
import imgCyclosporiasisGtyGmh2608031785774719590HpMain16X9Jpg from "./5a079c71bdc9cc31fa323f7aa572956db3f22727.png";
import imgMarineOneTrumpGtyBh2608051785956524669HpMain16X9Jpg from "./7ec078a70741686ed79bfc5397debeaf7e45afe5.png";
import imgAlexMurdaugh2HtGmh2606291782748529819HpMain16X9Jpg from "./a4e9d7a9d621e2d06e109090fd9ca69a3f4b408d.png";
import imgPirro1GtyGmh2608031785790335622HpMain16X9Jpg from "./b6c48806909862cbb8a52c56fa301365073a2662.png";
import imgAnthropicGtyJef2607311785503555591HpMain16X9Jpg from "./5b32298064da7b3e45f20313ad4e3f961a80c02b.png";
import img260805Abcnlp430VibeCheckHpMain16X9Jpg from "./c68f4f0be23326ed17de4525253731cb88f7cdda.png";
import imgImage4 from "./9d53ac9910409df7a9240d849a4bfefbd5419418.png";
import img260805Abcnlp430SpiralHpMain16X9Jpg from "./6d48b2e124f6406b1a9cac2d6c8762d12b5b199d.png";
import img260805Gma3Yeonjun1HpMain16X9Jpg from "./97f92a52e6ee7c160c6efcc5075091f08d7ccddf.png";
import imgImage2 from "./c213c5301dd8bd789a83050bbe87cd86b91b916f.png";
import img from "./48f91a8cb84a3336a75764a4715ae0f6f49026a5.png";
import imgElSayed11ApGmh2608051785943198676HpMain16X9Jpg from "./bf41736ae5a0e090ce95ba71f1fd7f7b7a137c1a.png";
import imgElSayed10ApGmh2608051785943199095HpMain16X9Jpg from "./e3d923e2d4264cb7f5d7927105c246c7f1396613.png";
import imgElSayed7ApGmh2608051785942592371HpMain16X9Jpg from "./3538b62f506278deac80220dce6d979fcb279556.png";
import imgPromoHomepageApp311774645598540HpMainJpg from "./9c3bea2ab16af8de0d4b67b15f6646a6b15243bc.png";
import imgDwstHtJt2608051785961216746HpMain16X9Jpg from "./6334ff254527b64d0a4b3e95213654683cd6fabe.png";
import imgMdCrash1HtGmh2608051785961626040HpMainSquareJpg from "./0a57b56d5863c25159cde44728c21dfe46688eb1.png";
import imgPirro1GtyGmh2608031785790335622HpMainSquareJpg from "./06a12c4088a414b34652477f501112976622487a.png";
import imgModernaHqApJt2608041785874475703HpMainSquareJpg from "./5ebfcbea5b4121c2a3f40be1905ded5f15f8330c.png";
import imgCandidaAurisGtyJef2608051785935833866HpMainSquareJpg from "./0cbbe013a74781f429e324cb05567c24294e0cf2.png";
import imgMarineOneTrumpGtyBh2608051785956524669HpMainSquareJpg from "./a73e24e8094e75a5627f6ef99c40701412959dcc.png";
import imgWirestoryC5Cf0Ef4A260E6A517Fae615C08A1F8BSquareJpg from "./020c2945301494dba1398e57ab63d4d457a4423e.png";
import imgFire2ApGmh2608051785938141032HpEmbedSl16X9TJpg from "./7586824e423d3839b8ce72c1d9f6214d34faf8e0.png";
import imgFire4ApGmh2608051785938141886HpEmbedSl16X9TJpg from "./e7b819ab3fbf8af6b0abf14df0b693b0b0a7fed3.png";
import imgFire5GtyGmh2608051785938142332HpEmbedSl16X9TJpg from "./b37d429ee7d8375ebb4f33904b24096fe3ff35c3.png";
import imgFire1ApGmh2608051785938141462HpEmbedSl16X9TJpg from "./701a8229b01625d046449a82f68b657c4e48a84f.png";
import imgFire3GtyGmh2608051785938142778HpEmbedSl16X9TJpg from "./723884ecb125e94828d6870c0c6de46d2dbd6a7a.png";
import imgAbcnLogo from "./5ebe0a821e4b54a4e643c895ba1be6a544f83528.png";
import imgLogo from "./logo.png";
import { imgIFaLight, imgIFaLight1, imgRectangle } from "./svg-4phsu";
import { createContext, useContext, useState, type ReactNode } from "react";
import { API_URL, absoluteAsset, articleUrl, type NavItem } from "@/lib/api";
import { useHomeData, useMarket, useMobileHome } from "@/lib/use-home-data";
import TickerMarquee from "@/TickerMarquee";
import AutoPlayVideo from "@/AutoPlayVideo";

const MobileGalleryContext = createContext<{
  index: number;
  total: number;
  setIndex: (delta: number) => void;
}>({
  index: 0,
  total: 1,
  setIndex: () => {},
});

function TimthumbPhp() {
  return (
    <div className="pointer-events-none relative rounded-[11px] shrink-0 size-[25px]" data-name="timthumb.php">
      <div aria-hidden className="absolute inset-0 rounded-[11px]">
        <div className="absolute bg-white inset-0 rounded-[11px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[11px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTimthumbPhp} />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e6ef] border-solid inset-0 rounded-[11px] shadow-[0px_5px_12px_0px_rgba(20,36,72,0.1)]" />
    </div>
  );
}

function Change({
  boxClass,
  dataName,
  fallback,
  fallbackUp,
  idx,
}: {
  boxClass: string;
  dataName: string;
  fallback: string;
  fallbackUp: boolean;
  idx: number;
}) {
  const m = useMarket();
  const raw = m?.[idx]?.[2];
  if (!m || !raw) {
    return (
      <div className={boxClass} data-name={dataName}>
        <div className="[word-break:break-word] absolute flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] left-[11.25px] text-[#687086] text-[11.2px] top-[calc(50%-0.6px)] whitespace-nowrap">
          <p className="leading-[11.2px]">—</p>
        </div>
      </div>
    );
  }
  const num = raw ? parseFloat(raw) : NaN;
  const isUp = Number.isFinite(num) ? num >= 0 : fallbackUp;
  const text = Number.isFinite(num) ? `${Math.abs(num).toFixed(2)}%` : fallback;
  const icon = isUp ? imgIFaLight1 : imgIFaLight;
  return (
    <div className={boxClass} data-name={dataName}>
      <div className="-translate-y-1/2 absolute left-0 size-[8.06px] top-[calc(50%-0.01px)]" data-name="i.fa-light:mask-group">
        <div
          className={`-translate-y-1/2 absolute ${isUp ? "bg-[#087b55]" : "bg-[#c93444]"} left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[8.06px_8.06px] size-[8.06px] top-1/2`}
          style={{ maskImage: `url("${icon}")` }}
          data-name="i.fa-light"
        />
      </div>
      <div className={`-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] left-[11.25px] ${isUp ? "text-[#087b55]" : "text-[#c93444]"} text-[11.2px] top-[calc(50%-0.6px)] whitespace-nowrap`}>
        <p className="leading-[11.2px]">{text}</p>
      </div>
    </div>
  );
}

function SpanSignalDeskTickerSymbol({ idx = 0, fallback = "BTC" }: { idx?: number; fallback?: string }) {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.signal-desk-ticker__symbol">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#687086] text-[10.7px] tracking-[0.858px] uppercase whitespace-nowrap">
        <p className="leading-[10.72px]">{m?.[idx]?.[0] ?? fallback}</p>
      </div>
    </div>
  );
}

function Strong({ idx = 0 }: { idx?: number }) {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="strong">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#121728] text-[13.1px] whitespace-nowrap">
        <p className="leading-[13.12px]">{m?.[idx]?.[1] ?? "—"}</p>
      </div>
    </div>
  );
}

function IFaLightMaskGroup() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[8.06px] top-[calc(50%-0.01px)]" data-name="i.fa-light:mask-group">
      <div className="-translate-y-1/2 absolute bg-[#c93444] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[8.06px_8.06px] size-[8.06px] top-1/2" style={{ maskImage: `url("${imgIFaLight}")` }} data-name="i.fa-light" />
    </div>
  );
}

function Down3() {
  return <Change boxClass="h-[11.2px] relative shrink-0 w-[42.98px]" dataName="Down 1.97%" fallback="1.97%" fallbackUp={false} idx={0} />;
}

function ASignalDeskTicker() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[6.1px] items-center left-[16px] min-h-[44px] py-[11px] top-1/2" data-name="a.signal-desk-ticker">
      <TimthumbPhp />
      <SpanSignalDeskTickerSymbol />
      <Strong />
      <Down3 />
    </div>
  );
}

function TimthumbPhp1() {
  return (
    <div className="pointer-events-none relative rounded-[11px] shrink-0 size-[25px]" data-name="timthumb.php">
      <div aria-hidden className="absolute inset-0 rounded-[11px]">
        <div className="absolute bg-white inset-0 rounded-[11px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[11px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTimthumbPhp1} />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e6ef] border-solid inset-0 rounded-[11px] shadow-[0px_5px_12px_0px_rgba(20,36,72,0.1)]" />
    </div>
  );
}

function SpanSignalDeskTickerSymbol1() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.signal-desk-ticker__symbol">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#687086] text-[10.7px] tracking-[0.858px] uppercase whitespace-nowrap">
        <p className="leading-[10.72px]">{m?.[1]?.[0] ?? "ETH"}</p>
      </div>
    </div>
  );
}

function Strong1() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="strong">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#121728] text-[13.1px] whitespace-nowrap">
        <p className="leading-[13.12px]">{m?.[1]?.[1] ?? "—"}</p>
      </div>
    </div>
  );
}

function IFaLightMaskGroup1() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[8.06px] top-[calc(50%-0.01px)]" data-name="i.fa-light:mask-group">
      <div className="-translate-y-1/2 absolute bg-[#c93444] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[8.06px_8.06px] size-[8.06px] top-1/2" style={{ maskImage: `url("${imgIFaLight}")` }} data-name="i.fa-light" />
    </div>
  );
}

function Down5() {
  return <Change boxClass="h-[11.2px] relative shrink-0 w-[42.98px]" dataName="Down 2.60%" fallback="2.60%" fallbackUp={false} idx={1} />;
}

function ASignalDeskTicker1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[6.1px] items-center left-[203.84px] min-h-[44px] py-[11px] top-1/2" data-name="a.signal-desk-ticker">
      <TimthumbPhp1 />
      <SpanSignalDeskTickerSymbol1 />
      <Strong1 />
      <Down5 />
    </div>
  );
}

function TimthumbPhp2() {
  return (
    <div className="pointer-events-none relative rounded-[11px] shrink-0 size-[22px]" data-name="timthumb.php">
      <div aria-hidden className="absolute inset-0 rounded-[11px]">
        <div className="absolute bg-white inset-0 rounded-[11px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[11px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTimthumbPhp2} />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e6ef] border-solid inset-0 rounded-[11px] shadow-[0px_5px_12px_0px_rgba(20,36,72,0.1)]" />
    </div>
  );
}

function SpanSignalDeskTickerSymbol2() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.signal-desk-ticker__symbol">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#687086] text-[10.7px] tracking-[0.858px] uppercase whitespace-nowrap">
        <p className="leading-[10.72px]">{m?.[2]?.[0] ?? "BNB"}</p>
      </div>
    </div>
  );
}

function Strong2() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="strong">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#121728] text-[13.1px] whitespace-nowrap">
        <p className="leading-[13.12px]">{m?.[2]?.[1] ?? "—"}</p>
      </div>
    </div>
  );
}

function IFaLightMaskGroup2() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[8.06px] top-[calc(50%-0.01px)]" data-name="i.fa-light:mask-group">
      <div className="-translate-y-1/2 absolute bg-[#c93444] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[8.06px_8.06px] size-[8.06px] top-1/2" style={{ maskImage: `url("${imgIFaLight}")` }} data-name="i.fa-light" />
    </div>
  );
}

function Down() {
  return <Change boxClass="h-[11.2px] relative shrink-0 w-[42.98px]" dataName="Down 1.47%" fallback="1.47%" fallbackUp={false} idx={2} />;
}

function ASignalDeskTicker2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[6.1px] items-center left-[383.8px] min-h-[44px] py-[11px] top-1/2" data-name="a.signal-desk-ticker">
      <TimthumbPhp2 />
      <SpanSignalDeskTickerSymbol2 />
      <Strong2 />
      <Down />
    </div>
  );
}

function TimthumbPhp3() {
  return (
    <div className="pointer-events-none relative rounded-[11px] shrink-0 size-[22px]" data-name="timthumb.php">
      <div aria-hidden className="absolute inset-0 rounded-[11px]">
        <div className="absolute bg-white inset-0 rounded-[11px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[11px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTimthumbPhp3} />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e6ef] border-solid inset-0 rounded-[11px] shadow-[0px_5px_12px_0px_rgba(20,36,72,0.1)]" />
    </div>
  );
}

function SpanSignalDeskTickerSymbol3() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.signal-desk-ticker__symbol">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#687086] text-[10.7px] tracking-[0.858px] uppercase whitespace-nowrap">
        <p className="leading-[10.72px]">{m?.[3]?.[0] ?? "XRP"}</p>
      </div>
    </div>
  );
}

function Strong3() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="strong">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#121728] text-[13.1px] whitespace-nowrap">
        <p className="leading-[13.12px]">{m?.[3]?.[1] ?? "—"}</p>
      </div>
    </div>
  );
}

function IFaLightMaskGroup3() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[8.06px] top-[calc(50%-0.01px)]" data-name="i.fa-light:mask-group">
      <div className="-translate-y-1/2 absolute bg-[#c93444] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[8.06px_8.06px] size-[8.06px] top-1/2" style={{ maskImage: `url("${imgIFaLight}")` }} data-name="i.fa-light" />
    </div>
  );
}

function Down4() {
  return <Change boxClass="h-[11.2px] relative shrink-0 w-[42.98px]" dataName="Down 2.12%" fallback="2.12%" fallbackUp={false} idx={3} />;
}

function ASignalDeskTicker3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[6.1px] items-center left-[554.59px] min-h-[44px] py-[11px] top-1/2" data-name="a.signal-desk-ticker">
      <TimthumbPhp3 />
      <SpanSignalDeskTickerSymbol3 />
      <Strong3 />
      <Down4 />
    </div>
  );
}

function TimthumbPhp4() {
  return (
    <div className="pointer-events-none relative rounded-[11px] shrink-0 size-[22px]" data-name="timthumb.php">
      <div aria-hidden className="absolute inset-0 rounded-[11px]">
        <div className="absolute bg-white inset-0 rounded-[11px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[11px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTimthumbPhp4} />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e6ef] border-solid inset-0 rounded-[11px] shadow-[0px_5px_12px_0px_rgba(20,36,72,0.1)]" />
    </div>
  );
}

function SpanSignalDeskTickerSymbol4() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.signal-desk-ticker__symbol">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#687086] text-[10.7px] tracking-[0.858px] uppercase whitespace-nowrap">
        <p className="leading-[10.72px]">{m?.[4]?.[0] ?? "SOL"}</p>
      </div>
    </div>
  );
}

function Strong4() {
  const m = useMarket();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="strong">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#121728] text-[13.1px] whitespace-nowrap">
        <p className="leading-[13.12px]">{m?.[4]?.[1] ?? "—"}</p>
      </div>
    </div>
  );
}

function IFaLightMaskGroup4() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[8.06px] top-[calc(50%-0.01px)]" data-name="i.fa-light:mask-group">
      <div className="-translate-y-1/2 absolute bg-[#c93444] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[8.06px_8.06px] size-[8.06px] top-1/2" style={{ maskImage: `url("${imgIFaLight}")` }} data-name="i.fa-light" />
    </div>
  );
}

function Down2() {
  return <Change boxClass="h-[11.2px] relative shrink-0 w-[42.98px]" dataName="Down 1.67%" fallback="1.67%" fallbackUp={false} idx={4} />;
}

function ASignalDeskTicker4() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[6.1px] items-center left-[709.64px] min-h-[44px] py-[11px] top-1/2" data-name="a.signal-desk-ticker">
      <TimthumbPhp4 />
      <SpanSignalDeskTickerSymbol4 />
      <Strong4 />
      <Down2 />
    </div>
  );
}

function Image1() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="image">
      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTimthumbPhp5} />
    </div>
  );
}

function Image() {
  return (
    <div className="-translate-y-1/2 absolute bg-white border border-[#e2e6ef] border-solid content-stretch flex flex-col items-center justify-center left-[-1px] overflow-clip rounded-[11px] shadow-[0px_5px_12px_0px_rgba(20,36,72,0.1)] size-[24px] top-1/2" data-name="image">
      <Image1 />
    </div>
  );
}

function SpanSignalDeskTickerSymbol5() {
  const m = useMarket();
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[28.08px] top-[calc(50%+0.14px)]" data-name="span.signal-desk-ticker__symbol">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#687086] text-[10.7px] tracking-[0.858px] uppercase whitespace-nowrap">
        <p className="leading-[10.72px]">{m?.[5]?.[0] ?? "TRX"}</p>
      </div>
    </div>
  );
}

function Strong5() {
  const m = useMarket();
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[58.17px] top-[calc(50%+0.44px)]" data-name="strong">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#121728] text-[13.1px] whitespace-nowrap">
        <p className="leading-[13.12px]">{m?.[5]?.[1] ?? "—"}</p>
      </div>
    </div>
  );
}

function IFaLightMaskGroup5() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[8.06px] top-[calc(50%-0.01px)]" data-name="i.fa-light:mask-group">
      <div className="-translate-y-1/2 absolute bg-[#087b55] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[8.06px_8.06px] size-[8.06px] top-1/2" style={{ maskImage: `url("${imgIFaLight1}")` }} data-name="i.fa-light" />
    </div>
  );
}

function Up() {
  return <Change boxClass="-translate-y-1/2 absolute h-[11.2px] left-[97.06px] top-[calc(50%-0.01px)] w-[42.98px]" dataName="Up 0.32%" fallback="0.32%" fallbackUp={true} idx={5} />;
}

function ASignalDeskTicker5() {
  return (
    <div className="-translate-y-1/2 absolute h-[44px] left-[871.97px] top-1/2 w-[140.05px]" data-name="a.signal-desk-ticker">
      <Image />
      <SpanSignalDeskTickerSymbol5 />
      <Strong5 />
      <Up />
    </div>
  );
}

function Image3() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="image">
      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTimthumbPhp6} />
    </div>
  );
}

function Image2() {
  return (
    <div className="-translate-y-1/2 absolute bg-white border border-[#e2e6ef] border-solid content-stretch flex flex-col items-center justify-center left-[-1px] overflow-clip rounded-[11px] shadow-[0px_5px_12px_0px_rgba(20,36,72,0.1)] size-[24px] top-1/2" data-name="image">
      <Image3 />
    </div>
  );
}

function SpanSignalDeskTickerSymbol6() {
  const m = useMarket();
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[28.07px] top-[calc(50%+0.14px)]" data-name="span.signal-desk-ticker__symbol">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#687086] text-[10.7px] tracking-[0.858px] uppercase whitespace-nowrap">
        <p className="leading-[10.72px]">{m?.[6]?.[0] ?? "HYPE"}</p>
      </div>
    </div>
  );
}

function Strong6() {
  const m = useMarket();
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[66.78px] top-[calc(50%+0.44px)]" data-name="strong">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#121728] text-[13.1px] whitespace-nowrap">
        <p className="leading-[13.12px]">{m?.[6]?.[1] ?? "—"}</p>
      </div>
    </div>
  );
}

function IFaLightMaskGroup6() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[8.06px] top-[calc(50%-0.01px)]" data-name="i.fa-light:mask-group">
      <div className="-translate-y-1/2 absolute bg-[#087b55] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[8.06px_8.06px] size-[8.06px] top-1/2" style={{ maskImage: `url("${imgIFaLight1}")` }} data-name="i.fa-light" />
    </div>
  );
}

function Up1() {
  return <Change boxClass="-translate-y-1/2 absolute h-[11.2px] left-[112.97px] top-[calc(50%-0.01px)] w-[42.98px]" dataName="Up 0.40%" fallback="0.40%" fallbackUp={true} idx={6} />;
}

function ASignalDeskTicker6() {
  return (
    <div className="-translate-y-1/2 absolute h-[44px] left-[1026.41px] top-1/2 w-[155.95px]" data-name="a.signal-desk-ticker">
      <Image2 />
      <SpanSignalDeskTickerSymbol6 />
      <Strong6 />
      <Up1 />
    </div>
  );
}

function SpanSignalDeskTickerSymbol7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.signal-desk-ticker__symbol">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#687086] text-[10.7px] tracking-[0.858px] uppercase whitespace-nowrap">
        <p className="leading-[10.72px]">Total market cap</p>
      </div>
    </div>
  );
}

function Strong7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="strong">
      <div className="[word-break:break-word] flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#121728] text-[13.1px] whitespace-nowrap">
        <p className="leading-[13.12px]">$2.18T</p>
      </div>
    </div>
  );
}

function IFaLightMaskGroup7() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[8.06px] top-[calc(50%-0.01px)]" data-name="i.fa-light:mask-group">
      <div className="-translate-y-1/2 absolute bg-[#c93444] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[8.06px_8.06px] size-[8.06px] top-1/2" style={{ maskImage: `url("${imgIFaLight}")` }} data-name="i.fa-light" />
    </div>
  );
}

function Down1() {
  return (
    <div className="h-[11.2px] relative shrink-0 w-[42.98px]" data-name="Down 1.64%">
      <IFaLightMaskGroup7 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] left-[11.25px] text-[#c93444] text-[11.2px] top-[calc(50%-0.6px)] whitespace-nowrap">
        <p className="leading-[11.2px]">1.64%</p>
      </div>
    </div>
  );
}

function ASignalDeskTicker7() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[6.1px] items-center left-[1196.75px] min-h-[44px] pb-[15.43px] pt-[15.44px] top-[calc(50%+0.43px)]" data-name="a.signal-desk-ticker">
      <SpanSignalDeskTickerSymbol7 />
      <Strong7 />
      <Down1 />
    </div>
  );
}

function Span() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#2457ff] content-stretch flex flex-col items-start justify-center left-0 rounded-[3.5px] size-[7px] top-[calc(50%-0.01px)]" data-name="span">
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[3.5px] shadow-[0px_0px_0px_4px_rgba(36,87,255,0.1)] shrink-0 size-[7px]" data-name="span:shadow" />
    </div>
  );
}

function SpanSignalDeskMarketStripStatus() {
  return (
    <div className="-translate-y-1/2 absolute h-[11.2px] right-[-1082.45px] top-[calc(50%-0.01px)] w-[42.64px]" data-name="span.signal-desk-market-strip__status">
      <Span />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Arimo:Bold',sans-serif] font-bold justify-center leading-[0] left-[14.19px] text-[#2457ff] text-[11.2px] top-[calc(50%-0.6px)] tracking-[0.896px] uppercase whitespace-nowrap">
        <p className="leading-[11.2px]">Live</p>
      </div>
    </div>
  );
}

function TickerFlowItem({ children }: { children: ReactNode }) {
  return <div className="flex min-h-[44px] shrink-0 items-center gap-[6.1px] py-[11px] pr-[36px]">{children}</div>;
}

function TopCryptoTickers() {
  return (
    <TickerMarquee
      className="backdrop-blur-[7px] bg-[rgba(255,255,255,0.9)] border-[#e2e6ef] border-b border-solid flex h-[48px] min-h-[48px] items-center relative shrink-0 w-[385px]"
      dataName="Top crypto tickers"
      gap={0}
      speed={1.1}
    >
      <TickerFlowItem>
        <TimthumbPhp />
        <SpanSignalDeskTickerSymbol />
        <Strong />
        <Down3 />
      </TickerFlowItem>
      <TickerFlowItem>
        <TimthumbPhp1 />
        <SpanSignalDeskTickerSymbol1 />
        <Strong1 />
        <Down5 />
      </TickerFlowItem>
      <TickerFlowItem>
        <TimthumbPhp2 />
        <SpanSignalDeskTickerSymbol2 />
        <Strong2 />
        <Down />
      </TickerFlowItem>
      <TickerFlowItem>
        <TimthumbPhp3 />
        <SpanSignalDeskTickerSymbol3 />
        <Strong3 />
        <Down4 />
      </TickerFlowItem>
      <TickerFlowItem>
        <TimthumbPhp4 />
        <SpanSignalDeskTickerSymbol4 />
        <Strong4 />
        <Down2 />
      </TickerFlowItem>
      <TickerFlowItem>
        <Image1 />
        <SpanSignalDeskTickerSymbol idx={5} fallback="TRX" />
        <Strong idx={5} />
        <Change boxClass="h-[11.2px] relative shrink-0 w-[42.98px]" dataName="Up 0.32%" fallback="0.32%" fallbackUp={true} idx={5} />
      </TickerFlowItem>
      <TickerFlowItem>
        <Image3 />
        <SpanSignalDeskTickerSymbol idx={6} fallback="HYPE" />
        <Strong idx={6} />
        <Change boxClass="h-[11.2px] relative shrink-0 w-[42.98px]" dataName="Up 0.40%" fallback="0.40%" fallbackUp={true} idx={6} />
      </TickerFlowItem>
    </TickerMarquee>
  );
}

function DivCarouselWrapper() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-[393px]" data-name="div.Carousel__Wrapper">
      <TopCryptoTickers />
    </div>
  );
}

function DivPcCvU() {
  return (
    <div className="border-[#cbced4] border-solid border-t col-1 content-stretch flex flex-col h-px items-start ml-0 mt-[71px] pr-[17px] relative row-1 w-[390px]" data-name="div.PCCvU">
      <DivCarouselWrapper />
    </div>
  );
}

function ClipPathGroup({ hidden = false, bare = false }: { hidden?: boolean; bare?: boolean }) {
  const d = useMobileHome();
  return (
    <div className={`col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ${bare ? "" : "ml-[15.23px] mt-[127px]"} place-items-start relative row-1 ${hidden ? "invisible" : ""}`} data-name="Clip path group" onClick={() => { const href = articleUrl(d?.hero?.href ?? null); if (href) window.location.href = href; }}>
      <div className="col-1 h-[211.083px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.766px_-0.38px] mask-size-[360.547px_211.083px] ml-[0.77px] mt-[0.38px] relative row-1 w-[360.547px]" style={{ maskImage: `url("${imgRectangle}")` }} data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt={d?.hero?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.hero?.imageUrl) ?? imgRectangle1} />
        </div>
      </div>
    </div>
  );
}

function ANPLaK() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start relative shrink-0" data-name="a.nPLaK">
      <div className="h-[14px] relative shrink-0 w-[328px]" data-name="اقتصاد دیجیتال">
        <div className="[word-break:break-word] absolute flex flex-col font-['IRANSansX:Medium',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#990108] text-[14px] text-right tracking-[-0.28px]">
          <p className="leading-[14px]" dir="auto">
            {d?.hero?.kicker ?? "معاون علمی رئیس جمهور:"}
          </p>
        </div>
      </div>
    </div>
  );
}

function DivAbcnewsRssource112435326Tags() {
  return (
    <div className="content-center flex flex-wrap h-[25px] items-center pb-[8px] pl-[8px] pr-[286.67px] relative shrink-0 w-[338px]" data-name="div#abcnews-rssource-112435326tags">
      <ANPLaK />
    </div>
  );
}

function H2AbcnewsRssource112435326Headline() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="h2#abcnews-rssource-112435326headline">
      <div className="min-h-[52px] relative shrink-0 w-[330px]" data-name="قدرت‌بنیان؛ پارادایم تازه برای حکمرانی فناوری ایران">
        <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] w-full justify-center leading-[0] not-italic text-[#141618] text-[22.1px] text-right">
          <p className="leading-[28px]" dir="auto">
            {d?.hero?.title ?? "قدرت‌بنیان؛ پارادایم تازه برای حکمرانی فناوری ایران"}
          </p>
        </div>
      </div>
    </div>
  );
}

function DivCjafl() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-col min-h-[74px] items-end relative shrink-0 w-full" data-name="div.CJAFL" onClick={() => { const href = articleUrl(d?.hero?.href ?? null); if (href) window.location.href = href; }}>
      <DivAbcnewsRssource112435326Tags />
      <H2AbcnewsRssource112435326Headline />
    </div>
  );
}

function BlancheMeetsWith2KeyRepublicanSenatorsAheadOfConfirmationVote() {
  return (
    <div className="content-stretch flex flex-col min-h-[74px] items-start relative shrink-0 w-full" data-name="Blanche meets with 2 key Republican senators ahead of confirmation vote">
      <DivCjafl />
    </div>
  );
}

function DivIPMwx() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-col min-h-[73px] items-start relative shrink-0 w-full" data-name="div.iPMwx">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] min-h-[46px] justify-center leading-[0] not-italic relative shrink-0 text-[#22252a] text-[12.6px] text-right w-full">
        <p className="leading-[20px]" dir="auto">
          {d?.hero?.lead ??
            "حسین افشین، معاون علمی رئیس‌جمهور از تغییر رویکرد سیاست‌گذاری علم و فناوری کشور خبر داد و «قدرت‌بنیان» را پارادایم جدید حکمرانی فناوری ایران معرفی کرد"}
        </p>
      </div>
    </div>
  );
}

function DivIPMwxMargin() {
  return (
    <div className="content-stretch flex flex-col min-h-[78px] items-start pt-[8px] relative shrink-0 w-full" data-name="div.iPMwx:margin">
      <DivIPMwx />
    </div>
  );
}

function DivQghKv() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center px-[16px] relative shrink-0 w-full" data-name="div.QGHKv">
      <BlancheMeetsWith2KeyRepublicanSenatorsAheadOfConfirmationVote />
      <DivIPMwxMargin />
    </div>
  );
}

function DivQghKvMargin({ hidden = false, bare = false }: { hidden?: boolean; bare?: boolean }) {
  return (
    <div className={`col-1 content-stretch flex flex-col min-h-[183px] items-start ${bare ? "w-full" : "ml-[12.5px] mt-[338.5px] w-[362px]"} py-[16px] relative row-1 ${hidden ? "invisible" : ""}`} data-name="div.QGHKv:margin">
      <DivQghKv />
    </div>
  );
}

// Hero card (image + text block). The gray box now grows with the text
// instead of being a fixed-height SVG, so long titles/leads stay inside it.
function HeroCard({ loading }: { loading: boolean }) {
  return (
    <div className="col-1 ml-[15.5px] mt-[126.5px] relative row-1 w-[361px] overflow-hidden rounded-[6px] bg-[#f4f5f6]" data-name="hero-card">
      <ClipPathGroup bare hidden={loading} />
      <DivQghKvMargin bare hidden={loading} />
    </div>
  );
}

function HeaderGroup() {
  const home = useHomeData();
  const [menuOpen, setMenuOpen] = useState(false);
  const nav: NavItem[] = home?.nav ?? [];
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-[390px] sticky top-0 z-40" data-name="Group.header">
      <div className="col-1 h-[72px] ml-0 mt-0 relative row-1 w-[390px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="72" preserveAspectRatio="none" viewBox="0 0 390 72" width="390">
          <path d="M390 0H0V72H390V0Z" fill="#C93035" id="Vector" />
        </svg>
      </div>
      <DivPcCvU />
      <div className="col-1 ml-[16.93px] mt-[4.96px] relative row-1 size-[61.276px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="61.276" preserveAspectRatio="none" viewBox="0 0 61.276 61.276" width="61.276">
          <path d="M61.276 0H0V61.276H61.276V0Z" fill="#C93035" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[69px] ml-[12px] mt-[2px] relative row-1 w-[76px]" data-name="IMG_20260802_154108_585 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="ECO TIMES" className="absolute inset-0 object-contain size-full" src={imgLogo} />
        </div>
      </div>
      <div className="col-1 ml-[309px] mt-[26px] relative row-1 size-[19.635px]" data-name="Vector">
        <div className="absolute inset-[-6.9%]">
          <svg className="block size-full" fill="none" height="22.3437" preserveAspectRatio="none" viewBox="0 0 22.3437 22.3437" width="22.3437">
            <path d={svgPaths.p308e8300} id="Vector" stroke="white" strokeWidth="2.70833" />
          </svg>
        </div>
      </div>
      <div className="col-1 flex h-[3.949px] items-center justify-center ml-[327px] mt-[42.53px] relative row-1 w-[4px]">
        <div className="flex-none rotate-[-7.65deg]">
          <div className="h-[3.506px] relative w-[3.565px]" data-name="Vector">
            <div className="absolute inset-[-38.63%_-37.98%]">
              <svg className="block size-full" fill="none" height="6.21413" preserveAspectRatio="none" viewBox="0 0 6.27336 6.21413" width="6.27336">
                <path d={svgPaths.p2ef78280} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2.70833" />
              </svg>
            </div>
          </div>
        </div>
      </div>
<div className="col-1 h-0 ml-[351.41px] mt-[26.96px] relative row-1 w-[22.682px]" data-name="Vector" onClick={() => setMenuOpen((v) => !v)}>
        <div className="absolute inset-[-1.35px_0]">
          <svg className="block size-full" fill="none" height="2.70833" preserveAspectRatio="none" viewBox="0 0 22.6823 2.70833" width="22.6823">
            <path d="M0 1.35417H22.6823" id="Vector" stroke="white" strokeWidth="2.70833" />
          </svg>
        </div>
      </div>
      <div className="col-1 h-0 ml-[351.41px] mt-[35.77px] relative row-1 w-[22.682px]" data-name="Vector" onClick={() => setMenuOpen((v) => !v)}>
        <div className="absolute inset-[-1.35px_0]">
          <svg className="block size-full" fill="none" height="2.70833" preserveAspectRatio="none" viewBox="0 0 22.6823 2.70833" width="22.6823">
            <path d="M0 1.35417H22.6823" id="Vector" stroke="white" strokeWidth="2.70833" />
          </svg>
        </div>
      </div>
      <div className="col-1 h-0 ml-[351.41px] mt-[44.57px] relative row-1 w-[22.682px]" data-name="Vector" onClick={() => setMenuOpen((v) => !v)}>
        <div className="absolute inset-[-1.35px_0]">
          <svg className="block size-full" fill="none" height="2.70833" preserveAspectRatio="none" viewBox="0 0 22.6823 2.70833" width="22.6823">
            <path d="M0 1.35417H22.6823" id="Vector" stroke="white" strokeWidth="2.70833" />
          </svg>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute left-0 right-0 top-[72px] z-50 bg-white shadow-xl" data-name="mobile-menu" dir="rtl" onClick={() => setMenuOpen(false)}>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 px-5 py-4">
            {nav.map((item) => (
              <a
                className="border-b border-[#f0f1f3] py-3 text-[13px] font-bold text-[#141618] transition-colors hover:text-[#990108]"
                href={item.href === "/" ? "/" : `${API_URL}${item.href}`}
                key={item.label}
              >
                {item.label}
              </a>
            ))}
            <a className="border-b border-[#f0f1f3] py-3 text-[13px] font-bold text-[#141618] transition-colors hover:text-[#990108]" href="#videos">
              ویدیو
            </a>
            <a className="border-b border-[#f0f1f3] py-3 text-[13px] font-bold text-[#141618] transition-colors hover:text-[#990108]" href="#photos">
              عکس
            </a>
          </div>
        </div>
      )}
      </div>
  );
}

function Group() {
  const home = useHomeData();
  const loading = home === null;
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-[390px] mt-[-72px]" data-name="Group">
      <div className="col-1 h-[522px] ml-0 mt-0 relative row-1 w-[390px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="522" preserveAspectRatio="none" viewBox="0 0 390 522" width="390">
          <path d="M390 0H0V522H390V0Z" fill="white" id="Vector" />
        </svg>
      </div>
      <HeroCard loading={loading} />
    </div>
  );
}

function AbcNewsLiveAbcMl2502101739199021469HpMain16X9Jpg() {
  const d = useMobileHome();
  return (
    <div className="absolute inset-[-0.31%_0_0.42%_0] overflow-clip" data-name="abc_news_live-abc-ml-250210_1739199021469_hpMain_16x9.jpg">
      <div className="absolute h-[211px] left-[-6px] top-0 w-[374px]" data-name="ChatGPT Image Aug 6, 2026, 01_16_30 PM 1">
        {d?.video?.isUploadedVideo ? (
          <>
            <img alt="" aria-hidden="true" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImageAug62026011630Pm1} />
            <AutoPlayVideo post={d.video} />
            <div className="absolute content-stretch flex inset-0 items-center justify-center pointer-events-none" data-name="div.MediaPlaceholder__Overlay">
              <PlayVideo />
            </div>
          </>
        ) : (
          <img alt={d?.video?.imageAlt ?? ""} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={absoluteAsset(d?.video?.imageUrl) ?? imgChatGptImageAug62026011630Pm1} />
        )}
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-w-px overflow-clip relative" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g clipPath="url(#clip0_0_29)" id="icon__controls__play">
          <path d={svgPaths.p1fff1c00} fill="white" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_29">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PlayVideo() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(20,22,24,0.75)] content-stretch flex items-center justify-center pl-[20.39px] pr-[15.61px] relative rounded-[60px] shrink-0 size-[60px]" data-name="Play video">
      <Frame />
    </div>
  );
}

function DivMediaPlaceholderOverlay() {
  const d = useMobileHome();
  if (d?.video?.isUploadedVideo) return null;
  return (
    <div className="absolute content-stretch flex inset-[-0.63px_0_0.63px_0] items-center justify-center" data-name="div.MediaPlaceholder__Overlay">
      <PlayVideo />
    </div>
  );
}

function DivImageWrapper() {
  return (
    <div className="h-[203.63px] relative shrink-0 w-full" data-name="div.Image__Wrapper">
      <AbcNewsLiveAbcMl2502101739199021469HpMain16X9Jpg />
      <DivMediaPlaceholderOverlay />
    </div>
  );
}

function FigureImage() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="figure.Image">
      <DivImageWrapper />
    </div>
  );
}

function Video() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] relative rounded-[6px] shrink-0 w-full" data-name="Video">
      <FigureImage />
    </div>
  );
}

function DivCjafl1() {
  return <div className="h-[19px] relative shrink-0 w-[300px]" data-name="div.CJAFL" />;
}

function WorldNewsNow() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[284px]" data-name="World News Now">
      <DivCjafl1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] h-[6px] min-w-px overflow-clip relative" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
        <path d={svgPaths.p7f87a00} fill="white" id="Vector" />
      </svg>
    </div>
  );
}

function SvgLiveplayerCircle() {
  return (
    <div className="bg-[#990108] content-stretch flex items-start overflow-clip relative shrink-0 size-[6px]" data-name="svg.liveplayer__circle">
      <Frame1 />
    </div>
  );
}

function SpanCsJky() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.CSJky">
      <SvgLiveplayerCircle />
    </div>
  );
}

function SpanQxdkt() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="span.QXDKT">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[-0.28px] whitespace-nowrap">
        <p className="leading-[14px]">VIDEO</p>
      </div>
    </div>
  );
}

function DivThemeJfHmw() {
  return (
    <div className="bg-[#990108] border-2 border-[rgba(0,0,0,0)] border-solid content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[5px] relative rounded-[4px] shrink-0 w-[67px]" data-name="div.theme-JfHmw">
      <SpanCsJky />
      <SpanQxdkt />
    </div>
  );
}

function DivMetaContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="div.metaContainer">
      <WorldNewsNow />
      <DivThemeJfHmw />
    </div>
  );
}

function DivQghKv1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[8px] relative shrink-0 w-full" data-name="div.QGHKv">
      <DivMetaContainer />
    </div>
  );
}

function DivLiveVideoCard() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative rounded-[6px] shrink-0 w-[362px]" data-name="div.LiveVideo__Card" onClick={() => { const href = articleUrl(d?.video?.href ?? null); if (href) window.location.href = href; }}>
      <Video />
      <DivQghKv1 />
    </div>
  );
}

function ANPLaK1() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="a.nPLaK">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#990108] text-[14px] text-right tracking-[-0.28px] w-[191px]">
        <p className="leading-[14px]" dir="auto">
          {d?.grid[0]?.category ?? "سلامت و درمان"}
        </p>
      </div>
    </div>
  );
}

function DivFdAapprovesModernasmtags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[158.69px] relative shrink-0 w-[205.97px]" data-name="div#FDAapprovesModernasmtags">
      <ANPLaK1 />
    </div>
  );
}

function H2FdAapprovesModernasmheadline() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pr-[5.61px] relative self-stretch" data-name="h2#FDAapprovesModernasmheadline">
      <div className="min-h-[32px] flex flex-col justify-start relative shrink-0 w-[191px]" data-name="هوش مصنوعی در اتاق عمل؛ افزایش دقت جراحی با استفاده از فناوری‌های هوشمند">
        <a className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic text-[#141618] text-[13px] text-right w-full" href={articleUrl(d?.grid[0]?.href ?? null) ?? "#"}>
            <p className="cursor-pointer leading-[18px]" dir="auto">
              {d?.grid[0]?.title ?? "هوش مصنوعی در اتاق عمل؛ افزایش دقت جراحی با استفاده از فناوری‌های هوشمند"}
            </p>
          </a>
      </div>
    </div>
  );
}

function AZZygg() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="a.zZygg">
      <H2FdAapprovesModernasmheadline />
    </div>
  );
}

function FdaApprovesModernasMRnaSeasonalFluVaccine() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="FDA approves Moderna's mRNA seasonal flu vaccine">
      <DivFdAapprovesModernasmtags />
      <AZZygg />
    </div>
  );
}

function DivQghKv2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative self-stretch shrink-0 w-[209.97px] z-[2]" data-name="div.QGHKv">
      <FdaApprovesModernasMRnaSeasonalFluVaccine />
    </div>
  );
}

function ModernaHqApJt2608041785874475703HpMain16X9Jpg() {
  const d = useMobileHome();
  return (
    <div className="h-[85.52px] relative shrink-0 w-[152.03px]" data-name="moderna-hq-ap-jt-260804_1785874475703_hpMain_16x9.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt={d?.grid[0]?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.grid[0]?.imageUrl) ?? imgModernaHqApJt2608041785874475703HpMain16X9Jpg} />
      </div>
    </div>
  );
}

function DivFvQlf() {
  return (
    <div className="content-stretch flex flex-col h-[85.52px] items-start justify-center relative shrink-0 w-full" data-name="div.FvQLF">
      <ModernaHqApJt2608041785874475703HpMain16X9Jpg />
    </div>
  );
}

function DivGpQca() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf />
    </div>
  );
}

function FdaApprovesModernasMRnaSeasonalFluVaccine1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[152.0399932861328px] overflow-clip relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] self-stretch shrink-0 w-[152.03px] z-[1]" data-name="FDA approves Moderna's mRNA seasonal flu vaccine">
      <DivGpQca />
    </div>
  );
}

function DivLiAe() {
  return (
    <div className="content-stretch flex isolate items-start relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivQghKv2 />
      <FdaApprovesModernasMRnaSeasonalFluVaccine1 />
    </div>
  );
}

function ANPLaK2() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="a.nPLaK">
      <div className="h-[14px] relative shrink-0 w-[191px]" data-name="سلامت و درمان">
        <div className="[word-break:break-word] absolute flex flex-col font-['IRANSansX:Medium',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#990108] text-[14px] text-right tracking-[-0.28px]">
          <p className="leading-[14px]" dir="auto">
            {d?.grid[1]?.category ?? "سلامت و درمان"}
          </p>
        </div>
      </div>
    </div>
  );
}

function DivCyclosporiasisoutbretags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[158.69px] relative shrink-0 w-[205.97px]" data-name="div#Cyclosporiasisoutbretags">
      <ANPLaK2 />
    </div>
  );
}

function H2Cyclosporiasisoutbreheadline() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pr-[13.8px] relative self-stretch" data-name="h2#Cyclosporiasisoutbreheadline">
      <div className="min-h-[32px] flex flex-col justify-start relative shrink-0 w-[191px]" data-name="سرم آزمایشی بازسازی اندام؛ گامی بزرگ برای بازسازی اندام های انسان">
        <a className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic text-[#141618] text-[13px] text-right w-full" href={articleUrl(d?.grid[1]?.href ?? null) ?? "#"}>
            <p className="cursor-pointer leading-[18px]" dir="auto">
              {d?.grid[1]?.title ?? "سرم آزمایشی بازسازی اندام؛ گامی بزرگ برای بازسازی اندام های انسان"}
            </p>
          </a>
      </div>
    </div>
  );
}

function AZZygg1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="a.zZygg">
      <H2Cyclosporiasisoutbreheadline />
    </div>
  );
}

function CyclosporiasisOutbreakLinkedToShreddedIcebergLettuceExpandsTo15States() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Cyclosporiasis outbreak linked to shredded iceberg lettuce expands to 15 states">
      <DivCyclosporiasisoutbretags />
      <AZZygg1 />
    </div>
  );
}

function DivQghKv3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0 w-[209.97px] z-[2]" data-name="div.QGHKv">
      <CyclosporiasisOutbreakLinkedToShreddedIcebergLettuceExpandsTo15States />
    </div>
  );
}

function CyclosporiasisGtyGmh2608031785774719590HpMain16X9Jpg() {
  const d = useMobileHome();
  return (
    <div className="h-[85.52px] relative shrink-0 w-[152.03px]" data-name="cyclosporiasis-gty-gmh-260803_1785774719590_hpMain_16x9.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt={d?.grid[1]?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.grid[1]?.imageUrl) ?? imgCyclosporiasisGtyGmh2608031785774719590HpMain16X9Jpg} />
      </div>
    </div>
  );
}

function DivFvQlf1() {
  return (
    <div className="content-stretch flex flex-col h-[85.52px] items-start justify-center relative shrink-0 w-full" data-name="div.FvQLF">
      <CyclosporiasisGtyGmh2608031785774719590HpMain16X9Jpg />
    </div>
  );
}

function DivGpQca1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf1 />
    </div>
  );
}

function CyclosporiasisOutbreakLinkedToShreddedIcebergLettuceExpandsTo15States1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[152.0399932861328px] overflow-clip relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] self-stretch shrink-0 w-[152.03px] z-[1]" data-name="Cyclosporiasis outbreak linked to shredded iceberg lettuce expands to 15 states">
      <DivGpQca1 />
    </div>
  );
}

function DivLiAe1() {
  return (
    <div className="content-stretch flex isolate items-start relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivQghKv3 />
      <CyclosporiasisOutbreakLinkedToShreddedIcebergLettuceExpandsTo15States1 />
    </div>
  );
}

function ANPLaK3() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="a.nPLaK">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#990108] text-[14px] text-right tracking-[-0.28px] w-[191px]">
        <p className="leading-[14px]" dir="auto">
          {d?.grid[2]?.category ?? "اقتصاددیجیتال"}
        </p>
      </div>
    </div>
  );
}

function DivFederalofficialsconftags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[173.47px] relative shrink-0 w-[205.97px]" data-name="div#Federalofficialsconftags">
      <ANPLaK3 />
    </div>
  );
}

function H2Federalofficialsconfheadline() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pr-[5.97px] relative self-stretch" data-name="h2#Federalofficialsconfheadline">
      <div className="min-h-[32px] flex flex-col justify-start relative shrink-0 w-[191px]" data-name="تحول دیجیتال در خدمات درمانی بریتانیا با استفاده از هوش مصنوعی">
        <a className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic text-[#141618] text-[13px] text-right w-full" href={articleUrl(d?.grid[2]?.href ?? null) ?? "#"}>
          <p className="cursor-pointer leading-[18px]" dir="auto">
            {d?.grid[2]?.title ?? "تحول دیجیتال در خدمات درمانی بریتانیا با استفاده از هوش مصنوعی"}
          </p>
        </a>
      </div>
    </div>
  );
}

function AZZygg2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="a.zZygg">
      <H2Federalofficialsconfheadline />
    </div>
  );
}

function FederalOfficialsConfirmMarineOneSafetyIncidentWhileTrumpOnBoard() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Federal officials confirm Marine One safety incident while Trump on board">
      <DivFederalofficialsconftags />
      <AZZygg2 />
    </div>
  );
}

function DivQghKv4() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative self-stretch shrink-0 w-[209.97px] z-[2]" data-name="div.QGHKv">
      <FederalOfficialsConfirmMarineOneSafetyIncidentWhileTrumpOnBoard />
    </div>
  );
}

function MarineOneTrumpGtyBh2608051785956524669HpMain16X9Jpg() {
  const d = useMobileHome();
  return (
    <div className="h-[85.52px] relative shrink-0 w-[152.03px]" data-name="Marine-one-trump-gty-bh-260805_1785956524669_hpMain_16x9.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt={d?.grid[2]?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.grid[2]?.imageUrl) ?? imgMarineOneTrumpGtyBh2608051785956524669HpMain16X9Jpg} />
      </div>
    </div>
  );
}

function DivFvQlf2() {
  return (
    <div className="content-stretch flex flex-col h-[85.52px] items-start justify-center relative shrink-0 w-full" data-name="div.FvQLF">
      <MarineOneTrumpGtyBh2608051785956524669HpMain16X9Jpg />
    </div>
  );
}

function DivGpQca2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf2 />
    </div>
  );
}

function FederalOfficialsConfirmMarineOneSafetyIncidentWhileTrumpOnBoard1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[152.0399932861328px] overflow-clip relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] self-stretch shrink-0 w-[152.03px] z-[1]" data-name="Federal officials confirm Marine One safety incident while Trump on board">
      <DivGpQca2 />
    </div>
  );
}

function DivLiAe2() {
  return (
    <div className="content-stretch flex isolate items-start relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivQghKv4 />
      <FederalOfficialsConfirmMarineOneSafetyIncidentWhileTrumpOnBoard1 />
    </div>
  );
}

function ANPLaK4() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="a.nPLaK">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#990108] text-[14px] text-right tracking-[-0.28px] w-[191px]">
        <p className="leading-[14px]" dir="auto">
          {d?.grid[3]?.category ?? "سلامت و درمان"}
        </p>
      </div>
    </div>
  );
}

function DivAlexMurdaughslawsuittags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[173.47px] relative shrink-0 w-[205.97px]" data-name="div#AlexMurdaughslawsuittags">
      <ANPLaK4 />
    </div>
  );
}

function H2AlexMurdaughslawsuitheadline() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pr-[6.81px] relative self-stretch" data-name="h2#AlexMurdaughslawsuitheadline">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141618] text-[13px] text-right w-[191px]">
        <p dir="auto">
          <a className="cursor-pointer leading-[18px]" href={articleUrl(d?.grid[3]?.href ?? null) ?? "#"}>
            {d?.grid[3]?.title ?? "برچسب هوشمند پایش لحظه ­ای استرس"}
          </a>
        </p>
      </div>
    </div>
  );
}

function AZZygg3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="a.zZygg">
      <H2AlexMurdaughslawsuitheadline />
    </div>
  );
}

function AlexMurdaughsLawsuitAgainstFormerClerkTossedByJudge() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Alex Murdaugh's lawsuit against former clerk tossed by judge">
      <DivAlexMurdaughslawsuittags />
      <AZZygg3 />
    </div>
  );
}

function DivQghKv5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative self-stretch shrink-0 w-[209.97px] z-[2]" data-name="div.QGHKv">
      <AlexMurdaughsLawsuitAgainstFormerClerkTossedByJudge />
    </div>
  );
}

function AlexMurdaugh2HtGmh2606291782748529819HpMain16X9Jpg() {
  const d = useMobileHome();
  return (
    <div className="h-[85.52px] relative shrink-0 w-[152.03px]" data-name="Alex-Murdaugh-2-ht-gmh-260629_1782748529819_hpMain_16x9.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt={d?.grid[3]?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.grid[3]?.imageUrl) ?? imgAlexMurdaugh2HtGmh2606291782748529819HpMain16X9Jpg} />
      </div>
    </div>
  );
}

function DivFvQlf3() {
  return (
    <div className="content-stretch flex flex-col h-[85.52px] items-start justify-center relative shrink-0 w-full" data-name="div.FvQLF">
      <AlexMurdaugh2HtGmh2606291782748529819HpMain16X9Jpg />
    </div>
  );
}

function DivGpQca3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf3 />
    </div>
  );
}

function AlexMurdaughsLawsuitAgainstFormerClerkTossedByJudge1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[152.0399932861328px] overflow-clip relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] self-stretch shrink-0 w-[152.03px] z-[1]" data-name="Alex Murdaugh's lawsuit against former clerk tossed by judge">
      <DivGpQca3 />
    </div>
  );
}

function DivLiAe3() {
  return (
    <div className="content-stretch flex isolate items-start relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivQghKv5 />
      <AlexMurdaughsLawsuitAgainstFormerClerkTossedByJudge1 />
    </div>
  );
}

function ANPLaK5() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[193px]" data-name="a.nPLaK">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#990108] text-[14px] text-right tracking-[-0.28px] w-[191px]">
        <p className="leading-[14px]" dir="auto">
          {d?.grid[4]?.category ?? "اقتصاددیجیتال"}
        </p>
      </div>
    </div>
  );
}

function DivInsideTrumpscontentitags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[154.64px] relative shrink-0 w-[205.97px]" data-name="div#InsideTrumpscontentitags">
      <ANPLaK5 />
    </div>
  );
}

function H2InsideTrumpscontentiheadline() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pr-[3.39px] relative self-stretch" data-name="h2#InsideTrumpscontentiheadline">
      <div className="min-h-[32px] flex flex-col justify-start relative shrink-0 w-[191px]">
        <a className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic text-[#141618] text-[13px] text-right w-full" href={articleUrl(d?.grid[4]?.href ?? null) ?? "#"}>
          <p className="cursor-pointer leading-[18px]" dir="auto">
            {d?.grid[4]?.title ?? "معماری جدید حکمرانی علم و فناوری کلید خورد"}
          </p>
        </a>
      </div>
    </div>
  );
}

function AZZygg4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="a.zZygg">
      <H2InsideTrumpscontentiheadline />
    </div>
  );
}

function InsideTrumpsContentiousOvalOfficeMeetingWithJeaninePirroSources() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Inside Trump's 'contentious' Oval Office meeting with Jeanine Pirro: Sources">
      <DivInsideTrumpscontentitags />
      <AZZygg4 />
    </div>
  );
}

function DivQghKv6() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative self-stretch shrink-0 w-[209.97px] z-[2]" data-name="div.QGHKv">
      <InsideTrumpsContentiousOvalOfficeMeetingWithJeaninePirroSources />
    </div>
  );
}

function Pirro1GtyGmh2608031785790335622HpMain16X9Jpg() {
  const d = useMobileHome();
  return (
    <div className="h-[85.52px] relative shrink-0 w-[152.03px]" data-name="pirro-1-gty-gmh-260803_1785790335622_hpMain_16x9.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt={d?.grid[4]?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.grid[4]?.imageUrl) ?? imgPirro1GtyGmh2608031785790335622HpMain16X9Jpg} />
      </div>
    </div>
  );
}

function DivFvQlf4() {
  return (
    <div className="content-stretch flex flex-col h-[85.52px] items-start justify-center relative shrink-0 w-full" data-name="div.FvQLF">
      <Pirro1GtyGmh2608031785790335622HpMain16X9Jpg />
    </div>
  );
}

function DivGpQca4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf4 />
    </div>
  );
}

function InsideTrumpsContentiousOvalOfficeMeetingWithJeaninePirroSources1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[152.0399932861328px] overflow-clip relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] self-stretch shrink-0 w-[152.03px] z-[1]" data-name="Inside Trump's 'contentious' Oval Office meeting with Jeanine Pirro: Sources">
      <DivGpQca4 />
    </div>
  );
}

function DivLiAe4() {
  return (
    <div className="content-stretch flex isolate items-start relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivQghKv6 />
      <InsideTrumpsContentiousOvalOfficeMeetingWithJeaninePirroSources1 />
    </div>
  );
}

function ANPLaK6() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[188px]" data-name="a.nPLaK">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#990108] text-[14px] text-right tracking-[-0.28px] w-[191px]">
        <p className="leading-[14px]" dir="auto">
          {d?.grid[5]?.category ?? "هوش مصنوعی"}
        </p>
      </div>
    </div>
  );
}

function DivAImodelsusedfakeIDsttags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[144.41px] relative shrink-0 w-[205.97px]" data-name="div#AImodelsusedfakeIDsttags">
      <ANPLaK6 />
    </div>
  );
}

function H2AImodelsusedfakeIDstheadline() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pr-[10.28px] relative self-stretch" data-name="h2#AImodelsusedfakeIDstheadline">
      <div className="min-h-[32px] flex flex-col justify-start relative shrink-0 w-[191px]">
        <a className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic text-[#141618] text-[13px] text-right w-full" href={articleUrl(d?.grid[5]?.href ?? null) ?? "#"}>
          <p className="cursor-pointer leading-[18px]" dir="auto">
            {d?.grid[5]?.title ?? "هوش مصنوعی برای پیشگیری از بیماری‌های مغزی"}
          </p>
        </a>
      </div>
    </div>
  );
}

function AZZygg5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="a.zZygg">
      <H2AImodelsusedfakeIDstheadline />
    </div>
  );
}

function AiModelsUsedFakeIDsToTrickHumansInLatestSafetyBreachOfficials() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="AI models used fake IDs to trick humans in latest safety breach: Officials">
      <DivAImodelsusedfakeIDsttags />
      <AZZygg5 />
    </div>
  );
}

function DivQghKv7() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative self-stretch shrink-0 w-[209.97px] z-[2]" data-name="div.QGHKv">
      <AiModelsUsedFakeIDsToTrickHumansInLatestSafetyBreachOfficials />
    </div>
  );
}

function AnthropicGtyJef2607311785503555591HpMain16X9Jpg() {
  const d = useMobileHome();
  return (
    <div className="h-[85.52px] relative shrink-0 w-[152.03px]" data-name="anthropic-gty-jef-260731_1785503555591_hpMain_16x9.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt={d?.grid[5]?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.grid[5]?.imageUrl) ?? imgAnthropicGtyJef2607311785503555591HpMain16X9Jpg} />
      </div>
    </div>
  );
}

function DivFvQlf5() {
  return (
    <div className="content-stretch flex flex-col h-[85.52px] items-start justify-center relative shrink-0 w-full" data-name="div.FvQLF">
      <AnthropicGtyJef2607311785503555591HpMain16X9Jpg />
    </div>
  );
}

function DivGpQca5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf5 />
    </div>
  );
}

function AiModelsUsedFakeIDsToTrickHumansInLatestSafetyBreachOfficials1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[152.0399932861328px] overflow-clip relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] self-stretch shrink-0 w-[152.03px] z-[1]" data-name="AI models used fake IDs to trick humans in latest safety breach: Officials">
      <DivGpQca5 />
    </div>
  );
}

function DivLiAe5() {
  return (
    <div className="content-stretch flex isolate items-start relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivQghKv7 />
      <AiModelsUsedFakeIDsToTrickHumansInLatestSafetyBreachOfficials1 />
    </div>
  );
}

function DivVztd() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="div.VZTD">
      <DivLiAe />
      <DivLiAe1 />
      <DivLiAe2 />
      <DivLiAe3 />
      <DivLiAe4 />
      <DivLiAe5 />
    </div>
  );
}

function DivSccwD() {
  return (
    <div className="bg-[#000e2c] content-stretch flex flex-col items-start px-[17px] py-[12px] relative shrink-0 w-full" data-name="div.sccwD">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-right text-white tracking-[-0.48px] w-full">
        <p className="leading-[18px] whitespace-pre-wrap" dir="auto">{`اخبار  برتر`}</p>
      </div>
    </div>
  );
}

const topStoryFallbacks = [
  "فناوری ویرایش ژن به دنبال حذف ریشه‌ای HIV از بدن انسان",
  "هوش مصنوعی در خدمت مقابله با تهدیدات زیستی",
  "بازار نرم‌افزارهای مدیریت کربن شتاب گرفت",
  "بالکن‌ها به نیروگاه‌های کوچک خورشیدی تبدیل می‌شوند",
  "هوش مصنوعی فرآیند توسعه دارو را متحول کرد",
  "دانش‌بنیان‌ها؛ حلقه مفقوده بهره‌وری در اقتصاد ایران",
  "معماری جدید حکمرانی علم و فناوری کلید خورد",
  "سامسونگ وارد عصر ربات‌ها شد",
];

function UlINlEx() {
  const d = useMobileHome();
  const rows = d?.top.length ? d.top : topStoryFallbacks;
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[16px] relative w-[362px]" dir="rtl" data-name="ul.iNlEX">
        {rows.map((row, index) => {
          return (
            <div
              className={`content-stretch flex items-start gap-[10px] py-[14px] relative shrink-0 w-full ${index < rows.length - 1 ? "border-b border-[#cbced4]" : ""}`}
              key={typeof row === "string" ? row : row.id}
            >
              <span className="mt-[6px] size-[5px] rounded-full bg-[#990108] shrink-0" />
              <a
                className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic min-w-0 flex-1 text-[#141618] text-[13px] text-right"
                href={articleUrl(typeof row === "string" ? null : row.href) ?? "#"}
              >
                <p className="cursor-pointer leading-[18px]" dir="auto">
                  {typeof row === "string" ? row : row.title}
                </p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DivRUrN() {
  return (
    <div className="bg-[#f4f5f6] content-stretch flex flex-col items-start overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.rUrN">
      <DivSccwD />
      <UlINlEx />
    </div>
  );
}

function DivGerEc() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] min-h-[1065px] items-start pb-[12px] pt-[24px] px-[14px] relative shrink-0 w-full" data-name="div.GerEc">
      <DivVztd />
      <DivRUrN />
    </div>
  );
}

function Frame2() {
  return <div className="relative shrink-0 size-[14px]" data-name="Frame" />;
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_71)" id="Frame">
          <g id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_71">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return <div className="relative shrink-0 size-[14px]" data-name="Frame" />;
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_46)" id="Frame">
          <g id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_46">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame6() {
  return <div className="relative shrink-0 size-[14px]" data-name="Frame" />;
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_40)" id="Frame">
          <g id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_40">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame8() {
  return <div className="relative shrink-0 size-[14px]" data-name="Frame" />;
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_64)" id="Frame">
          <g id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_64">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="flex-none rotate-180">
        <div className="h-[14px] relative w-[96px]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 96 14" width="96">
            <g clipPath="url(#clip0_0_38)" id="Frame">
              <g id="Vector" />
            </g>
            <defs>
              <clipPath id="clip0_0_38">
                <rect fill="white" height="14" width="96" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function H3MgPEn() {
  return (
    <div className="content-stretch flex gap-[7px] items-center pl-px relative self-stretch shrink-0 w-[361px]" data-name="h3.MgPEn">
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="h-[13.541px] relative w-[14.033px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="13.5406" preserveAspectRatio="none" viewBox="0 0 14.0328 13.5406" width="14.0328">
              <path d={svgPaths.p24bd0600} fill="white" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] ml-[5px] not-italic relative shrink-0 text-[20.3px] text-right text-white tracking-[-0.66px] w-[64px] whitespace-nowrap">
        <p className="leading-[24px]" dir="auto">
          ویدیو
        </p>
      </div>
    </div>
  );
}

function AOVmsz() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[5px] relative shrink-0" data-name="a.oVMSZ">
      <H3MgPEn />
    </div>
  );
}

function DivVztd2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="div.VZTD">
      <AOVmsz />
    </div>
  );
}

function DivVztd1() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-full" data-name="div.VZTD">
      <DivVztd2 />
    </div>
  );
}

function Span1() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cbced4] text-[14px] tracking-[-0.28px] whitespace-nowrap">
        <p className="leading-[14px]">{d ? ` ${d.videos.length} Videos` : ` 4 Videos`}</p>
      </div>
    </div>
  );
}

function DivPaginationText() {
  return (
    <div className="absolute border-[#515662] border-b border-solid content-stretch flex items-center left-0 pb-[12px] pt-[8px] right-0 top-[319px]" data-name="div.PaginationText">
      <Span1 />
    </div>
  );
}

function ANPLaK7() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="a.nPLaK">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#548aff] text-[13.3px] text-right tracking-[-0.28px] w-[173px]">
        <p className="leading-[14px]" dir="auto">
          {d?.videos[0]?.category ?? "میکرو الکترونیک"}
        </p>
      </div>
    </div>
  );
}

function DivTedLassoseason4Carditags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[32.15px] relative shrink-0 w-[205.97px]" data-name="div#TedLassoseason4Carditags">
      <ANPLaK7 />
    </div>
  );
}

function H2TedLassoseason4Cardiheadline() {
  const d = useMobileHome();
  return (
    <div className="h-[48.28px] overflow-clip relative shrink-0 w-full" data-name="h2#TedLassoseason4Cardiheadline">
      <a className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[12.9px] text-right text-white w-[173.82px]" href={articleUrl(d?.videos[0]?.href ?? null) ?? "#"}>
        <p className="cursor-pointer leading-[18.4px]" dir="auto">
          {d?.videos[0]?.title ?? "انقلاب نوری در دنیای تراشه‌ها؛ دانشمندان مسیر حرکت الکترون‌ها را با لیزر کنترل کردند"}
        </p>
      </a>
    </div>
  );
}

function DivCjafl10() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.CJAFL">
      <DivTedLassoseason4Carditags />
      <H2TedLassoseason4Cardiheadline />
    </div>
  );
}

function DivQghKv16() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[11.24px] pl-[12px] pt-[8px] relative self-stretch shrink-0 w-[209.97px] z-[2]" data-name="div.QGHKv">
      <DivCjafl10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Frame">
          <path d={svgPaths.p3a348330} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivBfEpE() {
  const d = useMobileHome();
  return (
    <div className="bg-[rgba(0,0,0,0.75)] content-stretch flex gap-[2px] items-center justify-center pb-[4.5px] pt-[3.5px] px-[4px] relative rounded-[4px] self-stretch shrink-0" data-name="div.BFEpE">
      <Frame11 />
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.28px] whitespace-nowrap">
        <p className="leading-[14px]">{d?.videos[0]?.videoDuration ?? "9:17"}</p>
      </div>
    </div>
  );
}

function DivJrFcb() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="div.jrFcb">
      <DivBfEpE />
    </div>
  );
}

function DivVztd4() {
  return (
    <div className="absolute content-stretch flex inset-[31.27px_76.01px_8.48px_8px] items-end" data-name="div.VZTD">
      <DivJrFcb />
    </div>
  );
}

function Component260805Abcnlp430VibeCheckHpMain16X9Jpg() {
  const d = useMobileHome();
  return (
    <div className="absolute aspect-[152.02999877929688/85.5199966430664] bottom-0 left-0 overflow-clip top-0" data-name="260805_abcnlp_430_vibe_check_hpMain_16x9.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img260805Abcnlp430VibeCheckHpMain16X9Jpg} />
      </div>
      <div className="absolute h-[86px] left-[0.03px] top-[-0.26px] w-[152px]" data-name="image 4">
        {d?.videos[0]?.isUploadedVideo ? (
          <AutoPlayVideo post={d.videos[0]} />
        ) : (
          <img alt={d?.videos[0]?.imageAlt ?? ""} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={absoluteAsset(d?.videos[0]?.imageUrl) ?? imgImage4} />
        )}
      </div>
      <DivVztd4 />
    </div>
  );
}

function DivFvQlf6() {
  return (
    <div className="h-[85.52px] relative shrink-0 w-full" data-name="div.FvQLF">
      <Component260805Abcnlp430VibeCheckHpMain16X9Jpg />
    </div>
  );
}

function DivGpQca6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf6 />
    </div>
  );
}

function DivHsDdd() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[152.0399932861328px] overflow-clip relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] self-stretch shrink-0 w-[152.03px] z-[1]" data-name="div.hsDdd">
      <DivGpQca6 />
    </div>
  );
}

function DivLiAe6() {
  return (
    <div className="content-stretch flex isolate items-start pb-[16px] relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivQghKv16 />
      <DivHsDdd />
    </div>
  );
}

function ANPLaK8() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="a.nPLaK">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#548aff] text-[13.3px] text-right tracking-[-0.28px] w-[175px]">
        <p className="leading-[14px]" dir="auto">
          {d?.videos[1]?.category ?? "سلامت و درمان"}
        </p>
      </div>
    </div>
  );
}

function DivDoeslooksmaxxingworktags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[31.97px] relative shrink-0 w-[205.97px]" data-name="div#Doeslooksmaxxingworktags">
      <ANPLaK8 />
    </div>
  );
}

function H2Doeslooksmaxxingworkheadline() {
  const d = useMobileHome();
  return (
    <div className="h-[37px] overflow-clip relative shrink-0 w-full" data-name="h2#Doeslooksmaxxingworkheadline">
      <a className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[13px] text-right text-white w-[174px]" href={articleUrl(d?.videos[1]?.href ?? null) ?? "#"}>
        <p className="cursor-pointer leading-[18.4px]" dir="auto">
          {d?.videos[1]?.title ?? "از اسکن قرنیه تا شخصی سازی لنز در ۲۰ دقیقه"}
        </p>
      </a>
    </div>
  );
}

function DivCjafl11() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.CJAFL">
      <DivDoeslooksmaxxingworktags />
      <H2Doeslooksmaxxingworkheadline />
    </div>
  );
}

function DivQghKv17() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[27.33px] pl-[12px] pt-[8px] relative self-stretch shrink-0 w-[209.97px] z-[2]" data-name="div.QGHKv">
      <DivCjafl11 />
    </div>
  );
}

function Component260805Abcnlp430SpiralHpMain16X9Jpg() {
  const d = useMobileHome();
  return (
    <div className="absolute aspect-[152.02999877929688/85.5199966430664] bottom-0 left-0 top-0" data-name="260805_abcnlp_430_spiral_hpMain_16x9.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {d?.videos[1]?.isUploadedVideo ? (
          <AutoPlayVideo post={d.videos[1]} />
        ) : (
          <img alt={d?.videos[1]?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.videos[1]?.imageUrl) ?? img260805Abcnlp430SpiralHpMain16X9Jpg} />
        )}
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Frame">
          <path d={svgPaths.p3a348330} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivBfEpE1() {
  const d = useMobileHome();
  return (
    <div className="bg-[rgba(0,0,0,0.75)] content-stretch flex gap-[2px] items-center justify-center pb-[4.5px] pt-[3.5px] px-[4px] relative rounded-[4px] self-stretch shrink-0" data-name="div.BFEpE">
      <Frame12 />
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.28px] whitespace-nowrap">
        <p className="leading-[14px]">{d?.videos[1]?.videoDuration ?? "9:17"}</p>
      </div>
    </div>
  );
}

function DivJrFcb1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="div.jrFcb">
      <DivBfEpE1 />
    </div>
  );
}

function DivVztd5() {
  return (
    <div className="col-1 content-stretch flex items-end justify-self-stretch relative row-2 self-stretch shrink-0" data-name="div.VZTD">
      <DivJrFcb1 />
    </div>
  );
}

function DivDoeslooksmaxxingworkindicators() {
  return (
    <div className="absolute grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__23.75px_45.77px] inset-0 p-[8px]" data-name="div#Doeslooksmaxxingworkindicators">
      <DivVztd5 />
    </div>
  );
}

function DivFvQlf7() {
  return (
    <div className="h-[85.52px] relative shrink-0 w-full" data-name="div.FvQLF">
      <Component260805Abcnlp430SpiralHpMain16X9Jpg />
      <DivDoeslooksmaxxingworkindicators />
    </div>
  );
}

function DivGpQca7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf7 />
    </div>
  );
}

function DivHsDdd1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[152.0399932861328px] overflow-clip relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] self-stretch shrink-0 w-[152.03px] z-[1]" data-name="div.hsDdd">
      <DivGpQca7 />
    </div>
  );
}

function DivLiAe7() {
  return (
    <div className="content-stretch flex isolate items-start pb-[16px] relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivQghKv17 />
      <DivHsDdd1 />
    </div>
  );
}

function ANPLaK9() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="a.nPLaK">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#548aff] text-[14px] text-right tracking-[-0.28px] w-[173px]">
        <p className="leading-[14px]" dir="auto">
          {d?.videos[2]?.category ?? "انرژی"}
        </p>
      </div>
    </div>
  );
}

function DivYeonjunperformsGguMotags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[31.06px] relative shrink-0 w-[205.97px]" data-name="div#YeonjunperformsGGUMotags">
      <ANPLaK9 />
    </div>
  );
}

function H2YeonjunperformsGguMoheadline() {
  const d = useMobileHome();
  return (
    <div className="h-[37px] overflow-clip relative shrink-0 w-full" data-name="h2#YeonjunperformsGGUMoheadline">
      <a className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[13.2px] text-right text-white w-[174.91px]" href={articleUrl(d?.videos[2]?.href ?? null) ?? "#"}>
        <p className="cursor-pointer leading-[18.4px]" dir="auto">
          {d?.videos[2]?.title ?? "بازار نرم‌افزارهای مدیریت کربن شتاب گرفت"}
        </p>
      </a>
    </div>
  );
}

function DivCjafl12() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.CJAFL">
      <DivYeonjunperformsGguMotags />
      <H2YeonjunperformsGguMoheadline />
    </div>
  );
}

function DivQghKv18() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[27.33px] pl-[12px] pt-[8px] relative self-stretch shrink-0 w-[209.97px] z-[2]" data-name="div.QGHKv">
      <DivCjafl12 />
    </div>
  );
}

function Component260805Gma3Yeonjun1HpMain16X9Jpg() {
  const d = useMobileHome();
  return (
    <div className="absolute aspect-[152.02999877929688/85.5199966430664] bottom-0 left-0 top-0" data-name="260805_gma3_yeonjun1_hpMain_16x9.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {d?.videos[2]?.isUploadedVideo ? (
          <AutoPlayVideo post={d.videos[2]} />
        ) : (
          <img alt={d?.videos[2]?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.videos[2]?.imageUrl) ?? img260805Gma3Yeonjun1HpMain16X9Jpg} />
        )}
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Frame">
          <path d={svgPaths.p3a348330} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DivBfEpE2() {
  const d = useMobileHome();
  return (
    <div className="bg-[rgba(0,0,0,0.75)] content-stretch flex gap-[2px] items-center justify-center pb-[4.5px] pt-[3.5px] px-[4px] relative rounded-[4px] self-stretch shrink-0" data-name="div.BFEpE">
      <Frame13 />
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.28px] whitespace-nowrap">
        <p className="leading-[14px]">{d?.videos[2]?.videoDuration ?? "2:56"}</p>
      </div>
    </div>
  );
}

function DivJrFcb2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="div.jrFcb">
      <DivBfEpE2 />
    </div>
  );
}

function DivVztd6() {
  return (
    <div className="col-1 content-stretch flex items-end justify-self-stretch relative row-2 self-stretch shrink-0" data-name="div.VZTD">
      <DivJrFcb2 />
    </div>
  );
}

function DivYeonjunperformsGguMoindicators() {
  return (
    <div className="absolute grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__23.75px_45.77px] inset-0 p-[8px]" data-name="div#YeonjunperformsGGUMoindicators">
      <DivVztd6 />
    </div>
  );
}

function DivFvQlf8() {
  return (
    <div className="h-[85.52px] relative shrink-0 w-full" data-name="div.FvQLF">
      <Component260805Gma3Yeonjun1HpMain16X9Jpg />
      <DivYeonjunperformsGguMoindicators />
    </div>
  );
}

function DivGpQca8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf8 />
    </div>
  );
}

function DivHsDdd2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[152.0399932861328px] overflow-clip relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] self-stretch shrink-0 w-[152.03px] z-[1]" data-name="div.hsDdd">
      <DivGpQca8 />
    </div>
  );
}

function DivLiAe8() {
  return (
    <div className="content-stretch flex isolate items-start pb-[16px] relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivQghKv18 />
      <DivHsDdd2 />
    </div>
  );
}

function Div1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start" data-name="div">
      <DivLiAe6 />
      <DivLiAe7 />
      <DivLiAe8 />
    </div>
  );
}

function DivHsDdd3() {
  return <div className="max-w-[152.0399932861328px] relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] self-stretch shrink-0 w-[152.03px] z-[2]" data-name="div.hsDdd" />;
}

function DivMomsaysshewasgivendatags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[173.47px] relative shrink-0 w-full" data-name="div#Momsaysshewasgivendatags">
      <div className="h-[14px] relative shrink-0 w-[24.5px]" data-name="a.nPLaK" />
    </div>
  );
}

function DivQghKv19() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[59.52px] pl-[4px] pt-[8px] relative self-stretch shrink-0 w-[209.97px] z-[1]" data-name="div.QGHKv">
      <DivMomsaysshewasgivendatags />
    </div>
  );
}

function DivLiAe9() {
  return (
    <div className="content-stretch flex isolate items-start pb-[16px] relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivHsDdd3 />
      <DivQghKv19 />
    </div>
  );
}

function DivHsDdd4() {
  return <div className="max-w-[152.0399932861328px] relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] self-stretch shrink-0 w-[152.03px] z-[2]" data-name="div.hsDdd" />;
}

function DivTigersharksspottedoftags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[167px] relative shrink-0 w-full" data-name="div#Tigersharksspottedoftags">
      <div className="h-[14px] relative shrink-0 w-[30.97px]" data-name="a.nPLaK" />
    </div>
  );
}

function DivQghKv20() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[59.52px] pl-[4px] pt-[8px] relative self-stretch shrink-0 w-[209.97px] z-[1]" data-name="div.QGHKv">
      <DivTigersharksspottedoftags />
    </div>
  );
}

function DivLiAe10() {
  return (
    <div className="content-stretch flex isolate items-start pb-[16px] relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivHsDdd4 />
      <DivQghKv20 />
    </div>
  );
}

function DivHsDdd5() {
  return <div className="max-w-[152.0399932861328px] relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] self-stretch shrink-0 w-[152.03px] z-[2]" data-name="div.hsDdd" />;
}

function DivDavidMuirsharesNorthtags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[167.69px] relative shrink-0 w-full" data-name="div#DavidMuirsharesNorthtags">
      <div className="h-[14px] relative shrink-0 w-[30.28px]" data-name="a.nPLaK" />
    </div>
  );
}

function DivQghKv21() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[59.52px] pl-[4px] pt-[8px] relative self-stretch shrink-0 w-[209.97px] z-[1]" data-name="div.QGHKv">
      <DivDavidMuirsharesNorthtags />
    </div>
  );
}

function DivLiAe11() {
  return (
    <div className="content-stretch flex isolate items-start pb-[16px] relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivHsDdd5 />
      <DivQghKv21 />
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_-362px_0_362px] items-start" data-name="div">
      <DivLiAe9 />
      <DivLiAe10 />
      <DivLiAe11 />
    </div>
  );
}

function DivHsDdd6() {
  return <div className="max-w-[152.0399932861328px] relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] self-stretch shrink-0 w-[152.03px] z-[2]" data-name="div.hsDdd" />;
}

function DivPowerballjackpotconttags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[167px] relative shrink-0 w-full" data-name="div#Powerballjackpotconttags">
      <div className="h-[14px] relative shrink-0 w-[30.97px]" data-name="a.nPLaK" />
    </div>
  );
}

function DivQghKv22() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[59.52px] pl-[4px] pt-[8px] relative self-stretch shrink-0 w-[209.97px] z-[1]" data-name="div.QGHKv">
      <DivPowerballjackpotconttags />
    </div>
  );
}

function DivLiAe12() {
  return (
    <div className="content-stretch flex isolate items-start pb-[16px] relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivHsDdd6 />
      <DivQghKv22 />
    </div>
  );
}

function DivHsDdd7() {
  return <div className="max-w-[152.0399932861328px] relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] self-stretch shrink-0 w-[152.03px] z-[2]" data-name="div.hsDdd" />;
}

function Div83NeighborsbringHalltags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[173.47px] relative shrink-0 w-full" data-name="div#83neighborsbringHalltags">
      <div className="h-[14px] relative shrink-0 w-[24.5px]" data-name="a.nPLaK" />
    </div>
  );
}

function DivQghKv23() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[59.52px] pl-[4px] pt-[8px] relative self-stretch shrink-0 w-[209.97px] z-[1]" data-name="div.QGHKv">
      <Div83NeighborsbringHalltags />
    </div>
  );
}

function DivLiAe13() {
  return (
    <div className="content-stretch flex isolate items-start pb-[16px] relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivHsDdd7 />
      <DivQghKv23 />
    </div>
  );
}

function DivHsDdd8() {
  return <div className="max-w-[152.0399932861328px] relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] self-stretch shrink-0 w-[152.03px] z-[2]" data-name="div.hsDdd" />;
}

function DivBisonchargesatchilditags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[167px] relative shrink-0 w-full" data-name="div#Bisonchargesatchilditags">
      <div className="h-[14px] relative shrink-0 w-[30.97px]" data-name="a.nPLaK" />
    </div>
  );
}

function DivQghKv24() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[59.52px] pl-[4px] pt-[8px] relative self-stretch shrink-0 w-[209.97px] z-[1]" data-name="div.QGHKv">
      <DivBisonchargesatchilditags />
    </div>
  );
}

function DivLiAe14() {
  return (
    <div className="content-stretch flex isolate items-start pb-[16px] relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivHsDdd8 />
      <DivQghKv24 />
    </div>
  );
}

function Div3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_-724px_0_724px] items-start" data-name="div">
      <DivLiAe12 />
      <DivLiAe13 />
      <DivLiAe14 />
    </div>
  );
}

function DivHsDdd9() {
  return <div className="max-w-[152.0399932861328px] relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] self-stretch shrink-0 w-[152.03px] z-[2]" data-name="div.hsDdd" />;
}

function DivTigersharkcaughtinNetags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[173.47px] relative shrink-0 w-full" data-name="div#TigersharkcaughtinNetags">
      <div className="h-[14px] relative shrink-0 w-[24.5px]" data-name="a.nPLaK" />
    </div>
  );
}

function DivQghKv25() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[59.52px] pl-[4px] pt-[8px] relative self-stretch shrink-0 w-[209.97px] z-[1]" data-name="div.QGHKv">
      <DivTigersharkcaughtinNetags />
    </div>
  );
}

function DivLiAe15() {
  return (
    <div className="content-stretch flex isolate items-start pb-[16px] relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivHsDdd9 />
      <DivQghKv25 />
    </div>
  );
}

function DivHsDdd10() {
  return <div className="max-w-[152.0399932861328px] relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] self-stretch shrink-0 w-[152.03px] z-[2]" data-name="div.hsDdd" />;
}

function DivSmallplanemakesemergtags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[167.69px] relative shrink-0 w-full" data-name="div#Smallplanemakesemergtags">
      <div className="h-[14px] relative shrink-0 w-[30.28px]" data-name="a.nPLaK" />
    </div>
  );
}

function DivQghKv26() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[59.52px] pl-[4px] pt-[8px] relative self-stretch shrink-0 w-[209.97px] z-[1]" data-name="div.QGHKv">
      <DivSmallplanemakesemergtags />
    </div>
  );
}

function DivLiAe16() {
  return (
    <div className="content-stretch flex isolate items-start pb-[16px] relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivHsDdd10 />
      <DivQghKv26 />
    </div>
  );
}

function Div4() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_-1086px_0_1086px] items-start" data-name="div">
      <DivLiAe15 />
      <DivLiAe16 />
    </div>
  );
}

function BoxVideoRow({ index }: { index: number }) {
  const d = useMobileHome();
  const v = d?.videos[index + 1];
  return (
    <div className="content-stretch flex items-start gap-[12px] pb-[16px] relative shrink-0 w-full" data-name="div.liAe">
      <div className="content-stretch flex flex-col items-start pl-[12px] pt-[8px] relative self-stretch shrink-0 w-[209.97px] z-[2]" data-name="div.QGHKv">
        <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div.CJAFL">
          <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[32.15px] relative shrink-0 w-[205.97px]" data-name="div.tags">
            <div className="content-stretch flex items-start relative shrink-0" data-name="a.nPLaK">
              <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#548aff] text-[13.3px] text-right tracking-[-0.28px] w-[173px]">
                <p className="leading-[14px]" dir="auto">
                  {v?.category ?? ""}
                </p>
              </div>
            </div>
          </div>
          <div className="h-[48.28px] overflow-clip relative shrink-0 w-full" data-name="h2.headline">
            <a
              className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic relative text-[12.9px] text-right text-white w-[173.82px]"
              href={articleUrl(v?.href ?? null) ?? "#"}
            >
              <p className="cursor-pointer leading-[18.4px]" dir="auto">
                {v?.title ?? ""}
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[152.0399932861328px] relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] self-stretch shrink-0 w-[152.03px] z-[1]" data-name="div.hsDdd">
        <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
          <div className="h-[85.52px] relative shrink-0 w-full" data-name="div.FvQLF">
            <div className="absolute aspect-[152.02999877929688/85.5199966430664] bottom-0 left-0 overflow-clip top-0" data-name="thumb">
<div className="absolute h-[86px] left-[0.03px] top-[-0.26px] w-[152px]" data-name="image">
        {v?.isUploadedVideo ? (
          <AutoPlayVideo post={v} />
        ) : (
          <img alt={v?.imageAlt ?? ""} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={absoluteAsset(v?.imageUrl) ?? imgImage4} />
        )}
      </div>
              <div className="absolute content-stretch flex inset-[31.27px_76.01px_8.48px_8px] items-end" data-name="div.VZTD">
                <div className="content-stretch flex items-start relative shrink-0" data-name="div.jrFcb">
                  <div className="bg-[rgba(0,0,0,0.75)] content-stretch flex gap-[2px] items-center justify-center pb-[4.5px] pt-[3.5px] px-[4px] relative rounded-[4px] self-stretch shrink-0" data-name="div.BFEpE">
                    <Frame11 />
                    <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.28px] whitespace-nowrap">
                      <p className="leading-[14px]">{v?.videoDuration ?? ""}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivVztd3() {
  return (
    <div className="h-[322px] relative shrink-0 w-full z-[2]" data-name="div.VZTD">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="div.list">
        <BoxVideoRow index={0} />
        <BoxVideoRow index={1} />
        <BoxVideoRow index={2} />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[18px]">
      <div className="-rotate-90 flex-none">
        <div className="relative size-[18px]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
            <g id="Frame">
              <path d={svgPaths.p3faaf080} fill="#22252A" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonHyWka() {
  return (
    <div className="border border-[#22252a] border-solid content-stretch flex flex-col items-center justify-center p-[6px] relative rounded-[16px] shrink-0 size-[32px]" data-name="button.hyWKA">
      <Frame14 />
    </div>
  );
}

function DivVztd8() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="div.VZTD">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[8px]" data-name="Go to view 1" />
      <div className="bg-[#515662] relative rounded-[3px] shrink-0 size-[6px]" data-name="Go to view 2" />
      <div className="bg-[#515662] relative rounded-[3px] shrink-0 size-[6px]" data-name="Go to view 3" />
      <div className="bg-[#515662] relative rounded-[3px] shrink-0 size-[6px]" data-name="Go to view 4" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[18px]">
      <div className="-rotate-90 flex-none">
        <div className="relative size-[18px]" data-name="Frame">
          <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
            <g id="Frame">
              <path d={svgPaths.p3574a100} fill="white" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonHyWka1() {
  return (
    <div className="border border-[#22252a] border-solid content-stretch flex flex-col items-center justify-center p-[6px] relative rounded-[16px] shrink-0 size-[32px]" data-name="button.hyWKA">
      <Frame15 />
    </div>
  );
}

function DivVztd7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-w-px relative self-stretch" data-name="div.VZTD">
      <ButtonHyWka />
      <DivVztd8 />
      <ButtonHyWka1 />
    </div>
  );
}

function DivPaginationContent() {
  return (
    <div className="content-stretch flex items-start pt-[4px] relative shrink-0 w-full z-[1]" data-name="div.PaginationContent">
      <DivVztd7 />
    </div>
  );
}

function Div() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-start left-0 right-0 top-[374px]" data-name="div">
      <DivVztd3 />
    </div>
  );
}

function DivImageWrapper1() {
  const d = useMobileHome();
  return (
    <div className="h-[203.63px] relative shrink-0 w-full" data-name="div.Image__Wrapper" onClick={() => { const href = articleUrl(d?.videos[0]?.href ?? null); if (href) window.location.href = href; }}>
      <div className="absolute h-[204px] left-0 top-[0.07px] w-[362px]" data-name="image 2">
        {d?.videos[0]?.isUploadedVideo ? (
          <AutoPlayVideo post={d.videos[0]} />
        ) : (
          <img alt={d?.videos[0]?.imageAlt ?? ""} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={absoluteAsset(d?.videos[0]?.imageUrl) ?? imgImage2} />
        )}
      </div>
    </div>
  );
}

function FigureImage1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="figure.Image">
      <DivImageWrapper1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-w-px overflow-clip relative" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g clipPath="url(#clip0_0_29)" id="icon__controls__play">
          <path d={svgPaths.p1fff1c00} fill="white" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_29">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PlayVideo1() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(20,22,24,0.75)] content-stretch flex items-center justify-center pl-[20.39px] pr-[15.61px] relative rounded-[60px] shrink-0 size-[60px]" data-name="Play video">
      <Frame16 />
    </div>
  );
}

function DivMediaPlaceholderOverlay1() {
  const d = useMobileHome();
  if (d?.videos[0]?.isUploadedVideo) return null;
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="div.MediaPlaceholder__Overlay">
      <PlayVideo1 />
    </div>
  );
}

function Video1() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[6px] shrink-0 w-full" data-name="Video">
      <FigureImage1 />
      <DivMediaPlaceholderOverlay1 />
    </div>
  );
}

function Frame17() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#548aff] text-[13.3px] text-right tracking-[-0.24px] w-full">
        <p className="leading-[18px]" dir="auto">
          {d?.videos[0]?.category ?? "میکرو الکترونیک"}
        </p>
      </div>
    </div>
  );
}

function ANPLaK10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="a.nPLaK">
      <Frame17 />
    </div>
  );
}

function DivTedLassoseason4Carditags1() {
  return (
    <div className="flex flex-wrap items-center justify-end pb-[4px] pl-[8px] pr-[22px] relative shrink-0 w-full" data-name="div#TedLassoseason4Carditags">
      <ANPLaK10 />
    </div>
  );
}

function H3TedLassoseason4Cardiheadline() {
  const d = useMobileHome();
  return (
    <div className="h-[51px] overflow-clip relative shrink-0 w-[362px]" data-name="h3#TedLassoseason4Cardiheadline">
      <div className="-translate-x-full [word-break:break-word] absolute flex flex-col font-['IRANSansX:Bold',sans-serif] h-[51px] justify-start leading-[0] left-[340px] not-italic text-[16.7px] text-right text-white top-0 w-[328px]">
        <p className="leading-[25.3px]" dir="auto">
          <a className="cursor-pointer" href={articleUrl(d?.videos[0]?.href ?? null) ?? "#"}>
            {d?.videos[0]?.title ?? "انقلاب نوری در دنیای تراشه‌ها؛ دانشمندان مسیر حرکت الکترون‌ها را با لیزر کنترل کردند"}
          </a>
        </p>
      </div>
    </div>
  );
}

function DivCjafl13() {
  return (
    <div className="content-stretch flex flex-col h-[73px] items-end relative shrink-0" data-name="div.CJAFL">
      <DivTedLassoseason4Carditags1 />
      <H3TedLassoseason4Cardiheadline />
    </div>
  );
}

function DivVztd9() {
  return (
    <div className="content-stretch flex flex-col h-[120px] items-start py-[24px] relative shrink-0 w-full" data-name="div.VZTD">
      <DivCjafl13 />
    </div>
  );
}

function DivLiAe17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 right-0 rounded-[6px] top-0" data-name="div.liAe">
      <Video1 />
      <DivVztd9 />
    </div>
  );
}

function DivBlockSingleColumn() {
  return (
    <div className="h-[714.55px] relative shrink-0 w-full" data-name="div.block__single-column">
      <DivPaginationText />
      <Div />
      <DivLiAe17 />
    </div>
  );
}

function DivLfXjE() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="div.LfXjE">
      <DivVztd1 />
      <DivBlockSingleColumn />
    </div>
  );
}

function DivGerEc1() {
  return (
    <div className="bg-[#000e2c] content-stretch flex flex-col items-start pb-[32px] pt-[36px] px-[14px] relative shrink-0 w-full" data-name="div.GerEc">
      <DivLfXjE />
    </div>
  );
}

function Component() {
  const d = useMobileHome();
  return (
    <div className="h-[436px] relative bg-white shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.35)] shrink-0 w-[291px]" data-name="تست" onClick={() => { const href = articleUrl(d?.magazine[0]?.href ?? null); if (href) window.location.href = href; }}>
      <img alt={d?.magazine[0]?.imageAlt ?? ""} className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={absoluteAsset(d?.magazine[0]?.imageUrl) ?? img} />
    </div>
  );
}

function ABlock() {
  return (
    <div className="content-stretch flex flex-col h-[436px] items-start relative shrink-0 w-[291px]" data-name="a.block">
      <Component />
    </div>
  );
}

function DivFlex() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="div.flex">
      <ABlock />
    </div>
  );
}

function SpanTextZinc1() {
  return (
    <div className="[word-break:break-word] font-['IRANSansX:Bold',sans-serif] h-[16.5px] leading-[0] not-italic relative shrink-0 tracking-[1.98px] uppercase w-[60.42px]" data-name="span.text-zinc-500">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center right-[212px] text-[#71717b] text-[14px] top-[7.44px] translate-x-full w-[212px]">
        <p className="leading-[16.5px]" dir="auto">
          MONTHLY EDITION
        </p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[26px] justify-center right-[56px] text-[11px] text-black text-right top-[5.94px] w-[4px]">
        <p className="leading-[16.5px]">|</p>
      </div>
    </div>
  );
}

function SpanTextZinc() {
  return <div className="h-[17px] relative shrink-0 w-[8px]" data-name="span.text-zinc-400" />;
}

function Span2() {
  return (
    <div className="h-[17px] relative shrink-0 w-[52px]" data-name="span">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic right-[127px] text-[#27272a] text-[11px] top-[7.69px] tracking-[1.98px] translate-x-full uppercase w-[144px]">
        <p className="leading-[16.5px]" dir="auto">
          AUGUST 2026
        </p>
      </div>
    </div>
  );
}

function DivFlex1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pl-[170.58px] relative shrink-0 w-[318px]" data-name="div.flex">
      <SpanTextZinc1 />
      <SpanTextZinc />
      <Span2 />
    </div>
  );
}

function H2Text3Xl() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="h2.text-3xl" onClick={() => { const href = articleUrl(d?.magazine[0]?.href ?? null); if (href) window.location.href = href; }}>
      <div className="[word-break:break-word] flex flex-col font-['IRANYekanX:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[30px] text-center w-[318px]">
        <p className="leading-[37.5px]" dir="auto">
          {d?.magazine[0]?.title ?? "تاب آوری"}
        </p>
      </div>
    </div>
  );
}

function H3FontBold() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="h3.font-bold">
      <a className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[16px] text-right" href={articleUrl(d?.magazine[1]?.href ?? null) ?? "#"}>
        <p className="cursor-pointer leading-[22px]" dir="auto">
          {d?.magazine[1]?.title ?? "کشاورزی هوشمند برای تولید بیشتر با منابع کمتر"}
        </p>
      </a>
    </div>
  );
}

function PTextSm() {
  const d = useMobileHome();
  return (
    <div className="min-h-[45.5px] relative shrink-0 w-full" data-name="p.text-sm">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Regular',sans-serif] justify-center leading-[0] not-italic text-[#52525c] text-[14px] text-right w-full">
        <p className="leading-[22.75px]" dir="auto">
          {d?.magazine[1]?.lead ??
            "گرمایش زمین، افزایش هزینه‌های کشاورزی و کاهش بهره‌وری محصولات، تولید غذا را به یکی از چالش‌های بزرگ جهان تبدیل کرده است"}
        </p>
      </div>
    </div>
  );
}

function AGroup() {
  return (
    <div className="border-[#e3dfd6] border-solid border-t content-stretch flex flex-col gap-[6px] items-start py-[16px] relative shrink-0 w-full" data-name="a.group">
      <H3FontBold />
      <PTextSm />
    </div>
  );
}

function H3FontBold1() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="h3.font-bold">
      <a className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[16px] text-right" href={articleUrl(d?.magazine[2]?.href ?? null) ?? "#"}>
        <p className="cursor-pointer leading-[22px]" dir="auto">
          {d?.magazine[2]?.title ?? "مدیریت هوشمند آب با کمک هوش مصنوعی"}
        </p>
      </a>
    </div>
  );
}

function PTextSm1() {
  const d = useMobileHome();
  return (
    <div className="min-h-[45.5px] relative shrink-0 w-full" data-name="p.text-sm">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Regular',sans-serif] justify-center leading-[0] not-italic text-[#52525c] text-[14px] text-right w-full">
        <p className="leading-[22.75px]" dir="auto">
          {d?.magazine[2]?.lead ?? "او مدعی شد می‌تواند بازار فناوری را یک‌پارچه کند؛ اما حقیقت پیچیده‌تر بود"}
        </p>
      </div>
    </div>
  );
}

function AGroup1() {
  return (
    <div className="border-[#e3dfd6] border-solid border-t content-stretch flex flex-col gap-[6px] items-start py-[16px] relative shrink-0 w-full" data-name="a.group">
      <H3FontBold1 />
      <PTextSm1 />
    </div>
  );
}

function H3FontBold2() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="h3.font-bold">
      <a className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[16px] text-right w-full" href={articleUrl(d?.magazine[3]?.href ?? null) ?? "#"}>
        <p className="cursor-pointer leading-[22px]" dir="auto">
          {d?.magazine[3]?.title ?? "هوش مصنوعی در خدمت مقابله با تهدیدات زیستی"}
        </p>
      </a>
    </div>
  );
}

function PTextSm2() {
  const d = useMobileHome();
  return (
    <div className="min-h-[45.5px] relative shrink-0 w-full" data-name="p.text-sm">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Regular',sans-serif] justify-center leading-[0] not-italic text-[#52525c] text-[14px] text-right w-full">
        <p className="leading-[22.75px]" dir="auto">
          {d?.magazine[3]?.lead ?? "نسل جدیدی از بیمه‌نامه‌های زندگی که ایرانیان را به پس‌انداز تشویق می‌کند"}
        </p>
      </div>
    </div>
  );
}

function AGroup2() {
  return (
    <div className="border-[#e3dfd6] border-solid border-t content-stretch flex flex-col gap-[6px] items-start py-[16px] relative shrink-0 w-full" data-name="a.group">
      <H3FontBold2 />
      <PTextSm2 />
    </div>
  );
}

function H3FontBold3() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="h3.font-bold">
      <a className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[16px] text-right" href={articleUrl(d?.magazine[4]?.href ?? null) ?? "#"}>
        <p className="cursor-pointer leading-[22px]" dir="auto">
          {d?.magazine[4]?.title ?? "هوش مصنوعی فرآیند توسعه دارو را متحول کرد"}
        </p>
      </a>
    </div>
  );
}

function PTextSm3() {
  const d = useMobileHome();
  return (
    <div className="min-h-[45.5px] relative shrink-0 w-full" data-name="p.text-sm">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Regular',sans-serif] justify-center leading-[0] not-italic text-[#52525c] text-[14px] text-right w-full">
        <p className="leading-[22.75px]" dir="auto">
          {d?.magazine[4]?.lead ?? "هوش مصنوعی در حال تغییر روند تحقیق و توسعه دارو است"}
        </p>
      </div>
    </div>
  );
}

function AGroup3() {
  return (
    <div className="border-[#e3dfd6] border-solid border-t content-stretch flex flex-col gap-[6px] items-start py-[16px] relative shrink-0 w-full" data-name="a.group">
      <H3FontBold3 />
      <PTextSm3 />
    </div>
  );
}

function DivGrid1() {
  return (
    <div className="content-stretch flex flex-col min-h-[499px] items-start pt-[20px] relative shrink-0 w-full" data-name="div.grid">
      <AGroup />
      <AGroup1 />
      <AGroup2 />
      <AGroup3 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Frame">
          <path d={svgPaths.p203476e0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SpanW() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-center justify-center relative rounded-[33554400px] shrink-0 size-[28px]" data-name="span.w-7">
      <Frame18 />
    </div>
  );
}

function AInlineFlex() {
  return (
    <a className="content-stretch flex gap-[10px] items-center no-underline pt-[12px] relative shrink-0" data-name="a.inline-flex" href={`${API_URL}/category/magazine`}>
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[14px] text-right w-[118px]">
        <p className="leading-[20px]" dir="auto">
          بیشتر بخوانید
        </p>
      </div>
      <SpanW />
    </a>
  );
}

function Div5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end pb-[3px] relative shrink-0 w-full" data-name="div">
      <DivFlex1 />
      <H2Text3Xl />
      <DivGrid1 />
      <AInlineFlex />
    </div>
  );
}

function DivGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="div.grid">
      <DivFlex />
      <Div5 />
    </div>
  );
}

function DivPx() {
  return (
    <div className="bg-[#f8f6f1] content-stretch flex flex-col items-start px-[24px] py-[32px] relative shrink-0 w-full" data-name="div.px-6">
      <DivGrid />
    </div>
  );
}

function SectionBgWhite() {
  return (
    <div className="bg-white border-[#e4e4e7] border-b border-solid content-stretch flex flex-col min-h-[1145.73px] items-start px-[16px] py-[32px] relative shrink-0 w-[390px]" data-name="section.bg-white">
      <DivPx />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_44)" id="Frame">
          <g id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_44">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame20() {
  return <div className="relative shrink-0 size-[14px]" data-name="Frame" />;
}

function Frame21() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_34)" id="Frame">
          <g id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_34">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_44)" id="Frame">
          <g id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_44">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame23() {
  return <div className="relative shrink-0 size-[14px]" data-name="Frame" />;
}

function Frame24() {
  return <div className="relative shrink-0 size-[14px]" data-name="Frame" />;
}

function Frame25() {
  return <div className="relative shrink-0 size-[14px]" data-name="Frame" />;
}

function Frame26() {
  return <div className="relative shrink-0 size-[14px]" data-name="Frame" />;
}

function Frame27() {
  return <div className="relative shrink-0 size-[14px]" data-name="Frame" />;
}

function Frame28() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_66)" id="Frame">
          <path d={svgPaths.p3e230570} fill="#141618" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_66">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function H3MgPEn1() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative self-stretch shrink-0" data-name="h3.MgPEn">
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
      <Frame27 />
      <Frame28 />
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141618] text-[21.1px] text-right tracking-[-0.66px] w-[128px] whitespace-nowrap origin-right scale-x-[0.95]">
        <p className="leading-[29px]" dir="auto">
          اقتصاد دیجیتال
        </p>
      </div>
    </div>
  );
}

function AOVmsz1() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[16px] pr-[5px] relative shrink-0" data-name="a.oVMSZ">
      <H3MgPEn1 />
    </div>
  );
}

function DivVztd10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.VZTD">
      <AOVmsz1 />
    </div>
  );
}

function ElSayed11ApGmh2608051785943198676HpMain16X9Jpg() {
  const d = useMobileHome();
  return (
    <div className="absolute aspect-[362/203.6300048828125] bottom-0 left-0 top-0" data-name="El-Sayed-11-ap-gmh-260805_1785943198676_hpMain_16x9.jpg" onClick={() => { const href = articleUrl(d?.digital[0]?.href ?? null); if (href) window.location.href = href; }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt={d?.digital[0]?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.digital[0]?.imageUrl) ?? imgElSayed11ApGmh2608051785943198676HpMain16X9Jpg} />
      </div>
    </div>
  );
}

function DivCCqLx() {
  return null;
}

function DivJrFcb3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="div.jrFcb">
      <DivCCqLx />
    </div>
  );
}

function DivVztd11() {
  return (
    <div className="col-2 content-stretch flex items-end justify-end justify-self-stretch relative row-2 self-stretch shrink-0" data-name="div.VZTD">
      <DivJrFcb3 />
    </div>
  );
}

function DivPrimariestakeawaysPrindicators() {
  return (
    <div className="absolute grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__85.81px_101.81px] inset-0 p-[8px]" data-name="div#PrimariestakeawaysPrindicators">
      <DivVztd11 />
    </div>
  );
}

function DivFvQlf9() {
  return (
    <div className="h-[203.63px] relative shrink-0 w-full" data-name="div.FvQLF">
      <ElSayed11ApGmh2608051785943198676HpMain16X9Jpg />
      <DivPrimariestakeawaysPrindicators />
    </div>
  );
}

function PrimariesTakeawaysProgressivesScoreBigWinsAndTurnToNovember() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Primaries takeaways: Progressives score big wins and turn to November">
      <DivFvQlf9 />
    </div>
  );
}

function ANPLaK11() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="a.nPLaK">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#990108] text-[13.5px] text-right tracking-[-0.28px] w-[361px]">
        <p className="leading-[14px]" dir="auto">
          {d?.digital[0]?.category ?? "تماس تبلیغاتی ناخواسته در فرانسه ممنوع شد"}
        </p>
      </div>
    </div>
  );
}

function DivPrimariestakeawaysPrtags() {
  return (
    <div className="content-center flex flex-wrap h-[27px] items-center pb-[4px] pl-[8px] pr-[253.81px] relative shrink-0 w-[370px]" data-name="div#PrimariestakeawaysPrtags">
      <ANPLaK11 />
    </div>
  );
}

function H2PrimariestakeawaysPrheadline() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="h2#PrimariestakeawaysPrheadline" onClick={() => { const href = articleUrl(d?.digital[0]?.href ?? null); if (href) window.location.href = href; }}>
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141618] text-[16.6px] text-right w-full">
        <p className="leading-[22px]" dir="auto">
          {d?.digital[0]?.title ??
            "در فرانسه، تماس‌های تلفنی بی‌وقفه برای تبلیغ پنل‌های خورشیدی، سقف‌ها، پمپ‌های حرارتی و سایر اقلام از روز سه‌شنبه ۱۱ اوت با اجرای قانون ممنوعیت تماس‌های تلفنی ناخواسته، ممنوع خواهد شد"}
        </p>
      </div>
    </div>
  );
}

function PrimariesTakeawaysProgressivesScoreBigWinsAndTurnToNovember1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Primaries takeaways: Progressives score big wins and turn to November">
      <DivPrimariestakeawaysPrtags />
      <H2PrimariestakeawaysPrheadline />
    </div>
  );
}

function DivLiAe18() {
  return (
    <div className="content-stretch flex flex-col gap-[7.99px] items-start relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <PrimariesTakeawaysProgressivesScoreBigWinsAndTurnToNovember />
      <PrimariesTakeawaysProgressivesScoreBigWinsAndTurnToNovember1 />
    </div>
  );
}

function ANPLaK12() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[185px]" data-name="a.nPLaK">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#990108] text-[13.5px] text-right tracking-[-0.28px] w-[185px]">
        <p className="leading-[14px]" dir="auto">
          {d?.digital[1]?.category ?? "اقتصاد دیجیتال"}
        </p>
      </div>
    </div>
  );
}

function DivElSayedwoncrucialMictags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[89.78px] relative shrink-0 w-[205.97px]" data-name="div#ElSayedwoncrucialMictags">
      <ANPLaK12 />
    </div>
  );
}

function H2ElSayedwoncrucialMicheadline() {
  const d = useMobileHome();
  return (
    <div className="min-h-[48.28px] flex flex-col items-start relative shrink-0 w-full" data-name="h2#ElSayedwoncrucialMicheadline" onClick={() => { const href = articleUrl(d?.digital[1]?.href ?? null); if (href) window.location.href = href; }}>
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic text-[#141618] text-[13px] text-right w-[183px]">
        <p className="leading-[16.1px]" dir="auto">
          {d?.digital[1]?.title ?? "حمله سایبری گسترده علیه بخش‌های هوانوردی، انرژی و آموزش امارات"}
        </p>
      </div>
    </div>
  );
}

function AZZygg6() {
  return (
    <div className="content-stretch flex min-h-[48.28px] items-start relative shrink-0 w-full" data-name="a.zZygg">
      <H2ElSayedwoncrucialMicheadline />
    </div>
  );
}

function ElSayedWonCrucialMichiganSenatePrimaryNowComesTheCoalitionTestAnalysis() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="El-Sayed won crucial Michigan Senate primary. Now comes the coalition test: ANALYSIS">
      <DivElSayedwoncrucialMictags />
      <AZZygg6 />
    </div>
  );
}

function DivQghKv27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pl-[12px] relative w-full" data-name="div.QGHKv">
      <ElSayedWonCrucialMichiganSenatePrimaryNowComesTheCoalitionTestAnalysis />
    </div>
  );
}

function DivQghKvMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[16px] relative self-stretch shrink-0 w-[209.97px] z-[2]" data-name="div.QGHKv:margin">
      <DivQghKv27 />
    </div>
  );
}

function ElSayed10ApGmh2608051785943199095HpMain16X9Jpg() {
  const d = useMobileHome();
  return (
    <div className="h-[85.52px] relative shrink-0 w-[152.03px]" data-name="El-Sayed-10-ap-gmh-260805_1785943199095_hpMain_16x9.jpg" onClick={() => { const href = articleUrl(d?.digital[1]?.href ?? null); if (href) window.location.href = href; }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt={d?.digital[1]?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.digital[1]?.imageUrl) ?? imgElSayed10ApGmh2608051785943199095HpMain16X9Jpg} />
      </div>
    </div>
  );
}

function DivFvQlf10() {
  return (
    <div className="content-stretch flex flex-col h-[85.52px] items-start justify-center relative shrink-0 w-full" data-name="div.FvQLF">
      <ElSayed10ApGmh2608051785943199095HpMain16X9Jpg />
    </div>
  );
}

function DivGpQca9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf10 />
    </div>
  );
}

function ElSayedWonCrucialMichiganSenatePrimaryNowComesTheCoalitionTestAnalysis1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[362px] overflow-clip relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] self-stretch shrink-0 w-[152.03px] z-[1]" data-name="El-Sayed won crucial Michigan Senate primary. Now comes the coalition test: ANALYSIS">
      <DivGpQca9 />
    </div>
  );
}

function DivLiAe19() {
  return (
    <div className="content-stretch flex isolate items-start relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivQghKvMargin1 />
      <ElSayedWonCrucialMichiganSenatePrimaryNowComesTheCoalitionTestAnalysis1 />
    </div>
  );
}

function LiPcCvU() {
  return (
    <div className="border-[#cbced4] border-solid border-t content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="li.PCCvU">
      <DivLiAe19 />
    </div>
  );
}

function ANPLaK13() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="a.nPLaK">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#990108] text-[13.5px] text-right tracking-[-0.28px] w-[184px]">
        <p className="leading-[14px]" dir="auto">
          {d?.digital[2]?.category ?? "اقتصاد دیجیتال"}
        </p>
      </div>
    </div>
  );
}

function DivElSayedprojectedtowitags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[89.78px] relative shrink-0 w-[205.97px]" data-name="div#ElSayedprojectedtowitags">
      <ANPLaK13 />
    </div>
  );
}

function H2ElSayedprojectedtowiheadline() {
  const d = useMobileHome();
  return (
    <div className="min-h-[48.28px] flex flex-col items-start relative shrink-0 w-full" data-name="h2#ElSayedprojectedtowiheadline">
      <a className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic text-[#141618] text-[13px] text-right w-[183px]" href={articleUrl(d?.digital[2]?.href ?? null) ?? "#"}>
        <p className="cursor-pointer leading-[16.1px]" dir="auto">
          {d?.digital[2]?.title ?? "توسعه کشور در شرایط جنگی متوقف نشد/کاهش زمان ‌پاسخگویی به مردم"}
        </p>
      </a>
    </div>
  );
}

function AZZygg7() {
  return (
    <div className="content-stretch flex min-h-[48.28px] items-start relative shrink-0 w-full" data-name="a.zZygg">
      <H2ElSayedprojectedtowiheadline />
    </div>
  );
}

function ElSayedProjectedToWinHighStakesMichiganSenateDemocraticPrimary() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="El-Sayed projected to win high-stakes Michigan Senate Democratic primary">
      <DivElSayedprojectedtowitags />
      <AZZygg7 />
    </div>
  );
}

function DivQghKv28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pl-[12px] relative w-full" data-name="div.QGHKv">
      <ElSayedProjectedToWinHighStakesMichiganSenateDemocraticPrimary />
    </div>
  );
}

function DivQghKvMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[16px] relative self-stretch shrink-0 w-[209.97px] z-[2]" data-name="div.QGHKv:margin">
      <DivQghKv28 />
    </div>
  );
}

function ElSayed7ApGmh2608051785942592371HpMain16X9Jpg() {
  const d = useMobileHome();
  return (
    <div className="h-[85.52px] relative shrink-0 w-[152.03px]" data-name="El-Sayed-7-ap-gmh-260805_1785942592371_hpMain_16x9.jpg" onClick={() => { const href = articleUrl(d?.digital[2]?.href ?? null); if (href) window.location.href = href; }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt={d?.digital[2]?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.digital[2]?.imageUrl) ?? imgElSayed7ApGmh2608051785942592371HpMain16X9Jpg} />
      </div>
    </div>
  );
}

function DivFvQlf11() {
  return (
    <div className="content-stretch flex flex-col h-[85.52px] items-start justify-center relative shrink-0 w-full" data-name="div.FvQLF">
      <ElSayed7ApGmh2608051785942592371HpMain16X9Jpg />
    </div>
  );
}

function DivGpQca10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf11 />
    </div>
  );
}

function ElSayedProjectedToWinHighStakesMichiganSenateDemocraticPrimary1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[362px] overflow-clip relative rounded-bl-[6px] rounded-br-[6px] rounded-tl-[6px] self-stretch shrink-0 w-[152.03px] z-[1]" data-name="El-Sayed projected to win high-stakes Michigan Senate Democratic primary">
      <DivGpQca10 />
    </div>
  );
}

function DivLiAe20() {
  return (
    <div className="content-stretch flex isolate items-start relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivQghKvMargin2 />
      <ElSayedProjectedToWinHighStakesMichiganSenateDemocraticPrimary1 />
    </div>
  );
}

function LiPcCvU1() {
  return (
    <div className="border-[#cbced4] border-solid border-t content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="li.PCCvU">
      <DivLiAe20 />
    </div>
  );
}

function UlMaSr() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[15.99px] relative shrink-0 w-full" data-name="ul.maSr">
      <LiPcCvU />
      <LiPcCvU1 />
    </div>
  );
}

function SectionErUzP() {
  return (
    <div className="content-stretch flex flex-col gap-[15.99px] items-start relative shrink-0 w-full" data-name="section.ErUzP">
      <DivLiAe18 />
      <UlMaSr />
    </div>
  );
}

function DivSXarj() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="div.SXarj">
      <SectionErUzP />
    </div>
  );
}

function DivGerEc2() {
  return (
    <div className="content-stretch flex flex-col min-h-[683px] items-start pb-[16px] pt-[66px] px-[14px] relative shrink-0 w-full" data-name="div.GerEc">
      <DivVztd10 />
      <DivSXarj />
    </div>
  );
}

function PromoHomepageApp311774645598540HpMainJpg() {
  return (
    <div className="aspect-[360/271] relative shrink-0 w-full" data-name="Promo_Homepage-App_3-1_1774645598540_hpMain.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPromoHomepageApp311774645598540HpMainJpg} />
    </div>
  );
}

function DivFvQlf12() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-1.55px_0_27.55px_0] items-start justify-center" data-name="div.FvQLF">
      <PromoHomepageApp311774645598540HpMainJpg />
    </div>
  );
}

function DivGpQca11() {
  return (
    <div className="h-[297px] overflow-clip relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-full z-[1]" data-name="div.GpQCA">
      <DivFvQlf12 />
    </div>
  );
}

function DivLiAe21() {
  const d = useMobileHome();
  const ad = d?.sections?.["ad-1"]?.[0] ?? null;
  return (
    <div className="bg-[#000e2c] content-stretch flex flex-col h-[318px] isolate items-center pb-[16px] relative rounded-[6px] shrink-0 w-[362px]" data-name="div.liAe">
      <div className="[word-break:break-word] flex flex-col font-['Inknut_Antiqua:Bold',sans-serif] h-[57px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.72px] w-full z-[2]">
        <p className="leading-[27.6px] whitespace-pre-wrap" dir="auto">{`    ADVERTISE`}</p>
      </div>
      <div className="h-[297px] overflow-clip relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-full z-[1]" data-name="div.GpQCA">
        <a className="block h-full w-full" href={articleUrl(ad?.href ?? null) ?? "#"}>
          {ad && absoluteAsset(ad.imageUrl) ? (
            <img alt={ad.imageAlt} className="absolute inset-0 max-w-none object-cover size-full" src={absoluteAsset(ad.imageUrl)} />
          ) : (
            <DivFvQlf12 />
          )}
        </a>
      </div>
    </div>
  );
}

function DivGerEc3() {
  return <div className="bg-white h-[32px] relative shrink-0 w-full" data-name="div.GerEc" />;
}

function DwstHtJt2608051785961216746HpMain16X9Jpg() {
  return (
    <div className="absolute aspect-[390/219.3800048828125] bottom-0 left-0 top-0" data-name="dwst-ht-jt-260805_1785961216746_hpMain_16x9.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDwstHtJt2608051785961216746HpMain16X9Jpg} />
    </div>
  );
}

function DivFvQlf13() {
  return (
    <div className="h-[219.38px] relative shrink-0 w-full" data-name="div.FvQLF">
      <DwstHtJt2608051785961216746HpMain16X9Jpg />
    </div>
  );
}

function DancingWithTheStarsTheNextProSendsHome2DancersAfterChemistryChallenge() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center mb-[-0.01px] overflow-clip relative shrink-0 w-full z-[2]" data-name="'Dancing With the Stars: The Next Pro' sends home 2 dancers after chemistry challenge">
      <DivFvQlf13 />
    </div>
  );
}

function H2DancingWiththeStarsTheadline() {
  return (
    <div className="h-[82.78px] overflow-clip relative shrink-0 w-full" data-name="h2#DancingWiththeStarsTheadline">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['IRANSansX:Bold',sans-serif] h-[97px] justify-center leading-[0] left-1/2 not-italic text-[12px] text-center text-white top-[33.59px] tracking-[-0.72px] w-[354px]">
        <p className="leading-[27.6px]" dir="auto">
          صرافی والکس معتبرترین و پیشرفته ترین پلتفرم معامله ارزهای دیجیتال ایران با پشتیبانی ۲۴/۷ و امکانات رایگان، در دنیای آینده قدم بزن!
        </p>
      </div>
    </div>
  );
}

function PDancingWiththeStarsTbody() {
  return (
    <div className="h-[36.78px] overflow-clip relative shrink-0 w-full" data-name="p#DancingWiththeStarsTbody">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['IRANSansX:Medium',sans-serif] h-[61px] justify-center leading-[0] left-1/2 not-italic text-[#cbced4] text-[14.3px] text-center top-[38.81px] w-[354px]">
        <p className="leading-[18.4px]">Wallex Exchange, Iran’s most trusted and advanced cryptocurrency trading platform, offering 24/7 support and free features. Step into the future of digital finance!</p>
      </div>
    </div>
  );
}

function PDancingWiththeStarsTbodyMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="p#DancingWiththeStarsTbody:margin">
      <PDancingWiththeStarsTbody />
    </div>
  );
}

function AZZygg8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="a.zZygg">
      <H2DancingWiththeStarsTheadline />
      <PDancingWiththeStarsTbodyMargin />
    </div>
  );
}

function DivCjafl14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.CJAFL">
      <AZZygg8 />
    </div>
  );
}

function DancingWithTheStarsTheNextProSendsHome2DancersAfterChemistryChallenge1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="'Dancing With the Stars: The Next Pro' sends home 2 dancers after chemistry challenge">
      <DivCjafl14 />
    </div>
  );
}

function DivQghKv29() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[56px] pt-[40px] px-[18px] relative shrink-0 w-[390px] z-[1]" data-name="div.QGHKv">
      <DancingWithTheStarsTheNextProSendsHome2DancersAfterChemistryChallenge1 />
    </div>
  );
}

function DivLiAe22() {
  const d = useMobileHome();
  const ad = d?.sections?.["ad-2"]?.[0] ?? null;
  return (
    <div className="bg-[#000e2c] content-stretch flex flex-col isolate items-center pt-[16px] relative shrink-0 w-full" data-name="div.liAe">
      <a className="block w-full" href={articleUrl(ad?.href ?? null) ?? "#"}>
        {ad && absoluteAsset(ad.imageUrl) ? (
          <div className="h-[219.38px] relative shrink-0 w-full" data-name="div.FvQLF">
            <img alt={ad.imageAlt} className="absolute inset-0 max-w-none object-cover size-full" src={absoluteAsset(ad.imageUrl)} />
          </div>
        ) : (
          <DancingWithTheStarsTheNextProSendsHome2DancersAfterChemistryChallenge />
        )}
        {ad ? (
          <div className="content-stretch flex flex-col items-start justify-center pb-[56px] pt-[40px] px-[18px] relative shrink-0 w-[390px] z-[1]" data-name="div.QGHKv">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.CJAFL">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="a.zZygg">
                <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center relative shrink-0 w-full not-italic text-[12px] text-center text-white tracking-[-0.72px]" data-name="h2#DancingWiththeStarsTheadline">
                  <p className="leading-[27.6px]" dir="auto">{ad.title}</p>
                </div>
                {ad.lead && (
                  <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="p#DancingWiththeStarsTbody:margin">
                    <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center relative shrink-0 w-full not-italic text-[#cbced4] text-[14.3px] text-center" data-name="p#DancingWiththeStarsTbody">
                      <p className="leading-[18.4px]">{ad.lead}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <DivQghKv29 />
        )}
      </a>
    </div>
  );
}

function H3MgPEn2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="h3.MgPEn">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#141618] text-[20.3px] text-right tracking-[-0.66px]">
        <p className="leading-[24px]" dir="auto">
          آخرین اخبار
        </p>
      </div>
    </div>
  );
}

function ANPLaK14() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[231px]" data-name="a.nPLaK">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#990108] text-[14px] text-right tracking-[-0.28px] w-[234px]">
        <p className="leading-[14px]" dir="auto">
          {d?.latestList[0]?.category ?? "اقتصاد دیجیتال"}
        </p>
      </div>
    </div>
  );
}

function Div13Yearoldboybehindwhtags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[223.75px] relative shrink-0 w-[256.25px]" data-name="div#13yearoldboybehindwhtags">
      <ANPLaK14 />
    </div>
  );
}

function H213Yearoldboybehindwhheadline() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pr-[15.62px] relative self-stretch" data-name="h2#13yearoldboybehindwhheadline">
      <a className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141618] text-[13px] text-right w-full" href={articleUrl(d?.latestList[0]?.href ?? null) ?? "#"}>
        <p className="cursor-pointer leading-[20px]" dir="auto">
          {d?.latestList[0]?.title ?? "قدرت‌بنیان؛ پارادایم تازه برای حکمرانی فناوری ایران"}
        </p>
      </a>
    </div>
  );
}

function AZZygg9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="a.zZygg">
      <H213Yearoldboybehindwhheadline />
    </div>
  );
}

function Component13YearOldBoyBehindWheelOfStolenVehicleInDeadlyCrashPolice() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="13-year-old boy behind wheel of stolen vehicle in deadly crash: Police">
      <Div13Yearoldboybehindwhtags />
      <AZZygg9 />
    </div>
  );
}

function DivQghKv30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pl-[12px] relative self-stretch z-[2]" data-name="div.QGHKv">
      <Component13YearOldBoyBehindWheelOfStolenVehicleInDeadlyCrashPolice />
    </div>
  );
}

function MdCrash1HtGmh2608051785961626040HpMainSquareJpg() {
  const d = useMobileHome();
  return (
    <div className="relative shrink-0 size-[101.75px]" data-name="md-crash-1-ht-gmh-260805_1785961626040_hpMain_square.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt={d?.latestList[0]?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.latestList[0]?.imageUrl) ?? imgMdCrash1HtGmh2608051785961626040HpMainSquareJpg} />
      </div>
    </div>
  );
}

function DivFvQlf14() {
  return (
    <div className="content-stretch flex flex-col h-[101.75px] items-start justify-center relative shrink-0 w-full" data-name="div.FvQLF">
      <MdCrash1HtGmh2608051785961626040HpMainSquareJpg />
    </div>
  );
}

function DivGpQca12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf14 />
    </div>
  );
}

function Component13YearOldBoyBehindWheelOfStolenVehicleInDeadlyCrashPolice1() {
  return (
    <div className="content-stretch flex flex-col items-start max-h-[101.76000213623047px] max-w-[101.76000213623047px] overflow-clip relative rounded-[6px] self-stretch shrink-0 w-[101.75px] z-[1]" data-name="13-year-old boy behind wheel of stolen vehicle in deadly crash: Police">
      <DivGpQca12 />
    </div>
  );
}

function DivLiAe23() {
  return (
    <div className="content-stretch flex isolate items-start relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivQghKv30 />
      <Component13YearOldBoyBehindWheelOfStolenVehicleInDeadlyCrashPolice1 />
    </div>
  );
}

function ANPLaK15() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[229px]" data-name="a.nPLaK">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#990108] text-[14px] text-right tracking-[-0.28px] w-[234px]">
        <p className="leading-[14px]" dir="auto">
          {d?.latestList[1]?.category ?? "اقتصاد دیجیتال"}
        </p>
      </div>
    </div>
  );
}

function DivInsideTrumpscontentitags1() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[204.92px] relative shrink-0 w-[256.25px]" data-name="div#InsideTrumpscontentitags">
      <ANPLaK15 />
    </div>
  );
}

function H2InsideTrumpscontentiheadline1() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pr-[14.11px] relative self-stretch" data-name="h2#InsideTrumpscontentiheadline">
      <a className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141618] text-[12.9px] text-right w-full" href={articleUrl(d?.latestList[1]?.href ?? null) ?? "#"}>
        <p className="cursor-pointer leading-[20px]" dir="auto">
          {d?.latestList[1]?.title ?? "بانک توسعه فناوری و ابزارهای نوین مالی؛ بسته جدید صندوق برای زیست‌بوم نوآوری"}
        </p>
      </a>
    </div>
  );
}

function AZZygg10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="a.zZygg">
      <H2InsideTrumpscontentiheadline1 />
    </div>
  );
}

function InsideTrumpsContentiousOvalOfficeMeetingWithJeaninePirroSources2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Inside Trump's 'contentious' Oval Office meeting with Jeanine Pirro: Sources">
      <DivInsideTrumpscontentitags1 />
      <AZZygg10 />
    </div>
  );
}

function DivQghKv31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pl-[12px] relative self-stretch z-[2]" data-name="div.QGHKv">
      <InsideTrumpsContentiousOvalOfficeMeetingWithJeaninePirroSources2 />
    </div>
  );
}

function Pirro1GtyGmh2608031785790335622HpMainSquareJpg() {
  const d = useMobileHome();
  return (
    <div className="relative shrink-0 size-[101.75px]" data-name="pirro-1-gty-gmh-260803_1785790335622_hpMain_square.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt={d?.latestList[1]?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.latestList[1]?.imageUrl) ?? imgPirro1GtyGmh2608031785790335622HpMainSquareJpg} />
      </div>
    </div>
  );
}

function DivFvQlf15() {
  return (
    <div className="content-stretch flex flex-col h-[101.75px] items-start justify-center relative shrink-0 w-full" data-name="div.FvQLF">
      <Pirro1GtyGmh2608031785790335622HpMainSquareJpg />
    </div>
  );
}

function DivGpQca13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf15 />
    </div>
  );
}

function InsideTrumpsContentiousOvalOfficeMeetingWithJeaninePirroSources3() {
  return (
    <div className="content-stretch flex flex-col items-start max-h-[101.76000213623047px] max-w-[101.76000213623047px] overflow-clip relative rounded-[6px] self-stretch shrink-0 w-[101.75px] z-[1]" data-name="Inside Trump's 'contentious' Oval Office meeting with Jeanine Pirro: Sources">
      <DivGpQca13 />
    </div>
  );
}

function DivLiAe24() {
  return (
    <div className="content-stretch flex isolate items-start relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivQghKv31 />
      <InsideTrumpsContentiousOvalOfficeMeetingWithJeaninePirroSources3 />
    </div>
  );
}

function ANPLaK16() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[226px]" data-name="a.nPLaK">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#990108] text-[13.9px] text-right tracking-[-0.28px] w-[234px]">
        <p className="leading-[14px]" dir="auto">
          {d?.latestList[2]?.category ?? "سلامت و درمان"}
        </p>
      </div>
    </div>
  );
}

function DivFdAapprovesModernasmtags1() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[208.97px] relative shrink-0 w-[256.25px]" data-name="div#FDAapprovesModernasmtags">
      <ANPLaK16 />
    </div>
  );
}

function H2FdAapprovesModernasmheadline1() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pr-[0.59px] relative self-stretch" data-name="h2#FDAapprovesModernasmheadline">
      <a className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141618] text-[13px] text-right tracking-[-0.42px] w-[234px]" href={articleUrl(d?.latestList[2]?.href ?? null) ?? "#"}>
        <p className="cursor-pointer" dir="auto">
          <span className="leading-[20px] tracking-[-0.42px]">
            {d?.latestList[2]?.title ?? "سرم آزمایشی بازسازی اندام؛ گامی بزرگ برای بازسازی اندام های انسان"}
          </span>
        </p>
      </a>
    </div>
  );
}

function AZZygg11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="a.zZygg">
      <H2FdAapprovesModernasmheadline1 />
    </div>
  );
}

function FdaApprovesModernasMRnaSeasonalFluVaccine2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="FDA approves Moderna's mRNA seasonal flu vaccine">
      <DivFdAapprovesModernasmtags1 />
      <AZZygg11 />
    </div>
  );
}

function DivQghKv32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pl-[12px] relative self-stretch z-[2]" data-name="div.QGHKv">
      <FdaApprovesModernasMRnaSeasonalFluVaccine2 />
    </div>
  );
}

function ModernaHqApJt2608041785874475703HpMainSquareJpg() {
  const d = useMobileHome();
  return (
    <div className="relative shrink-0 size-[101.75px]" data-name="moderna-hq-ap-jt-260804_1785874475703_hpMain_square.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt={d?.latestList[2]?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.latestList[2]?.imageUrl) ?? imgModernaHqApJt2608041785874475703HpMainSquareJpg} />
      </div>
    </div>
  );
}

function DivFvQlf16() {
  return (
    <div className="content-stretch flex flex-col h-[101.75px] items-start justify-center relative shrink-0 w-full" data-name="div.FvQLF">
      <ModernaHqApJt2608041785874475703HpMainSquareJpg />
    </div>
  );
}

function DivGpQca14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf16 />
    </div>
  );
}

function FdaApprovesModernasMRnaSeasonalFluVaccine3() {
  return (
    <div className="content-stretch flex flex-col items-start max-h-[101.76000213623047px] max-w-[101.76000213623047px] overflow-clip relative rounded-[6px] self-stretch shrink-0 w-[101.75px] z-[1]" data-name="FDA approves Moderna's mRNA seasonal flu vaccine">
      <DivGpQca14 />
    </div>
  );
}

function DivLiAe25() {
  return (
    <div className="content-stretch flex isolate items-start relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivQghKv32 />
      <FdaApprovesModernasMRnaSeasonalFluVaccine3 />
    </div>
  );
}

function ANPLaK17() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="a.nPLaK">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#990108] text-[13.9px] text-right tracking-[-0.28px] w-[234px]">
        <p className="leading-[14px]" dir="auto">
          {d?.latestList[3]?.category ?? "سلامت و درمان"}
        </p>
      </div>
    </div>
  );
}

function DivCasesofpotentiallydetags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[208.97px] relative shrink-0 w-[256.25px]" data-name="div#Casesofpotentiallydetags">
      <ANPLaK17 />
    </div>
  );
}

function H2Casesofpotentiallydeheadline() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pr-[34.08px] relative self-stretch" data-name="h2#Casesofpotentiallydeheadline">
      <a className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141618] text-[13px] text-right w-[234px]" href={articleUrl(d?.latestList[3]?.href ?? null) ?? "#"}>
        <p className="cursor-pointer leading-[20px]" dir="auto">
          {d?.latestList[3]?.title ?? "نسخه آزمایشگاهی مغز، امید تازه‌ای برای بیماران مبتلا به آلزایمر"}
        </p>
      </a>
    </div>
  );
}

function AZZygg12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="a.zZygg">
      <H2Casesofpotentiallydeheadline />
    </div>
  );
}

function CasesOfPotentiallyDeadlyFungusDetectedIn27StatesWhatToKnow() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Cases of potentially deadly fungus detected in 27 states. What to know">
      <DivCasesofpotentiallydetags />
      <AZZygg12 />
    </div>
  );
}

function DivQghKv33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pl-[12px] relative self-stretch z-[2]" data-name="div.QGHKv">
      <CasesOfPotentiallyDeadlyFungusDetectedIn27StatesWhatToKnow />
    </div>
  );
}

function CandidaAurisGtyJef2608051785935833866HpMainSquareJpg() {
  const d = useMobileHome();
  return (
    <div className="relative shrink-0 size-[101.75px]" data-name="candida-auris-gty-jef-260805_1785935833866_hpMain_square.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt={d?.latestList[3]?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.latestList[3]?.imageUrl) ?? imgCandidaAurisGtyJef2608051785935833866HpMainSquareJpg} />
      </div>
    </div>
  );
}

function DivFvQlf17() {
  return (
    <div className="content-stretch flex flex-col h-[101.75px] items-start justify-center relative shrink-0 w-full" data-name="div.FvQLF">
      <CandidaAurisGtyJef2608051785935833866HpMainSquareJpg />
    </div>
  );
}

function DivGpQca15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf17 />
    </div>
  );
}

function CasesOfPotentiallyDeadlyFungusDetectedIn27StatesWhatToKnow1() {
  return (
    <div className="content-stretch flex flex-col items-start max-h-[101.76000213623047px] max-w-[101.76000213623047px] overflow-clip relative rounded-[6px] self-stretch shrink-0 w-[101.75px] z-[1]" data-name="Cases of potentially deadly fungus detected in 27 states. What to know">
      <DivGpQca15 />
    </div>
  );
}

function DivLiAe26() {
  return (
    <div className="content-stretch flex isolate items-start relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivQghKv33 />
      <CasesOfPotentiallyDeadlyFungusDetectedIn27StatesWhatToKnow1 />
    </div>
  );
}

function ANPLaK18() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="a.nPLaK">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#990108] text-[14px] text-right tracking-[-0.28px] w-[234px]">
        <p className="leading-[14px]" dir="auto">
          {d?.latestList[4]?.category ?? "انرژی‌"}
        </p>
      </div>
    </div>
  );
}

function DivFederalofficialsconftags1() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[223.75px] relative shrink-0 w-[256.25px]" data-name="div#Federalofficialsconftags">
      <ANPLaK18 />
    </div>
  );
}

function H2Federalofficialsconfheadline1() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pr-[27.92px] relative self-stretch" data-name="h2#Federalofficialsconfheadline">
      <a className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141618] text-[12.9px] text-right w-[234px]" href={articleUrl(d?.latestList[4]?.href ?? null) ?? "#"}>
        <p className="cursor-pointer leading-[20px]" dir="auto">
          {d?.latestList[4]?.title ?? "نسل جدید عملیات مبتنی بر هوش مصنوعی در صنعت نفت و گاز"}
        </p>
      </a>
    </div>
  );
}

function AZZygg13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="a.zZygg">
      <H2Federalofficialsconfheadline1 />
    </div>
  );
}

function FederalOfficialsConfirmMarineOneSafetyIncidentWhileTrumpOnBoard2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Federal officials confirm Marine One safety incident while Trump on board">
      <DivFederalofficialsconftags1 />
      <AZZygg13 />
    </div>
  );
}

function DivQghKv34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pl-[12px] relative self-stretch z-[2]" data-name="div.QGHKv">
      <FederalOfficialsConfirmMarineOneSafetyIncidentWhileTrumpOnBoard2 />
    </div>
  );
}

function MarineOneTrumpGtyBh2608051785956524669HpMainSquareJpg() {
  const d = useMobileHome();
  return (
    <div className="relative shrink-0 size-[101.75px]" data-name="Marine-one-trump-gty-bh-260805_1785956524669_hpMain_square.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt={d?.latestList[4]?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.latestList[4]?.imageUrl) ?? imgMarineOneTrumpGtyBh2608051785956524669HpMainSquareJpg} />
      </div>
    </div>
  );
}

function DivFvQlf18() {
  return (
    <div className="content-stretch flex flex-col h-[101.75px] items-start justify-center relative shrink-0 w-full" data-name="div.FvQLF">
      <MarineOneTrumpGtyBh2608051785956524669HpMainSquareJpg />
    </div>
  );
}

function DivGpQca16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf18 />
    </div>
  );
}

function FederalOfficialsConfirmMarineOneSafetyIncidentWhileTrumpOnBoard3() {
  return (
    <div className="content-stretch flex flex-col items-start max-h-[101.76000213623047px] max-w-[101.76000213623047px] overflow-clip relative rounded-[6px] self-stretch shrink-0 w-[101.75px] z-[1]" data-name="Federal officials confirm Marine One safety incident while Trump on board">
      <DivGpQca16 />
    </div>
  );
}

function DivLiAe27() {
  return (
    <div className="content-stretch flex isolate items-start relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivQghKv34 />
      <FederalOfficialsConfirmMarineOneSafetyIncidentWhileTrumpOnBoard3 />
    </div>
  );
}

function ANPLaK19() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="a.nPLaK">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#990108] text-[14px] text-right tracking-[-0.28px] w-[234px]">
        <p className="leading-[14px]" dir="auto">
          {d?.latestList[5]?.category ?? "انرژی"}
        </p>
      </div>
    </div>
  );
}

function DivUSsuspendsavocadoinstags() {
  return (
    <div className="content-center flex flex-wrap items-center pb-[4px] pl-[8px] pr-[194.69px] relative shrink-0 w-[256.25px]" data-name="div#USsuspendsavocadoinstags">
      <ANPLaK19 />
    </div>
  );
}

function H2USsuspendsavocadoinsheadline() {
  const d = useMobileHome();
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pr-[2.06px] relative self-stretch" data-name="h2#USsuspendsavocadoinsheadline">
      <a className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141618] text-[12.9px] text-right w-[234px]" href={articleUrl(d?.latestList[5]?.href ?? null) ?? "#"}>
        <p className="cursor-pointer leading-[20px]" dir="auto">
          {d?.latestList[5]?.title ?? "بالکن‌ها به نیروگاه‌های کوچک خورشیدی تبدیل می‌شوند"}
        </p>
      </a>
    </div>
  );
}

function AZZygg14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="a.zZygg">
      <H2USsuspendsavocadoinsheadline />
    </div>
  );
}

function UsSuspendsAvocadoInspectionsInMexicanStateOfMichoacanDueToThreat() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="US suspends avocado inspections in Mexican state of Michoacan due to threat">
      <DivUSsuspendsavocadoinstags />
      <AZZygg14 />
    </div>
  );
}

function DivQghKv35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pl-[12px] relative self-stretch z-[2]" data-name="div.QGHKv">
      <UsSuspendsAvocadoInspectionsInMexicanStateOfMichoacanDueToThreat />
    </div>
  );
}

function WirestoryC5Cf0Ef4A260E6A517Fae615C08A1F8BSquareJpg() {
  const d = useMobileHome();
  return (
    <div className="relative shrink-0 size-[101.75px]" data-name="wirestory_c5cf0ef4a260e6a517fae615c08a1f8b_square.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt={d?.latestList[5]?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.latestList[5]?.imageUrl) ?? imgWirestoryC5Cf0Ef4A260E6A517Fae615C08A1F8BSquareJpg} />
      </div>
    </div>
  );
}

function DivFvQlf19() {
  return (
    <div className="content-stretch flex flex-col h-[101.75px] items-start justify-center relative shrink-0 w-full" data-name="div.FvQLF">
      <WirestoryC5Cf0Ef4A260E6A517Fae615C08A1F8BSquareJpg />
    </div>
  );
}

function DivGpQca17() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf19 />
    </div>
  );
}

function UsSuspendsAvocadoInspectionsInMexicanStateOfMichoacanDueToThreat1() {
  return (
    <div className="content-stretch flex flex-col items-start max-h-[101.76000213623047px] max-w-[101.76000213623047px] overflow-clip relative rounded-[6px] self-stretch shrink-0 w-[101.75px] z-[1]" data-name="US suspends avocado inspections in Mexican state of Michoacan due to threat">
      <DivGpQca17 />
    </div>
  );
}

function DivLiAe28() {
  return (
    <div className="content-stretch flex isolate items-start relative rounded-[6px] shrink-0 w-full" data-name="div.liAe">
      <DivQghKv35 />
      <UsSuspendsAvocadoInspectionsInMexicanStateOfMichoacanDueToThreat1 />
    </div>
  );
}

function DivVztd13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="div.VZTD">
      <DivLiAe23 />
      <DivLiAe24 />
      <DivLiAe25 />
      <DivLiAe26 />
      <DivLiAe27 />
      <DivLiAe28 />
    </div>
  );
}

function DivVztd12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div.VZTD">
      <H3MgPEn2 />
      <DivVztd13 />
    </div>
  );
}

function SpanQxdkt1() {
  return <div className="h-[14px] relative shrink-0 w-0" data-name="span.QXDKT" />;
}

function SpanZEodN() {
  return <div className="absolute left-[-2px] size-[16px] top-0" data-name="span.ZEodN" />;
}

function SpanCsJky1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="span.CSJky">
      <SpanZEodN />
    </div>
  );
}

function ButtonMLash() {
  return (
    <div className="bg-[#f4f5f6] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[12px] py-[20px] relative rounded-[6px] shrink-0 w-full" data-name="button.mLASH">
      <SpanQxdkt1 />
      <SpanCsJky1 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
        <g id="Frame">
          <path d={svgPaths.p26b3cb80} fill="#F4F5F6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SpanZEodN1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-2px] size-[16px] top-0" data-name="span.ZEodN">
      <Frame29 />
    </div>
  );
}

function SpanCsJky2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="span.CSJky">
      <SpanZEodN1 />
    </div>
  );
}

function SpanQxdkt2() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-name="span.QXDKT">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f4f5f6] text-[13.3px] text-center tracking-[-0.28px] whitespace-nowrap">
        <p className="leading-[14px]" dir="auto">
          بیشتر بخوانید
        </p>
      </div>
    </div>
  );
}

function ButtonMLash1() {
  return (
    <div className="bg-[#656c7a] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[12px] py-[20px] relative rounded-[6px] shrink-0 w-full" data-name="button.mLASH">
      <SpanCsJky2 />
      <SpanQxdkt2 />
    </div>
  );
}

function DivGerEc4() {
  return (
    <div className="bg-[#f4f5f6] content-stretch flex flex-col min-h-[847px] items-start pb-[32px] pt-[24px] px-[14px] relative shrink-0 w-full" data-name="div.GerEc">
      <DivVztd12 />
      <ButtonMLash />
      <ButtonMLash1 />
    </div>
  );
}

function CameraIcon() {
  return (
    <div className="h-[32px] relative shrink-0 w-[35px]" data-name="camera_icon 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 35 32" width="35">
        <g clipPath="url(#clip0_0_22)" id="camera_icon 1">
          <path d={svgPaths.pc633280} fill="#9B9B9B" id="Vector" />
          <path d={svgPaths.p1ed35a00} fill="white" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_0_22">
            <rect fill="white" height="32" width="35" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function H3MgPEn3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative self-stretch shrink-0 w-[389px]" data-name="h3.MgPEn">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#141618] text-[20.6px] text-right tracking-[-0.66px] w-[333px]">
        <p className="leading-[24px]" dir="auto">{`عکس `}</p>
      </div>
      <CameraIcon />
    </div>
  );
}

function AOVmsz2() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[16px] pr-[5px] relative shrink-0 w-[326px]" data-name="a.oVMSZ">
      <H3MgPEn3 />
    </div>
  );
}

function DivVztd14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px pb-[18px] relative" data-name="div.VZTD">
      <AOVmsz2 />
    </div>
  );
}

function HeaderVztd() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="header.VZTD">
      <DivVztd14 />
    </div>
  );
}

function Fire2ApGmh2608051785938141032HpEmbedSl16X9TJpg() {
  const d = useMobileHome();
  return (
    <div className="absolute aspect-[362.0028381347656/203.9541778564453] bottom-[-0.33px] left-0 top-0" data-name="fire-2-ap-gmh-260805_1785938141032_hpEmbed_sl_16x9t.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt={d?.photos[0]?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.photos[0]?.imageUrl) ?? imgFire2ApGmh2608051785938141032HpEmbedSl16X9TJpg} />
      </div>
    </div>
  );
}

function DivCCqLx1() {
  return null;
}

function DivJrFcb4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="div.jrFcb">
      <DivCCqLx1 />
    </div>
  );
}

function DivVztd16() {
  return (
    <div className="col-2 content-stretch flex items-end justify-end justify-self-stretch relative row-2 self-stretch shrink-0" data-name="div.VZTD">
      <DivJrFcb4 />
    </div>
  );
}

function DivNullbodyRichContentindicators() {
  return (
    <div className="absolute grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__85.81px_101.81px] inset-0 p-[8px]" data-name="div#nullbodyRichContentindicators">
      <DivVztd16 />
    </div>
  );
}

function DivFvQlf20() {
  const d = useMobileHome();
  return (
    <a className="block h-[203.622px] relative shrink-0 w-full" data-name="div.FvQLF" href={articleUrl(d?.photos[0]?.href ?? null) ?? "#"}>
      <Fire2ApGmh2608051785938141032HpEmbedSl16X9TJpg />
      <DivNullbodyRichContentindicators />
    </a>
  );
}

function DivGpQca18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf20 />
    </div>
  );
}

function Div7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[362.003px]" data-name="div">
      <DivGpQca18 />
    </div>
  );
}

function Fire4ApGmh2608051785938141886HpEmbedSl16X9TJpg() {
  const d = useMobileHome();
  return (
    <div className="absolute aspect-[362.0031433105469/203.94741821289062] bottom-[-0.32px] left-0 top-0" data-name="fire-4-ap-gmh-260805_1785938141886_hpEmbed_sl_16x9t.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt={d?.photos[1]?.imageAlt ?? ""} className="absolute h-[100.01%] left-0 max-w-none top-0 w-full object-cover" src={absoluteAsset(d?.photos[1]?.imageUrl) ?? imgFire4ApGmh2608051785938141886HpEmbedSl16X9TJpg} />
      </div>
    </div>
  );
}

function DivCCqLx2() {
  return null;
}

function DivJrFcb5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="div.jrFcb">
      <DivCCqLx2 />
    </div>
  );
}

function DivVztd17() {
  return (
    <div className="col-2 content-stretch flex items-end justify-end justify-self-stretch relative row-2 self-stretch shrink-0" data-name="div.VZTD">
      <DivJrFcb5 />
    </div>
  );
}

function DivNullbodyRichContentindicators1() {
  return (
    <div className="absolute grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__85.81px_101.81px] inset-0 p-[8px]" data-name="div#nullbodyRichContentindicators">
      <DivVztd17 />
    </div>
  );
}

function DivFvQlf21() {
  const d = useMobileHome();
  return (
    <a className="block h-[203.625px] relative shrink-0 w-full" data-name="div.FvQLF" href={articleUrl(d?.photos[1]?.href ?? null) ?? "#"}>
      <Fire4ApGmh2608051785938141886HpEmbedSl16X9TJpg />
      <DivNullbodyRichContentindicators1 />
    </a>
  );
}

function DivGpQca19() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf21 />
    </div>
  );
}

function Div8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[362.003px]" data-name="div">
      <DivGpQca19 />
    </div>
  );
}

function Fire5GtyGmh2608051785938142332HpEmbedSl16X9TJpg() {
  const d = useMobileHome();
  return (
    <div className="absolute aspect-[362.0016784667969/203.95631408691406] bottom-[-0.33px] left-0 top-0" data-name="fire-5-gty-gmh-260805_1785938142332_hpEmbed_sl_16x9t.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt={d?.photos[2]?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.photos[2]?.imageUrl) ?? imgFire5GtyGmh2608051785938142332HpEmbedSl16X9TJpg} />
      </div>
    </div>
  );
}

function DivCCqLx3() {
  return null;
}

function DivJrFcb6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="div.jrFcb">
      <DivCCqLx3 />
    </div>
  );
}

function DivVztd18() {
  return (
    <div className="col-2 content-stretch flex items-end justify-end justify-self-stretch relative row-2 self-stretch shrink-0" data-name="div.VZTD">
      <DivJrFcb6 />
    </div>
  );
}

function DivNullbodyRichContentindicators2() {
  return (
    <div className="absolute grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__85.81px_101.81px] inset-0 p-[8px]" data-name="div#nullbodyRichContentindicators">
      <DivVztd18 />
    </div>
  );
}

function DivFvQlf22() {
  const d = useMobileHome();
  return (
    <a className="block h-[203.626px] relative shrink-0 w-full" data-name="div.FvQLF" href={articleUrl(d?.photos[2]?.href ?? null) ?? "#"}>
      <Fire5GtyGmh2608051785938142332HpEmbedSl16X9TJpg />
      <DivNullbodyRichContentindicators2 />
    </a>
  );
}

function DivGpQca20() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf22 />
    </div>
  );
}

function Div9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[362.002px]" data-name="div">
      <DivGpQca20 />
    </div>
  );
}

function Fire1ApGmh2608051785938141462HpEmbedSl16X9TJpg() {
  const d = useMobileHome();
  return (
    <div className="absolute aspect-[362.000732421875/203.95396423339844] bottom-[-0.33px] left-0 top-0" data-name="fire-1-ap-gmh-260805_1785938141462_hpEmbed_sl_16x9t.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt={d?.photos[3]?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.photos[3]?.imageUrl) ?? imgFire1ApGmh2608051785938141462HpEmbedSl16X9TJpg} />
      </div>
    </div>
  );
}

function DivCCqLx4() {
  return null;
}

function DivJrFcb7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="div.jrFcb">
      <DivCCqLx4 />
    </div>
  );
}

function DivVztd19() {
  return (
    <div className="col-2 content-stretch flex items-end justify-end justify-self-stretch relative row-2 self-stretch shrink-0" data-name="div.VZTD">
      <DivJrFcb7 />
    </div>
  );
}

function DivNullbodyRichContentindicators3() {
  return (
    <div className="absolute grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__85.81px_101.81px] inset-0 p-[8px]" data-name="div#nullbodyRichContentindicators">
      <DivVztd19 />
    </div>
  );
}

function DivFvQlf23() {
  const d = useMobileHome();
  return (
    <a className="block h-[203.624px] relative shrink-0 w-full" data-name="div.FvQLF" href={articleUrl(d?.photos[3]?.href ?? null) ?? "#"}>
      <Fire1ApGmh2608051785938141462HpEmbedSl16X9TJpg />
      <DivNullbodyRichContentindicators3 />
    </a>
  );
}

function DivGpQca21() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf23 />
    </div>
  );
}

function Div10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[362.001px]" data-name="div">
      <DivGpQca21 />
    </div>
  );
}

function Fire3GtyGmh2608051785938142778HpEmbedSl16X9TJpg() {
  const d = useMobileHome();
  return (
    <div className="absolute aspect-[362/203.9499969482422] bottom-[-0.32px] left-0 top-0" data-name="fire-3-gty-gmh-260805_1785938142778_hpEmbed_sl_16x9t.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt={d?.photos[4]?.imageAlt ?? ""} className="absolute left-0 max-w-none size-full top-0 object-cover" src={absoluteAsset(d?.photos[4]?.imageUrl) ?? imgFire3GtyGmh2608051785938142778HpEmbedSl16X9TJpg} />
      </div>
    </div>
  );
}

function DivCCqLx5() {
  return null;
}

function DivJrFcb8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="div.jrFcb">
      <DivCCqLx5 />
    </div>
  );
}

function DivVztd20() {
  return (
    <div className="col-2 content-stretch flex items-end justify-end justify-self-stretch relative row-2 self-stretch shrink-0" data-name="div.VZTD">
      <DivJrFcb8 />
    </div>
  );
}

function DivNullbodyRichContentindicators4() {
  return (
    <div className="absolute grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__85.81px_101.81px] inset-0 p-[8px]" data-name="div#nullbodyRichContentindicators">
      <DivVztd20 />
    </div>
  );
}

function DivFvQlf24() {
  const d = useMobileHome();
  return (
    <a className="block h-[203.63px] relative shrink-0 w-full" data-name="div.FvQLF" href={articleUrl(d?.photos[4]?.href ?? null) ?? "#"}>
      <Fire3GtyGmh2608051785938142778HpEmbedSl16X9TJpg />
      <DivNullbodyRichContentindicators4 />
    </a>
  );
}

function DivGpQca22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="div.GpQCA">
      <DivFvQlf24 />
    </div>
  );
}

function Div11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[362px]" data-name="div">
      <DivGpQca22 />
    </div>
  );
}

function DivSwiperWrapper() {
  const { index } = useContext(MobileGalleryContext);
  return (
    <div className="h-[243.63px] relative shrink-0 w-full" data-name="div.SwiperWrapper">
      <div className="absolute bottom-[20px] content-stretch flex items-center justify-center left-0 max-w-[362px] min-w-[362px] pt-[36.32px] top-[-16.32px] w-[362px]" data-name="div.SwiperSlide">
        {index === 0 && <Div7 />}
        {index === 1 && <Div8 />}
        {index === 2 && <Div9 />}
        {index === 3 && <Div10 />}
        {index === 4 && <Div11 />}
      </div>
    </div>
  );
}

function DivSwiperContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="div.SwiperContainer">
      <DivSwiperWrapper />
    </div>
  );
}

function DivSwiperContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.Swiper__Container">
      <DivSwiperContainer1 />
    </div>
  );
}

function DivSwiper() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="div.Swiper">
      <DivSwiperContainer />
    </div>
  );
}

function SpanHsDdd() {
  const d = useMobileHome();
  const { index } = useContext(MobileGalleryContext);
  return (
    <div className="content-stretch flex flex-col items-center max-h-[70px] overflow-clip relative shrink-0 w-full" data-name="span.hsDdd">
      <div className="[word-break:break-word] flex flex-col font-['IRANSansX:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#656c7a] text-[12.6px] text-center tracking-[-0.28px] whitespace-nowrap">
        <a className="cursor-pointer" href={articleUrl(d?.photos[index]?.href ?? null) ?? "#"}>
          <p className="leading-[20px]" dir="auto">
            {d?.photos[index]?.title ?? "گرامیداشت روز ملی صنعت و معدن با حضور رئیس جمهور"}
          </p>
        </a>
      </div>
    </div>
  );
}

function DivNMMea() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative self-stretch shrink-0 w-[339px]" data-name="div.nMMea">
      <SpanHsDdd />
    </div>
  );
}

function DivVztd21() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-[40px] pt-[8px] relative shrink-0 w-full" data-name="div.VZTD">
      <DivNMMea />
    </div>
  );
}

function Frame30() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_20)" id="Frame">
          <path clipRule="evenodd" d={svgPaths.p4693c00} fill="#CBCED4" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_20">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SpanCsJky3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.CSJky">
      <Frame30 />
    </div>
  );
}

function ButtonMLash2() {
  const { setIndex } = useContext(MobileGalleryContext);
  return (
    <div className="bg-[#e5e6e9] content-stretch flex items-center justify-center p-[12px] relative rounded-[32px] shrink-0 size-[32px]" data-name="button.mLASH" onClick={() => setIndex(-1)}>
      <SpanCsJky3 />
    </div>
  );
}

function Item1Of5Margin() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start px-[4px] py-[2px] relative shrink-0 w-[20px]" data-name="Item 1 of 5:margin">
      <div className="bg-[#0045da] border border-[#0045da] border-solid relative rounded-[6px] shrink-0 size-[12px]" data-name="Item 1 of 5" />
    </div>
  );
}

function Item2Of5Margin() {
  return (
    <div className="content-stretch flex flex-col h-[12px] items-start px-[4px] py-[2px] relative shrink-0 w-[16px]" data-name="Item 2 of 5:margin">
      <div className="bg-[#e5e6e9] border border-[#e5e6e9] border-solid relative rounded-[4px] shrink-0 size-[8px]" data-name="Item 2 of 5" />
    </div>
  );
}

function Item3Of5Margin() {
  return (
    <div className="content-stretch flex flex-col h-[12px] items-start px-[4px] py-[2px] relative shrink-0 w-[16px]" data-name="Item 3 of 5:margin">
      <div className="bg-[#e5e6e9] border border-[#e5e6e9] border-solid relative rounded-[4px] shrink-0 size-[8px]" data-name="Item 3 of 5" />
    </div>
  );
}

function Item4Of5Margin() {
  return (
    <div className="content-stretch flex flex-col h-[12px] items-start px-[4px] py-[2px] relative shrink-0 w-[16px]" data-name="Item 4 of 5:margin">
      <div className="bg-[#e5e6e9] border border-[#e5e6e9] border-solid relative rounded-[4px] shrink-0 size-[8px]" data-name="Item 4 of 5" />
    </div>
  );
}

function Item5Of5Margin() {
  return (
    <div className="content-stretch flex flex-col h-[12px] items-start px-[4px] py-[2px] relative shrink-0 w-[16px]" data-name="Item 5 of 5:margin">
      <div className="bg-[#e5e6e9] border border-[#e5e6e9] border-solid relative rounded-[4px] shrink-0 size-[8px]" data-name="Item 5 of 5" />
    </div>
  );
}

function Item1Of() {
  const { index, total } = useContext(MobileGalleryContext);
  return (
    <div className="content-stretch flex h-[8px] items-center relative shrink-0" data-name="Item 1 of 5">
      {Array.from({ length: Math.min(total, 5) }, (_, i) => (
        <div
          className={`content-stretch flex flex-col h-[16px] items-start px-[4px] py-[2px] relative shrink-0 ${
            index === i ? "w-[20px]" : "w-[16px]"
          }`}
          key={i}
        >
          <div
            className={
              index === i
                ? "bg-[#0045da] border border-[#0045da] border-solid relative rounded-[6px] shrink-0 size-[12px]"
                : "bg-[#e5e6e9] border border-[#e5e6e9] border-solid relative rounded-[4px] shrink-0 size-[8px]"
            }
          />
        </div>
      ))}
    </div>
  );
}

function DivRRvbN() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.RRvbN">
      <Item1Of />
    </div>
  );
}

function DivRRvbNAlignCenter() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0" data-name="div.RRvbN:align-center">
      <DivRRvbN />
    </div>
  );
}

function Frame31() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_18)" id="Frame">
          <path clipRule="evenodd" d={svgPaths.p37d1300} fill="#0045DA" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_18">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SpanCsJky4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.CSJky">
      <Frame31 />
    </div>
  );
}

function ButtonMLash3() {
  const { setIndex } = useContext(MobileGalleryContext);
  return (
    <div className="bg-[#e5eeff] content-stretch flex items-center justify-center p-[12px] relative rounded-[32px] shrink-0 size-[32px]" data-name="button.mLASH" onClick={() => setIndex(1)}>
      <SpanCsJky4 />
    </div>
  );
}

function DivVztd22() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="div.VZTD">
      <ButtonMLash2 />
      <DivRRvbNAlignCenter />
      <ButtonMLash3 />
    </div>
  );
}

function DivVztd15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div.VZTD">
      <DivSwiper />
      <DivVztd21 />
      <DivVztd22 />
    </div>
  );
}

function Div6() {
  const d = useMobileHome();
  const total = Math.max(1, d?.sectionsMeta?.photos?.filled ?? d?.photos?.length ?? 1);
  const [index, setIndex] = useState(0);
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-[362px]" data-name="div">
      <HeaderVztd />
      <MobileGalleryContext.Provider
        value={{ index, total, setIndex: (delta: number) => setIndex((i) => (i + delta + total) % total) }}
      >
        <DivVztd15 />
      </MobileGalleryContext.Provider>
    </div>
  );
}

function DivGerEc5() {
  return <div className="content-stretch flex flex-col h-[32px] items-start px-[14px] py-[16px] relative shrink-0 w-full" data-name="div.GerEc" />;
}

function AbcnLogo() {
  return (
    <div className="h-[74px] relative shrink-0 w-[120px]" data-name="ABCN Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAbcnLogo} />
    </div>
  );
}

function Frame32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Frame">
          <path d={svgPaths.p1f7fb30} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Div12() {
  return (
    <div className="relative self-stretch shrink-0 w-[41.17px]" data-name="div">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic right-[-1.83px] text-[13.1px] text-right text-white top-[7.5px] whitespace-nowrap">
        <p className="leading-[16.1px]" dir="auto">
          درباره ما
        </p>
      </div>
    </div>
  );
}

function OpenTopicsAccordion() {
  return (
    <div className="content-stretch flex gap-[296.83px] items-start relative shrink-0 w-full" data-name="open Topics accordion">
      <Frame32 />
      <Div12 />
    </div>
  );
}

function DivAccordionPanel() {
  return (
    <div className="border-[#969ca8] border-b border-solid content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="div.AccordionPanel">
      <OpenTopicsAccordion />
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Frame">
          <path d={svgPaths.p1f7fb30} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Div13() {
  return (
    <div className="relative self-stretch shrink-0 w-[42.64px]" data-name="div">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic right-[-1.36px] text-[13.3px] text-right text-white top-[7.5px] whitespace-nowrap">
        <p className="leading-[16.1px]" dir="auto">
          ارتباط با ما
        </p>
      </div>
    </div>
  );
}

function OpenShowsAccordion() {
  return (
    <div className="content-stretch flex gap-[295.36px] items-start relative shrink-0 w-full" data-name="open Shows accordion">
      <Frame33 />
      <Div13 />
    </div>
  );
}

function DivAccordionPanel1() {
  return (
    <div className="border-[#969ca8] border-b border-solid content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="div.AccordionPanel">
      <OpenShowsAccordion />
    </div>
  );
}

function Frame34() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Frame">
          <path d={svgPaths.p1f7fb30} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Div14() {
  return (
    <div className="relative self-stretch shrink-0 w-[60.77px]" data-name="div">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold','Noto_Sans_Arabic:Bold',sans-serif] font-bold justify-center leading-[0] not-italic right-[-1.23px] text-[13.2px] text-right text-white top-[7.5px] whitespace-nowrap">
        <p className="leading-[16.1px]" dir="auto">
          پیوند ها
        </p>
      </div>
    </div>
  );
}

function OpenCompanyAccordion() {
  return (
    <div className="content-stretch flex gap-[277.23px] items-start relative shrink-0 w-full" data-name="open Company accordion">
      <Frame34 />
      <Div14 />
    </div>
  );
}

function DivAccordionPanel2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="div.AccordionPanel">
      <OpenCompanyAccordion />
    </div>
  );
}

function DivVztd23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative self-stretch" data-name="div.VZTD">
      <DivAccordionPanel />
      <DivAccordionPanel1 />
      <DivAccordionPanel2 />
    </div>
  );
}

function SectionVztd() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="section.VZTD">
      <DivVztd23 />
    </div>
  );
}

function SectionFKePq() {
  return (
    <div className="content-stretch flex flex-col gap-[55.99px] items-start relative shrink-0 w-full" data-name="section.FKePQ">
      <AbcnLogo />
      <SectionVztd />
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g clipPath="url(#clip0_0_14)" id="Frame">
          <path d={svgPaths.p905400} fill="black" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_14">
            <rect fill="white" height="19" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AAnchorLink() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[56px] shrink-0 size-[32px]" data-name="a.AnchorLink">
      <Frame35 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g id="Frame">
          <path d={svgPaths.p240b2d00} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AAnchorLink1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[56px] shrink-0 size-[32px]" data-name="a.AnchorLink">
      <Frame36 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g id="Frame">
          <path d={svgPaths.p11a97900} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AAnchorLink2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[56px] shrink-0 size-[32px]" data-name="a.AnchorLink">
      <Frame37 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g id="Frame">
          <path d={svgPaths.pe866380} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AAnchorLink3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[56px] shrink-0 size-[32px]" data-name="a.AnchorLink">
      <Frame38 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g id="Frame">
          <path d={svgPaths.p60177f0} fill="black" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AAnchorLink4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[56px] shrink-0 size-[32px]" data-name="a.AnchorLink">
      <Frame39 />
    </div>
  );
}

function DivVztd25() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-start relative shrink-0" data-name="div.VZTD">
      <AAnchorLink />
      <AAnchorLink1 />
      <AAnchorLink2 />
      <AAnchorLink3 />
      <AAnchorLink4 />
    </div>
  );
}

function DivVztd24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.VZTD">
      <DivVztd25 />
    </div>
  );
}

function AYiFgv() {
  return (
    <div className="absolute bottom-[60px] content-stretch flex flex-col items-center left-0 top-0" data-name="a.YiFgv">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5e6e9] text-[10.7px] text-center tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[12px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function AYiFgv1() {
  return (
    <div className="absolute bottom-[60px] content-stretch flex flex-col items-center left-[83.92px] top-0" data-name="a.YiFgv">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5e6e9] text-[10.7px] text-center tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[12px]">Terms of Use</p>
      </div>
    </div>
  );
}

function AYiFgv2() {
  return <div className="absolute bottom-[60px] left-[164.22px] top-0 w-[120px]" data-name="a.YiFgv" />;
}

function AYiFgv3() {
  return <div className="absolute bottom-[40px] left-[157.2px] top-[20px] w-[97px]" data-name="a.YiFgv" />;
}

function AYiFgv4() {
  return (
    <div className="absolute bottom-[20px] content-stretch flex flex-col items-center left-0 top-[40px]" data-name="a.YiFgv">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5e6e9] text-[10.9px] text-center tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[12px]">Image/Video Solicitation Rights Confirmation Terms</p>
      </div>
    </div>
  );
}

function DivVztd27() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="div.VZTD">
      <AYiFgv />
      <AYiFgv1 />
      <AYiFgv2 />
      <AYiFgv3 />
      <AYiFgv4 />
    </div>
  );
}

function SpanHUcap() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="span.HUcap">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5e6e9] text-[10.9px] tracking-[-0.24px] w-full">
        <p className="leading-[12px]" dir="auto">
          © 2026 ECOTIMES
        </p>
      </div>
    </div>
  );
}

function DivYiFgv() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="div.YiFgv">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e5e6e9] text-[10.7px] tracking-[-0.24px] w-full">
        <p className="leading-[12px]">All rights to Echo Times content are reserved, and the use and redistribution of its content with proper attribution are permitted under the Creative Commons Attribution 4.0 International License.</p>
      </div>
      <SpanHUcap />
    </div>
  );
}

function DivVztd26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div.VZTD">
      <DivVztd27 />
      <DivYiFgv />
    </div>
  );
}

function SectionYiFgv() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-start relative shrink-0 w-full" data-name="section.YiFgv">
      <div className="bg-[#969ca8] h-[0.5px] relative shrink-0 w-full" data-name="div.WiMyE" />
      <DivVztd26 />
    </div>
  );
}

function SectionVztd1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 right-0 top-[-16px]" data-name="section.VZTD">
      <DivVztd24 />
      <SectionYiFgv />
    </div>
  );
}

function SectionVztdMargin() {
  return (
    <div className="h-[261.5px] relative shrink-0 w-full" data-name="section.VZTD:margin">
      <SectionVztd1 />
    </div>
  );
}

function DivGerEc6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[39.99px] h-full items-start min-w-px px-[18px] py-[24px] relative" data-name="div.GerEc">
      <SectionFKePq />
      <SectionVztdMargin />
    </div>
  );
}

function FooterPUpJ() {
  return (
    <div className="bg-[#000e2c] content-stretch flex h-[570px] items-start justify-center relative shrink-0 w-[390px]" data-name="footer.pUpJ">
      <DivGerEc6 />
    </div>
  );
}

export default function DivScrollSpyContainer() {
  const d = useMobileHome();
  if (!d) {
    return (
      <div className="bg-white content-stretch flex h-full w-[390px] shrink-0 flex-col items-center overflow-x-clip relative" data-name="div.ScrollSpy_container">
        <h1 className="sr-only">اکوتایمز | پایگاه خبری اقتصاد و فناوری</h1>
        <HeaderGroup />
        <Group />
      </div>
    );
  }
  return (
    <div className="bg-white content-stretch flex h-full w-[390px] shrink-0 flex-col items-center overflow-x-clip relative" data-name="div.ScrollSpy_container">
      <h1 className="sr-only">اکوتایمز | پایگاه خبری اقتصاد و فناوری</h1>
      <HeaderGroup />
      <Group />
      <DivLiveVideoCard />
      <DivGerEc />
      <DivGerEc1 />
      <SectionBgWhite />
      <DivGerEc2 />
      <DivLiAe21 />
      <DivGerEc3 />
      <DivLiAe22 />
      <DivGerEc4 />
      <Div6 />
      <DivGerEc5 />
      <FooterPUpJ />
    </div>
  );
}