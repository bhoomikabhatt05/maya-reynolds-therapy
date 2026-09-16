import Hero from "@/components/sections/Hero";
import IntroSection from "@/components/sections/IntroSection";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import QuoteBanner from "@/components/sections/QuoteBanner";
import ExpertiseList from "@/components/sections/ExpertiseList";
import HowWeWork from "@/components/sections/HowWeWork";
import SpecialtiesGrid from "@/components/sections/SpecialtiesGrid";
import OurOffice from "@/components/sections/OurOffice";
import Faq from "@/components/sections/Faq";
import ScheduleCta from "@/components/sections/ScheduleCta";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <WhoWeHelp />
      <QuoteBanner />
      <ExpertiseList />
      <HowWeWork />
      <SpecialtiesGrid />
      <OurOffice />
      <Faq />
      <ScheduleCta />
    </>
  );
}
