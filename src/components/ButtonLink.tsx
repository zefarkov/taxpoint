import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const variants = {
  primary:
    "pulse-cta bg-success-500 text-white shadow-sm hover:bg-success-600 focus-visible:outline-success-500",
  secondary:
    "pulse-cta bg-navy-900 text-white shadow-sm hover:bg-navy-700 focus-visible:outline-navy-700",
  outline:
    "border border-slate-300 bg-white text-navy-900 hover:border-electric-500 hover:bg-navy-50 focus-visible:outline-navy-700"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`;

  if (href.startsWith("http") || href.startsWith("#")) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
