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
    <footer id="aloqa" className="border-t border-navy-800 bg-navy-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.8fr_1.1fr] lg:px-8">
        <div>
          <a
            href="/#bosh-sahifa"
            className="inline-flex rounded-md bg-white px-2 py-2 transition hover:opacity-90"
            aria-label="TAXPOINT bosh sahifa"
          >
            <img
              src="/brand/logo-main-horizontal.png"
              alt="TAXPOINT"
              className="h-12 w-auto max-w-[220px] object-contain sm:h-14 sm:max-w-[260px]"
            />
          </a>
          <p className="mt-4 max-w-sm leading-7 text-navy-100">
            Buxgalteriya va soliq xizmatlari
          </p>
        </div>
        <nav className="grid gap-3 text-sm font-medium text-navy-100">
          <p className="font-semibold text-white">Tezkor havolalar</p>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-electric-400">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="text-sm leading-7 text-navy-100">
          <p className="font-semibold text-white">Aloqa</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <PhoneModal className="min-h-10 px-3 py-2" />
            <TelegramButton compact />
          </div>
          <p>Ish vaqti: Dushanba - Shanba, 09:00 - 18:00</p>
          <p>Manzil: {address}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={googleMapsUrl}
              className="rounded-md border border-white/20 px-3 py-2 text-xs font-semibold text-white transition hover:border-electric-400 hover:bg-white/10 hover:shadow-glow"
            >
              Google Maps
            </a>
            <a
              href={yandexMapsUrl}
              className="rounded-md border border-white/20 px-3 py-2 text-xs font-semibold text-white transition hover:border-electric-400 hover:bg-white/10 hover:shadow-glow"
            >
              Yandex Maps
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-navy-100">
        © 2026 TAXPOINT. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}
