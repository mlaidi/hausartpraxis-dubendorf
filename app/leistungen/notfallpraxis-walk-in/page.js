import Link from 'next/link';

export const metadata = {
  title: "Notfallarzt & Walk-in Praxis Dübendorf | Ohne Termin",
  description: "Arzt ohne Termin in Dübendorf gesucht? Unsere Notfallpraxis bietet kurzfristige Termine bei akuten Beschwerden. Nahe Stettbach. Jetzt anrufen oder vorbeikommen.",
  alternates: {
    canonical: "/leistungen/notfallpraxis-walk-in",
  },
};

export default function NotfallpraxisPage() {
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
        "name": "Notfallarzt & Walk-in Praxis",
        "item": "https://hausarztpraxis-duebendorf.ch/leistungen/notfallpraxis-walk-in"
      }
    ]
  };

  const emergencySchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Notfallpraxis & Walk-in Dübendorf – Hausarztpraxis Dübendorf",
    "url": "https://hausarztpraxis-duebendorf.ch/leistungen/notfallpraxis-walk-in",
    "telephone": "+41 44 820 10 20",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Leepüntstrasse 5",
      "addressLocality": "Dübendorf",
      "postalCode": "8600",
      "addressCountry": "CH"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Thursday", "Saturday"],
        "opens": "09:00",
        "closes": "13:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Thursday", "Saturday"],
        "opens": "14:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <main role="main" style={{ maxWidth: 800, margin: '4rem auto', padding: '0 1rem', fontFamily: 'var(--font-inter), sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencySchema) }} />
      <Link href="/" style={{ color: '#005b4f', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block', fontWeight: 'bold' }}>&larr; Zurück zur Startseite</Link>
      
      <h1 style={{ fontSize: '2.5rem', color: '#005b4f', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif', lineHeight: 1.2 }}>
        Notfallarzt & Walk-in Praxis in Dübendorf
      </h1>
      
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#374151', marginBottom: '2.5rem' }}>
        Unsere Praxis in Dübendorf ist darauf spezialisiert, Ihnen bei akuten medizinischen Notfällen sofortige und kompetente Hilfe zu leisten. Wenn Sie dringend einen Arzt ohne Termin benötigen, sind Sie bei uns richtig. Dank unserer Nähe zum Bahnhof Stettbach und Dübendorf Zentrum sind wir schnell und unkompliziert erreichbar.
      </p>
      
      <h2 style={{ fontSize: '1.75rem', color: '#111827', marginBottom: '1rem', fontFamily: 'var(--font-playfair), serif' }}>
        Kurzfristige Arzttermine ohne Voranmeldung (Walk-in)
      </h2>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#4b5563', marginBottom: '2.5rem' }}>
        Bei plötzlichen Beschwerden oder akuten Schmerzen können Sie während unserer regulären Öffnungszeiten als Walk-in-Patient auch direkt vorbeikommen. Um Ihre Wartezeit in der Praxis jedoch so gering wie möglich zu halten, empfehlen wir, nach Möglichkeit kurz vorher anzurufen. Wir stellen sicher, dass Sie noch am selben Tag professionell medizinisch versorgt werden.
      </p>
      
      <h2 style={{ fontSize: '1.75rem', color: '#111827', marginBottom: '1rem', fontFamily: 'var(--font-playfair), serif' }}>
        Bei welchen Beschwerden können Sie sofort kommen?
      </h2>
      <ul style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#4b5563', marginBottom: '2.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Schnitt- und Platzwunden</li>
        <li style={{ marginBottom: '0.5rem' }}>Hohes Fieber und akute Infektionen</li>
        <li style={{ marginBottom: '0.5rem' }}>Starke und plötzlich auftretende Schmerzen</li>
        <li style={{ marginBottom: '0.5rem' }}>Kleine Unfälle, Verstauchungen oder Sportverletzungen</li>
        <li style={{ marginBottom: '0.5rem' }}>Allergische Reaktionen und Asthmaanfälle</li>
      </ul>
      
      <h2 style={{ fontSize: '1.75rem', color: '#111827', marginBottom: '1rem', fontFamily: 'var(--font-playfair), serif' }}>
        Schnelle Erreichbarkeit aus Stettbach & Umgebung
      </h2>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#4b5563', marginBottom: '3rem' }}>
        In einem Notfall zählt oft jede Minute. Unsere Praxis befindet sich an der Leepüntstrasse 5 und ist optimal an den öffentlichen Verkehr angebunden. Besonders vom nahen Verkehrsknotenpunkt Bahnhof Stettbach sowie aus dem gesamten Raum Dübendorf erreichen Sie uns in kürzester Zeit. Kostenlose Parkmöglichkeiten stehen direkt in der Nähe zur Verfügung.
      </p>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a href="tel:+41448201020" style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          backgroundColor: '#005b4f', 
          color: '#ffffff', 
          padding: '1rem 2rem', 
          borderRadius: '8px', 
          textDecoration: 'none', 
          fontSize: '1.1rem', 
          fontWeight: 'bold', 
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.2s'
        }}>
          <svg style={{ marginRight: '0.5rem' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          Jetzt anrufen für einen Notfalltermin
        </a>
      </div>
    </main>
  );
}
