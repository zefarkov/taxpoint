import { readdirSync } from "node:fs";
import path from "node:path";
import { clientCategories } from "@/data/site";

function getClientLogos() {
  const clientsDir = path.join(process.cwd(), "public", "clients");

  try {
    return readdirSync(clientsDir)
      .filter((file) => file.toLowerCase().endsWith(".png"))
      .sort((a, b) => a.localeCompare(b))
      .map((file) => ({
        file,
        src: `/clients/${encodeURIComponent(file)}`,
        name: file.replace(/\.png$/i, "").replace(/[-_]+/g, " ")
      }));
  } catch {
    return [];
  }
}

export function ClientsSection() {
  const logos = getClientLogos();
  const marqueeItems = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-normal text-navy-700">
            Ishonch
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy-900 sm:text-4xl">
            Biz bilan ishlayotganlar
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            TAXPOINT xizmatlaridan foydalanayotgan bizneslar
          </p>
        </div>

        {logos.length > 0 ? (
          <div className="mt-10 border-y border-slate-200 py-6">
            <div className="marquee group">
              <div className="marquee-track">
                {marqueeItems.map((logo, index) => (
                  <div
                    key={`${logo.file}-${index}`}
                    className="flex h-24 min-w-[230px] items-center justify-center rounded-lg border border-slate-200 bg-white px-7 shadow-sm opacity-85 transition duration-200 group-hover:opacity-100 sm:min-w-[280px] lg:min-w-[320px]"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-12 w-auto max-w-[190px] object-contain sm:max-h-14 sm:max-w-[230px] lg:max-w-[260px]"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {clientCategories.map((category) => (
            <article
              key={category}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-navy-200 hover:bg-white hover:shadow-soft"
            >
              <h3 className="text-base font-bold leading-6 text-navy-900">{category}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
