import Container from "../layout/Container";
import Reveal from "../ui/Reveal";

export default function QuoteBanner() {
  return (
    <section className="relative py-16 lg:py-24 bg-sage-light border-y border-line overflow-hidden">
      <Container className="flex flex-col items-center text-center">
        <Reveal slow>
          <div className="mb-6 h-1 w-12 mx-auto rounded-full bg-clay/60" aria-hidden="true" />
          <p className="max-w-3xl font-serif-heading text-2xl sm:text-3xl lg:text-[2rem] leading-snug text-ink">
            Therapy works best when you feel respected, understood, and{" "}
            <em className="italic text-sage-dark">actively involved</em> — with practical tools and depth that honors both mind and body.
          </p>
          <p className="mt-4 text-xs tracking-[0.16em] uppercase text-ink-soft">Dr. Maya Reynolds, PsyD — Santa Monica, California</p>
        </Reveal>
      </Container>
    </section>
  );
}
