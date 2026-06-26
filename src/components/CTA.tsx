import { LeadFormModal } from "@/components/LeadFormModal";
import { PhoneModal } from "@/components/PhoneModal";
import { TelegramButton } from "@/components/TelegramButton";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-[#061A33] py-18 text-white sm:py-20">
      <div
        className="absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize: "44px 44px"
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-400/60 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-3xl">
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-normal sm:text-4xl lg:text-5xl">
            Buxgalteriyangizni bugun tartibga soling
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-navy-100">
            TAXPOINT sizga hisob, soliq va hujjatlar bilan bog'liq jarayonlarni
            tartibli va xavfsiz yuritishda yordam beradi.
          </p>
        </div>

        <div className="flex w-full flex-wrap items-center gap-3 rounded-xl border border-white/10 bg-white/[0.07] p-3 shadow-[0_18px_48px_rgba(0,0,0,0.16)] backdrop-blur sm:w-auto">
          <LeadFormModal context="KONSULTATSIYA" className="min-w-[190px]">
            Konsultatsiya olish
          </LeadFormModal>
          <PhoneModal className="min-w-[170px] border-white/25 bg-white/10 text-white hover:border-electric-400 hover:bg-white/15" />
          <TelegramButton compact inverted className="h-11 w-11" />
        </div>
      </div>
    </section>
  );
}
