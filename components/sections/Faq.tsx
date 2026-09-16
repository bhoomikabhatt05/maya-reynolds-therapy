import Container from "../layout/Container";
import Eyebrow from "../ui/Eyebrow";

const faqs = [
  {
    q: "Who does Dr. Maya Reynolds work with?",
    a: "Dr. Reynolds works exclusively with adults, including thoughtful, self-aware, and high-achieving adults such as professionals, entrepreneurs, and creatives.",
  },
  {
    q: "What concerns does she support?",
    a: "Anxiety, panic, trauma, burnout, perfectionism, stress, high internal pressure, and the lingering effects of past experiences — including childhood, relationship, and chronic-stress experiences.",
  },
  {
    q: "Do you offer in-person therapy?",
    a: "Yes. In-person therapy is offered from the Santa Monica office at 123th Street 45 W, Santa Monica, CA 90401 — a quiet, private, naturally lit, and grounding space.",
  },
  {
    q: "Is telehealth available?",
    a: "Yes. Secure telehealth sessions are available for adults located anywhere in California, with the same warm, collaborative, and grounded approach.",
  },
  {
    q: "What therapeutic approaches do you use?",
    a: "Cognitive Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques — paced carefully, with an emphasis on safety, stabilization, and regulation in everyday life.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-cream scroll-mt-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 items-start">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>Common Questions</Eyebrow>
            <h2 className="font-serif-heading text-3xl sm:text-4xl leading-tight text-ink">
              Questions about therapy <em className="italic text-sage-dark">in Santa Monica</em>
            </h2>
            <p className="mt-4 text-base text-ink-soft leading-relaxed">
              Brief answers about working together — all grounded in Dr. Reynolds&apos; practice for adults in Santa Monica and across California.
            </p>
          </div>
          <div className="divide-y divide-line border-t border-b border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5 px-4 -mx-4 rounded-xl transition-colors duration-200 hover:bg-sand/60">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-serif-heading text-lg sm:text-xl text-ink hover:text-sage-dark transition-colors focus-visible:outline-2 focus-visible:outline-sage-dark focus-visible:outline-offset-4 rounded [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <span aria-hidden="true" className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-sand text-sage-dark transition-all duration-200 group-hover:border-sage-dark/40 group-hover:bg-sage-light group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm sm:text-[15px] text-ink-soft leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
