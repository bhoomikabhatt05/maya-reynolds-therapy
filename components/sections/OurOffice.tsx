import Image from "next/image";
import Container from "../layout/Container";
import Eyebrow from "../ui/Eyebrow";

export default function OurOffice() {
  return (
    <section id="office" className="py-16 lg:py-24 bg-cream scroll-mt-20">
      <Container>
        <div className="max-w-3xl mb-10">
          <Eyebrow>Our Office</Eyebrow>
          <h2 className="font-serif-heading text-3xl sm:text-4xl leading-tight text-ink">
            A calm space for therapy <em className="italic text-sage-dark">in Santa Monica</em>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
            My Santa Monica office is quiet, private, naturally lit, comfortable, uncluttered, and grounding. The space is intentionally calm so you can arrive and feel more at ease — whether you are joining in-person at 123th Street 45 W or connecting via secure telehealth from elsewhere in California.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div className="relative aspect-[4/3] rounded-[18px] overflow-hidden border border-line shadow-sm bg-sand">
            <Image
              src="/images/office-1.jpg"
              alt="Maya Reynolds Santa Monica office — quiet, private, naturally lit therapy space with comfortable seating"
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-[18px] overflow-hidden border border-line shadow-sm bg-sand">
            <Image
              src="/images/office-2.jpg"
              alt="Second view of the Santa Monica therapy office — uncluttered, calming and grounding environment"
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
          <div className="rounded-xl bg-sand border border-line p-4">
            <p className="font-medium text-ink">In-person therapy</p>
            <p className="mt-1 text-ink-soft leading-relaxed">123th Street 45 W, Santa Monica, CA 90401. Quiet, private, and comfortable — designed to help you feel settled upon arrival.</p>
          </div>
          <div className="rounded-xl bg-sand border border-line p-4">
            <p className="font-medium text-ink">Natural light & calm</p>
            <p className="mt-1 text-ink-soft leading-relaxed">Naturally lit, uncluttered, and grounding, with a warm, editorial palette that supports regulation and ease.</p>
          </div>
          <div className="rounded-xl bg-sage-light border border-line p-4">
            <p className="font-medium text-ink">Privacy</p>
            <p className="mt-1 text-ink-soft leading-relaxed">A private setting in Santa Monica, with secure telehealth available across California for adults who prefer remote care.</p>
          </div>
        </div>


      </Container>
    </section>
  );
}
