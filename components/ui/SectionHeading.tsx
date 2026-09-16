import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  as?: "h1" | "h2" | "h3";
  size?: "lg" | "md" | "sm";
  align?: "left" | "center";
  children: ReactNode;
  className?: string;
};

const sizeStyles: Record<string, string> = {
  lg: "text-4xl sm:text-5xl lg:text-6xl leading-[1.1]",
  md: "text-3xl sm:text-4xl leading-tight",
  sm: "text-xl sm:text-2xl leading-snug",
};

export default function SectionHeading({
  eyebrow,
  as = "h2",
  size = "md",
  align = "left",
  children,
  className = "",
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="mb-3 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-teal-dark">
          {eyebrow}
        </p>
      )}
      <Tag
        className={`font-serif-heading text-ink ${sizeStyles[size]} ${className}`}
      >
        {children}
      </Tag>
    </div>
  );
}
