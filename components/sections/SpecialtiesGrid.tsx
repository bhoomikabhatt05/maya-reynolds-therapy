import Image from "next/image";
import Container from "../layout/Container";
import Eyebrow from "../ui/Eyebrow";

const services: { id: string; title: string; description: string; points: string[]; image?: string; alt?: string; position?: string }[] = [
  {
    id: "anxiety",
    title: "Anxiety & Panic Therapy",
    description:
      "For adults experiencing constant worry, physical tension, difficulty sleeping, and the sense of always bracing for something to go wrong. Together we explore patterns of overthinking and emotional overwhelm, while building regulation and coping strategies that feel sustainable in daily life.",
    points: ["Constant worry & overthinking", "Physical tension & sleep difficulty", "Feeling on edge or braced"],
    image: "/images/anxiety-panic.jpg",
    alt: "Reflective adult with notebook in a warm, grounded therapy interior — representing anxiety and overthinking in need of steady support",
    position: "object-[50%_18%]",
  },
  {
    id: "trauma",
    title: "Trauma Therapy",
    description:
      "Carefully paced support for single-incident trauma, complex or long-standing trauma, and the lingering effects of childhood and relationship experiences. The work emphasizes safety, stabilization, and regulation — integrating CBT, EMDR, mindfulness and body-oriented techniques while honoring both emotional and physiological experience.",
    points: ["Single-incident & complex trauma", "Childhood & relationship experiences", "Safety, stabilization & regulation"],
    image: "/images/trauma-support-2.jpg",
    alt: "Seated adult in a calm, sunlit therapy interior, evoking careful pacing and safety for trauma work in Santa Monica",
    position: "object-[50%_35%]",
  },
  {
    id: "burnout",
    title: "Burnout & Perfectionism",
    description:
      "For professionals, entrepreneurs, and creatives navigating burnout, perfectionism, and high internal pressure. Therapy can create space to slow down, reconnect, and develop more sustainable ways of living and working — with warmth, structure, and room for reflection.",
    points: ["Professional burnout", "Perfectionism & high internal pressure", "Sustainable rhythms & reconnection"],
    image: "/images/burnout-perfectionism.jpg",
    alt: "Professional reflecting at a calm desk with notebook and laptop, representing burnout and high internal pressure",
    position: "object-[50%_12%]",
  },
];

export default function SpecialtiesGrid() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-cream">
      <Container>
        <div className="max-w-3xl mb-10 lg:mb-10">
          <Eyebrow>Services</Eyebrow>
          <h2 className="font-serif-heading text-3xl sm:text-4xl leading-tight text-ink">
            Focused support for adults — <em className="italic text-sage-dark">anxiety, trauma, and burnout</em>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
            Therapy in Santa Monica, California and via telehealth across California. My practice focuses on three primary areas, offered within a warm, collaborative, and grounded container.
          </p>
        </div>

        <div id="anxiety" className="scroll-mt-24" />
        <div className="grid md:grid-cols-3 gap-6 lg:gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              id={s.id}
              className="group relative flex flex-col rounded-[18px] bg-sand border border-line overflow-hidden shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:border-sage/30 scroll-mt-24"
            >
              {s.image && (
                <div className="relative h-56 w-full overflow-hidden">
                  <Image src={s.image} alt={s.alt || s.title} fill sizes="(min-width: 768px) 30vw, 90vw" className={`object-cover ${s.position || ""} transition-transform duration-300 ease-out group-hover:scale-[1.02]`} />
                </div>
              )}
              <div className="p-6 lg:p-7 flex flex-col flex-1">
                <div className="h-1 w-10 rounded-full bg-clay/70 mb-4" />
                <h3 className="font-serif-heading text-xl text-ink">{s.title}</h3>
                <p className="mt-3 text-sm sm:text-[15px] text-ink-soft leading-relaxed">{s.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-ink-soft">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 rounded-full bg-sage-dark shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 relative w-full aspect-[16/7] rounded-[18px] overflow-hidden border border-line shadow-sm">
          <Image
            src="/images/services-support.jpg"
            alt="Calm therapy office with two chairs, notebook and mug — a grounded space for adult services in Santa Monica"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-8 rounded-xl bg-sage-light border border-line px-5 py-4 text-center">
          <p className="text-sm text-ink-soft">
            All services are for adults and integrate CBT, EMDR, mindfulness-based practices, and body-oriented techniques as clinically appropriate.
          </p>
        </div>
      </Container>
    </section>
  );
}
