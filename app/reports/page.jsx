import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Portfolio from "../../components/Portfolio";
import VisualEffects from "../../components/VisualEffects";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <div className="pt-32 md:pt-36">
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}
