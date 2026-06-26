type FAQProps = {
  question: string;
  answer: string;
};

export function FAQ({ question, answer }: FAQProps) {
  return (
    <details className="group h-full rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-navy-100 hover:shadow-soft">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-bold leading-6 text-navy-900 [&::-webkit-details-marker]:hidden">
        <span>{question}</span>
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-lg leading-none text-navy-700 transition group-open:rotate-45 group-open:border-electric-500 group-open:bg-navy-50">
          +
        </span>
      </summary>
      <div className="overflow-hidden transition-all duration-300 ease-in-out">
        <p className="mt-4 text-sm leading-7 text-slate-600">{answer}</p>
      </div>
    </details>
  );
}
