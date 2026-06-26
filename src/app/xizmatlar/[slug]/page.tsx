import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { consultationHref, seoServices, telegramUrl } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return seoServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = seoServices.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} — TAXPOINT`,
    description: service.description,
    alternates: {
      canonical: `/xizmatlar/${service.slug}`
    }
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = seoServices.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <a href="/" className="text-sm font-bold text-navy-700 hover:text-navy-900">
              Bosh sahifaga qaytish
            </a>
            <div className="mt-8 max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-normal text-navy-700">
                TAXPOINT xizmati
              </p>
              <h1 className="text-4xl font-extrabold tracking-normal text-navy-900 sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">{service.description}</p>
            </div>
            <div className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold text-navy-900">Xizmat tarkibi</h2>
              <ul className="mt-6 grid gap-3 leading-7 text-slate-700">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-success-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={consultationHref}>Konsultatsiya olish</ButtonLink>
              <ButtonLink href={telegramUrl} variant="outline">
                Telegram
              </ButtonLink>
              <ButtonLink href="/#tariflar" variant="outline">
                Tariflarni ko‘rish
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
