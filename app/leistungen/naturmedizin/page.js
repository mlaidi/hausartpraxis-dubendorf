import { NATURMEDIZIN } from '@/data/siteData';
import Link from 'next/link';

export const metadata = {
  title: "Naturmedizin & Infusionstherapien Dübendorf | Longevity",
  description: "Naturmedizin in Dübendorf: NAD+ Infusionen, Eiseninfusionen, PRP-Therapie, Vitamin-C-Hochdosis & Longevity. Natürliche Stärkung für Ihr Wohlbefinden.",
  alternates: {
    canonical: "/leistungen/naturmedizin",
  },
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

  const therapySchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Naturmedizin & Infusionszentrum Dübendorf",
    "url": "https://hausarztpraxis-duebendorf.ch/leistungen/naturmedizin",
    "telephone": "+41 44 820 10 20",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Leepüntstrasse 5",
      "addressLocality": "Dübendorf",
      "postalCode": "8600",
      "addressCountry": "CH"
    }
  };

  return (
    <main role="main" style={{ maxWidth: 800, margin: '4rem auto', padding: '0 1rem', fontFamily: 'var(--font-inter), sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(therapySchema) }} />
      <Link href="/" style={{ color: '#005b4f', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block', fontWeight: 'bold' }}>&larr; Zurück zur Startseite</Link>
      <h1 style={{ fontSize: '2.5rem', color: '#005b4f', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>Naturmedizin & Longevity in Dübendorf</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#374151', marginBottom: '2.5rem' }}>
        Ergänzend zur klassischen Schulmedizin bieten wir in der Hausarztpraxis Dübendorf ein wissenschaftlich fundiertes Spektrum an modernen Infusionstherapien, Eigenblutverfahren und Longevity-Behandlungen. Für mehr Energie, Vitalität und nachhaltige Zellgesundheit.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginBottom: '3rem' }}>
        {NATURMEDIZIN.map((item, idx) => (
          <div key={idx} style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: '#fafafa' }}>
            <h2 style={{ fontSize: '1.25rem', color: '#111827', marginBottom: '0.5rem' }}>{item.title}</h2>
            <p style={{ color: '#4b5563', marginBottom: '1rem', lineHeight: '1.5' }}>{item.desc}</p>
            <p style={{ fontWeight: 'bold', color: '#005b4f' }}>{item.price}</p>
          </div>
        ))}
      </div>

      <div style={{ padding: '2rem', backgroundColor: '#f0fdfa', borderRadius: '8px', border: '1px solid #ccfbf1' }}>
        <h3 style={{ fontSize: '1.25rem', color: '#005b4f', marginBottom: '0.5rem' }}>Beratung & Infusionstermin</h3>
        <p style={{ color: '#374151', marginBottom: '1.25rem' }}>Gerne beraten wir Sie persönlich über die für Ihre individuelle Gesundheitssituation optimale Infusionstherapie.</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://app.arzt-direkt.de/hausarztpraxis-zuerich/booking" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', backgroundColor: '#005b4f', color: '#ffffff', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold' }}>Termin online vereinbaren</a>
          <a href="tel:+41448201020" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', backgroundColor: '#ffffff', color: '#005b4f', border: '1px solid #005b4f', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold' }}>Tel: 044 820 10 20</a>
        </div>
      </div>
      <p style={{ fontSize: '0.85rem', color: '#9ca3af', marginTop: '2rem', fontStyle: 'italic' }}>
        Hinweis: Alle medizinischen und naturheilkundlichen Behandlungen erfolgen nach sorgfältiger individueller ärztlicher Indikationsstellung durch den behandelnden Arzt.
      </p>
    </main>
  );
}
