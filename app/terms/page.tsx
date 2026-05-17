import type {Metadata} from 'next';
import {LegalDocument} from '@/components/LegalDocument';
import {getLegalMarkdown} from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'AstraVeda Terms & Conditions.',
  alternates: {
    canonical: '/terms',
  },
};

export default async function TermsPage() {
  const markdown = await getLegalMarkdown('terms');

  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <LegalDocument markdown={markdown} />
    </section>
  );
}
