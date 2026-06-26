import { LeadFormModal } from "@/components/LeadFormModal";
import { PhoneModal } from "@/components/PhoneModal";
import { TelegramButton } from "@/components/TelegramButton";
import { address, googleMapsUrl, yandexMapsUrl } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contact-form" className="section-padding bg-gradient-to-b from-white via-navy-50 to-navy-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-navy-100 bg-gradient-to-br from-white via-[#F8FBFF] to-navy-50 shadow-[0_28px_90px_rgba(10,35,66,0.14)]">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
              <p className="text-sm font-extrabold uppercase tracking-normal text-electric-600">
                ALOQA
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-normal text-navy-900 sm:text-4xl lg:text-5xl">
                Mutaxassis bilan bog'laning
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                Hisob, soliq yoki ro'yxatdan o'tkazish bo'yicha holatingizni ayting.
                TAXPOINT mutaxassisi sizga mos yechimni tavsiya qiladi.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <LeadFormModal context="KONSULTATSIYA" variant="secondary" className="min-w-[190px]">
                  Konsultatsiya olish
                </LeadFormModal>
                <TelegramButton compact className="h-11 w-11" />
                <PhoneModal className="min-w-[170px]" />
              </div>
            </div>

            <div className="border-t border-navy-100 bg-navy-900 p-6 text-white sm:p-8 lg:border-l lg:border-t-0 lg:p-10 xl:p-12">
              <div className="rounded-xl border border-white/10 bg-white/[0.08] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.16)] sm:p-6">
                <p className="text-sm font-extrabold uppercase tracking-normal text-electric-400">
                  Manzil
                </p>
                <p className="mt-4 text-lg font-bold leading-8 text-white">
                  {address}
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <a
                    href={googleMapsUrl}
                    className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/20 bg-white px-4 py-3 text-sm font-extrabold text-navy-900 shadow-[0_10px_24px_rgba(0,0,0,0.14)] transition hover:border-electric-400 hover:bg-navy-50 hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-400"
                  >
                    Google Maps
                  </a>
                  <a
                    href={yandexMapsUrl}
                    className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm font-extrabold text-white transition hover:border-electric-400 hover:bg-white/15 hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-400"
                  >
                    Yandex Maps
                  </a>
                </div>
              </div>
              <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm font-semibold leading-6 text-navy-100">
                  Telefon raqamlar to'g'ridan-to'g'ri ko'rsatilmaydi. Qo'ng'iroq tugmasi orqali qulay raqamni tanlang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
