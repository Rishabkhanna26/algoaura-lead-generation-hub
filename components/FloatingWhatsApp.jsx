import WhatsAppLogo from "./WhatsAppLogo";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918059649659?text=Hi%20AlgoAura,%20I%20just%20submitted%20a%20form."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white flex items-center justify-center shadow-lg shadow-[hsl(142,70%,40%)/0.3] transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppLogo className="w-7 h-7" />
    </a>
  );
}
