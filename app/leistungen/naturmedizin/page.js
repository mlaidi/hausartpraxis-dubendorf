import { NATURMEDIZIN } from '@/data/siteData';
import Link from 'next/link';

export const metadata = {
  title: "Naturmedizin & Infusionstherapien Dübendorf | Longevity",
  description: "Naturmedizin in Dübendorf: NAD+ Infusionen, Eiseninfusionen, PRP-Therapie, Vitamin-C-Hochdosis & Longevity. Natürliche Stärkung für Ihr Wohlbefinden.",
};

export default function NaturmedizinPage() {
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
        "name": "Naturmedizin & Longevity",
        "item": "https://hausarztpraxis-duebendorf.ch/leistungen/naturmedizin"
      }
    ]
  };

  return (
    <main role="main" style={{ maxWidth: 800, margin: '4rem auto', padding: '0 1rem', fontFamily: 'var(--font-inter), sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Link href="/" style={{ color: '#005b4f', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block', fontWeight: 'bold' }}>&larr; Zurück zur Startseite</Link>
      <h1 style={{ fontSize: '2.5rem', color: '#005b4f', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>Naturmedizin & Longevity</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#374151', marginBottom: '3rem' }}>
        Entdecken Sie unser umfassendes Angebot an modernen Infusionstherapien und naturmedizinischen Behandlungen zur Stärkung von Immunsystem, Energie und Wohlbefinden.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
        {NATURMEDIZIN.map((item, idx) => (
          <div key={idx} style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.5rem' }}>{item.title}</h2>
            <p style={{ color: '#4b5563', marginBottom: '1rem' }}>{item.desc}</p>
            <p style={{ fontWeight: 'bold', color: '#005b4f' }}>{item.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
