import type {Metadata} from 'next';
import Link from 'next/link';
import {MotionReveal} from '@/components/MotionReveal';
import {siteConfig} from '@/lib/site';

const faqs = [
  {
    question: 'What is AstraVeda?',
    answer: 'AstraVeda is an AI-assisted Vedic astrology app for reflective guidance, Kundli insights, and compatibility context.',
  },
  {
    question: 'Is AstraVeda professional advice?',
    answer: 'No. AstraVeda content is informational and interpretive only. It is not medical, legal, financial, or emergency advice.',
  },
  {
    question: 'Can I request data deletion?',
    answer: 'Yes. You can request deletion of account data, chats, birth profiles, and stored astrology information through support.',
  },
  {
    question: 'Where can I read the legal policies?',
    answer: 'The Privacy Policy and Terms & Conditions are linked below and in the site footer.',
  },
];

export const metadata: Metadata = {
  title: 'Support',
  description: 'AstraVeda support and help information.',
  alternates: {
    canonical: '/support',
  },
};

export default function SupportPage() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Support</p>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl">
              Calm help for your AstraVeda account.
            </h1>
            <p className="mt-6 text-lg leading-8 text-ivory/66">
              For support, privacy questions, or deletion requests, contact:
            </p>
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="mt-5 inline-flex rounded-full border border-gold/30 bg-gold/10 px-6 py-3 text-sm font-semibold text-gold transition hover:border-gold/70 hover:bg-gold/15">
              {siteConfig.supportEmail}
            </a>
          </div>
        </MotionReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <MotionReveal key={faq.question} delay={index * 0.04}>
              <div className="glass-card rounded-3xl p-6">
                <h2 className="text-xl font-semibold text-white">{faq.question}</h2>
                <p className="mt-3 text-sm leading-7 text-ivory/64">{faq.answer}</p>
              </div>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/privacy" className="text-sm font-semibold text-gold transition hover:text-ivory">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm font-semibold text-gold transition hover:text-ivory">
              Terms & Conditions
            </Link>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
