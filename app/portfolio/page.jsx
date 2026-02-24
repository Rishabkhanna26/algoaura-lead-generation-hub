import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Portfolio from "../../components/Portfolio";
import Testimonials from "../../components/Testimonials";
import VisualEffects from "../../components/VisualEffects";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <div className="pt-32 md:pt-36">
        <Portfolio />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}
