import { TEAM, SITE } from '@/data/siteData';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Dipl. Arzt Awad Abuawad | Hausarzt in Dübendorf | Praxenleitung",
  description: "Dipl. Arzt Awad Abuawad ist Ihr erfahrener Hausarzt für Allgemeinmedizin in Dübendorf an der Leepüntstrasse 5. Über 20 Jahre Praxiserfahrung in der Grundversorgung. Jetzt online Termin buchen.",
  alternates: {
    canonical: "/team/awad-abuawad",
  },
  openGraph: {
    title: "Dipl. Arzt Awad Abuawad | Hausarzt in Dübendorf",
    description: "Diplomierter Arzt für Allgemeinmedizin und Praxenleiter in Dübendorf. Umfassende hausärztliche Grundversorgung für die ganze Familie.",
    url: "https://hausarztpraxis-duebendorf.ch/team/awad-abuawad",
    images: [{ url: "/images/team/Dr. Awad.webp", width: 480, height: 480, alt: "Dipl. Arzt Awad Abuawad Hausarzt Dübendorf" }],
  },
};

export default function AwadAbuawadPage() {
  const doc = TEAM.find(t => t.name.includes("Awad")) || {
    name: "Dipl. Arzt Awad Abuawad",
    role: "Praktischer Arzt",
    roleDetail: "Allgemeinmedizin FMH Leitung Jerumed",
    photo: "/images/team/Dr. Awad.webp",
    languages: "Deutsch, Arabisch",
  };

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
        "name": "Team",
        "item": "https://hausarztpraxis-duebendorf.ch/#team"
      },
      {
        "@type": "ListItem",
        "position": 3,
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
    "description": "Dipl. Arzt Awad Abuawad ist Praxenleiter und erfahrener Hausarzt für Allgemeinmedizin in Dübendorf an der Leepüntstrasse 5 mit über 20 Jahren Berufserfahrung.",
    "image": "https://hausarztpraxis-duebendorf.ch/images/team/Dr. Awad.webp",
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
    <main role="main" style={{ maxWidth: 880, margin: '3rem auto 5rem', padding: '0 1.25rem', fontFamily: 'var(--font-inter), sans-serif', color: '#1f2937' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }} />

      <Link href="/#team" style={{ color: '#005b4f', textDecoration: 'none', marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '600', fontSize: '0.95rem' }}>
        &larr; Zurück zur Teamübersicht
      </Link>

      {/* Header Profile Card */}
      <div style={{ display: 'flex', flexDirection: 'column', mdDirection: 'row', gap: '2rem', alignItems: 'flex-start', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '2rem', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', width: '100%' }}>
          <div style={{ width: 160, height: 160, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '4px solid #ffffff', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
            <Image
              src="/images/team/Dr. Awad.webp"
              alt="Dipl. Arzt Awad Abuawad – Hausarzt und Praxenleiter Dübendorf"
              width={160}
              height={160}
              priority
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <h1 style={{ fontSize: '2.25rem', color: '#005b4f', margin: '0 0 0.5rem', fontFamily: 'var(--font-dm-serif), serif', lineHeight: 1.2 }}>
              Dipl. Arzt Awad Abuawad
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#0284c7', fontWeight: '600', margin: '0 0 1rem' }}>
              Diplomierter Arzt für Allgemeinmedizin · Praxenleitung Praxen Jerumed
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.95rem', color: '#4b5563' }}>
              <span>📍 <strong>Standort:</strong> Hausarztpraxis Dübendorf, Leepüntstrasse 5, 8600 Dübendorf</span>
              <span>📞 <strong>Direktruf:</strong> <a href="tel:+41448201020" style={{ color: '#005b4f', textDecoration: 'underline' }}>044 820 10 20</a></span>
              <span>🗣️ <strong>Gesprochene Sprachen:</strong> Deutsch, Arabisch (العربية)</span>
              <span>🕒 <strong>Sprechzeiten:</strong> Mo, Di, Do, Sa: 09:00–13:00 &amp; 14:00–18:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <article style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#374151' }}>
        <h2 style={{ fontSize: '1.65rem', color: '#005b4f', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>
          Über Dipl. Arzt Awad Abuawad – Ihr Hausarzt in Dübendorf
        </h2>
        <p>
          Dipl. Arzt Awad Abuawad ist diplomierter Arzt für Allgemeinmedizin mit <strong>über 20 Jahren praktischer Erfahrung</strong> in der medizinischen Grundversorgung und ambulanten Patientenbetreuung. Als Gründer und medizinischer Leiter des Praxisverbunds Praxen Jerumed steht er für eine patientennahe, wissenschaftlich fundierte und menschlich zugewandte Medizin im Zürcher Oberland und Grossraum Zürich.
        </p>
        <p>
          Nach seinem Medizinstudium und fundierten klinischen Weiterbildungen in Innerer Medizin, Chirurgie und Notfallmedizin in der Schweiz und im Ausland hat sich Dipl. Arzt Abuawad vollumfänglich der hausärztlichen Grundversorgung verschrieben. In der Hausarztpraxis Dübendorf betreut er Patientinnen und Patienten aller Generationen – vom Teenager bis zum hochbetagten Menschen – mit hohem fachlichem Sachverstand und persönlicher Hingabe.
        </p>

        {/* Practice Environment Visual */}
        <div style={{ margin: '2.5rem 0', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <Image
            src="/images/banner.webp"
            alt="Hausarztpraxis Dübendorf – Moderne Behandlungsräume und Empfang an der Leepüntstrasse 5"
            width={840}
            height={360}
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
          />
          <div style={{ padding: '0.75rem 1rem', background: '#f9fafb', fontSize: '0.88rem', color: '#6b7280', fontStyle: 'italic', textAlign: 'center' }}>
            Empfang und Behandlungsräume der Hausarztpraxis Dübendorf an der Leepüntstrasse 5 nahe Bahnhof Stettbach.
          </div>
        </div>

        <h2 style={{ fontSize: '1.65rem', color: '#005b4f', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>
          Behandlungsschwerpunkte und medizinische Spezialisierungen
        </h2>
        <p>
          Das Leistungsspektrum von Dipl. Arzt Awad Abuawad umfasst das gesamte Spektrum der ambulanten Allgemeinmedizin und Inneren Grundversorgung:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>
            <strong>Hausärztliche Grundversorgung:</strong> Gründliche Abklärung, Diagnostik und ganzheitliche Therapie akuter Erkrankungen (wie Atemwegsinfekte, Magen-Darm-Erkrankungen, Grippe oder Blasenentzündungen).
          </li>
          <li>
            <strong>Betreuung chronischer Krankheiten (Chronic Care):</strong> Langzeitmanagement von Patienten mit Bluthochdruck (Hypertonie), Typ-2-Diabetes mellitus, Fettstoffwechselstörungen, Asthma/COPD und Schilddrüsenerkrankungen.
          </li>
          <li>
            <strong>Präventivmedizin &amp; Check-ups:</strong> Umfassende Vorsorgeuntersuchungen, kardiovaskuläre Risikoanalyse, Krebsfrüherkennung und reisemedizinische Impfberatungen.
          </li>
          <li>
            <strong>Ambulante Akuttriage &amp; Wundversorgung:</strong> Schnelle Erstversorgung kleinerer Schnitt- und Platzwunden, Wundnaht, Verbände und Nachbehandlungen.
          </li>
          <li>
            <strong>Labor- und EKG-Diagnostik:</strong> Schnellauswertung wichtiger Blutwerte (CRP, Troponin, D-Dimer, Blutzucker) im praxiseigenen Sofortlabor sowie Ruhe-EKG bei Herzbeschwerden.
          </li>
          <li>
            <strong>Multilinguale Konsultation:</strong> Muttersprachliche ärztliche Beratung auf Deutsch und Arabisch für eine barrierefreie Verständigung und präzise Anamnese.
          </li>
        </ul>

        <h2 style={{ fontSize: '1.65rem', color: '#005b4f', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>
          Behandlungsphilosophie: Zeit für den Menschen und ganzheitlicher Ansatz
        </h2>
        <p>
          Für Dipl. Arzt Abuawad steht nicht allein das isolierte Symptom oder ein einzelner Laborwert im Fokus, sondern stets der Mensch in seiner individuellen Lebenssituation. Eine erfolgreiche Genesung und langfristige Gesundheit beruhen auf gegenseitigem Vertrauen, aktivem Zuhören und verständlicher Aufklärung über alle Befunde und Behandlungsoptionen.
        </p>
        <p>
          Durch die enge Vernetzung im Ärzteverbund Praxen Jerumed gewährleistet Dipl. Arzt Abuawad zudem bei komplexeren medizinischen Fragestellungen kurze Wege zu Spezialisten der Kardiologie, Urologie und Radiologie.
        </p>

        {/* Diagnostics Partner Visual */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', background: '#f0fdfa', border: '1px solid #ccfbf1', borderRadius: '12px', padding: '1.5rem', margin: '2rem 0' }}>
          <div style={{ width: 120, height: 60, flexShrink: 0, position: 'relative' }}>
            <Image
              src="/images/labor-team.webp"
              alt="Akkreditiertes Schweizer Praxislabor Partner für Diagnostik in Dübendorf"
              width={120}
              height={60}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
          <div style={{ flex: 1, minWidth: '220px', fontSize: '0.95rem', color: '#065f46' }}>
            <strong>Modernste Praxislabordiagnostik:</strong> In Zusammenarbeit mit akkreditierten Schweizer Fachlaboren gewährleisten wir präzise und zügige Laboranalysen direkt vor Ort in Dübendorf.
          </div>
        </div>

        <h2 style={{ fontSize: '1.65rem', color: '#005b4f', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>
          Sprechstunde an der Leepüntstrasse 5 in Dübendorf
        </h2>
        <p>
          Die Hausarztpraxis Dübendorf befindet sich an zentraler Lage an der <strong>Leepüntstrasse 5, 8600 Dübendorf</strong>. Die Praxis ist sowohl mit öffentlichen Verkehrsmitteln (Nähe Bahnhof Dübendorf und Verkehrsknotenpunkt Bahnhof Stettbach) als auch mit dem Auto (Parkmöglichkeiten im Quartier) bequem erreichbar.
        </p>
        <p>
          <strong>Krankenkassenanerkennung:</strong> Alle Behandlungen von Dipl. Arzt Awad Abuawad sind über die Schweizer Grundversicherung (KVG/TARMED) sowie über die Unfallversicherung (UVG) zu 100% kassenanerkannt. Neue Patientinnen und Patienten sind jederzeit herzlich willkommen – auch im Hausarzt- oder Telmed-Modell.
        </p>
      </article>

      {/* Appointment CTA Box */}
      <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#f0fdfa', borderRadius: '14px', border: '1px solid #99f6e4', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.4rem', color: '#005b4f', marginBottom: '0.75rem', fontFamily: 'var(--font-dm-serif), serif' }}>
          Termin bei Dipl. Arzt Awad Abuawad vereinbaren
        </h3>
        <p style={{ color: '#374151', maxWidth: '600px', margin: '0 auto 1.5rem', fontSize: '1.02rem', lineHeight: '1.6' }}>
          Buchen Sie Ihre Konsultation bequem rund um die Uhr online oder rufen Sie unser Praxisteam während der Öffnungszeiten an. Bei akuten Beschwerden ist auch ein kurzfristiger Walk-in ohne Voranmeldung möglich.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://app.arzt-direkt.de/hausarztpraxis-zuerich/booking"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '0.85rem 1.75rem', backgroundColor: '#005b4f', color: '#ffffff', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', boxShadow: '0 4px 12px rgba(0,91,79,0.2)' }}
          >
            📅 Online Termin buchen
          </a>
          <a
            href="tel:+41448201020"
            style={{ display: 'inline-block', padding: '0.85rem 1.75rem', backgroundColor: '#ffffff', color: '#005b4f', border: '2px solid #005b4f', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem' }}
          >
            📞 Tel: 044 820 10 20
          </a>
        </div>
      </div>
    </main>
  );
}
