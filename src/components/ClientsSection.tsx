import { clientCategories, clientLogoPlaceholders } from "@/data/site";

const marqueeItems = [...clientLogoPlaceholders, ...clientLogoPlaceholders];

export function ClientsSection() {
  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-normal text-navy-700">
            Ishonch
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-navy-900 sm:text-4xl">
            Biz bilan ishlayotganlar
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Turli yo‘nalishdagi bizneslar TaxPoint xizmatlaridan foydalanadi
          </p>
        </div>

        <div className="mt-10 border-y border-slate-200 py-5">
          <div className="marquee group">
            <div className="marquee-track">
              {marqueeItems.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex h-16 min-w-40 items-center justify-center rounded-lg border border-slate-200 bg-white px-6 text-sm font-semibold text-navy-900 opacity-85 shadow-sm transition group-hover:opacity-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {clientCategories.map((category) => (
            <article
              key={category}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-navy-200 hover:bg-white hover:shadow-soft"
            >
              <h3 className="text-base font-semibold leading-6 text-navy-900">{category}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
