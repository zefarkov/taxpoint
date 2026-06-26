import { LeadFormModal } from "@/components/LeadFormModal";

type PricingCardProps = {
  plan: {
    name: string;
    price: string;
    period: string;
    description: string;
    recommended?: boolean;
    features: string[];
  };
};

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-lg border bg-white p-6 shadow-[0_12px_34px_rgba(10,35,66,0.07)] transition hover:-translate-y-1 hover:shadow-soft ${
        plan.recommended ? "border-electric-500 ring-2 ring-electric-400/20" : "border-navy-100 hover:border-electric-400"
      }`}
    >
      {plan.recommended ? (
        <span className="absolute right-5 top-5 rounded-md bg-electric-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
          Eng ko‘p tanlanadi
        </span>
      ) : null}
      <div className="border-b border-navy-100 pb-5">
        <h3 className="text-2xl font-bold text-navy-900">{plan.name}</h3>
        <p className="mt-3 min-h-12 text-sm leading-6 text-slate-700">{plan.description}</p>
      </div>
      <div className="mt-6 min-h-20">
        <span className="block text-3xl font-extrabold leading-tight text-navy-900">{plan.price}</span>
        <span className="ml-1 text-sm font-medium text-slate-600">{plan.period}</span>
      </div>
      <ul className="mt-2 grid gap-3 text-sm leading-6 text-slate-700">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy-100 text-[11px] font-semibold text-electric-600">
              ✓
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <LeadFormModal
        context={`TARIF: ${plan.name} — ${plan.price}`}
        variant={plan.recommended ? "primary" : "outline"}
        className="mt-8 w-full"
      >
        Mutaxassis bilan gaplashish
      </LeadFormModal>
    </article>
  );
}
