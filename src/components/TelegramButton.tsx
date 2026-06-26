import { telegramUrl } from "@/data/site";

type TelegramButtonProps = {
  label?: string;
  compact?: boolean;
  inverted?: boolean;
  className?: string;
};

export function TelegramButton({
  label,
  compact = false,
  inverted = false,
  className = ""
}: TelegramButtonProps) {
  return (
    <a
      href={telegramUrl}
      className={`pulse-telegram inline-flex items-center justify-center gap-2 rounded-md border text-sm font-bold shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-700 ${
        compact ? "h-10 w-10 p-0" : "min-h-11 px-4 py-3"
      } ${
        inverted
          ? "border-white/30 bg-transparent text-white hover:bg-white/10"
          : "border-slate-300 bg-white text-navy-900 hover:border-electric-500 hover:bg-navy-50"
      } ${className}`}
      aria-label={label ? undefined : "Telegram orqali yozish"}
    >
      <img src="/brand/telegram.png" alt="" className="h-5 w-5 object-contain" />
      {label ? <span>{label}</span> : null}
    </a>
  );
}
