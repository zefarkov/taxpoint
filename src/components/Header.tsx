import { ButtonLink } from "@/components/ButtonLink";
import { consultationHref, navItems, phoneNumbers, telegramUrl } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="/#bosh-sahifa"
          className="flex shrink-0 items-center rounded-md py-1 pr-2 transition hover:opacity-90"
          aria-label="TAXPOINT bosh sahifa"
        >
          <img
            src="/brand/logo-main-horizontal.png"
            alt="TAXPOINT"
            className="h-12 w-auto max-w-[205px] object-contain sm:h-14 sm:max-w-[250px] lg:h-16 lg:max-w-[285px]"
          />
        </a>

        <nav className="hidden items-center gap-6 text-[15px] font-semibold text-slate-700 xl:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-navy-800">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={consultationHref} variant="secondary" className="px-4">
            Konsultatsiya olish
          </ButtonLink>
          <a
            href={telegramUrl}
            className="inline-flex h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-3 text-sm font-semibold text-navy-900 shadow-sm transition hover:border-electric-500 hover:bg-navy-50"
            aria-label="Telegram orqali yozish"
          >
            TG
          </a>
          <a
            href={phoneNumbers[0].href}
            className="inline-flex h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-3 text-sm font-semibold text-navy-900 shadow-sm transition hover:border-electric-500 hover:bg-navy-50"
            aria-label="Telefon qilish"
          >
            Tel
          </a>
        </div>

        <details className="group relative xl:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md border border-slate-300 text-navy-900 transition hover:bg-navy-50">
            <span className="sr-only">Menyuni ochish</span>
            <span className="block h-0.5 w-5 bg-current shadow-[0_6px_0_currentColor,0_-6px_0_currentColor]" />
          </summary>
          <div className="absolute right-0 mt-3 w-72 rounded-lg border border-slate-200 bg-white p-3 shadow-soft">
            <nav className="grid gap-1 text-base font-medium text-slate-700">
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
              <a
                href={telegramUrl}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-3 text-sm font-semibold text-navy-900 transition hover:bg-navy-50"
              >
                Telegram
              </a>
              <a
                href={phoneNumbers[0].href}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-3 text-sm font-semibold text-navy-900 transition hover:bg-navy-50"
              >
                Qo‘ng‘iroq
              </a>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
