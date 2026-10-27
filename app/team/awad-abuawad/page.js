import { TEAM } from '@/data/siteData';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Dipl. Arzt Awad Abuawad | Hausarztpraxis Dübendorf",
  description: "Erfahren Sie mehr über A. Abuawad, diplomierter Arzt für Allgemeinmedizin in Dübendorf. Spezialisiert auf ganzheitliche Betreuung und Prävention.",
  alternates: {
    canonical: "/team/awad-abuawad",
  },
};

export default function AwadAbuawadPage() {
  const doc = TEAM.find(t => t.name.includes("Awad"));
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
        "name": "Dipl. Arzt Awad Abuawad",
        "item": "https://hausarztpraxis-duebendorf.ch/team/awad-abuawad"
      }
    ]
  };

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": doc.name,
    "jobTitle": "Diplomierter Arzt für Allgemeinmedizin",
    "description": doc.bio,
    "image": `https://hausarztpraxis-duebendorf.ch${doc.photo}`,
    "url": "https://hausarztpraxis-duebendorf.ch/team/awad-abuawad",
    "medicalSpecialty": ["GeneralPractice", "PrimaryCare"],
    "worksFor": {
      "@type": "MedicalClinic",
      "name": "Hausarztpraxis Dübendorf",
      "url": "https://hausarztpraxis-duebendorf.ch"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Leepüntstrasse 5",
      "addressLocality": "Dübendorf",
      "postalCode": "8600",
      "addressCountry": "CH"
    },
    "telephone": "+41 44 820 10 20",
    "knowsLanguage": ["de", "ar"]
  };

  return (
    <main role="main" style={{ maxWidth: 800, margin: '4rem auto', padding: '0 1rem', fontFamily: 'var(--font-inter), sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }} />
      <Link href="/" style={{ color: '#005b4f', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block', fontWeight: 'bold' }}>&larr; Zurück zur Startseite</Link>
      <h1 style={{ fontSize: '2.5rem', color: '#005b4f', marginBottom: '0.5rem', fontFamily: 'var(--font-dm-serif), serif' }}>{doc.name}</h1>
      <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '2rem' }}>{doc.role}</p>
      {doc.photo && <Image src={doc.photo} alt={doc.name} width={400} height={400} priority style={{ borderRadius: '8px', objectFit: 'cover', marginBottom: '2rem', width: '100%', maxWidth: '400px', height: 'auto' }} />}
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#374151', marginBottom: '1.5rem' }}>{doc.bio}</p>
      <p style={{ marginTop: '1rem', fontWeight: '600', color: '#111827' }}>Gesprochene Sprachen: {doc.languages}</p>

      <div style={{ marginTop: '2.5rem', padding: '1.5rem', backgroundColor: '#f0fdfa', borderRadius: '8px', border: '1px solid #ccfbf1' }}>
        <h3 style={{ fontSize: '1.25rem', color: '#005b4f', marginBottom: '0.5rem' }}>Sprechstunde & Terminvereinbarung</h3>
        <p style={{ color: '#374151', marginBottom: '1.25rem' }}>Vereinbaren Sie Ihren Termin bei Dipl. Arzt Awad Abuawad unkompliziert online oder telefonisch.</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://app.arzt-direkt.de/hausarztpraxis-zuerich/booking" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', backgroundColor: '#005b4f', color: '#ffffff', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold' }}>Online Termin buchen</a>
          <a href="tel:+41448201020" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', backgroundColor: '#ffffff', color: '#005b4f', border: '1px solid #005b4f', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold' }}>Tel: 044 820 10 20</a>
        </div>
      </div>
    </main>
  );
}
