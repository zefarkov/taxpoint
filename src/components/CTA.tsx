import { ButtonLink } from "@/components/ButtonLink";
import { consultationHref, phoneNumbers, telegramUrl } from "@/data/site";

export function CTA() {
  return (
    <section className="bg-navy-900 py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
            Buxgalteriyani tartibga keltirishni bugun boshlang
          </h2>
          <p className="mt-4 text-lg leading-8 text-navy-100">
            TAXPOINT sizga hisob, soliq va hujjatlar bilan bog‘liq ishlarni
            tizimli yuritishda yordam beradi.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <ButtonLink href={consultationHref}>Konsultatsiya olish</ButtonLink>
          <ButtonLink href="#tariflar" variant="outline" className="border-white/30 bg-white text-navy-900 hover:bg-navy-50">
            Tariflarni ko‘rish
          </ButtonLink>
          <a
            href={telegramUrl}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/30 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Telegram
          </a>
          <a
            href={phoneNumbers[0].href}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/30 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Qo‘ng‘iroq
          </a>
        </div>
      </div>
    </section>
  );
}
