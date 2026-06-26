import { navItems, phoneNumber, telegramLabel, telegramUrl } from "@/data/site";

export function Footer() {
  return (
    <footer id="aloqa" className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.8fr_1.1fr] lg:px-8">
        <div>
          <a
            href="/#bosh-sahifa"
            className="inline-flex rounded-md py-1 pr-2 transition hover:opacity-90"
            aria-label="TaxPoint bosh sahifa"
          >
            <img
              src="/brand/logo-main-horizontal.png"
              alt="TaxPoint"
              className="h-12 w-auto max-w-[220px] object-contain sm:h-14 sm:max-w-[260px]"
            />
          </a>
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
