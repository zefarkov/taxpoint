import { navItems, phoneNumber, telegramLabel, telegramUrl } from "@/data/site";

export function Footer() {
  return (
    <footer id="aloqa" className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.8fr_1.1fr] lg:px-8">
        <div>
          <p className="flex items-center gap-3 text-xl font-bold text-navy-900">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-navy-900 text-sm text-white">
              TP
            </span>
            TaxPoint
          </p>
          <p className="mt-3 max-w-sm leading-7 text-slate-600">
            Buxgalteriya va soliq xizmatlari
          </p>
        </div>
        <nav className="grid gap-3 text-sm font-medium text-slate-700">
          <p className="font-semibold text-navy-900">Tezkor havolalar</p>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-navy-800">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="text-sm leading-7 text-slate-600">
          <p className="font-semibold text-navy-900">Aloqa</p>
          <p className="mt-3">
            Telefon: <a href={`tel:${phoneNumber}`} className="font-medium text-navy-900 hover:text-navy-700">{phoneNumber}</a>
          </p>
          <p>
            Telegram: <a href={telegramUrl} className="font-medium text-navy-900 hover:text-navy-700">{telegramLabel}</a>
          </p>
          <p>Ish vaqti: Dushanba - Shanba, 09:00 - 18:00</p>
          <p>Manzil: Toshkent, O‘zbekiston</p>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-sm text-slate-500">
        © 2026 TaxPoint. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}
