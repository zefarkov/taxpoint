import { PhoneModal } from "@/components/PhoneModal";
import { TelegramButton } from "@/components/TelegramButton";
import {
  address,
  googleMapsUrl,
  navItems,
  telegramLabel,
  yandexMapsUrl
} from "@/data/site";

export function Footer() {
  return (
    <footer id="aloqa" className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.8fr_1.1fr] lg:px-8">
        <div>
          <a
            href="/#bosh-sahifa"
            className="inline-flex rounded-md py-1 pr-2 transition hover:opacity-90"
            aria-label="TAXPOINT bosh sahifa"
          >
            <img
              src="/brand/logo-main-horizontal.png"
              alt="TAXPOINT"
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
          <div className="mt-3 flex flex-wrap gap-2">
            <PhoneModal className="min-h-10 px-3 py-2" />
            <TelegramButton label={telegramLabel} className="min-h-10 px-3 py-2" />
          </div>
          <p>Ish vaqti: Dushanba - Shanba, 09:00 - 18:00</p>
          <p>Manzil: {address}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={googleMapsUrl}
              className="rounded-md border border-slate-300 px-3 py-2 text-xs font-semibold text-navy-900 transition hover:border-electric-500 hover:bg-navy-50"
            >
              Google Maps
            </a>
            <a
              href={yandexMapsUrl}
              className="rounded-md border border-slate-300 px-3 py-2 text-xs font-semibold text-navy-900 transition hover:border-electric-500 hover:bg-navy-50"
            >
              Yandex Maps
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-sm text-slate-500">
        © 2026 TAXPOINT. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}
