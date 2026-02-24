import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import VisualEffects from "../../components/VisualEffects";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <div className="pt-32 md:pt-36">
        <Services />
        <CTA />
      </div>
      <Footer />
    </div>
  );
}
