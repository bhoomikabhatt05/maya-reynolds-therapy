import Image from "next/image";
import Container from "../layout/Container";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";

export default function Hero() {
  return (
    <section className="pt-10 sm:pt-14 lg:pt-16 pb-16 lg:pb-20 overflow-hidden bg-cream">
      <Container className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">
        <div className="hero-anim hero-anim-1 relative order-1 w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto lg:h-[560px] rounded-[20px] overflow-hidden shadow-sm border border-line bg-sand">
          <Image
            src="/images/hero.jpg"
            alt="Warm, approachable presence — calm and human, reflecting Dr. Maya Reynolds' collaborative therapy for adults in Santa Monica"
            fill
              sizes="(min-width: 1024px) 44vw, 90vw"
              className="object-cover hero-img"
              priority
          />
        </div>

        <div className="order-2 max-w-xl">
          <div className="hero-anim hero-anim-1">
            <Eyebrow>Licensed Clinical Psychologist • Santa Monica, CA • Telehealth Across California</Eyebrow>
          </div>
          <h1 className="hero-anim hero-anim-2 font-serif-heading text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-ink">
            Therapy for adults navigating{" "}
            <em className="italic text-sage-dark font-normal">anxiety, trauma, and burnout</em>
          </h1>
          <p className="hero-anim hero-anim-3 mt-6 text-base sm:text-lg text-ink-soft leading-relaxed">
            I work with thoughtful, high-achieving adults in Santa Monica and across California who feel exhausted, stuck in overthinking, or emotionally on edge — and want a steadier, more grounded way forward.
          </p>
          <div className="hero-anim hero-anim-4 mt-8 flex flex-wrap gap-3">
            <Button href="#contact">Get in Touch</Button>
            <Button href="#services" variant="secondary">
              Explore Services
            </Button>
          </div>
          <p className="hero-anim hero-anim-5 mt-4 text-xs tracking-wide text-ink-soft/70">
            In-person in Santa Monica • Secure telehealth throughout California
          </p>
        </div>
      </Container>
    </section>
  );
}
