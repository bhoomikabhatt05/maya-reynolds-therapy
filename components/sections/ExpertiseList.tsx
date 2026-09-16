import Container from "../layout/Container";
import Eyebrow from "../ui/Eyebrow";

const approaches = [
  { label: "Cognitive Behavioral Therapy (CBT)" },
  { label: "EMDR" },
  { label: "Mindfulness-based practices" },
  { label: "Body-oriented techniques" },
];

export default function ExpertiseList() {
  return (
    <section id="approach" className="py-16 lg:py-24 bg-cream">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>How I Work</Eyebrow>
          <h3 className="font-serif-heading text-2xl sm:text-3xl text-ink">
            A warm, collaborative, and <em className="italic text-sage-dark">grounded</em> approach
          </h3>
          <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
            Sessions are structured enough to feel supportive while leaving room for reflection and depth. I integrate Cognitive Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, considering both emotional and physiological experiences with attention to regulation in everyday life.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-10 divide-y divide-line border-t border-b border-line bg-sand/40 rounded-xl overflow-hidden">
          {approaches.map((item) => (
            <div key={item.label} className="py-4 text-center px-4">
              <span className="font-serif-heading text-lg sm:text-xl text-sage-dark">{item.label}</span>
            </div>
          ))}
        </div>
        <p className="max-w-2xl mx-auto mt-6 text-center text-sm text-ink-soft leading-relaxed">
          The work emphasizes safety, stabilization, and regulation — especially when exploring anxiety, trauma, and high internal pressure.
        </p>
      </Container>
    </section>
  );
}
