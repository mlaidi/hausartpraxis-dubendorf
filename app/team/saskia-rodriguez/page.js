import { TEAM, SITE } from '@/data/siteData';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Dr. med. (RO) Saskia Rodriguez | Hausärztin Dübendorf | Frauengesundheit",
  description: "Dr. med. (RO) Saskia Rodriguez ist Ihre Hausärztin in Dübendorf an der Leepüntstrasse 5. Schwerpunkte: Allgemeinmedizin, Frauengesundheit, Prävention & multilinguale Sprechstunde.",
  alternates: {
    canonical: "/team/saskia-rodriguez",
  },
  openGraph: {
    title: "Dr. med. (RO) Saskia Rodriguez | Hausärztin Dübendorf",
    description: "Praktische Ärztin für Allgemeinmedizin und Leitung in Dübendorf. Umfassende hausärztliche Grundversorgung und Frauengesundheit.",
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
          Über Dr. med. Saskia Rodriguez – Ärztliche Kompetenz mit Herz
        </h2>
        <p>
          Dr. med. (RO) Saskia Rodriguez ist eine erfahrene und engagierte Ärztin für Allgemeinmedizin, die unser Team in Dübendorf mit grosser fachlicher Kompetenz und ausgeprägtem menschlichem Einfühlungsvermögen verstärkt. Mit einer fundierten medizinischen Ausbildung an renommierten universitären Institutionen und langjähriger klinischer Praxis in Europa und der Schweiz vertritt sie eine moderne, evidenzbasierte Grundversorgung.
        </p>
        <p>
          Als Mitverantwortliche im Ärzteverbund Praxen Jerumed legt Dr. med. Rodriguez ausserordentlichen Wert auf eine individuelle, patientenzentrierte Medizin. Sie nimmt sich bewusst Zeit für das ausführliche persönliche Gespräch, um die Ursachen von Beschwerden ganzheitlich zu ergründen und massgeschneiderte therapeutische Lösungen für jeden einzelnen Patienten zu entwickeln.
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
          Behandlungsschwerpunkte und Fachgebiete
        </h2>
        <p>
          Dr. med. Rodriguez bietet ein breites Spektrum an allgemeinmedizinischen Leistungen mit gezielten Schwerpunkten:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>
            <strong>Allgemeinmedizinische Grundversorgung:</strong> Diagnostik und Behandlung sämtlicher akuter Erkrankungen (Infektionen, Schmerzen, Magen-Darm-Probleme) sowie Langzeitbegleitung von chronischen Krankheiten.
          </li>
          <li>
            <strong>Frauengesundheit &amp; Gynäkologische Basisberatung:</strong> Einfühlsame Betreuung von Frauen in allen Lebensphasen – von Zyklusunregelmässigkeiten über Verhütungsberatung bis hin zu Beschwerden in den Wechseljahren (Menopause).
          </li>
          <li>
            <strong>Präventionsmedizin &amp; Check-ups:</strong> Umfassende Gesundheits-Check-ups zur Früherkennung von Risikofaktoren wie Bluthochdruck, Cholesterinerhöhung, Schilddrüsendysfunktionen und Diabetes mellitus.
          </li>
          <li>
            <strong>Vitalitäts- &amp; Eisenmangel-Therapie:</strong> Gezielte Labordiagnostik bei Erschöpfung und chronischer Müdigkeit sowie Durchführung schonender intravenöser Eiseninfusionen und Vitamin-Aufbaukuren.
          </li>
          <li>
            <strong>Hautgesundheit &amp; Kleinchirurgie:</strong> Ärztliche Erstbeurteilung von Hautveränderungen, Wundmanagement, Verbände und Fadenentfernungen.
          </li>
          <li>
            <strong>Internationale &amp; multilinguale Beratung:</strong> Dank fliessender Sprachkenntnisse auf Deutsch, Spanisch, Englisch, Rumänisch und Französisch ist Dr. med. Rodriguez eine gefragte Ansprechpartnerin für internationale Patienten und Expats im Grossraum Dübendorf und Zürich.
          </li>
        </ul>

        <h2 style={{ fontSize: '1.65rem', color: '#005b4f', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>
          Behandlungsansatz: Partnerschaftliche Medizin auf Augenhöhe
        </h2>
        <p>
          Für Dr. med. Rodriguez bedeutet moderne Medizin eine echte Partnerschaft zwischen Ärztin und Patient. Ein verständlicher Austausch über Untersuchungsbefunde, transparente Diagnosen und gemeinsame Therapieentscheidungen schaffen Sicherheit und fördern den Heilungsprozess nachhaltig.
        </p>
        <p>
          Patientinnen und Patienten schätzen an ihr insbesondere die warme, einfühlsame Art sowie die Gründlichkeit, mit der sie auch unspezifischen Symptomen wie chronischer Müdigkeit, stressbedingten Beschwerden oder diffusen Schmerzen nachgeht.
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
            <strong>Hauseigene Apotheke:</strong> Nach der ärztlichen Konsultation erhalten Sie verordnete Medikamente direkt vor Ort in unserer Praxisapotheke an der Leepüntstrasse 5 – ohne zusätzlichen Gang in eine externe Apotheke.
          </div>
        </div>

        <h2 style={{ fontSize: '1.65rem', color: '#005b4f', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>
          Sprechstunde &amp; Terminbuchung an der Leepüntstrasse 5
        </h2>
        <p>
          Dr. med. (RO) Saskia Rodriguez empfängt Patientinnen und Patienten in der <strong>Hausarztpraxis Dübendorf</strong>. Die Praxis ist barrierefrei zugänglich und hervorragend mit Bus, Tram und S-Bahn (Bahnhof Dübendorf und Stettbach) erreichbar.
        </p>
        <p>
          <strong>Krankenkassenanerkennung (KVG/UVG):</strong> Die Behandlungen von Dr. med. Rodriguez werden von sämtlichen Schweizer Krankenkassen (Grundversicherung) und Unfallversicherungen übernommen. Neue Patientinnen und Patienten für die kontinuierliche hausärztliche Betreuung sind herzlich willkommen.
        </p>
      </article>

      {/* Appointment CTA Box */}
      <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#f0fdfa', borderRadius: '14px', border: '1px solid #99f6e4', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.4rem', color: '#005b4f', marginBottom: '0.75rem', fontFamily: 'var(--font-dm-serif), serif' }}>
          Termin bei Dr. med. Saskia Rodriguez vereinbaren
        </h3>
        <p style={{ color: '#374151', maxWidth: '600px', margin: '0 auto 1.5rem', fontSize: '1.02rem', lineHeight: '1.6' }}>
          Vereinbaren Sie Ihren Termin unkompliziert rund um die Uhr über unser Online-Buchungsportal oder kontaktieren Sie uns direkt per Telefon.
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
