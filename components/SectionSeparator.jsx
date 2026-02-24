export default function SectionSeparator({ label }) {
  return (
    <div className="relative py-6 md:py-8 px-4 md:px-8" aria-hidden="true">
      <div className="container-narrow relative">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-12 bg-primary/10 blur-2xl" />
        <div className="relative mx-auto w-fit rounded-full border border-primary/30 bg-card/65 backdrop-blur-xl px-4 py-1.5">
          <span className="terminal-text text-[10px] uppercase tracking-[0.24em] text-primary/80">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
