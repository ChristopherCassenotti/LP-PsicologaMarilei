import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Seo } from "../components/seo/Seo";
import { SkipLink } from "../components/ui/SkipLink";
import { seoPages } from "../data/seo";

import { ExperiencesSection } from "../sections/EMDR/ExperiencesSection";
import { FinalCtaSection } from "../sections/EMDR/FinalCtaSection";
import { HeroSection } from "../sections/EMDR/HeroSection";
import { HowEmdrWorksSection } from "../sections/EMDR/HowEmdrWorksSection";
import { ParentsSection } from "../sections/EMDR/ParentsSection";

export default function EmdrInfantil() {
  return (
    <>
      <Seo {...seoPages.emdrInfantil} />
      <SkipLink />
      <Header />

      <main
        id="conteudo-principal"
        className="overflow-hidden bg-ivory-50 text-olive-900"
      >
        <HeroSection />
        <ExperiencesSection />
        <HowEmdrWorksSection />
        <ParentsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
