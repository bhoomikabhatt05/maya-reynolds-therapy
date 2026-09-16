"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms (e.g. 0, 120, 180) */
  delay?: number;
  /** "fade" for content blocks, "image" for photography (subtle settle) */
  variant?: "fade" | "image";
  /** Slower, more elegant timing for quotes */
  slow?: boolean;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "fade",
  slow = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const fallback = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(fallback);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass = variant === "image" ? "reveal-img" : "";

  return (
    <div
      ref={ref}
      className={`reveal ${variantClass} ${visible ? "is-visible" : ""} ${className}`}
      style={{
        transitionDelay: delay > 0 ? `${delay}ms` : undefined,
        transitionDuration: slow ? "0.95s" : undefined,
      }}
    >
      {children}
    </div>
  );
}
