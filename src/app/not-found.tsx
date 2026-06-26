import { ButtonLink } from "@/components/ButtonLink";
import { TelegramButton } from "@/components/TelegramButton";

const quickLinks = [
  { label: "Tariflar", href: "/#tariflar" },
  { label: "Xizmatlar", href: "/#xizmatlar" },
  { label: "Aloqa", href: "/#aloqa" }
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-navy-50">
      <section className="relative flex min-h-screen items-center overflow-hidden border-b border-navy-100">
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-navy-100 to-navy-50" aria-hidden="true" />
        <div className="absolute right-0 top-0 h-full w-1/3 border-l border-navy-100 bg-navy-100/60" aria-hidden="true" />

        <div className="fade-in-soft relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.78fr] lg:items-center lg:px-8">
          <div>
            <a
              href="/#bosh-sahifa"
              className="inline-flex rounded-md py-1 pr-2 transition hover:opacity-90"
              aria-label="TAXPOINT bosh sahifa"
            >
              <img
                src="/brand/logo-main-horizontal.png"
                alt="TAXPOINT"
                className="h-12 w-auto max-w-[220px] object-contain sm:h-14 sm:max-w-[270px]"
              />
            </a>

            <p className="mt-12 text-8xl font-extrabold leading-none tracking-normal text-navy-900 sm:text-9xl">
              404
            </p>
            <h1 className="mt-6 text-3xl font-extrabold tracking-normal text-navy-900 sm:text-5xl">
              Sahifa topilmadi
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              Siz izlayotgan sahifa mavjud emas yoki manzil noto‘g‘ri kiritilgan.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/#bosh-sahifa" variant="secondary">
                Bosh sahifaga qaytish
              </ButtonLink>
              <TelegramButton label="Telegram orqali bog‘lanish" />
            </div>

            <nav className="mt-10 flex flex-wrap gap-3" aria-label="Foydali havolalar">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md border border-navy-100 bg-white px-4 py-3 text-sm font-semibold text-navy-900 shadow-[0_8px_22px_rgba(10,35,66,0.06)] transition hover:border-electric-400 hover:bg-navy-50 hover:shadow-glow"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="rounded-lg border border-navy-100 bg-white/95 p-8 shadow-soft">
            <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-lg border border-navy-100 bg-navy-50 sm:h-56 sm:w-56">
              <img
                src="/favicon-192.png"
                alt=""
                className="h-32 w-32 object-contain opacity-90 sm:h-40 sm:w-40"
              />
            </div>
            <div className="mt-8 border-t border-navy-100 pt-6">
              <p className="text-sm font-semibold text-navy-900">Kerakli bo‘limga o‘ting</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Tariflar, xizmatlar yoki aloqa bo‘limi orqali kerakli ma’lumotni tez topishingiz mumkin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
