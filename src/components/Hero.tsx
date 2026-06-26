import { ButtonLink } from "@/components/ButtonLink";
import { telegramUrl } from "@/data/site";

const trustPoints = [
  "Hisobotlar vaqtida topshiriladi",
  "Soliq xavfi kamayadi",
  "Hujjatlar tartibga keladi"
];

export function Hero() {
  return (
    <section id="bosh-sahifa" className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="absolute inset-x-0 top-0 h-56 bg-slate-50" aria-hidden="true" />
      <div className="absolute right-0 top-0 h-full w-1/3 border-l border-slate-100 bg-navy-50/40" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <p className="mb-5 inline-flex w-fit rounded-md border border-navy-100 bg-white px-4 py-2 text-sm font-semibold text-navy-800 shadow-sm">
            Soliq, hisobot va hujjatlar bo‘yicha doimiy nazorat
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-navy-900 sm:text-5xl lg:text-6xl">
            Buxgalteriyani tartibli, xavfsiz va jarimasiz yuriting
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            TaxPoint biznesingiz uchun buxgalteriya hisobi, soliq hisobotlari,
            YATT va MCHJ ro‘yxatdan o‘tkazish hamda elektron tizimlarni sozlash
            xizmatlarini taqdim etadi.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#tariflar" variant="secondary" className="sm:min-w-44">
              Tariflarni ko‘rish
            </ButtonLink>
            <ButtonLink href={telegramUrl} className="sm:min-w-56">
              Telegramda maslahat olish
            </ButtonLink>
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

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft lg:p-8">
          <div className="flex items-start justify-between gap-6 border-b border-slate-200 pb-6">
            <div>
              <p className="text-sm font-semibold text-slate-500">TaxPoint nazorati</p>
              <p className="mt-2 text-2xl font-semibold text-navy-900">Rahbar uchun tinch buxgalteriya</p>
            </div>
            <div className="hidden rounded-md bg-navy-50 px-4 py-3 text-right sm:block">
              <p className="text-xs font-semibold text-slate-500">Asosiy tarif</p>
              <p className="mt-1 text-lg font-semibold text-navy-900">1.5 mln so‘mdan</p>
            </div>
          </div>
          <div className="mt-6 grid gap-4">
            {[
              ["Muddatlar", "Hisobotlar kechikmasligi nazorat qilinadi"],
              ["Soliq xavflari", "Jarima va ortiqcha xatolik ehtimoli kamayadi"],
              ["Hujjatlar", "Shartnoma, hisob-faktura va kadrlar hujjatlari tartiblanadi"],
              ["Elektron tizimlar", "E-IMZO, Soliq kabinet, Didox va Faktura sozlanadi"]
            ].map(([title, text]) => (
              <div key={title} className="border-l-4 border-navy-700 bg-slate-50 px-4 py-3">
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
