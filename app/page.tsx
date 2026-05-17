import Image from 'next/image';
import Link from 'next/link';
import {FeatureCard} from '@/components/FeatureCard';
import {MotionReveal} from '@/components/MotionReveal';

const features = [
  {
    title: 'AI Astrology Chat',
    description: 'Ask naturally and receive calm, contextual guidance rooted in your saved birth chart.',
    icon: '✦',
  },
  {
    title: 'Kundli Insights',
    description: 'Understand signs, houses, Dasha, yogas, doshas, and chart patterns in simple language.',
    icon: '◇',
  },
  {
    title: 'Compatibility Matching',
    description: 'Explore Ashta Koota, Kuja, Nadi, Bhakoot, emotional alignment, and practical relationship context.',
    icon: '♡',
  },
  {
    title: 'Daily Guidance',
    description: 'Receive a focused daily reflection for work, emotions, timing, and steady decision making.',
    icon: '☉',
  },
  {
    title: 'Multilingual Support',
    description: 'Designed for Indian users with support for English and major Indian languages.',
    icon: 'अ',
  },
];

const trustItems = [
  'Birth details are used to personalize astrology features and saved profiles.',
  'AI responses are clearly interpretive and informational, not professional advice.',
  'The experience is designed to feel calm, respectful, and emotionally safe.',
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-20 pt-20 sm:px-8 sm:pt-28 lg:pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
          <MotionReveal>
            <div>
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_18px_rgba(212,175,55,.9)]" />
                Vedic guidance, reimagined
              </div>
              <h1 className="max-w-4xl text-balance text-6xl font-semibold tracking-[-0.07em] text-white sm:text-7xl lg:text-8xl">
                Ancient Wisdom.
                <span className="block text-gold">Modern Intelligence.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-ivory/70 sm:text-xl">
                AI-powered Vedic guidance personalized to your birth chart.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#download"
                  className="rounded-full bg-gradient-to-r from-[#F8DA72] via-gold to-[#A9831F] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-ink shadow-gold transition hover:-translate-y-0.5">
                  Download on Google Play
                </Link>
                <span className="rounded-full border border-ivory/[0.14] bg-white/5 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-ivory/72">
                  Coming Soon on iOS
                </span>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12}>
            <div className="relative mx-auto aspect-square w-full max-w-[31rem]">
              <div className="absolute inset-0 rounded-full border border-gold/20" />
              <div className="absolute inset-10 rounded-full border border-gold/10" />
              <div className="absolute inset-20 rounded-full border border-gold/10" />
              <div className="glass-card absolute inset-12 grid place-items-center rounded-full">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,.14),transparent_58%)]" />
                <Image
                  src="/logo.png"
                  alt="AstraVeda"
                  width={220}
                  height={220}
                  priority
                  className="relative rounded-full drop-shadow-[0_0_38px_rgba(212,175,55,.28)]"
                />
              </div>
              <div className="absolute bottom-10 left-4 rounded-3xl border border-gold/20 bg-ink/72 p-4 text-sm text-ivory/70 backdrop-blur-xl">
                Private by design
              </div>
              <div className="absolute right-0 top-12 rounded-3xl border border-saffron/20 bg-ink/72 p-4 text-sm text-ivory/70 backdrop-blur-xl">
                Calm AI guidance
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <MotionReveal>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Features</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Practical spiritual clarity, presented with restraint.
              </h2>
            </div>
          </MotionReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((feature, index) => (
              <MotionReveal key={feature.title} delay={index * 0.04}>
                <FeatureCard {...feature} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <MotionReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Trust</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Built for reflection, not fear.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-ivory/64">
                AstraVeda treats astrology as interpretive guidance. The app is designed to be clear about AI,
                respectful with personal data, and careful around sensitive topics.
              </p>
            </div>
          </MotionReveal>
          <div className="grid gap-4">
            {trustItems.map((item, index) => (
              <MotionReveal key={item} delay={index * 0.05}>
                <div className="glass-card rounded-3xl p-6">
                  <p className="text-base leading-8 text-ivory/76">{item}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8" id="download">
        <MotionReveal>
          <div className="glass-card mx-auto max-w-7xl overflow-hidden rounded-[2rem] p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">AstraVeda Plus</p>
                <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  Deeper chart context when you want more detail.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-ivory/66">
                  Plus is designed for users who want richer Kundli interpretation, deeper compatibility context,
                  advanced daily guidance, and more room for reflective AI conversations.
                </p>
              </div>
              <div className="rounded-3xl border border-gold/20 bg-gold/[0.08] p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-gold">Premium includes</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-ivory/72">
                  <li>Advanced Dasha and chart insights</li>
                  <li>Detailed compatibility interpretation</li>
                  <li>Expanded AI guidance conversations</li>
                  <li>More personal daily reflections</li>
                </ul>
              </div>
            </div>
          </div>
        </MotionReveal>
      </section>
    </>
  );
}
