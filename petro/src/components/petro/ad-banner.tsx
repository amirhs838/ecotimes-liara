import { Megaphone } from "lucide-react";

/**
 * Mid-page ad banner (replaces ABC's "Download the App" navy banner per client
 * decision): invites businesses to advertise on EcoTimes.
 */
export default function AdBanner() {
  return (
    <section id="ads" className="bg-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-5 py-6 lg:py-8">
        <div className="bg-navy rounded-lg px-6 py-10 lg:py-12 text-center">
          <span className="inline-flex items-center gap-2 text-brand-light text-[13px] font-bold">
            <Megaphone className="w-4 h-4" />
            تبلیغات
          </span>
          <h2 className="mt-3 text-2xl lg:text-3xl font-black text-white leading-snug">
            برند شما، در معرض دید مخاطبان اقتصاد و فناوری
          </h2>
          <p className="mt-3 text-[14px] lg:text-[15px] text-zinc-300 max-w-xl mx-auto leading-relaxed">
            محصول، خدمت یا رویداد خود را به خوانندگان تخصصی حوزه‌های دانش‌بنیان
            برسانید — برای هماهنگی و دریافت تعرفه با ما در تماس باشید.
          </p>
          <a
            href="mailto:info@ecotimes.ir?subject=درخواست تبلیغات"
            className="inline-flex items-center gap-2 mt-6 bg-brand hover:bg-brand-dark text-white text-[14px] font-bold px-6 py-3 rounded-md transition-colors"
          >
            درخواست تبلیغات
          </a>
        </div>
      </div>
    </section>
  );
}
