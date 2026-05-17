type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function FeatureCard({title, description, icon}: FeatureCardProps) {
  return (
    <article className="glass-card group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold">
      <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl border border-gold/25 bg-gold/10 text-xl text-gold transition group-hover:bg-gold/15">
        {icon}
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-ivory/62">{description}</p>
    </article>
  );
}
