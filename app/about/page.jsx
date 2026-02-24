import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProblemSection from "../../components/ProblemSection";
import Process from "../../components/Process";
import SectionSeparator from "../../components/SectionSeparator";
import SolutionSection from "../../components/SolutionSection";
import VisualEffects from "../../components/VisualEffects";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <div className="pt-32 md:pt-36">
        <ProblemSection />
        <SectionSeparator label="Recovery" />
        <SolutionSection />
        <SectionSeparator label="Protocol" />
        <Process />
      </div>
      <Footer />
    </div>
  );
}
