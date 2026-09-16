import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm tracking-wide transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-sage-dark text-cream hover:bg-ink"
      : "bg-transparent text-ink border border-ink/30 hover:bg-ink hover:text-cream";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
