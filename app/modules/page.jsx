import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import VisualEffects from "../../components/VisualEffects";

export default function ModulesPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <div className="pt-32 md:pt-36">
        <Services />
      </div>
      <Footer />
    </div>
  );
}
