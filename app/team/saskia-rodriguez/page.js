import { TEAM, SITE } from '@/data/siteData';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Dr. med. Saskia Rodriguez | Hausärztin Dübendorf",
  description: "Dr. med. Saskia Rodriguez ist Ihre Hausärztin in Dübendorf. Allgemeinmedizin, Frauengesundheit, Prävention & mehrsprachige Sprechstunde. Jetzt buchen.",
  alternates: {
    canonical: "/team/saskia-rodriguez",
  },
  openGraph: {
    title: "Dr. med. (RO) Saskia Rodriguez | Hausärztin Dübendorf",
    description: "Praktische Ärztin für Allgemeinmedizin und Praxenleitung in Dübendorf. Umfassende hausärztliche Grundversorgung und Frauengesundheit.",
    url: "https://hausarztpraxis-duebendorf.ch/team/saskia-rodriguez",
    images: [{ url: "/images/team/Dr. Saskia.webp", width: 480, height: 480, alt: "Dr. med. Saskia Rodriguez Hausärztin Dübendorf" }],
  },
};

export default function SaskiaRodriguezPage() {
  const doc = TEAM.find(t => t.name.includes("Saskia")) || {
    name: "Dr. med. (RO) Saskia Rodriguez",
    role: "Praktische Ärztin",
    roleDetail: "Allgemeinmedizin Leitung Jerumed",
    photo: "/images/team/Dr. Saskia.webp",
    languages: "Deutsch, Spanisch, Englisch, Französisch, Rumänisch",
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
        "name": "Dr. med. (RO) Saskia Rodriguez",
        "item": "https://hausarztpraxis-duebendorf.ch/team/saskia-rodriguez"
      }
    ]
  };

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. med. (RO) Saskia Rodriguez",
    "jobTitle": "Praktische Ärztin für Allgemeinmedizin",
    "description": "Dr. med. (RO) Saskia Rodriguez ist praktizierende Hausärztin in Dübendorf mit besonderem Schwerpunkt auf Allgemeinmedizin, Frauengesundheit, Prävention und multilingualer Patientenbetreuung.",
    "image": "https://hausarztpraxis-duebendorf.ch/images/team/Dr. Saskia.webp",
    "url": "https://hausarztpraxis-duebendorf.ch/team/saskia-rodriguez",
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
    "knowsLanguage": ["de", "es", "en", "fr", "ro"]
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
              src="/images/team/Dr. Saskia.webp"
              alt="Dr. med. (RO) Saskia Rodriguez – Hausärztin Dübendorf"
              width={160}
              height={160}
              priority
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <h1 style={{ fontSize: '2.25rem', color: '#005b4f', margin: '0 0 0.5rem', fontFamily: 'var(--font-dm-serif), serif', lineHeight: 1.2 }}>
              Dr. med. (RO) Saskia Rodriguez
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#0284c7', fontWeight: '600', margin: '0 0 1rem' }}>
              Praktische Ärztin für Allgemeinmedizin · Praxenleitung Praxen Jerumed
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.95rem', color: '#4b5563' }}>
              <span>📍 <strong>Standort:</strong> Hausarztpraxis Dübendorf, Leepüntstrasse 5, 8600 Dübendorf</span>
              <span>📞 <strong>Direktruf:</strong> <a href="tel:+41448201020" style={{ color: '#005b4f', textDecoration: 'underline' }}>044 820 10 20</a></span>
              <span>🗣️ <strong>Gesprochene Sprachen:</strong> Deutsch, Spanisch, Englisch, Französisch, Rumänisch</span>
              <span>🕒 <strong>Sprechzeiten:</strong> Nach Vereinbarung (Mo–Sa) &amp; Walk-in Triage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <article style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#374151' }}>
        <h2 style={{ fontSize: '1.65rem', color: '#005b4f', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>
          Beruflicher Werdegang &amp; fundierte medizinische Expertise
        </h2>
        <p>
          Dr. med. (RO) Saskia Rodriguez ist eine erfahrene und engagierte praktische Ärztin für Allgemeinmedizin, die unser Ärztekollegium in Dübendorf mit hoher fachlicher Kompetenz, diagnostischer Präzision und ausgeprägtem menschlichem Feingefühl bereichert. Nach ihrem Medizinstudium an traditionsreichen universitären Fakultäten und langjährigen klinischen Weiterbildungsabschnitten in der Inneren Medizin, Akutmedizin und ambulanten Grundversorgung vertritt sie eine moderne, evidenzbasierte Primärversorgung.
        </p>
        <p>
          Als geschätzte ärztliche Mitverantwortliche im regionalen Praxisverbund Praxen Jerumed widmet sich Dr. med. Rodriguez der ganzheitlichen Betreuung von Patientinnen und Patienten aller Altersstufen. Sie verbindet bewährte Schulmedizin mit einem offenen Ohr für die individuellen Belange jedes Hilfesuchenden und nimmt sich bewusst die notwendige Zeit für eine gründliche Ursachenforschung bei komplexen oder unklaren Beschwerdebildern.
        </p>

        {/* Practice Environment Visual */}
        <div style={{ margin: '2.5rem 0', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <Image
            src="/images/banner.webp"
            alt="Hausarztpraxis Dübendorf – Moderne Praxiseinrichtung an der Leepüntstrasse 5"
            width={840}
            height={360}
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
          />
          <div style={{ padding: '0.75rem 1rem', background: '#f9fafb', fontSize: '0.88rem', color: '#6b7280', fontStyle: 'italic', textAlign: 'center' }}>
            Die Praxisräumlichkeiten der Hausarztpraxis Dübendorf bieten eine ruhige, vertrauensvolle Atmosphäre für alle Generationen.
          </div>
        </div>

        <h2 style={{ fontSize: '1.65rem', color: '#005b4f', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>
          Medizinische Behandlungsschwerpunkte: Frauengesundheit, Prävention &amp; Chronic Care
        </h2>
        <p>
          Dr. med. Saskia Rodriguez bietet in unserer Praxis in Dübendorf ein breit gefächertes Behandlungsspektrum der ambulanten Allgemeinmedizin mit gezielten Spezialisierungen:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
          <li>
            <strong>Allgemeinmedizinische Grundversorgung:</strong> Gründliche Abklärung und Behandlung aller akuten Erkrankungen (fieberhafte Infekte, Magen-Darm-Beschwerden, Kopf- und Rückenschmerzen) sowie kontinuierliche Begleitung von Patienten mit chronischen Beschwerden.
          </li>
          <li>
            <strong>Frauengesundheit &amp; Gynäkologische Basisberatung:</strong> Einfühlsame hausärztliche Betreuung von Frauen in sämtlichen Lebensabschnitten – von Menstruationsbeschwerden und individueller Verhütungsberatung bis hin zur ganzheitlichen Linderung typischer Wechseljahrbeschwerden (Klimakterium).
          </li>
          <li>
            <strong>Vitalitätsaufbau &amp; Eisenmangel-Therapie:</strong> Gezielte Diagnostik des Eisenstoffwechsels (Ferritin, Transferrinsättigung) bei anhaltender Erschöpfung, Abgeschlagenheit oder Haarausfall sowie Durchführung schonender intravenöser Eiseninfusionen und Vitalstoffkuren.
          </li>
          <li>
            <strong>Präventivmedizin &amp; Personalisierte Check-ups:</strong> Detaillierte Vorsorgeuntersuchungen zur Früherkennung von Bluthochdruck, Fettstoffwechselstörungen, Schilddrüsendysfunktionen und Diabetes mellitus.
          </li>
          <li>
            <strong>Hautgesundheit &amp; Ambulante Wundpflege:</strong> Ärztliche Begutachtung von Hautveränderungen, moderne Wundbehandlung, Verbandsanlagen sowie schonende Fadenentfernungen.
          </li>
          <li>
            <strong>Internationale &amp; multilinguale Konsultationen:</strong> Dank hervorragender Sprachkenntnisse auf Deutsch, Spanisch (Español), Englisch, Französisch und Rumänisch ist Dr. med. Rodriguez eine ideale Ansprechpartnerin für internationale Patientinnen und Expats im Grossraum Dübendorf, Stettbach und Zürich.
          </li>
        </ul>

        <h2 style={{ fontSize: '1.65rem', color: '#005b4f', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>
          Behandlungsansatz: Partnerschaftliche Medizin auf Augenhöhe &amp; Mehrsprachigkeit
        </h2>
        <p>
          Für Dr. med. Rodriguez gründet eine wirksame Therapie immer auf einer vertrauensvollen Partnerschaft zwischen Ärztin und Patient. Sie legt ausserordentlichen Wert darauf, dass Untersuchungsbefunde, labormedizinische Werte und diagnostische Zusammenhänge transparent und leicht nachvollziehbar besprochen werden. 
        </p>
        <p>
          Patientinnen und Patienten schätzen an ihr insbesondere die ruhige, warmherzige Art sowie die Gründlichkeit, mit der sie auch unspezifischen Beschwerden wie anhaltender Müdigkeit, Schwindel oder stressbedingter Überlastung auf den Grund geht. Therapeutische Massnahmen werden immer individuell auf den persönlichen Alltag und die Lebensgewohnheiten der Betroffenen abgestimmt.
        </p>

        {/* In-House Pharmacy Visual */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', background: '#f0fdfa', border: '1px solid #ccfbf1', borderRadius: '12px', padding: '1.5rem', margin: '2rem 0' }}>
          <div style={{ width: 120, height: 80, flexShrink: 0, position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
            <Image
              src="/images/services/Hauseigene Apotheke.webp"
              alt="Hauseigene Apotheke der Hausarztpraxis Dübendorf für sofortige Medikamentenabgabe"
              width={120}
              height={80}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ flex: 1, minWidth: '220px', fontSize: '0.95rem', color: '#065f46' }}>
            <strong>Integrierte Praxisapotheke:</strong> Nach der Sprechstunde erhalten Sie ärztlich verordnete Medikamente sofort vor Ort an der Leepüntstrasse 5 – bequem und ohne zusätzlichen Weg in eine externe Apotheke.
          </div>
        </div>

        <h2 style={{ fontSize: '1.65rem', color: '#005b4f', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>
          Sprechstunde an der Leepüntstrasse 5 in Dübendorf &amp; Kassenanerkennung
        </h2>
        <p>
          Dr. med. (RO) Saskia Rodriguez empfängt ihre Patientinnen und Patienten in den barrierefreien Räumlichkeiten der <strong>Hausarztpraxis Dübendorf, Leepüntstrasse 5</strong>. Dank der optimalen Verkehrsanbindung (nahe Bahnhof Dübendorf und Bahnhof Stettbach) ist die Praxis sowohl mit dem öffentlichen Verkehr als auch mit dem Auto mühelos erreichbar.
        </p>
        <p>
          <strong>Vollständige Kassenanerkennung (KVG/UVG):</strong> Die Behandlungen von Dr. med. Rodriguez werden von allen Schweizer Krankenversicherungen im Rahmen der obligatorischen Grundversicherung (KVG/TARMED) sowie von den Unfallversicherungen vollumfänglich vergütet. Neue Patientinnen und Patienten sind in allen Versicherungsmodellen jederzeit willkommen.
        </p>
      </article>

      {/* Appointment CTA Box */}
      <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#f0fdfa', borderRadius: '14px', border: '1px solid #99f6e4', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.4rem', color: '#005b4f', marginBottom: '0.75rem', fontFamily: 'var(--font-dm-serif), serif' }}>
          Termin bei Dr. med. Saskia Rodriguez vereinbaren
        </h3>
        <p style={{ color: '#374151', maxWidth: '600px', margin: '0 auto 1.5rem', fontSize: '1.02rem', lineHeight: '1.6' }}>
          Vereinbaren Sie Ihren Sprechstundentermin einfach online rund um die Uhr oder kontaktieren Sie uns direkt telefonisch während der Praxisöffnungszeiten.
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
