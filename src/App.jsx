import { SkipLink } from "./components/ui/SkipLink";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { ClinicalView } from "./sections/ClinicalView";
import { Specialties } from "./sections/Specialties";
import { TraumaSection } from "./sections/TraumaSection";
import { ScienceSection } from "./sections/ScienceSection";
import { AboutSection } from "./sections/AboutSection";
import { AppointmentSection } from "./sections/AppointmentSection";
import { FinalCta } from "./sections/FinalCta";

export default function App() {
  return (
    <div className="min-h-screen bg-ivory-100 text-olive-900">
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
