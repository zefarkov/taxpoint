type ServiceCategoryProps = {
  title: string;
  services: string[];
};

export function ServiceCategory({ title, services }: ServiceCategoryProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-navy-200 hover:shadow-soft">
      <h3 className="text-lg font-semibold text-navy-900">{title}</h3>
      <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
        {services.map((service) => (
          <li key={service} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-700" />
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
