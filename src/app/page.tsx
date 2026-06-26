import { CTA } from "@/components/CTA";
import { ClientsSection } from "@/components/ClientsSection";
import { ContactSection } from "@/components/ContactSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PricingCard } from "@/components/PricingCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCategory } from "@/components/ServiceCategory";
import { TrustMetrics } from "@/components/TrustMetrics";
import { consultationHref, faqs, pricingPlans, serviceCategories } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";

const problems = [
  "Hisobotlarni kech topshirish xavfi",
  "Soliq jarimalari",
  "Hujjatlarda tartibsizlik",
  "1C / Soliq kabinet / Didox / Faktura bilan muammolar",
  "Rahbarning vaqtini buxgalteriyaga sarflashi"
];

const whyTaxpoint = [
  "Hisobotlar muddatida topshiriladi",
  "Soliq xavflari kamayadi",
  "Rahbar vaqtini tejaydi",
  "Hujjatlar tartibga keltiriladi",
  "Elektron tizimlar sozlanadi",
  "Oylik doimiy xizmat yoki bir martalik yordam"
];

const processSteps = [
  "Siz murojaat qilasiz",
  "Biz holatni o‘rganamiz",
  "Mos tarif yoki xizmatni tanlaymiz",
  "Hisob, hisobot va hujjatlar tartibga olinadi"
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientsSection />
        <TrustMetrics />

        <section className="section-padding bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <SectionHeading
                eyebrow="Muammo"
                title="Buxgalteriya nazoratdan chiqsa, biznes sekinlashadi"
                description="Hisobotlar, soliq kabineti va hujjatlar tartibi kundalik ishga aylanganda rahbar strategik qarorlar o‘rniga operatsion muammolar bilan band bo‘lib qoladi."
              />
              <div className="grid gap-3">
                {problems.map((problem) => (
                  <div key={problem} className="rounded-lg border border-navy-100 bg-navy-50 p-5 font-semibold text-navy-800 shadow-[0_12px_30px_rgba(10,35,66,0.06)] transition hover:border-electric-400 hover:bg-white hover:shadow-soft">
                    {problem}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="tariflar" className="section-padding bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Tariflar"
              title="Buxgalterlik hisobini yuritish"
              description="Korxona hajmi, operatsiyalar soni va soliq rejimiga qarab mos tarif tanlanadi. Mutaxassis holatingizni ko‘rib, eng maqbul yechimni tavsiya qiladi."
              align="center"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {pricingPlans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </div>
          </div>
        </section>

        <section id="royxatdan-otkazish" className="section-padding bg-navy-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Ro‘yxatdan o‘tkazish"
              title="YATT va MCHJ ro‘yxatdan o‘tkazish"
              description="Biznesni boshlash uchun hujjatlar, soliq kalitlari va hisobga qo‘yish jarayonlarini tartibli tayyorlashda yordam beramiz."
              align="center"
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <article className="rounded-lg border border-navy-100 bg-white p-7 shadow-soft">
                <h3 className="text-2xl font-bold text-navy-900">YATT</h3>
                <ul className="mt-6 grid gap-3 leading-7 text-slate-700">
                  {[
                    "YATTni davlat organlaridan ro‘yxatdan o‘tkazish",
                    "Kerakli hujjatlarni tayyorlash",
                    "Tegishli ko‘rsatmalar berish"
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-lg border border-navy-100 bg-white p-7 shadow-soft">
                <h3 className="text-2xl font-bold text-navy-900">MCHJ</h3>
                <ul className="mt-6 grid gap-3 leading-7 text-slate-700">
                  {[
                    "MCHJ ro‘yxatdan o‘tkazish uchun kerakli hujjatlarni tayyorlash",
                    "Rahbarga soliq kaliti olish",
                    "Korxonaga soliq kaliti olish",
                    "Bank hisob raqam ochish uchun hujjatlarni tayyorlash",
                    "Ro‘yxatdan o‘tgandan keyin hisobga qo‘yish"
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            <div className="mt-10 text-center">
              <ButtonLink href={consultationHref}>
                Ro‘yxatdan o‘tkazish bo‘yicha maslahat olish
              </ButtonLink>
            </div>
          </div>
        </section>

        <section id="xizmatlar" className="section-padding bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Xizmatlar"
              title="Qo‘shimcha buxgalteriya va soliq xizmatlari"
              description="Bir martalik vazifalar, elektron tizimlar, kadrlar hujjatlari va soliq hisobotlari bo‘yicha alohida yordam."
              align="center"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {serviceCategories.map((category) => (
                <ServiceCategory key={category.title} {...category} />
              ))}
            </div>
            <p className="mt-8 rounded-lg border border-navy-100 bg-navy-50 p-4 text-center text-sm font-semibold text-navy-800 shadow-[0_10px_26px_rgba(10,35,66,0.05)]">
              Narx xizmat hajmi va murakkabligiga qarab kelishiladi.
            </p>
          </div>
        </section>

        <section className="section-padding bg-navy-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Nega TAXPOINT"
              title="Hisob, soliq va hujjatlarda tartib"
              description="TAXPOINT biznes uchun muhim jarayonlarni nazoratga olib, rahbarning vaqtini asosiy ishga qaytarishga yordam beradi."
              align="center"
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whyTaxpoint.map((item) => (
                <div key={item} className="rounded-lg border border-navy-100 bg-white p-5 font-semibold text-navy-900 shadow-[0_12px_30px_rgba(10,35,66,0.06)] transition hover:-translate-y-1 hover:border-electric-400 hover:shadow-soft">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Jarayon"
              title="Hamkorlik oddiy va tushunarli boshlanadi"
              align="center"
            />
            <div className="mt-12 grid gap-5 md:grid-cols-4">
              {processSteps.map((step, index) => (
                <article key={step} className="rounded-lg border border-navy-100 bg-white p-6 shadow-[0_12px_30px_rgba(10,35,66,0.06)] transition hover:-translate-y-1 hover:border-electric-400 hover:shadow-soft">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-900 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(10,35,66,0.18)]">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-lg font-bold leading-7 text-navy-900">{step}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="savollar" className="section-padding bg-navy-50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Savollar"
              title="Ko‘p so‘raladigan savollar"
              description="Tariflar, ro‘yxatdan o‘tkazish va elektron xizmatlar bo‘yicha qisqa javoblar."
              align="center"
            />
            <div className="mt-10 grid items-start gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <FAQ key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
