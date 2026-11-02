import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Arzt ohne Termin Dübendorf | Walk-in Notfallpraxis Leepünt",
  description: "Arzt ohne Termin in Dübendorf: Walk-in Notfallpraxis ohne Voranmeldung. Praxislabor & Apotheke vor Ort. Auch samstags geöffnet. Jetzt anrufen.",
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
        "name": "Arzt ohne Termin & Walk-in Notfallpraxis",
        "item": "https://hausarztpraxis-duebendorf.ch/leistungen/notfallpraxis-walk-in"
      }
    ]
  };

  const emergencySchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Arzt ohne Termin Dübendorf – Walk-in Notfallpraxis Leepünt",
    "url": "https://hausarztpraxis-duebendorf.ch/leistungen/notfallpraxis-walk-in",
    "telephone": "+41 44 820 10 20",
    "medicalSpecialty": ["EmergencyMedicine", "GeneralPractice"],
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
        "name": "Muss ich mich für die Notfallpraxis vorher telefonisch anmelden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nein, eine Voranmeldung ist bei akuten Notfällen nicht zwingend erforderlich. Sie können während unserer Öffnungszeiten jederzeit direkt als Walk-in-Patient in unsere Praxis an der Leepüntstrasse 5 kommen. Ein kurzer Anruf unter 044 820 10 20 hilft uns jedoch, Ihr Eintreffen vorzubereiten und Ihre Wartezeit zu minimieren."
        }
      },
      {
        "@type": "Question",
        "name": "Ist die Notfallpraxis auch samstags geöffnet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, unsere Praxis in Dübendorf ist jeden Samstag von 09:00 bis 13:00 Uhr und von 14:00 bis 18:00 Uhr geöffnet, um auch am Wochenende eine verlässliche hausärztliche Notfallversorgung zu gewährleisten."
        }
      },
      {
        "@type": "Question",
        "name": "Werden die Notfallbehandlungen von der Grundversicherung bezahlt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Alle Konsultationen und Notfallbehandlungen werden vollumfänglich von der obligatorischen Schweizer Grundversicherung (KVG/TARMED) sowie den Unfallversicherungen (UVG) übernommen – unabhängig von Ihrer Krankenkasse."
        }
      }
    ]
  };

  return (
    <main role="main" style={{ maxWidth: 840, margin: '3.5rem auto 5rem', padding: '0 1.25rem', fontFamily: 'var(--font-inter), sans-serif', color: '#1f2937' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <Link href="/" style={{ color: '#005b4f', textDecoration: 'none', marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
        &larr; Zurück zur Startseite
      </Link>
      
      <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#005b4f', marginBottom: '1.25rem', fontFamily: 'var(--font-dm-serif), serif', lineHeight: 1.2 }}>
        Arzt ohne Termin Dübendorf – Walk-in Notfallpraxis &amp; Permanence
      </h1>

      {/* Hero Image */}
      <div style={{ borderRadius: '12px', overflow: 'hidden', margin: '1.5rem 0 2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <Image
          src="/images/services/Leistungen und Therapien.webp"
          alt="Walk-in Notfallpraxis Dübendorf – Schnelle Erstversorgung und Arztkonsultation ohne Voranmeldung"
          width={840}
          height={420}
          priority
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
        />
        <div style={{ padding: '0.75rem 1rem', background: '#f9fafb', fontSize: '0.88rem', color: '#6b7280', fontStyle: 'italic', textAlign: 'center' }}>
          Professionelle Notfalltriage und Akutversorgung an der Leepüntstrasse 5 in Dübendorf.
        </div>
      </div>
      
      <p style={{ fontSize: '1.15rem', lineHeight: '1.75', color: '#374151', marginBottom: '2rem', fontWeight: '500' }}>
        Suchen Sie dringend einen <strong>Arzt ohne Termin in Dübendorf</strong> oder im Raum Stettbach? Wenn akute Beschwerden, plötzliche Schmerzen oder ein kleiner Unfall sofortige medizinische Hilfe erfordern, lässt sich ein regulärer Arzttermin oft nicht abwarten. Die Walk-in Notfallpraxis der Hausarztpraxis Dübendorf empfängt Sie bei medizinischen Dringlichkeiten ohne vorherige Terminvereinbarung. Wir gewährleisten eine schnelle Erstabklärung und fachgerechte Therapie durch erfahrene Allgemeinmediziner.
      </p>

      <h2 style={{ fontSize: '1.65rem', color: '#005b4f', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>
        Schnelle medizinische Akutversorgung ohne Voranmeldung in Dübendorf
      </h2>
      <p style={{ lineHeight: '1.75', fontSize: '1.05rem', color: '#4b5563', marginBottom: '1.5rem' }}>
        Unsere Praxis an der Leepüntstrasse 5 fungiert als verlässliche Hausarzt-Permanence für Dübendorf, Wallisellen, Schwerzenbach und Zürich-Stettbach. Während unserer Sprechzeiten können Sie bei dringlichen medizinischen Problemen ohne bürokratische Hürden direkt vorbeikommen. Unsere Praxisassistentinnen (MPA) nehmen eine sofortige Ersteinschätzung (Triage) vor, sodass besonders dringende Notfälle unverzüglich von unseren Ärzten behandelt werden.
      </p>
      <p style={{ lineHeight: '1.75', fontSize: '1.05rem', color: '#4b5563', marginBottom: '2rem' }}>
        Um unnötige Wartezeiten im Wartezimmer zu vermeiden, empfehlen wir Ihnen nach Möglichkeit einen kurzen telefonischen Anruf unter <a href="tel:+41448201020" style={{ color: '#005b4f', fontWeight: 'bold' }}>044 820 10 20</a>, während Sie auf dem Weg zu uns sind. So können wir Behandlungsräume und Diagnostikgeräte optimal auf Ihr Eintreffen vorbereiten.
      </p>

      <h2 style={{ fontSize: '1.65rem', color: '#005b4f', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>
        Welche Notfälle &amp; akuten Beschwerden behandeln wir sofort?
      </h2>
      <p style={{ lineHeight: '1.75', fontSize: '1.05rem', color: '#4b5563', marginBottom: '1rem' }}>
        Unser ärztliches Team ist ausgerüstet, um eine Vielzahl ambulanter Akuterkrankungen und Verletzungen sicher und kompetent zu versorgen:
      </p>
      <ul style={{ lineHeight: '1.75', fontSize: '1.05rem', color: '#374151', paddingLeft: '1.5rem', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <li><strong>Schnitt-, Riss- und Platzwunden:</strong> Fachmännische Wundreinigung, sterile Wundnaht, Gewebeklebung sowie Auffrischung des Tetanus-Impfschutzes.</li>
        <li><strong>Akute Infektionskrankheiten:</strong> Plötzliches hohes Fieber, schwere Hals-, Ohren- oder Mandelentzündungen, akute Sinusitis und Grippesymptome.</li>
        <li><strong>Urologische Akutfälle:</strong> Brennen beim Wasserlassen, schmerzhafte Blasenentzündungen (Zystitis), Flankenschmerzen oder Nierenkoliken.</li>
        <li><strong>Sport- und Haushaltsunfälle:</strong> Verstauchungen, Prellungen, Zerrungen, Schnittverletzungen und Verdacht auf Knochenbrüche.</li>
        <li><strong>Starke Schmerzzustände:</strong> Akute Rückenblockaden (Hexenschuss / Lumbago), akute Migräneanfälle sowie Zahnschmerz-Erstüberbrückung.</li>
        <li><strong>Allergische Reaktionen:</strong> Akute Nesselsucht (Urtikaria), Insektenstiche mit starker Schwellung oder leichte asthmatische Atemnot.</li>
      </ul>

      {/* Diagnostics Visual */}
      <div style={{ margin: '2.5rem 0', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <Image
          src="/images/services/Labor.webp"
          alt="In-House Praxislabor Dübendorf für Sofortanalysen bei Notfällen"
          width={840}
          height={380}
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
        />
        <div style={{ padding: '0.75rem 1rem', background: '#f9fafb', fontSize: '0.88rem', color: '#6b7280', fontStyle: 'italic', textAlign: 'center' }}>
          Dank hauseigenem Sofortlabor liegen entscheidende Entzündungs- und Notfallwerte innerhalb weniger Minuten vor.
        </div>
      </div>

      <h2 style={{ fontSize: '1.65rem', color: '#005b4f', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>
        Hauseigene Notfalldiagnostik: Praxislabor, Digitales Röntgen &amp; Ruhe-EKG
      </h2>
      <p style={{ lineHeight: '1.75', fontSize: '1.05rem', color: '#4b5563', marginBottom: '1.5rem' }}>
        Im medizinischen Notfall ist eine verlässliche Diagnostik ohne Zeitverlust entscheidend. Die Hausarztpraxis Dübendorf verfügt über moderne apparative Diagnostikgeräte direkt vor Ort in der Praxis:
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        <div style={{ padding: '1.25rem', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#005b4f', marginBottom: '0.5rem' }}>Sofort-Labor vor Ort</h3>
          <p style={{ fontSize: '0.95rem', color: '#4b5563', margin: 0 }}>Schnellbestimmung von Entzündungsmarkern (CRP), Troponin (Herzinfarkt-Ausschluss), D-Dimer (Thrombose), Blutzucker und Urinstatus in wenigen Minuten.</p>
        </div>
        <div style={{ padding: '1.25rem', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#005b4f', marginBottom: '0.5rem' }}>Ruhe-EKG</h3>
          <p style={{ fontSize: '0.95rem', color: '#4b5563', margin: 0 }}>Sofortige elektrokardiografische Untersuchung bei Herzrasen, Herzstolpern, Engegefühl in der Brust oder Blutdruckkrisen.</p>
        </div>
        <div style={{ padding: '1.25rem', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#005b4f', marginBottom: '0.5rem' }}>Digitales Röntgen</h3>
          <p style={{ fontSize: '0.95rem', color: '#4b5563', margin: 0 }}>Schnelle Abklärung von Traumata an Extremitäten, Thorax und Gelenken zur sofortigen Beurteilung von Frakturen.</p>
        </div>
      </div>

      {/* Pharmacy Visual */}
      <div style={{ margin: '2.5rem 0', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <Image
          src="/images/services/Hauseigene Apotheke.webp"
          alt="Hauseigene Notfallapotheke der Hausarztpraxis Dübendorf – Schnelle Abgabe von Notfallmedikamenten"
          width={840}
          height={380}
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
        />
        <div style={{ padding: '0.75rem 1rem', background: '#f9fafb', fontSize: '0.88rem', color: '#6b7280', fontStyle: 'italic', textAlign: 'center' }}>
          Notfallmedikamente, Antibiotika und Schmerzmittel erhalten Sie direkt vor Ort in unserer Praxisapotheke.
        </div>
      </div>

      <h2 style={{ fontSize: '1.65rem', color: '#005b4f', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>
        Ablauf beim Notfallbesuch &amp; Krankenkassenabrechnung (KVG/UVG)
      </h2>
      <p style={{ lineHeight: '1.75', fontSize: '1.05rem', color: '#4b5563', marginBottom: '1.5rem' }}>
        Beim Eintreffen in der Praxis an der Leepüntstrasse 5 melden Sie sich kurz an unserem Empfangsschalter. Bringen Sie bitte Ihre Schweizer Krankenversicherungskarte (KVG) und bei Unfällen die Angaben des Arbeitgebers bzw. der Unfallversicherung mit. Alle ärztlichen Notfalleistungen werden nach dem offiziellen Schweizer Arzttarif (TARMED) abgerechnet und von sämtlichen Schweizer Krankenkassen und Unfallversicherungen übernommen.
      </p>
      <p style={{ lineHeight: '1.75', fontSize: '1.05rem', color: '#4b5563', marginBottom: '2.5rem' }}>
        <em>Wichtiger Hinweis:</em> Bei lebensbedrohlichen Notfällen (wie schwerer Bewusstlosigkeit, akutem Verdacht auf Schlaganfall oder schwerem Herzinfarkt) wählen Sie bitte unverzüglich die Schweizer Notrufnummer <strong>144</strong>.
      </p>

      {/* Emergency Call Box */}
      <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2.5rem', backgroundColor: '#f0fdfa', borderRadius: '14px', border: '1px solid #99f6e4' }}>
        <h3 style={{ fontSize: '1.45rem', color: '#005b4f', marginBottom: '0.75rem', fontFamily: 'var(--font-dm-serif), serif' }}>
          Dringender Notfall? Rufen Sie uns an oder kommen Sie direkt vorbei
        </h3>
        <p style={{ color: '#374151', maxWidth: '620px', margin: '0 auto 1.5rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
          Unser Praxisteam an der Leepüntstrasse 5 ist von Montag bis Samstag für Sie erreichbar. Keine langen Wartezeiten, schnelle Hilfe vor Ort.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="tel:+41448201020"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#005b4f',
              color: '#ffffff',
              padding: '0.9rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              boxShadow: '0 4px 12px rgba(0,91,79,0.25)',
            }}
          >
            📞 Direkt anrufen: 044 820 10 20
          </a>
          <a
            href="https://app.arzt-direkt.de/hausarztpraxis-zuerich/booking"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ffffff',
              color: '#005b4f',
              border: '2px solid #005b4f',
              padding: '0.9rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold',
            }}
          >
            📅 Kurzfristigen Termin buchen
          </a>
        </div>
      </div>
    </main>
  );
}
