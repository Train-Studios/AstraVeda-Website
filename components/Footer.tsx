import Link from 'next/link';
import {navLinks, siteConfig} from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-ink/65">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-gold">{siteConfig.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-ivory/58">
            AI-powered Vedic guidance for reflection, clarity, and personal insight. Astrology and AI content is
            informational and interpretive, not professional advice.
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-4 md:justify-end">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-sm text-ivory/62 transition hover:text-gold">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
