"use client";

import MobileFrame from "./mobile-frame";

const SOCIAL_PATHS = [
  "M19 9.55819C19 4.27916 14.747 0 9.5 0C4.25303 0 0 4.27916 0 9.55819C0 14.329 3.47403 18.2833 8.01562 19V12.3209H5.60322V9.55819H8.01562V7.45216C8.01562 5.05637 9.43409 3.7335 11.6037 3.7335C12.6433 3.7335 13.7305 3.91994 13.7305 3.91994V6.27238H12.5323C11.3519 6.27238 10.9844 7.00922 10.9844 7.76506V9.55819H13.6194L13.1985 12.3209H10.985V19C15.5266 18.2833 19 14.329 19 9.55819Z",
  "M14.0529 2.375H16.4807L11.1768 8.43719L17.4165 16.6868H12.5299L8.70319 11.6832L4.32428 16.6868H1.89466L7.56794 10.2024L1.58234 2.375H6.59122L10.0504 6.94806L14.0505 2.375H14.0529ZM13.1997 15.2338H14.5451L5.86269 3.75191H4.41928L13.2014 15.2338H13.1997Z",
  "M9.5 3.00972C11.6137 3.00972 11.8643 3.01803 12.6991 3.05603C13.471 3.09106 13.8902 3.2205 14.1692 3.32856C14.5386 3.47225 14.8028 3.64384 15.0795 3.92053C15.3562 4.19722 15.5283 4.46144 15.6714 4.83075C15.7801 5.10981 15.9089 5.529 15.944 6.30088C15.982 7.13569 15.9903 7.38625 15.9903 9.5C15.9903 11.6138 15.982 11.8643 15.944 12.6991C15.9089 13.471 15.7795 13.8902 15.6714 14.1693C15.5277 14.5386 15.3562 14.8028 15.0795 15.0795C14.8028 15.3562 14.5386 15.5283 14.1692 15.6714C13.8902 15.7801 13.471 15.9089 12.6991 15.944C11.8643 15.982 11.6143 15.9903 9.5 15.9903C7.38566 15.9903 7.13569 15.982 6.30088 15.944C5.529 15.9089 5.10981 15.7795 4.83075 15.6714C4.46144 15.5277 4.19722 15.3562 3.92053 15.0795C3.64384 14.8028 3.47166 14.5386 3.32856 14.1693C3.21991 13.8902 3.09106 13.471 3.05603 12.6991C3.01803 11.8643 3.00972 11.6138 3.00972 9.5C3.00972 7.38625 3.01803 7.13569 3.05603 6.30088C3.09106 5.529 3.2205 5.10981 3.32856 4.83075C3.47225 4.46144 3.64384 4.19722 3.92053 3.92053C4.19722 3.64384 4.46144 3.47166 4.83075 3.32856C5.10981 3.21991 5.529 3.09106 6.30088 3.05603C7.13569 3.01803 7.38625 3.00972 9.5 3.00972ZM9.5 1.58353C7.35003 1.58353 7.08047 1.59244 6.23616 1.63103C5.39363 1.66962 4.81828 1.80322 4.31419 1.99916C3.79347 2.20163 3.35231 2.47238 2.91175 2.91234C2.47119 3.35231 2.20103 3.79406 1.99856 4.31478C1.80262 4.81828 1.66903 5.39362 1.63044 6.23675C1.59184 7.08106 1.58294 7.35062 1.58294 9.50059C1.58294 11.6506 1.59184 11.9201 1.63044 12.7644C1.66903 13.607 1.80262 14.1823 1.99856 14.6864C2.20103 15.2071 2.47178 15.6483 2.91175 16.0888C3.35172 16.5294 3.79347 16.7996 4.31419 17.002C4.81769 17.198 5.39303 17.3316 6.23616 17.3702C7.08047 17.4087 7.35003 17.4177 9.5 17.4177C11.65 17.4177 11.9195 17.4087 12.7638 17.3702C13.6064 17.3316 14.1823 17.198 14.6858 17.002C15.2065 16.7996 15.6477 16.5288 16.0883 16.0888C16.5288 15.6489 16.799 15.2071 17.0014 14.6864C17.1974 14.1829 17.331 13.6076 17.3696 12.7644C17.4082 11.9201 17.4171 11.6506 17.4171 9.50059C17.4171 7.35062 17.4082 7.08106 17.3696 6.23675C17.331 5.39422 17.1974 4.81888 17.0014 4.31478C16.799 3.79406 16.5282 3.35291 16.0883 2.91234C15.6483 2.47178 15.2065 2.20163 14.6858 1.99916C14.1823 1.80322 13.607 1.66962 12.7638 1.63103C11.9195 1.59244 11.65 1.58353 9.5 1.58353ZM9.5 5.43459C8.42179 5.43459 7.38773 5.86291 6.62532 6.62532C5.86291 7.38774 5.43459 8.42179 5.43459 9.5C5.43459 10.5782 5.86291 11.6123 6.62532 12.3747C7.38773 13.1371 8.42179 13.5654 9.5 13.5654C10.5782 13.5654 11.6123 13.1371 12.3747 12.3747C13.1371 11.6123 13.5654 10.5782 13.5654 9.5C13.5654 8.42179 13.1371 7.38774 12.3747 6.62532C11.6123 5.86291 10.5782 5.43459 9.5 5.43459ZM9.5 12.1392C8.80019 12.1392 8.12905 11.8612 7.63421 11.3664C7.13937 10.8715 6.86137 10.2004 6.86137 9.50059C6.86137 8.80079 7.13937 8.12964 7.63421 7.6348C8.12905 7.13997 8.80019 6.86197 9.5 6.86197C10.1998 6.86197 10.871 7.13997 11.3658 7.6348C11.8606 8.12964 12.1386 8.80079 12.1386 9.50059C12.1386 10.2004 11.8606 10.8715 11.3658 11.3664C10.871 11.8612 10.1998 12.1392 9.5 12.1392ZM14.6757 5.27428C14.6757 5.52624 14.5756 5.76787 14.3975 5.94603C14.2193 6.12419 13.9777 6.22428 13.7257 6.22428C13.4738 6.22428 13.2321 6.12419 13.054 5.94603C12.8758 5.76787 12.7757 5.52624 12.7757 5.27428C12.7757 5.02233 12.8758 4.78069 13.054 4.60253C13.2321 4.42437 13.4738 4.32428 13.7257 4.32428C13.9777 4.32428 14.2193 4.42437 14.3975 4.60253C14.5756 4.78069 14.6757 5.02233 14.6757 5.27428Z",
  "M13.3178 4.06362C12.7163 3.37725 12.385 2.49556 12.3856 1.58294H9.66744V12.4901C9.64652 13.0804 9.39734 13.6395 8.97239 14.0498C8.54744 14.46 7.97987 14.6893 7.38922 14.6894C6.78317 14.6877 6.20243 14.4461 5.77388 14.0176C5.34533 13.589 5.10382 13.0083 5.10209 12.4023C5.10209 10.8894 6.56213 9.75472 8.06669 10.2208V7.44147C5.03203 7.03713 2.37559 9.39431 2.37559 12.4028C2.37559 15.3318 4.80344 17.4165 7.38091 17.4165C10.143 17.4165 12.3862 15.1733 12.3862 12.4028V6.86969C13.4883 7.66112 14.8116 8.08571 16.1684 8.08331V5.36513C16.1684 5.36513 14.5148 5.44409 13.3184 4.06303L13.3178 4.06362Z",
  "M15.6863 3.52094C16.3673 3.71628 16.9041 4.29103 17.0863 5.02075C17.4171 6.34363 17.4171 9.10397 17.4171 9.10397C17.4171 9.10397 17.4171 11.8643 17.0863 13.1872C16.9041 13.9169 16.3679 14.4917 15.6863 14.687C14.4513 15.0415 9.5 15.0415 9.5 15.0415C9.5 15.0415 4.54872 15.0415 3.31431 14.687C2.63328 14.4917 2.09653 13.9169 1.91425 13.1872C1.58353 11.8643 1.58353 9.10397 1.58353 9.10397C1.58353 9.10397 1.58353 6.34363 1.91425 5.02075C2.09653 4.29103 2.63269 3.71628 3.31431 3.52094C4.54931 3.16647 9.5 3.16647 9.5 3.16647C9.5 3.16647 14.4513 3.16647 15.6863 3.52094ZM12.03 9.10397L7.91647 6.55916V11.6482L12.03 9.10337V9.10397Z",
];

const CHEVRON_DOWN =
  "M3.4695 5.4695C3.61015 5.3289 3.80088 5.24991 3.99975 5.24991C4.19862 5.24991 4.38935 5.3289 4.53 5.4695L7.9995 8.939L11.469 5.4695C11.5382 5.39787 11.6209 5.34073 11.7124 5.30142C11.8039 5.26212 11.9024 5.24143 12.0019 5.24056C12.1015 5.2397 12.2003 5.25867 12.2925 5.29638C12.3846 5.33409 12.4684 5.38978 12.5388 5.4602C12.6092 5.53062 12.6649 5.61436 12.7026 5.70653C12.7403 5.79871 12.7593 5.89747 12.7584 5.99705C12.7576 6.09664 12.7369 6.19505 12.6976 6.28655C12.6583 6.37806 12.6011 6.46082 12.5295 6.53L8.5295 10.53C8.38885 10.6706 8.19812 10.7496 7.99925 10.7496C7.80038 10.7496 7.60965 10.6706 7.469 10.53L3.469 6.53C3.3284 6.38935 3.24941 6.19862 3.24941 5.99975C3.24941 5.80088 3.3289 5.61015 3.4695 5.4695Z";

function AbcnLogo() {
  return (
    <div className="h-[74px] relative shrink-0 w-[120px]" data-name="ABCN Logo">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/ecotimes-logo-mobile-footer.png" />
    </div>
  );
}

function Frame32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Frame">
          <path d={CHEVRON_DOWN} fill="white" id="Vector" />
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
          <path d={CHEVRON_DOWN} fill="white" id="Vector" />
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
          <path d={CHEVRON_DOWN} fill="white" id="Vector" />
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
          <path d={SOCIAL_PATHS[0]} fill="black" id="Vector" />
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
          <path d={SOCIAL_PATHS[1]} fill="black" id="Vector" />
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
          <path d={SOCIAL_PATHS[2]} fill="black" id="Vector" />
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
          <path d={SOCIAL_PATHS[3]} fill="black" id="Vector" />
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
          <path d={SOCIAL_PATHS[4]} fill="black" id="Vector" />
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

export default function SiteFooter() {
  return (
    <>
      {/* Desktop — verbatim port from front/src/DesktopPage.tsx */}
      <footer className="hidden bg-[#000e2c] text-white lg:block">
        <div className="mx-auto px-7 py-12">
          <div className="flex items-start justify-between border-b border-[#969ca8] pb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="ECO TIMES" className="h-[86px] w-[140px] object-contain" src="/ecotimes-logo-white.png" />
            <div className="flex gap-20 text-[14px] font-bold">
              <a href="#">درباره ما</a>
              <a href="#">ارتباط با ما</a>
              <a href="#">پیوند ها</a>
            </div>
          </div>
          <div className="flex items-end justify-between gap-10 pt-8 text-[#e5e6e9]">
            <div className="text-[11px] leading-6" dir="ltr">
              <p>Privacy Policy &nbsp;&nbsp; Terms of Use &nbsp;&nbsp; Image/Video Solicitation Rights Confirmation Terms</p>
              <p>All rights to Echo Times content are reserved, and the use and redistribution of its content with proper attribution are permitted under the Creative Commons Attribution 4.0 International License.</p>
              <p>© 2026 ECOTIMES</p>
            </div>
            <div className="flex shrink-0 gap-2" aria-label="شبکه‌های اجتماعی">
              {["f", "X", "in", "▶", "◎"].map((item) => (
                <span className="grid size-8 place-items-center rounded-full bg-white text-[11px] font-bold text-black" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile — verbatim port from DivScrollSpyContainer (FooterPUpJ) */}
      <div className="lg:hidden" dir="ltr">
        <MobileFrame>
          <FooterPUpJ />
        </MobileFrame>
      </div>
    </>
  );
}
