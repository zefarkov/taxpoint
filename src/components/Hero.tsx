import { ButtonLink } from "@/components/ButtonLink";
import { LeadFormModal } from "@/components/LeadFormModal";
import { PhoneModal } from "@/components/PhoneModal";
import { TelegramButton } from "@/components/TelegramButton";

const trustPoints = [
  "Hisobotlar vaqtida topshiriladi",
  "Soliq xavfi kamayadi",
  "Hujjatlar tartibga keladi"
];

export function Hero() {
  return (
    <section id="bosh-sahifa" className="relative overflow-hidden border-b border-navy-100 bg-navy-50">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-navy-100 via-navy-50 to-white" aria-hidden="true" />
      <div className="absolute right-0 top-0 h-full w-1/3 border-l border-navy-100 bg-navy-100/70" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-9 sm:px-6 sm:pt-11 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-8 lg:pb-20 lg:pt-12">
        <div className="flex flex-col justify-center">
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-normal text-navy-900 sm:text-5xl lg:text-6xl">
            Buxgalteriyani tartibli, xavfsiz va jarimasiz yuriting
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            TAXPOINT biznesingiz uchun buxgalteriya hisobi, soliq hisobotlari,
            YATT va MCHJ ro‘yxatdan o‘tkazish hamda elektron tizimlarni sozlash
            xizmatlarini taqdim etadi. Farg'ona buxgalteriya xizmatlari bo'yicha
            tadbirkorlarga tartibli va xavfsiz yechim taklif qilamiz.
          </p>
          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <LeadFormModal context="KONSULTATSIYA" variant="secondary" className="w-full sm:w-auto sm:min-w-48">
              Konsultatsiya olish
            </LeadFormModal>
            <ButtonLink href="#tariflar" variant="outline" className="w-full sm:w-auto sm:min-w-44">
              Tariflarni ko‘rish
            </ButtonLink>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-2">
            <TelegramButton label="Telegram" className="min-h-11 w-full px-3 py-2 sm:min-h-10 sm:w-auto sm:px-4" />
            <PhoneModal className="min-h-11 w-full px-3 py-2 sm:min-h-10 sm:w-auto sm:px-4" />
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-3 rounded-md border border-navy-100 bg-white/90 px-4 py-3 text-sm font-semibold text-navy-800 shadow-[0_10px_28px_rgba(10,35,66,0.07)]">
                <span className="h-2 w-2 rounded-full bg-electric-500 shadow-[0_0_0_4px_rgba(77,163,255,0.18)]" />
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-navy-100 bg-white/95 p-5 shadow-soft lg:self-center lg:p-7">
          <div className="grid gap-4">
            {[
              ["Muddatlar", "Hisobotlar kechikmasligi nazorat qilinadi"],
              ["Soliq xavflari", "Jarima va ortiqcha xatolik ehtimoli kamayadi"],
              ["Hujjatlar", "Shartnoma, hisob-faktura va kadrlar hujjatlari tartiblanadi"],
              ["Elektron tizimlar", "E-IMZO, Soliq kabinet, Didox va Faktura sozlanadi"]
            ].map(([title, text]) => (
              <div key={title} className="border-l-4 border-electric-500 bg-navy-50 px-4 py-4 shadow-[inset_0_0_0_1px_rgba(215,232,251,0.7)]">
                <h3 className="font-bold text-navy-900">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-navy-100 pt-6">
            <div>
              <p className="text-2xl font-extrabold text-navy-900">4 xil</p>
              <p className="mt-1 text-xs font-medium text-slate-500">oylik tarif</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-navy-900">6+</p>
              <p className="mt-1 text-xs font-medium text-slate-500">xizmat yo‘nalishi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
