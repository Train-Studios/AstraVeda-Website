export const siteConfig = {
  name: 'AstraVeda',
  title: 'AstraVeda | AI-Powered Vedic Guidance',
  description: 'AI-powered Vedic guidance personalized to your birth chart.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://astraveda.app',
  supportEmail: 'support.trainstudios@gmail.com',
};

export const navLinks = [
  {href: '/', label: 'Home'},
  {href: '/privacy', label: 'Privacy'},
  {href: '/terms', label: 'Terms'},
  {href: '/support', label: 'Support'},
];
