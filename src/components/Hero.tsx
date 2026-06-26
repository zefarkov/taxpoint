import { ButtonLink } from "@/components/ButtonLink";
import { consultationHref, phoneNumbers, telegramUrl } from "@/data/site";

const trustPoints = [
  "Hisobotlar vaqtida topshiriladi",
  "Soliq xavfi kamayadi",
  "Hujjatlar tartibga keladi"
];

export function Hero() {
  return (
    <section id="bosh-sahifa" className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-navy-50 via-slate-50 to-white" aria-hidden="true" />
      <div className="absolute right-0 top-0 h-full w-1/3 border-l border-slate-100 bg-navy-50/50" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-9 sm:px-6 sm:pt-11 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-8 lg:pb-20 lg:pt-12">
        <div className="flex flex-col justify-center">
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-navy-900 sm:text-5xl lg:text-6xl">
            Buxgalteriyani tartibli, xavfsiz va jarimasiz yuriting
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            TAXPOINT biznesingiz uchun buxgalteriya hisobi, soliq hisobotlari,
            YATT va MCHJ ro‘yxatdan o‘tkazish hamda elektron tizimlarni sozlash
            xizmatlarini taqdim etadi.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={consultationHref} variant="secondary" className="sm:min-w-48">
              Konsultatsiya olish
            </ButtonLink>
            <ButtonLink href="#tariflar" variant="outline" className="sm:min-w-44">
              Tariflarni ko‘rish
            </ButtonLink>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={telegramUrl}
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-slate-300 bg-white px-4 text-sm font-semibold text-navy-900 shadow-sm transition hover:border-electric-500 hover:bg-navy-50"
            >
              Telegram
            </a>
            <a
              href={phoneNumbers[0].href}
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-slate-300 bg-white px-4 text-sm font-semibold text-navy-900 shadow-sm transition hover:border-electric-500 hover:bg-navy-50"
            >
              Qo‘ng‘iroq qilish
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-success-500" />
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-navy-100 bg-white p-5 shadow-soft lg:self-center lg:p-7">
          <div className="grid gap-4">
            {[
              ["Muddatlar", "Hisobotlar kechikmasligi nazorat qilinadi"],
              ["Soliq xavflari", "Jarima va ortiqcha xatolik ehtimoli kamayadi"],
              ["Hujjatlar", "Shartnoma, hisob-faktura va kadrlar hujjatlari tartiblanadi"],
              ["Elektron tizimlar", "E-IMZO, Soliq kabinet, Didox va Faktura sozlanadi"]
            ].map(([title, text]) => (
              <div key={title} className="border-l-4 border-electric-500 bg-slate-50 px-4 py-4">
                <h3 className="font-semibold text-navy-900">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-200 pt-6">
            <div>
              <p className="text-2xl font-semibold text-navy-900">4</p>
              <p className="mt-1 text-xs font-medium text-slate-500">oylik tarif</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-navy-900">6+</p>
              <p className="mt-1 text-xs font-medium text-slate-500">xizmat yo‘nalishi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
