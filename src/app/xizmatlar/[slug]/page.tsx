import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { LeadFormModal } from "@/components/LeadFormModal";
import { TelegramButton } from "@/components/TelegramButton";
import { seoServices } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = "https://taxpoint.uz";

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
    title: `${service.title} Farg'ona`,
    description: service.description,
    keywords: [
      service.title,
      "buxgalteriya xizmatlari",
      "soliq hisobotlari",
      "Farg'ona buxgalteriya xizmatlari",
      "YATT ochish",
      "MCHJ ro'yxatdan o'tkazish",
      "TAXPOINT"
    ],
    alternates: {
      canonical: `/xizmatlar/${service.slug}/`
    },
    openGraph: {
      title: `${service.title} — TAXPOINT`,
      description: service.description,
      url: `${siteUrl}/xizmatlar/${service.slug}/`,
      type: "website",
      locale: "uz_UZ",
      siteName: "TAXPOINT",
      images: [
        {
          url: "/brand/logo-main-horizontal.png",
          width: 1600,
          height: 371,
          alt: "TAXPOINT"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} — TAXPOINT`,
      description: service.description,
      images: ["/brand/logo-main-horizontal.png"]
    },
    other: {
      "geo.region": "UZ-FA",
      "geo.placename": "Farg'ona, O'zbekiston"
    }
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = seoServices.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceUrl = `${siteUrl}/xizmatlar/${service.slug}/`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Bosh sahifa",
          item: siteUrl
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Xizmatlar",
          item: `${siteUrl}/#xizmatlar`
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.title,
          item: serviceUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: service.title,
      description: service.description,
      url: serviceUrl,
      provider: {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#localbusiness`,
        name: "TAXPOINT",
        url: siteUrl,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Mustaqillik ko'chasi 193-uy",
          addressLocality: "Farg'ona",
          addressCountry: "UZ"
        }
      },
      areaServed: [
        {
          "@type": "City",
          name: "Farg'ona"
        },
        {
          "@type": "Country",
          name: "Uzbekistan"
        }
      ],
      serviceType: service.title
    }
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Header />
      <main>
        <section className="bg-navy-50 py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <a href="/" className="text-sm font-bold text-electric-600 hover:text-navy-900">
              Bosh sahifaga qaytish
            </a>
            <div className="mt-8 max-w-3xl">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-normal text-electric-600">
                TAXPOINT xizmati
              </p>
              <h1 className="text-4xl font-extrabold tracking-normal text-navy-900 sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-700">{service.description}</p>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Farg'ona buxgalteriya xizmatlari, soliq hisobotlari va biznesni
                rasmiylashtirish bo'yicha TAXPOINT mutaxassislari sizga amaliy yordam beradi.
              </p>
            </div>
            <div className="mt-10 rounded-lg border border-navy-100 bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-bold text-navy-900">Xizmat tarkibi</h2>
              <ul className="mt-6 grid gap-3 leading-7 text-slate-700">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <LeadFormModal context={`XIZMAT: ${service.title}`}>Konsultatsiya olish</LeadFormModal>
              <TelegramButton label="Telegram" />
              <ButtonLink href="/#tariflar" variant="outline">
                Tariflarni ko'rish
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
