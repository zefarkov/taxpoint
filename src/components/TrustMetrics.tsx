import { trustMetrics } from "@/data/site";

export function TrustMetrics() {
  return (
    <section className="border-y border-slate-200 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {trustMetrics.map((metric) => (
          <div key={metric.label} className="rounded-lg border border-white/10 bg-white/[0.07] p-6 shadow-sm">
            <p className="text-4xl font-semibold tracking-normal">{metric.value}</p>
            <p className="mt-2 text-sm font-medium text-navy-100">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
