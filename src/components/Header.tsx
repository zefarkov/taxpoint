import { ButtonLink } from "@/components/ButtonLink";
import { PhoneModal } from "@/components/PhoneModal";
import { TelegramButton } from "@/components/TelegramButton";
import { consultationHref, navItems } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="/#bosh-sahifa"
          className="flex shrink-0 items-center rounded-md py-1 pr-2 transition hover:opacity-90"
          aria-label="TAXPOINT bosh sahifa"
        >
          <img
            src="/brand/logo-main-horizontal.png"
            alt="TAXPOINT"
            className="h-11 w-auto max-w-[190px] object-contain sm:h-12 sm:max-w-[225px] lg:h-14 lg:max-w-[255px]"
          />
        </a>

        <nav className="hidden items-center gap-5 text-[15px] font-semibold text-navy-800 xl:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-electric-600">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={consultationHref} variant="secondary" className="h-10 min-h-0 px-4 py-0">
            Konsultatsiya olish
          </ButtonLink>
          <TelegramButton compact />
          <PhoneModal className="h-10 min-h-0 px-3 py-0" />
        </div>

        <details className="group relative xl:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md border border-navy-200 text-navy-900 transition hover:border-electric-500 hover:bg-navy-50 hover:shadow-glow">
            <span className="sr-only">Menyuni ochish</span>
            <span className="block h-0.5 w-5 bg-current shadow-[0_6px_0_currentColor,0_-6px_0_currentColor]" />
          </summary>
          <div className="absolute right-0 mt-3 w-72 rounded-lg border border-navy-100 bg-white p-3 shadow-soft">
            <nav className="grid gap-1 text-base font-semibold text-navy-800">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 transition hover:bg-navy-50 hover:text-navy-800"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <ButtonLink href={consultationHref} variant="secondary" className="mt-3 w-full">
              Konsultatsiya olish
            </ButtonLink>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <TelegramButton label="Telegram" />
              <PhoneModal className="w-full px-3" />
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
