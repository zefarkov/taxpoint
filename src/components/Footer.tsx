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
    <footer id="aloqa" className="relative overflow-hidden border-t border-navy-800 bg-navy-900 text-white">
      <div
        className="absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize: "38px 38px"
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-400/50 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-11 sm:px-6 lg:grid-cols-[1fr_0.85fr_1.15fr] lg:items-start lg:gap-12 lg:px-8">
        <div className="max-w-sm">
          <a
            href="/#bosh-sahifa"
            className="inline-flex rounded-md bg-white px-2 py-2 shadow-[0_12px_30px_rgba(0,0,0,0.14)] transition hover:opacity-95 hover:shadow-glow"
            aria-label="TAXPOINT bosh sahifa"
          >
            <img
              src="/brand/logo-main-horizontal.png"
              alt="TAXPOINT"
              className="h-9 w-auto max-w-[170px] object-contain sm:h-10 sm:max-w-[200px]"
            />
          </a>
          <p className="mt-5 leading-7 text-navy-100">
            Buxgalteriya va soliq xizmatlari
          </p>
        </div>

        <nav className="grid gap-2 text-sm font-semibold text-navy-100">
          <p className="mb-2 font-bold text-white">Tezkor havolalar</p>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group inline-flex w-fit items-center gap-2 py-1 transition duration-200 hover:translate-x-1 hover:text-electric-400"
            >
              <span className="h-px w-0 bg-electric-400 transition-all duration-200 group-hover:w-4" />
              {item.label}
            </a>
          ))}
        </nav>

        <div className="text-sm leading-7 text-navy-100">
          <p className="font-bold text-white">Aloqa</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <PhoneModal className="min-h-10 px-3 py-2" />
            <TelegramButton label={telegramLabel} className="min-h-10 px-3 py-2" />
          </div>

          <div className="mt-5 grid gap-3">
            <p className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-0.5 text-electric-400">🕒</span>
              <span>
                <span className="block text-xs font-bold uppercase text-white/70">Ish vaqti</span>
                Dushanba - Shanba, 09:00 - 18:00
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-0.5 text-electric-400">📍</span>
              <span>
                <span className="block text-xs font-bold uppercase text-white/70">Manzil</span>
                {address}
              </span>
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-9 items-center rounded-md border border-white/15 px-3 py-1.5 text-xs font-bold text-white transition hover:border-electric-400 hover:bg-white/10 hover:text-electric-400 hover:shadow-glow"
            >
              Google Maps
            </a>
            <a
              href={yandexMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-9 items-center rounded-md border border-white/15 px-3 py-1.5 text-xs font-bold text-white transition hover:border-electric-400 hover:bg-white/10 hover:text-electric-400 hover:shadow-glow"
            >
              Yandex Maps
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-4 py-5 text-center">
        <p className="text-sm font-semibold text-navy-100">
          © 2026 TAXPOINT • Tizimli buxgalteriya va soliq nazorati
        </p>
        <p className="mt-1 text-xs font-medium text-white/45">
          Barcha huquqlar himoyalangan
        </p>
      </div>
    </footer>
  );
}
