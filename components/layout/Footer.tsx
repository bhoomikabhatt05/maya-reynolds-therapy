import Link from "next/link";
import Container from "./Container";
import { footerNav, footerServices } from "@/lib/nav-data";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/90 pt-16 pb-8">
      <Container>
        <div className="flex flex-col gap-2 mb-8">
          <Link href="/" className="font-serif-heading text-xl text-cream tracking-tight">
            Maya Reynolds<span className="font-light">, PsyD</span>
          </Link>
          <p className="text-xs tracking-[0.16em] uppercase text-cream/60">Licensed Clinical Psychologist • Santa Monica, California</p>
        </div>
        <p className="max-w-2xl text-sm sm:text-base text-cream/70 leading-relaxed mb-12">
          Warm, collaborative, and grounded therapy for adults in Santa Monica and via secure telehealth across California. In-person at 123th Street 45 W, Santa Monica, CA 90401.
        </p>

        <div className="grid sm:grid-cols-3 gap-10 sm:gap-8 text-sm">
          <div>
            <h4 className="font-serif-heading text-lg text-cream mb-4">Navigate</h4>
            <ul className="space-y-2">
              {footerNav.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-cream/70 hover:text-cream transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif-heading text-lg text-cream mb-4">Contact</h4>
            <address className="not-italic text-cream/70 leading-relaxed space-y-1">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
              <p className="pt-2">In-person in Santa Monica</p>
              <p>Secure telehealth across California</p>
              <p className="italic mt-2 text-cream/50 text-xs">Therapy for adults</p>
            </address>
          </div>

          <div>
            <h4 className="font-serif-heading text-lg text-cream mb-4">Services</h4>
            <ul className="space-y-2">
              {footerServices.map((t) => (
                <li key={t.label}>
                  <Link href={t.href} className="text-cream/70 hover:text-cream transition-colors">
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream/15 flex flex-col sm:flex-row gap-3 sm:gap-0 sm:items-center sm:justify-between text-xs text-cream/50">
          <p className="order-2 sm:order-1">© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.</p>
          <p className="order-1 sm:order-2 space-x-2">
            <Link href="#" className="hover:text-cream/80">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-cream/80">
              Disclaimer
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
