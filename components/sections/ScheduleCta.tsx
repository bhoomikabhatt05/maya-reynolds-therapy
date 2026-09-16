import Container from "../layout/Container";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

export default function ScheduleCta() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-sand scroll-mt-20">
      <Container className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <Reveal>
          <Eyebrow>Sessions in Santa Monica & Across California</Eyebrow>
          <h2 className="font-serif-heading text-3xl sm:text-4xl leading-tight text-ink">
            In-person in Santa Monica or <em className="italic text-sage-dark">secure telehealth</em> across California
          </h2>
          <p className="mt-5 text-base sm:text-[17px] text-ink-soft leading-relaxed">
            I offer therapy from my Santa Monica office at 123th Street 45 W, Santa Monica, CA 90401 and via secure telehealth for adults located anywhere in California. Sessions are warm, collaborative, and grounded — structured enough to feel supportive while leaving room for reflection and depth.
          </p>
          <p className="mt-4 text-base sm:text-[17px] text-ink-soft leading-relaxed">
            If you are navigating anxiety, panic, trauma, burnout, or perfectionism and are curious about working together, reach out to connect. We will find a time that works and discuss next steps.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="#contact">Get in Touch</Button>
            <span className="self-center text-xs text-ink-soft">Adults • In-person & telehealth</span>
          </div>
        </Reveal>

        <Reveal delay={140} className="rounded-[22px] border border-line bg-cream p-8 sm:p-10 shadow-sm">
          <div className="h-1 w-12 rounded-full bg-clay/60 mb-6" />
          <p className="text-[11px] tracking-[0.16em] uppercase text-sage-dark font-semibold">Visit or Connect Virtually</p>
          <p className="mt-3 font-serif-heading text-2xl leading-tight text-ink">
            One consistent practice — <em className="italic text-sage-dark">in person and online</em>
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl bg-sage-light border border-line p-4">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-sage-dark">In-Person</p>
              <p className="mt-1 font-serif-heading text-lg text-ink">123th Street 45 W</p>
              <p className="text-sm text-ink-soft">Santa Monica, CA 90401</p>
              <p className="mt-2 text-xs text-ink-soft">Quiet, private, naturally lit, and grounding</p>
            </div>
            <div className="rounded-xl bg-sand border border-line p-4">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-sage-dark">Telehealth</p>
              <p className="mt-1 text-sm text-ink-soft leading-relaxed">Secure telehealth for adults located anywhere in California — same warm, collaborative approach.</p>
            </div>
          </div>
          <p className="mt-6 text-xs text-ink-soft/70">Reach out to discuss next steps and find a time that works.</p>
        </Reveal>
      </Container>
    </section>
  );
}
