import Image from "next/image";
import Container from "../layout/Container";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

const groups = [
  {
    title: "When worry takes over",
    description:
      "Constant worry, physical tension, difficulty sleeping, and feeling like you are always bracing for something to go wrong. For high-achieving adults who do a lot, yet feel stuck in overthinking and emotionally on edge.",
  },
  {
    title: "High pressure & perfectionism",
    description:
      "Professional burnout, perfectionism, and high internal pressure — often seen in entrepreneurs, creatives, and professionals who hold themselves to relentless standards and struggle to slow down.",
  },
  {
    title: "Past experiences still present",
    description:
      "Earlier life experiences — including childhood and relationship experiences — that continue to affect relationships, confidence, and sense of safety. We explore them at a careful, collaborative pace.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="py-16 lg:py-24 bg-sand">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-10">
          <div>
            <Eyebrow>Who I Work With</Eyebrow>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-ink">
              Therapy for adults in Santa Monica navigating <em className="italic text-sage-dark">anxiety, stress, and the weight of past experiences</em>.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
              I work exclusively with adults. Many are thoughtful, self-aware, and high-achieving — including professionals, entrepreneurs, and creatives — yet quietly feel exhausted, tense, and disconnected from a steadier sense of self.
            </p>
          </div>
          <Reveal variant="image" className="group relative aspect-[4/3] rounded-[18px] overflow-hidden border border-line shadow-sm bg-cream">
            <Image
              src="/images/who-support.jpg"
              alt="Calm, reflective adult with notebook in a warm therapy interior — representing thoughtful adults navigating stress and overthinking"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-[50%_25%]"
            />
          </Reveal>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 120} className="h-full">
              <div className="h-full rounded-[18px] bg-cream border border-line p-6 sm:p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:border-sage/30">
                <div className="h-9 w-9 rounded-full bg-sage-light border border-line flex items-center justify-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-sage-dark" />
                </div>
                <h3 className="mt-4 font-serif-heading text-xl text-ink">{g.title}</h3>
                <p className="mt-3 text-sm sm:text-[15px] text-ink-soft leading-relaxed">{g.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
