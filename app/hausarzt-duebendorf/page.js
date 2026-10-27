import Link from 'next/link';

export const metadata = {
  title: "Hausarzt Dübendorf | Hausarztpraxis & Grundversorgung",
  description: "Ihre Hausarztpraxis in Dübendorf für die ganze Familie: Allgemeinmedizin, Vorsorge, Notfälle ohne Termin & Walk-in. Neue Patienten herzlich willkommen.",
  alternates: {
    canonical: "/hausarzt-duebendorf",
  },
};

export default function HausarztDuebendorfPage() {
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
        "name": "Hausarzt Dübendorf",
        "item": "https://hausarztpraxis-duebendorf.ch/hausarzt-duebendorf"
      }
    ]
  };

  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Hausarztpraxis Dübendorf – Allgemeine Innere Medizin",
    "url": "https://hausarztpraxis-duebendorf.ch/hausarzt-duebendorf",
    "telephone": "+41 44 820 10 20",
    "medicalSpecialty": ["GeneralPractice", "PrimaryCare"],
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Nehmen Sie neue Patientinnen und Patienten auf?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, die Hausarztpraxis Dübendorf nimmt jederzeit neue Patientinnen und Patienten für die hausärztliche Grundversorgung auf. Wir betreuen alle Altersgruppen – vom Jugendlichen bis ins hohe Seniorenalter."
        }
      },
      {
        "@type": "Question",
        "name": "Mit welchen Krankenkassenmodellen arbeitet die Praxis zusammen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir arbeiten mit allen Schweizer Krankenkassen zusammen. Sowohl Patienten mit traditioneller freier Arztwahl als auch Versicherte in Hausarzt-, HMO- oder Telmed-Modellen können sich bei uns behandeln lassen."
        }
      },
      {
        "@type": "Question",
        "name": "Ist die Praxis auch am Samstag geöffnet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, unsere Praxis ist auch jeden Samstag von 09:00 bis 13:00 und von 14:00 bis 18:00 geöffnet – ideal für Berufstätige und unvorhergesehene Beschwerden am Wochenende."
        }
      },
      {
        "@type": "Question",
        "name": "Kann ich bei akuten Beschwerden ohne Termin vorbeikommen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, bei akuten Erkrankungen oder Schmerzen empfangen wir Sie als Walk-in-Patient ohne Voranmeldung. Zur optimalen Koordination der Wartezeiten freuen wir uns über einen kurzen vorherigen Anruf unter 044 820 10 20."
        }
      },
      {
        "@type": "Question",
        "name": "Befindet sich die Praxis am Standort der ehemaligen Praxis Dr. Koller?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Die Hausarztpraxis Dübendorf befindet sich an der Leepüntstrasse 5 (am traditionsreichen Praxisstandort von Dr. Michael Koller). Bestehende Patientinnen und Patienten von Dr. Koller sowie neue Patientinnen und Patienten werden durch unser Praxisteam am gewohnten Standort nahtlos weiterbetreut."
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
        Ihr Hausarzt in Dübendorf – Moderne Grundversorgung & Walk-in Praxis
      </h1>

      <p style={{ fontSize: '1.15rem', lineHeight: '1.75', color: '#374151', marginBottom: '2rem', fontWeight: '500' }}>
        Suchen Sie einen zuverlässigen, kompetenten Hausarzt in Dübendorf? Die Hausarztpraxis Dübendorf an der Leepüntstrasse 5 ist Ihre zentrale Anlaufstelle für die gesamte hausärztliche und allgemeinmedizinische Grundversorgung im Glattal. Wir verbinden bewährte Schulmedizin mit moderner technischer Diagnostik und einem ganzheitlichen Behandlungsansatz. Neue Patientinnen und Patienten sind bei uns jederzeit herzlich willkommen.
      </p>

      <h2 style={{ fontSize: '1.6rem', color: '#111827', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair), serif' }}>
        Umfassende hausärztliche Betreuung für alle Generationen
      </h2>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#4b5563', marginBottom: '1.5rem' }}>
        Als Hausarztpraxis begleiten wir Sie langfristig und stehen Ihnen bei allen gesundheitlichen Fragen zur Seite. Unser Leistungsspektrum umfasst die Behandlung akuter Beschwerden ebenso wie die kontinuierliche Begleitung chronischer Erkrankungen. Wir nehmen uns die nötige Zeit, um die Ursachen Ihrer Beschwerden gründlich zu verstehen und gemeinsam den besten Behandlungsweg festzulegen:
      </p>
      <ul style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#374151', marginBottom: '2.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Allgemeinmedizinische Grundversorgung:</strong> Diagnostik und Therapie akuter Infekte, Erkältungen, Magen-Darm-Erkrankungen und unklarer Symptome.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Chroniker-Betreuung:</strong> Begleitung von Patientinnen und Patienten mit Bluthochdruck, Diabetes mellitus, Schilddrüsenerkrankungen, Asthma oder Herz-Kreislauf-Erkrankungen.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Gesundheitsvorsorge & Check-ups:</strong> Gründliche Vorsorgeuntersuchungen, Früherkennung von Risikofaktoren und individuelle Lebensstilberatung.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Wundversorgung & Kleinchirurgie:</strong> Fachgerechte Behandlung von Schnitt-, Riss- und Platzwunden, Verbandswechsel und kleinchirurgische Eingriffe.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Impfberatung & Reisemedizin:</strong> Überprüfung und Auffrischung des Impfschutzes gemäss Schweizer Impfplan sowie Empfehlungen für Auslandreisen.</li>
      </ul>

      <h2 style={{ fontSize: '1.6rem', color: '#111827', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair), serif' }}>
        Moderne Diagnostik direkt vor Ort: Schnelligkeit & Sicherheit
      </h2>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#4b5563', marginBottom: '1.5rem' }}>
        Um Verzögerungen und zeitraubende Überweisungen zu minimieren, verfügt unsere Praxis in Dübendorf über eine moderne apparative Diagnostikausstattung:
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        <div style={{ padding: '1.25rem', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#005b4f', marginBottom: '0.5rem' }}>In-House Labor</h3>
          <p style={{ fontSize: '0.95rem', color: '#4b5563', margin: 0 }}>Sofortanalysen von Blutwerten, Entzündungsmarkern (CRP), Blutzucker, Troponin und Urinstatus in wenigen Minuten vor Ort.</p>
        </div>
        <div style={{ padding: '1.25rem', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#005b4f', marginBottom: '0.5rem' }}>Digitales Röntgen</h3>
          <p style={{ fontSize: '0.95rem', color: '#4b5563', margin: 0 }}>Strahlenarme, hochauflösende Aufnahmen von Thorax, Wirbelsäule und Gelenken zur sofortigen Beurteilung bei Verletzungen.</p>
        </div>
        <div style={{ padding: '1.25rem', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#005b4f', marginBottom: '0.5rem' }}>EKG & Spirometrie</h3>
          <p style={{ fontSize: '0.95rem', color: '#4b5563', margin: 0 }}>Präzise kardiologische Rhythmusabklärung (Ruhe-EKG) sowie Lungenfunktionstests zur differentialdiagnostischen Abklärung bei Atemnot.</p>
        </div>
      </div>

      <h2 style={{ fontSize: '1.6rem', color: '#111827', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair), serif' }}>
        Hauseigene Praxisapotheke: Medikamente ohne Extraweg
      </h2>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#4b5563', marginBottom: '2.5rem' }}>
        Dank unserer integrierten Praxisapotheke können Sie verordnete Arzneimittel direkt nach Ihrer Konsultation bei uns mitnehmen. Das spart wertvolle Zeit und unnötige Wege zur externen Apotheke – insbesondere wenn Sie krank sind oder rasch mit der Einnahme von Antibiotika oder Schmerzmitteln beginnen müssen. Dauerrezepte können Sie zudem unkompliziert telefonisch oder per E-Mail nachbestellen.
      </p>

      <h2 style={{ fontSize: '1.6rem', color: '#111827', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair), serif' }}>
        Unser medizinisches Team: Vertrauensvoll & mehrsprachig
      </h2>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#4b5563', marginBottom: '2.5rem' }}>
        Unter der Leitung von Dipl. Arzt Awad Abuawad und Dr. med. Saskia Rodriguez arbeitet unser engagiertes Team aus diplomierten Ärztinnen, Ärzten und Medizinischen Praxisassistentinnen (MPA) Hand in Hand. Wir legen grossen Wert auf eine offene Kommunikation und sprechen fliessend Deutsch, Arabisch, Englisch, Spanisch, Französisch und Rumänisch.
      </p>

      <div style={{ padding: '2rem', backgroundColor: '#f0fdfa', borderRadius: '10px', border: '1px solid #ccfbf1', marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.35rem', color: '#005b4f', marginBottom: '0.5rem' }}>Termin beim Hausarzt in Dübendorf buchen</h3>
        <p style={{ color: '#374151', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          Buchen Sie Ihren Termin bequem rund um die Uhr online oder rufen Sie uns direkt an. Auch samstags sind wir für Sie da.
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
          <h3 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '0.35rem' }}>Nehmen Sie neue Patientinnen und Patienten auf?</h3>
          <p style={{ color: '#4b5563', lineHeight: '1.6' }}>Ja, wir nehmen gerne neue Patientinnen und Patienten aller Altersgruppen für die hausärztliche Grundversorgung auf.</p>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '0.35rem' }}>Mit welchen Krankenkassenmodellen arbeitet die Praxis zusammen?</h3>
          <p style={{ color: '#4b5563', lineHeight: '1.6' }}>Wir arbeiten mit allen Schweizer Krankenversicherungen zusammen (Grundversicherung KVG, Hausarztmodell, HMO, Telmed und freie Arztwahl).</p>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '0.35rem' }}>Haben Sie auch samstags geöffnet?</h3>
          <p style={{ color: '#4b5563', lineHeight: '1.6' }}>Ja, die Praxis ist samstags von 09:00 bis 13:00 und 14:00 bis 18:00 regulär geöffnet.</p>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '0.35rem' }}>Wo befindet sich die Praxis und wo kann man parkieren?</h3>
          <p style={{ color: '#4b5563', lineHeight: '1.6' }}>Die Praxis befindet sich an der Leepüntstrasse 5, 8600 Dübendorf. Parkmöglichkeiten stehen in der unmittelbaren Umgebung zur Verfügung, und die Haltestellen des öffentlichen Nahverkehrs sind nur wenige Gehminuten entfernt.</p>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '0.35rem' }}>Befindet sich die Praxis am Standort der ehemaligen Praxis Dr. Koller?</h3>
          <p style={{ color: '#4b5563', lineHeight: '1.6' }}>Ja. Die Hausarztpraxis Dübendorf befindet sich an der Leepüntstrasse 5 (am traditionsreichen Praxisstandort von Dr. Michael Koller). Bestehende Patientinnen und Patienten von Dr. Koller sowie neue Patientinnen und Patienten werden durch unser Praxisteam am gewohnten Standort nahtlos weiterbetreut.</p>
        </div>
      </div>

      <p style={{ fontSize: '0.85rem', color: '#9ca3af', borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem', fontStyle: 'italic' }}>
        Medizinischer Inhalt zur Information. Fachlich geprüft durch den ärztlichen Dienst der Hausarztpraxis Dübendorf.
      </p>
    </main>
  );
}
