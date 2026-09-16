import Image from "next/image";
import Container from "../layout/Container";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

export default function IntroSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-cream">
      <Container>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
          <Reveal className="max-w-2xl">
            <Eyebrow>About Dr. Maya Reynolds, PsyD</Eyebrow>
            <h2 className="font-serif-heading text-3xl sm:text-4xl leading-tight text-ink">
              Warm, collaborative therapy for adults who feel strong on the outside — and <em className="italic text-sage-dark">exhausted within</em>.
            </h2>
            <p className="mt-6 text-base sm:text-[17px] text-ink-soft leading-relaxed">
              I&apos;m Dr. Maya Reynolds, a Licensed Clinical Psychologist based in Santa Monica, California. I work with adults navigating anxiety, panic, trauma, burnout, perfectionism, and the lingering effects of past experiences — including childhood and relationship experiences — that shape how you feel about yourself, your relationships, and your sense of safety.
            </p>
            <p className="mt-4 text-base sm:text-[17px] text-ink-soft leading-relaxed">
              Many of my clients are high-achieving, thoughtful, and self-aware — yet internally they feel stuck in overthinking, constantly worried, physically tense, sleeping poorly, and as if they are always bracing for something to go wrong.
            </p>
            <p className="mt-4 text-base sm:text-[17px] text-ink-soft leading-relaxed">
              Earlier life experiences can quietly affect confidence, relationships, and your nervous system. Together, we work to understand both the emotional and physiological patterns underneath, so change feels not just conceptual, but embodied.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl bg-sand border border-line p-4">
                <p className="font-medium text-ink">Location</p>
                <p className="mt-1 text-ink-soft leading-relaxed">
                  Santa Monica, CA — in-person at 123th Street 45 W, Santa Monica, CA 90401 and secure telehealth across California.
                </p>
              </div>
              <div className="rounded-xl bg-sage-light border border-line p-4">
                <p className="font-medium text-ink">Works with</p>
                <p className="mt-1 text-ink-soft">Adults</p>
                <p className="mt-2 font-medium text-ink">Focus</p>
                <p className="text-ink-soft">Anxiety, panic, trauma, burnout, perfectionism, stress, high internal pressure</p>
              </div>
            </div>
          </Reveal>

          <div className="relative">
            <Reveal variant="image" className="relative w-full aspect-[4/5] rounded-[22px] overflow-hidden shadow-sm border border-line bg-sand">
              <Image
                src="/images/maya-reynolds.jpg"
                alt="Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist in Santa Monica, California"
                fill
                sizes="(min-width: 1024px) 36vw, 90vw"
                className="object-cover object-top"
                priority
              />
            </Reveal>
            <div className="mt-3 text-center">
              <p className="font-serif-heading text-lg text-ink">Dr. Maya Reynolds, PsyD</p>
              <p className="text-xs tracking-[0.14em] uppercase text-ink-soft">Licensed Clinical Psychologist</p>
            </div>
            <div className="absolute -z-10 -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-clay-light border border-line hidden lg:block" />
          </div>
        </div>

        <div className="mt-10 lg:mt-14 rounded-[18px] bg-sage-light border border-line px-6 sm:px-8 py-8 sm:py-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-serif-heading text-xl sm:text-2xl leading-snug text-ink">
              Clients often share that the <em className="italic text-sage-dark">space itself</em> helps them feel more at ease when they arrive.
            </p>
            <p className="mt-3 text-sm text-ink-soft">
              Quiet, private, naturally lit, and grounding — preview the office below.
            </p>
            <div className="mt-4 h-1 w-12 mx-auto rounded-full bg-clay/40" />
          </div>
        </div>
      </Container>
    </section>
  );
}
