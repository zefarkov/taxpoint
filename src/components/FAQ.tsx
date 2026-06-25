type FAQProps = {
  question: string;
  answer: string;
};

export function FAQ({ question, answer }: FAQProps) {
  return (
    <details className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-navy-900">
        <span>{question}</span>
        <span className="text-xl leading-none text-navy-700 transition group-open:rotate-45">+</span>
      </summary>
      <p className="mt-4 leading-7 text-slate-600">{answer}</p>
    </details>
  );
}
