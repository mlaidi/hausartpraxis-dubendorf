import { TEAM } from '@/data/siteData';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Dr. med. Saskia Rodriguez | Hausarztpraxis Dübendorf",
  description: "Lernen Sie Dr. med. Saskia Rodriguez kennen, Ihre Hausärztin in Dübendorf. Einfühlsame Betreuung, Frauengesundheit und Prävention.",
};

export default function SaskiaRodriguezPage() {
  const doc = TEAM.find(t => t.name.includes("Saskia"));
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Startseite",
        "item": "https://hausarztpraxis-duebendorf.ch"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Dr. med. Saskia Rodriguez",
        "item": "https://hausarztpraxis-duebendorf.ch/team/saskia-rodriguez"
      }
    ]
  };

  return (
    <main role="main" style={{ maxWidth: 800, margin: '4rem auto', padding: '0 1rem', fontFamily: 'var(--font-inter), sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Link href="/" style={{ color: '#005b4f', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block', fontWeight: 'bold' }}>&larr; Zurück zur Startseite</Link>
      <h1 style={{ fontSize: '2.5rem', color: '#005b4f', marginBottom: '0.5rem', fontFamily: 'var(--font-dm-serif), serif' }}>{doc.name}</h1>
      <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '2rem' }}>{doc.role}</p>
      {doc.photo && <Image src={doc.photo} alt={doc.name} width={400} height={400} style={{ borderRadius: '8px', objectFit: 'cover', marginBottom: '2rem', width: '100%', maxWidth: '400px', height: 'auto' }} />}
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#374151' }}>{doc.bio}</p>
      <p style={{ marginTop: '2rem', fontWeight: '600', color: '#111827' }}>Sprachen: {doc.languages}</p>
    </main>
  );
}
