import { SkipLink } from "../components/ui/SkipLink";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Seo } from "../components/seo/Seo";
import { Hero } from "../sections/Home/Hero";
import { ClinicalView } from "../sections/Home/ClinicalView";
import { Specialties } from "../sections/Home/Specialties";
import { TraumaSection } from "../sections/Home/TraumaSection";
import { ScienceSection } from "../sections/Home/ScienceSection";
import { AboutSection } from "../sections/Home/AboutSection";
import { AppointmentSection } from "../sections/Home/AppointmentSection";
import { FinalCta } from "../sections/Home/FinalCta";
import { seoPages } from "../data/seo";

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory-100 text-olive-900">
      <Seo {...seoPages.home} />
      <SkipLink />
      <Header />

      <main id="conteudo-principal" tabIndex="-1">
        <Hero />
        <ClinicalView />
        <Specialties />
        <TraumaSection />
        <ScienceSection />
        <AboutSection />
        <AppointmentSection />
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}
