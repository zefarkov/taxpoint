import { ButtonLink } from "@/components/ButtonLink";
import { PhoneModal } from "@/components/PhoneModal";
import { TelegramButton } from "@/components/TelegramButton";
import { consultationHref } from "@/data/site";

export function CTA() {
  return (
    <section className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-normal sm:text-4xl">
            Buxgalteriyani tartibga keltirishni bugun boshlang
          </h2>
          <p className="mt-4 text-lg leading-8 text-navy-100">
            TAXPOINT sizga hisob, soliq va hujjatlar bilan bog‘liq ishlarni
            tizimli yuritishda yordam beradi.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <ButtonLink href={consultationHref}>Konsultatsiya olish</ButtonLink>
          <ButtonLink href="#tariflar" variant="outline" className="border-white/30 bg-white text-navy-900 hover:bg-navy-50 hover:shadow-glow">
            Tariflarni ko‘rish
          </ButtonLink>
          <TelegramButton label="Telegram" inverted />
          <PhoneModal className="border-white/30 bg-transparent text-white hover:bg-white/10 sm:min-w-40" />
        </div>
      </div>
    </section>
  );
}
