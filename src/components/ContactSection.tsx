import { ButtonLink } from "@/components/ButtonLink";
import { PhoneModal } from "@/components/PhoneModal";
import { TelegramButton } from "@/components/TelegramButton";
import {
  address,
  consultationHref,
  googleMapsUrl,
  yandexMapsUrl
} from "@/data/site";

export function ContactSection() {
  return (
    <section id="contact-form" className="section-padding bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-normal text-navy-700">
            Aloqa
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy-900 sm:text-4xl">
            Mutaxassis bilan bog‘laning
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Hisob, soliq yoki ro‘yxatdan o‘tkazish bo‘yicha holatingizni ayting.
            TAXPOINT mutaxassisi mos tarif yoki xizmatni tanlashga yordam beradi.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={consultationHref} variant="secondary">
              Konsultatsiya olish
            </ButtonLink>
            <TelegramButton label="Telegram orqali yozish" />
          </div>
        </div>

        <div className="rounded-lg border border-navy-100 bg-white p-6 shadow-soft">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-sm font-bold text-slate-500">Telefon</p>
              <PhoneModal className="mt-3 w-full" />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-500">Manzil</p>
              <p className="mt-3 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium leading-6 text-navy-900">
                {address}
              </p>
              <div className="mt-3 grid gap-2">
                <a
                  href={googleMapsUrl}
                  className="rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-navy-900 transition hover:border-electric-500 hover:bg-navy-50"
                >
                  Google Maps
                </a>
                <a
                  href={yandexMapsUrl}
                  className="rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-navy-900 transition hover:border-electric-500 hover:bg-navy-50"
                >
                  Yandex Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
