import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Check-up & Fahreignungsabklärung Dübendorf | Hausarztpraxis",
  description: "Medizinische Check-ups & Fahreignungsabklärungen (Stufe 1 & 2) in Dübendorf. Vorsorge, EKG & Atteste für Senioren und Chauffeure. Jetzt online buchen.",
  alternates: {
    canonical: "/check-up-fahreignung-duebendorf",
  },
};

export default function CheckUpFahreignungPage() {
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
        "name": "Check-up & Fahreignung Dübendorf",
        "item": "https://hausarztpraxis-duebendorf.ch/check-up-fahreignung-duebendorf"
      }
    ]
  };

  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Hausarztpraxis Dübendorf – Check-up & Fahreignungsstelle",
    "url": "https://hausarztpraxis-duebendorf.ch/check-up-fahreignung-duebendorf",
    "telephone": "+41 44 820 10 20",
    "medicalSpecialty": ["GeneralPractice", "PreventiveMedicine"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Leepüntstrasse 5",
      "addressLocality": "Dübendorf",
      "postalCode": "8600",
      "addressCountry": "CH"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Welche Stufen der Fahreignungsabklärung führen Sie durch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir führen Fahreignungsuntersuchungen der Stufe 1 (Senioren ab 75 Jahren für PW und Motorräder) sowie der Stufe 2 (Berufsfahrer für Lastwagen, Busse und Taxi sowie höhere Kategorien C, D, C1, D1) gemäss den Richtlinien des Strassenverkehrsamtes durch."
        }
      },
      {
        "@type": "Question",
        "name": "Was muss ich zur Fahreignungsuntersuchung mitbringen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bitte bringen Sie das offizielle Aufgebotsformular des Strassenverkehrsamtes, einen gültigen amtlichen Ausweis (Pass oder ID), Ihren Führerausweis, Ihre aktuelle Sehhilfe (Brille oder Kontaktlinsen) sowie gegebenenfalls den Brillenpass und eine aktuelle Medikamentenliste mit."
        }
      },
      {
        "@type": "Question",
        "name": "Zahlt die Krankenkasse die Fahreignungsuntersuchung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gesetzlich vorgeschriebene verkehrsmedizinische Kontrolluntersuchungen sind keine Pflichtleistung der Krankenkasse und müssen privat beglichen werden. Präventive medizinische Gesundheits-Check-ups werden je nach Indikation und Zusatzversicherung teilweise oder ganz übernommen."
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
        Check-up &amp; Fahreignungsabklärung in Dübendorf
      </h1>

      <div style={{ borderRadius: '12px', overflow: 'hidden', margin: '1.5rem 0 2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <Image
          src="/images/services/Fahreignungsabklärung.webp"
          alt="Medizinische Fahreignungsabklärung und Senioren-Kontrolluntersuchung in Dübendorf"
          width={840}
          height={400}
          priority
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
        />
      </div>

      <p style={{ fontSize: '1.15rem', lineHeight: '1.75', color: '#374151', marginBottom: '2rem', fontWeight: '500' }}>
        Benötigen Sie eine verkehrsmedizinische Kontrolluntersuchung für das Strassenverkehrsamt oder möchten Sie Ihre Gesundheit mit einem gründlichen medizinischen Check-up überprüfen lassen? In der Hausarztpraxis Dübendorf an der Leepüntstrasse 5 bieten wir Ihnen professionelle Fahreignungsabklärungen (Stufe 1 und Stufe 2) sowie massgeschneiderte Vorsorgeuntersuchungen mit schneller Terminvergabe.
      </p>

      <div style={{ borderRadius: '12px', overflow: 'hidden', margin: '2rem 0', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <Image
          src="/images/services/Herzuntersuchung.webp"
          alt="Kardiologische Diagnostik und Ruhe-EKG beim Gesundheits-Check-up in Dübendorf"
          width={840}
          height={380}
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
        />
      </div>

      <h2 style={{ fontSize: '1.6rem', color: '#111827', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair), serif' }}>
        Fahreignungsuntersuchung nach Schweizer Richtlinien
      </h2>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#4b5563', marginBottom: '1.5rem' }}>
        In der Schweiz sind regelmässige verkehrsmedizinische Untersuchungen gesetzlich vorgeschrieben, um die Verkehrssicherheit zu gewährleisten. Als anerkannte Untersuchungsstelle führen wir die Abklärungen gemäss den strengen Richtlinien der Schweizerischen Gesellschaft für Rechtsmedizin (SGRM) und der Vereinigung der Strassenverkehrsämter (asa) durch:
      </p>
      <ul style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#374151', marginBottom: '2.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Stufe 1 – Seniorenkontrolle (ab 75 Jahren):</strong> Gesetzliche Kontrolluntersuchung alle zwei Jahre für Lenkerinnen und Lenker der Kategorien A und B (Auto und Motorrad). Überprüfung von Sehschärfe, Gesichtsfeld, Hörvermögen, Herz-Kreislauf-Funktion, Beweglichkeit und kognitiver Leistungsfähigkeit.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Stufe 2 – Berufschauffeure & Höhere Kategorien:</strong> Untersuchungen für Lenkerinnen und Lenker der Kategorien C, C1 (Lastwagen), D, D1 (Busse und Kleinbusse) sowie berufsmässiger Personentransport (BPT / Taxi). Umfassende Abklärung inklusive EKG und spezifischen Laborparametern.
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Hinweis zu Stufe 3 &amp; Stufe 4:</strong> In unserer Hausarztpraxis Dübendorf führen wir verkehrsmedizinische Kontrolluntersuchungen der Stufe 1 und Stufe 2 durch. Benötigen Sie ein Gutachten für verkehrsmedizinische Abklärungen der Stufe 3 oder Stufe 4 (z.B. behördliche Gutachten oder verkehrspsychologische Beurteilungen), verweisen wir Sie gerne an die akkreditierten verkehrsmedizinischen Fachstellen im Kanton Zürich.
        </li>
      </ul>

      <h2 style={{ fontSize: '1.6rem', color: '#111827', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair), serif' }}>
        Checkliste: Was Sie zum Termin mitbringen müssen
      </h2>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#4b5563', marginBottom: '1.25rem' }}>
        Damit die Untersuchung und das Ausfüllen des amtlichen Formulars reibungslos ablaufen, bringen Sie bitte folgende Unterlagen mit:
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        <div style={{ padding: '1.25rem', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#005b4f', marginBottom: '0.5rem' }}>Amtliche Dokumente</h3>
          <p style={{ fontSize: '0.95rem', color: '#4b5563', margin: 0 }}>Das offizielle Untersuchungsformular des Strassenverkehrsamtes sowie Ihren aktuellen Führerausweis und Identitätskarte / Pass.</p>
        </div>
        <div style={{ padding: '1.25rem', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#005b4f', marginBottom: '0.5rem' }}>Sehhilfen & Brillenpass</h3>
          <p style={{ fontSize: '0.95rem', color: '#4b5563', margin: 0 }}>Falls Sie eine Sehhilfe tragen: Brille oder Kontaktlinsen inklusive aktuellem Brillenpass oder Bescheinigung des Optikers.</p>
        </div>
        <div style={{ padding: '1.25rem', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#005b4f', marginBottom: '0.5rem' }}>Medizinische Angaben</h3>
          <p style={{ fontSize: '0.95rem', color: '#4b5563', margin: 0 }}>Eine vollständige Liste Ihrer regelmässig eingenommenen Medikamente und allfällige Vorbefunde relevanter Vorerkrankungen.</p>
        </div>
      </div>

      <div style={{ borderRadius: '12px', overflow: 'hidden', margin: '2.5rem 0', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <Image
          src="/images/services/Labor.webp"
          alt="In-House Praxislabor Dübendorf – Schnelle Blut- und Urinanalysen für Check-ups und Fahreignung"
          width={840}
          height={380}
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
        />
        <div style={{ padding: '0.75rem 1rem', background: '#f9fafb', fontSize: '0.88rem', color: '#6b7280', fontStyle: 'italic', textAlign: 'center' }}>
          Umfassende labormedizinische Analysen für Vorsorge und verkehrsmedizinische Atteste direkt vor Ort.
        </div>
      </div>

      <h2 style={{ fontSize: '1.6rem', color: '#111827', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair), serif' }}>
        Ganzheitliche medizinische Vorsorge & Gesundheits-Check-ups
      </h2>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#4b5563', marginBottom: '1.5rem' }}>
        Neben behördlichen Untersuchungen bieten wir individuelle Gesundheits-Check-ups für jede Lebensphase an. Die frühzeitige Erkennung von Risikofaktoren wie Bluthochdruck, Fettstoffwechselstörungen oder Diabetes ist der wirksamste Schutz vor Herzinfarkt und Schlaganfall:
      </p>
      <ul style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#374151', marginBottom: '2.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Basis-Vorsorgecheck:</strong> Körperliche Untersuchung, Blutdruckmessung, Ruhe-EKG, grosses Blutbild, Cholesterin-, Leber- und Nierenwerte.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Erweiterter Herz-Kreislauf-Check:</strong> Ergänzende kardiale Diagnostik, Langzeit-Blutdruckmessung und kardiologische Risikoberechnung.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Manager- & Sport-Check-ups:</strong> Lungenfunktion (Spirometrie), Mineral- und Eisenstatus, Nährstoffanalysen und individuelle Leistungsberatung.</li>
      </ul>

      <div style={{ padding: '2rem', backgroundColor: '#f0fdfa', borderRadius: '10px', border: '1px solid #ccfbf1', marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.35rem', color: '#005b4f', marginBottom: '0.5rem' }}>Termin für Fahreignung oder Check-up vereinbaren</h3>
        <p style={{ color: '#374151', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          Buchen Sie Ihren Untersuchungstermin rechtzeitig vor Ablauf der behördlichen Frist. Termine können bequem online oder telefonisch vereinbart werden.
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
          <h3 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '0.35rem' }}>Werden die Ergebnisse direkt an das Strassenverkehrsamt übermittelt?</h3>
          <p style={{ color: '#4b5563', lineHeight: '1.6' }}>Nach Abschluss der Untersuchung füllen wir das amtliche Zeugnis aus und händigen es Ihnen direkt aus oder übermitteln es auf Wunsch an das zuständige Strassenverkehrsamt.</p>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '0.35rem' }}>Wie lange dauert eine Fahreignungsuntersuchung?</h3>
          <p style={{ color: '#4b5563', lineHeight: '1.6' }}>In der Regel dauert die Untersuchung zwischen 30 und 45 Minuten, abhängig von den geforderten Zusatztests (z.B. EKG bei Stufe 2).</p>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '0.35rem' }}>Kann ich den Termin mit einem allgemeinen Gesundheits-Check-up verbinden?</h3>
          <p style={{ color: '#4b5563', lineHeight: '1.6' }}>Ja, auf Wunsch können wir die verkehrsmedizinische Untersuchung mit einer umfassenden hausärztlichen Vorsorgeuntersuchung kombinieren.</p>
        </div>
      </div>

      <p style={{ fontSize: '0.85rem', color: '#9ca3af', borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem', fontStyle: 'italic' }}>
        Medizinischer Inhalt zur Information. Fachlich geprüft durch den ärztlichen Dienst der Hausarztpraxis Dübendorf.
      </p>
    </main>
  );
}
