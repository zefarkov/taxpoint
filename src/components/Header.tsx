import { ButtonLink } from "@/components/ButtonLink";
import { navItems, telegramUrl } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="/#bosh-sahifa"
          className="flex shrink-0 items-center rounded-md py-1 pr-2 transition hover:opacity-90"
          aria-label="TaxPoint bosh sahifa"
        >
          <img
            src="/brand/logo-main-horizontal.png"
            alt="TaxPoint"
            className="h-10 w-auto max-w-[168px] object-contain sm:h-12 sm:max-w-[210px]"
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-navy-800">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={telegramUrl} variant="secondary">
            Konsultatsiya olish
          </ButtonLink>
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md border border-slate-300 text-navy-900 transition hover:bg-navy-50">
            <span className="sr-only">Menyuni ochish</span>
            <span className="block h-0.5 w-5 bg-current shadow-[0_6px_0_currentColor,0_-6px_0_currentColor]" />
          </summary>
          <div className="absolute right-0 mt-3 w-72 rounded-lg border border-slate-200 bg-white p-3 shadow-soft">
            <nav className="grid gap-1 text-sm font-medium text-slate-700">
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
            <ButtonLink href={telegramUrl} variant="secondary" className="mt-3 w-full">
              Konsultatsiya olish
            </ButtonLink>
          </div>
        </details>
      </div>
    </header>
  );
}
