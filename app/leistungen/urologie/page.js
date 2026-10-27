import { SERVICES } from '@/data/siteData';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Urologie Dübendorf | Hausarztpraxis & Spezialisten",
  description: "Urologische Sprechstunde in Dübendorf: Abklärung von Nieren, Harnwegen, Blasenentzündung & Ultraschall direkt vor Ort. Jetzt Termin vereinbaren.",
};

export default function UrologiePage() {
  const service = SERVICES.find(s => s.slug === "urologie");
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
        "name": "Urologie",
        "item": "https://hausarztpraxis-duebendorf.ch/leistungen/urologie"
      }
    ]
  };

  return (
    <main role="main" style={{ maxWidth: 800, margin: '4rem auto', padding: '0 1rem', fontFamily: 'var(--font-inter), sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Link href="/" style={{ color: '#005b4f', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block', fontWeight: 'bold' }}>&larr; Zurück zur Startseite</Link>
      <h1 style={{ fontSize: '2.5rem', color: '#005b4f', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>{service.title}</h1>
      {service.img && <Image src={service.img} alt={service.title} width={800} height={400} style={{ borderRadius: '8px', objectFit: 'cover', marginBottom: '2rem', width: '100%', height: 'auto' }} />}
      <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>{service.short}</p>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#374151', marginBottom: '2rem' }}>{service.full}</p>
      <div style={{ padding: '1.5rem', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
        <h3 style={{ fontSize: '1.25rem', color: '#005b4f', marginBottom: '0.5rem' }}>Termin vereinbaren</h3>
        <p style={{ marginBottom: '1rem' }}>Benötigen Sie eine urologische Abklärung? Rufen Sie uns an.</p>
        <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Tel: 044 820 10 20 (Praxis) oder direkt 052 551 00 49 (Urologie)</p>
      </div>
    </main>
  );
}
