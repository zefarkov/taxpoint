type ServiceCategoryProps = {
  title: string;
  services: string[];
};

export function ServiceCategory({ title, services }: ServiceCategoryProps) {
  return (
    <article className="rounded-lg border border-navy-100 bg-white p-6 shadow-[0_12px_34px_rgba(10,35,66,0.06)] transition hover:-translate-y-1 hover:border-electric-400 hover:bg-navy-50 hover:shadow-soft">
      <h3 className="text-lg font-bold text-navy-900">{title}</h3>
      <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
        {services.map((service) => (
          <li key={service} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-500" />
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
