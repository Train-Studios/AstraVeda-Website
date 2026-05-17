type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function FeatureCard({title, description, icon}: FeatureCardProps) {
  return (
    <article className="glass-card group rounded-[2rem] border border-white/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/5 hover:shadow-[0_24px_80px_rgba(0,0,0,0.2)]">
      <div className="mb-8 grid h-14 w-14 place-items-center rounded-3xl border border-gold/25 bg-gradient-to-br from-gold/15 via-gold/10 to-transparent text-2xl text-gold transition group-hover:bg-gold/15">
        {icon}
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-ivory/70">{description}</p>
    </article>
  );
}
