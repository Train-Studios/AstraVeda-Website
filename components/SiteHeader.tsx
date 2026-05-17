import Image from 'next/image';
import Link from 'next/link';
import {navLinks, siteConfig} from '@/lib/site';

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/10 bg-ink/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="AstraVeda home">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/[0.35] bg-gold/10 shadow-gold">
            <Image src="/logo.png" alt="" width={30} height={30} className="rounded-full" priority />
          </span>
          <span className="text-sm font-semibold tracking-[0.12em] text-ivory">{siteConfig.name.toUpperCase()}</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-ivory/68 md:flex">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="transition hover:text-gold">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/support"
          className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-ivory transition hover:bg-white/15 hover:text-gold">
          Support
        </Link>
      </div>
    </header>
  );
}
