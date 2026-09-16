import Image from "next/image";
import Container from "../layout/Container";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";

export default function Hero() {
  return (
    <section className="pt-10 sm:pt-14 lg:pt-16 pb-16 lg:pb-20 overflow-hidden bg-cream">
      <Container className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="max-w-xl">
          <Eyebrow>Licensed Clinical Psychologist • Santa Monica, CA • Telehealth Across California</Eyebrow>
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-ink">
            Therapy for adults navigating{" "}
            <em className="italic text-sage-dark font-normal">anxiety, trauma, and burnout</em>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-ink-soft leading-relaxed">
            I work with thoughtful, high-achieving adults in Santa Monica and across California who feel exhausted, stuck in overthinking, or emotionally on edge — and want a steadier, more grounded way forward.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact">Get in Touch</Button>
            <Button href="#services" variant="secondary">
              Explore Services
            </Button>
          </div>
          <p className="mt-4 text-xs tracking-wide text-ink-soft/70">
            In-person in Santa Monica • Secure telehealth throughout California
          </p>
        </div>

        <div className="relative h-[380px] sm:h-[460px] lg:h-[520px]">
          <div className="absolute right-0 top-0 w-[72%] h-[86%] rounded-[20px] overflow-hidden shadow-sm border border-line bg-sand">
            <Image
              src="/images/hero.jpg"
              alt="Warm, approachable presence — calm and human, reflecting Dr. Maya Reynolds' collaborative therapy for adults in Santa Monica"
              fill
              sizes="(min-width: 1024px) 32vw, 60vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute left-0 bottom-0 w-[54%] h-[46%] rounded-[18px] overflow-hidden shadow-sm border-4 border-cream bg-cream">
            <div className="absolute inset-0 bg-sage-light" />
            <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-7">
              <p className="text-[11px] tracking-[0.16em] uppercase text-sage-dark font-semibold">Santa Monica, CA</p>
              <p className="mt-2 font-serif-heading text-xl leading-tight text-ink">
                Grounded support for thoughtful adults
              </p>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                Warm, collaborative, and structured with room for reflection.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
