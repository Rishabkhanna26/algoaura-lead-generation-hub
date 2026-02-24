import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Process from "../../components/Process";
import VisualEffects from "../../components/VisualEffects";

export default function ProtocolPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <div className="pt-32 md:pt-36">
        <Process />
      </div>
      <Footer />
    </div>
  );
}
