import Image from "next/image";
import Container from "../layout/Container";
import Eyebrow from "../ui/Eyebrow";

export default function HowWeWork() {
  return (
    <section className="py-16 lg:py-24 bg-sand">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative w-full aspect-[4/5] rounded-[22px] overflow-hidden border border-line bg-sand shadow-sm">
            <Image
              src="/images/philosophy-support.jpg"
              alt="Calm therapy interior — sage chair by sunlit window with notebook and plant, evoking warmth and grounded safety"
              fill
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-cream/92 backdrop-blur p-5 border-t border-line">
              <p className="text-[11px] tracking-[0.16em] uppercase text-sage-dark font-semibold">Therapy Philosophy</p>
              <blockquote className="mt-1 font-serif-heading text-lg leading-tight text-ink">
                Insight, resilience, and a stronger relationship with yourself — <em className="italic text-sage-dark">not just symptom relief</em>.
              </blockquote>
            </div>
          </div>

          <div className="order-2">
            <Eyebrow>Therapy Philosophy</Eyebrow>
            <h2 className="font-serif-heading text-3xl sm:text-4xl leading-tight text-ink">
              Practical tools, depth-oriented work, and respect for your pace.
            </h2>
            <p className="mt-5 text-base sm:text-[17px] font-medium text-ink italic font-serif-heading">
              I believe therapy works best when you feel respected, understood, and actively involved.
            </p>
            <p className="mt-4 text-base sm:text-[17px] text-ink-soft leading-relaxed">
              My goal is not only to ease symptoms, but to help you develop insight, resilience, and a stronger relationship with yourself over time. We combine practical tools with depth-oriented exploration, honoring both emotional and physiological experience.
            </p>
            <p className="mt-4 text-base sm:text-[17px] text-ink-soft leading-relaxed">
              Sessions are structured enough to feel supportive while leaving room for reflection and depth. Whether we are working with anxiety and panic, the effects of trauma, or burnout and perfectionism, the work is paced to support safety and stabilization in your everyday life.
            </p>
            <div className="mt-6 rounded-xl bg-cream border border-line p-4">
              <p className="text-sm text-ink-soft leading-relaxed">
                For adults located in California, therapy is available in-person in Santa Monica and via secure telehealth.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
