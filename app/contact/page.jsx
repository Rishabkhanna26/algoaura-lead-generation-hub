import CTA from "../../components/CTA";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import VisualEffects from "../../components/VisualEffects";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <VisualEffects />
      <Navbar />
      <div className="pt-32 md:pt-36">
        <ContactForm />
        <CTA />
      </div>
      <Footer />
    </div>
  );
}
