import type {Metadata} from 'next';
import {LegalDocument} from '@/components/LegalDocument';
import {getLegalMarkdown} from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'AstraVeda Privacy Policy and user data handling disclosures.',
  alternates: {
    canonical: '/privacy',
  },
};

export default async function PrivacyPage() {
  const markdown = await getLegalMarkdown('privacy_policy');

  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <LegalDocument markdown={markdown} />
    </section>
  );
}
