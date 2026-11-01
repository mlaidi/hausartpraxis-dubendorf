import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Hausarzt Stettbach | Arztpraxis & Walk-in nahe Bahnhof Stettbach",
  description: "Ihr Hausarzt nahe Bahnhof Stettbach & Dübendorf. Schnelle Termine & Walk-in Notfallbehandlung ohne Voranmeldung. Auch am Samstag geöffnet. Jetzt informieren.",
  alternates: {
    canonical: "/hausarzt-stettbach",
  },
};

export default function HausarztStettbachPage() {
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
        "name": "Hausarzt Stettbach",
        "item": "https://hausarztpraxis-duebendorf.ch/hausarzt-stettbach"
      }
    ]
  };

  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Hausarztpraxis Dübendorf – Einzugsgebiet Bahnhof Stettbach",
    "url": "https://hausarztpraxis-duebendorf.ch/hausarzt-stettbach",
    "telephone": "+41 44 820 10 20",
    "medicalSpecialty": ["GeneralPractice", "EmergencyMedicine"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Leepüntstrasse 5",
      "addressLocality": "Dübendorf",
      "postalCode": "8600",
      "addressCountry": "CH"
    },
    "areaServed": ["Stettbach", "Dübendorf", "Zürich-Schwamendingen", "Wallisellen"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wie schnell erreiche ich die Praxis vom Bahnhof Stettbach?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vom Bahnhof Stettbach aus erreichen Sie unsere Praxis an der Leepüntstrasse 5 in Dübendorf in etwa 5 Minuten mit dem öffentlichen Nahverkehr oder dem Auto. Auch zu Fuss oder mit dem Velo ist die Verbindung hervorragend."
        }
      },
      {
        "@type": "Question",
        "name": "Kann ich als Pendler in Stettbach ohne Termin vorbeikommen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Bei akuten Beschwerden, Schnittwunden, Schmerzen oder Infekten können Sie während der Öffnungszeiten direkt als Walk-in-Patient ohne Voranmeldung zu uns kommen."
        }
      },
      {
        "@type": "Question",
        "name": "Gibt es Termine am Samstag oder am frühen Abend?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wir haben jeden Samstag von 09:00 bis 13:00 und 14:00 bis 18:00 geöffnet sowie unter der Woche (Mo, Di, Do) bis 18:00 Uhr."
        }
      }
    ]
  };

  return (
    <main role="main" style={{ maxWidth: 840, margin: '3.5rem auto', padding: '0 1.25rem', fontFamily: 'var(--font-inter), sans-serif', color: '#1f2937' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Link href="/" style={{ color: '#005b4f', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block', fontWeight: 'bold' }}>
        &larr; Zurück zur Startseite
      </Link>

      <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#005b4f', marginBottom: '1.25rem', fontFamily: 'var(--font-dm-serif), serif', lineHeight: 1.2 }}>
        Hausarzt Stettbach – Schnelle medizinische Versorgung nahe Bahnhof Stettbach
      </h1>

      <div style={{ borderRadius: '12px', overflow: 'hidden', margin: '1.5rem 0 2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <Image
          src="/images/banner.webp"
          alt="Hausarztpraxis Dübendorf – Zentrale medizinische Versorgung für Patientinnen und Pendler aus Stettbach"
          width={840}
          height={400}
          priority
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
        />
      </div>

      <p style={{ fontSize: '1.15rem', lineHeight: '1.75', color: '#374151', marginBottom: '2rem', fontWeight: '500' }}>
        Wohnen Sie in Stettbach, pendeln Sie täglich über den Bahnhof Stettbach oder arbeiten Sie im Einzugsgebiet Zürich-Schwamendingen und Dübendorf? Die Hausarztpraxis Dübendorf an der Leepüntstrasse 5 liegt nur wenige Minuten vom Verkehrsknotenpunkt Stettbach entfernt und bietet Ihnen eine erstklassige medizinische Grundversorgung mit Walk-in-Möglichkeit bei akuten Notfällen.
      </p>

      <div style={{ borderRadius: '12px', overflow: 'hidden', margin: '2rem 0', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <Image
          src="/images/services/Labor.webp"
          alt="Modernes Praxislabor für Sofortanalysen bei Infekten und Notfällen nahe Stettbach"
          width={840}
          height={380}
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
        />
      </div>

      <h2 style={{ fontSize: '1.6rem', color: '#111827', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair), serif' }}>
        Optimale Erreichbarkeit für Patientinnen & Pendler aus Stettbach
      </h2>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#4b5563', marginBottom: '1.5rem' }}>
        Der Bahnhof Stettbach ist einer der am stärksten frequentierten Bahnknotenpunkte im Grossraum Zürich, an dem S-Bahn-Linien (S3, S9, S11, S12), Tramlinien (Tram 7, Tram 12 / Glattalbahn) und diverse Busverbindungen zusammentreffen. Von hier aus sind Sie in kürzester Zeit bei uns in der Praxis:
      </p>
      <ul style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#374151', marginBottom: '2.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Mit dem ÖV ab Stettbach:</strong> Nur ca. 4–6 Minuten mit Bus oder Glattalbahn direkt ins Zentrum von Dübendorf, Haltestellen in kurzer Gehdistanz zur Praxis.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Mit dem Auto oder Velo:</strong> Bequeme Anfahrt über die Zürichstrasse oder Ueberlandstrasse in unter 5 Minuten. Parkplätze befinden sich in unmittelbarer Praxisnähe.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Ideal für Berufstätige:</strong> Nutzen Sie Ihren Arbeitsweg für Check-ups, Blutentnahmen oder Rezeptabholungen ohne weite Umwege.</li>
      </ul>

      <h2 style={{ fontSize: '1.6rem', color: '#111827', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair), serif' }}>
        Walk-in Notfallpraxis: Hilfe ohne Termin
      </h2>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#4b5563', marginBottom: '1.5rem' }}>
        Plötzliche Schmerzen, ein Hexenschuss, ein akuter Magen-Darm-Infekt, eine Schnittverletzung oder ein fieberhafter Infekt richten sich nicht nach Terminkalendern. In unserer Funktion als Notfall- und Walk-in-Praxis empfangen wir Patientinnen und Patienten aus Stettbach und Umgebung auch ohne vorherige Voranmeldung:
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        <div style={{ padding: '1.25rem', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#005b4f', marginBottom: '0.5rem' }}>Akutdiagnostik sofort</h3>
          <p style={{ fontSize: '0.95rem', color: '#4b5563', margin: 0 }}>Sofortige Blut- und Urinuntersuchung in unserem In-House-Labor sowie digitales Röntgen bei Unfällen oder Prellungen.</p>
        </div>
        <div style={{ padding: '1.25rem', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#005b4f', marginBottom: '0.5rem' }}>Samstags geöffnet</h3>
          <p style={{ fontSize: '0.95rem', color: '#4b5563', margin: 0 }}>Wir haben auch am Samstag von 09:00 bis 13:00 und 14:00 bis 18:00 geöffnet, falls am Wochenende gesundheitliche Probleme auftreten.</p>
        </div>
        <div style={{ padding: '1.25rem', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#005b4f', marginBottom: '0.5rem' }}>Direkte Medikamentenabgabe</h3>
          <p style={{ fontSize: '0.95rem', color: '#4b5563', margin: 0 }}>Unsere praxiseigene Apotheke versorgt Sie unmittelbar vor Ort mit den notwendigen Medikamenten, ohne dass Sie noch zur Apotheke müssen.</p>
        </div>
      </div>

      <h2 style={{ fontSize: '1.6rem', color: '#111827', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair), serif' }}>
        Breites medizinisches Behandlungsspektrum
      </h2>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#4b5563', marginBottom: '2.5rem' }}>
        Neben der hausärztlichen Basisversorgung umfasst unser Praxisspektrum kardiologische Untersuchungen (Ruhe-EKG), Lungenfunktionstests (Spirometrie), Check-ups für Sport und Beruf, Fahreignungsabklärungen (Stufe 1 und 2), Infusionstherapien bei Eisenmangel sowie ganzheitliche Naturmedizin und urologische Abklärungen.
      </p>

      <div style={{ padding: '2rem', backgroundColor: '#f0fdfa', borderRadius: '10px', border: '1px solid #ccfbf1', marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.35rem', color: '#005b4f', marginBottom: '0.5rem' }}>Termin oder Notfallbesuch vereinbaren</h3>
        <p style={{ color: '#374151', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          Sie können Ihren Wunschtermin online buchen oder bei akuten Beschwerden einfach telefonisch Bescheid geben und direkt in die Praxis kommen.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://app.arzt-direkt.de/hausarztpraxis-zuerich/booking" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '0.85rem 1.75rem', backgroundColor: '#005b4f', color: '#ffffff', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold' }}>
            Online Termin buchen
          </a>
          <a href="tel:+41448201020" style={{ display: 'inline-block', padding: '0.85rem 1.75rem', backgroundColor: '#ffffff', color: '#005b4f', border: '1px solid #005b4f', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold' }}>
            Tel: 044 820 10 20
          </a>
        </div>
      </div>

      <h2 style={{ fontSize: '1.6rem', color: '#111827', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair), serif' }}>
        Häufig gestellte Fragen (FAQ)
      </h2>
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '0.35rem' }}>Wie weit ist die Praxis vom Bahnhof Stettbach entfernt?</h3>
          <p style={{ color: '#4b5563', lineHeight: '1.6' }}>Die Praxis an der Leepüntstrasse 5 in Dübendorf ist rund 2 Kilometer vom Bahnhof Stettbach entfernt und mit dem Bus oder Auto in nur ca. 5 Minuten bequem erreichbar.</p>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '0.35rem' }}>Werden alle Krankenkassen anerkannt?</h3>
          <p style={{ color: '#4b5563', lineHeight: '1.6' }}>Ja, sämtliche Leistungen der Grundversorgung werden über die obligatorische Schweizer Krankenversicherung (KVG) abgerechnet.</p>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '0.35rem' }}>Kann ich bei Notfällen ohne Voranmeldung kommen?</h3>
          <p style={{ color: '#4b5563', lineHeight: '1.6' }}>Ja, für Notfälle und akute Beschwerden bieten wir während der Sprechstundenzeiten eine offene Walk-in-Sprechstunde an.</p>
        </div>
      </div>

      <p style={{ fontSize: '0.85rem', color: '#9ca3af', borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem', fontStyle: 'italic' }}>
        Medizinischer Inhalt zur Information. Fachlich geprüft durch den ärztlichen Dienst der Hausarztpraxis Dübendorf.
      </p>
    </main>
  );
}
