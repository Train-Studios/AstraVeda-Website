export function CosmicBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-hero-radial">
      <div className="absolute left-1/2 top-[-18rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-gold/10" />
      <div className="absolute left-1/2 top-[-12rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full border border-gold/10" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute left-[8%] top-[18%] h-1 w-1 rounded-full bg-gold/60 shadow-[0_0_24px_rgba(212,175,55,.7)]" />
      <div className="absolute right-[16%] top-[28%] h-1.5 w-1.5 rounded-full bg-ivory/45" />
      <div className="absolute bottom-[22%] left-[22%] h-1 w-1 rounded-full bg-gold/40" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,.035)_1px,transparent_1px)] bg-[size:88px_88px] opacity-20 [mask-image:radial-gradient(circle_at_50%_18%,black,transparent_68%)]" />
    </div>
  );
}
