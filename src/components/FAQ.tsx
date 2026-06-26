type FAQProps = {
  question: string;
  answer: string;
};

export function FAQ({ question, answer }: FAQProps) {
  return (
    <details className="group h-full rounded-lg border border-navy-100 bg-white p-5 shadow-[0_12px_30px_rgba(10,35,66,0.06)] transition hover:border-electric-400 hover:shadow-soft">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-bold leading-6 text-navy-900 [&::-webkit-details-marker]:hidden">
        <span>{question}</span>
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy-100 bg-navy-50 text-lg leading-none text-navy-700 transition group-open:rotate-45 group-open:border-electric-500 group-open:bg-navy-100">
          +
        </span>
      </summary>
      <div className="overflow-hidden transition-all duration-300 ease-in-out">
        <p className="mt-4 text-sm leading-7 text-slate-600">{answer}</p>
      </div>
    </details>
  );
}
