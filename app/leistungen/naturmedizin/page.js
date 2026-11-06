import { NATURMEDIZIN } from '@/data/siteData';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Naturmedizin & Infusionen Dübendorf | Longevity Praxis",
  description: "Naturmedizin & Longevity in Dübendorf: NAD+ Infusionen, Eisenmangel-Therapie, PRP & Vitamin-C-Kuren. Ärztlich begleitet für Ihre Vitalität. Jetzt buchen.",
  alternates: {
    canonical: "/leistungen/naturmedizin",
  },
};

export default function NaturmedizinPage() {
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
        "name": "Naturmedizin & Longevity",
        "item": "https://hausarztpraxis-duebendorf.ch/leistungen/naturmedizin"
      }
    ]
  };

  const therapySchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Naturmedizin & Longevity Zentrum Dübendorf",
    "url": "https://hausarztpraxis-duebendorf.ch/leistungen/naturmedizin",
    "telephone": "+41 44 820 10 20",
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
        "name": "Was bewirkt eine NAD+ Infusion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NAD+ (Nicotinamid-Adenin-Dinukleotid) ist ein essenzielles Coenzym in den Mitochondrien, das für die zelluläre Energiegewinnung, DNA-Reparatur und Verlangsamung von Zellalterungsprozessen verantwortlich ist. Eine intravenöse NAD+ Infusion füllt die körpereigenen Speicher direkt auf und fördert geistige Klarheit, Vitalität und Regeneration."
        }
      },
      {
        "@type": "Question",
        "name": "Wann ist eine ärztliche Eiseninfusion sinnvoll?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bei nachgewiesenem Ferritinmangel und Symptomen wie chronischer Erschöpfung, Konzentrationsproblemen oder Haarausfall ist eine Eiseninfusion (z.B. Ferinject) indiziert, wenn orale Eisentabletten nicht vertragen werden oder die Eisenspeicher rasch aufgefüllt werden müssen."
        }
      },
      {
        "@type": "Question",
        "name": "Werden naturmedizinische Therapien von der Krankenkasse übernommen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Medizinisch indizierte Eiseninfusionen bei Eisenmangelanämie werden über die Grundversicherung (KVG) abgerechnet. Longevity-, NAD+- und Wellness-Infusionen sowie PRP-Verfahren sind Selbstzahlerleistungen oder können je nach Zusatzversicherung anteilig übernommen werden."
        }
      }
    ]
  };

  return (
    <main role="main" style={{ maxWidth: 840, margin: '3.5rem auto 5rem', padding: '0 1.25rem', fontFamily: 'var(--font-inter), sans-serif', color: '#1f2937' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(therapySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Link href="/" style={{ color: '#005b4f', textDecoration: 'none', marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
        &larr; Zurück zur Startseite
      </Link>
      
      <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#005b4f', marginBottom: '1.25rem', fontFamily: 'var(--font-dm-serif), serif', lineHeight: 1.2 }}>
        Naturmedizin, Longevity &amp; Infusionstherapien in Dübendorf
      </h1>

      {/* Hero Visual */}
      <div style={{ borderRadius: '12px', overflow: 'hidden', margin: '1.5rem 0 2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <Image
          src="/images/prp-banner.webp"
          alt="Regenerative Medizin, Eigenbluttherapie und Longevity in der Hausarztpraxis Dübendorf"
          width={840}
          height={400}
          priority
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
        />
        <div style={{ padding: '0.75rem 1rem', background: '#f9fafb', fontSize: '0.88rem', color: '#6b7280', fontStyle: 'italic', textAlign: 'center' }}>
          Ganzheitliche Infusionstherapien und regenerative Longevity-Protokolle an der Leepüntstrasse 5.
        </div>
      </div>

      <p style={{ fontSize: '1.15rem', lineHeight: '1.75', color: '#374151', marginBottom: '2rem', fontWeight: '500' }}>
        Ergänzend zur klassischen Schulmedizin bieten wir in der Hausarztpraxis Dübendorf ein wissenschaftlich fundiertes Spektrum an moderner <strong>Naturmedizin, personalisierten Infusionstherapien, Eigenblutverfahren (PRP) und zellulären Longevity-Behandlungen</strong>. Unser Ziel ist es, den Körper nicht nur im Krankheitsfall zu behandeln, sondern Vitalität, Immunkompetenz und Zellregeneration proaktiv auf ein Höchstmass zu heben.
      </p>

      <h2 style={{ fontSize: '1.65rem', color: '#005b4f', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>
        Ganzheitliche Naturmedizin &amp; Evidenzbasierte Komplementärtherapie
      </h2>
      <p style={{ lineHeight: '1.75', fontSize: '1.05rem', color: '#4b5563', marginBottom: '1.5rem' }}>
        In der heutigen Leistungsgesellschaft leiden viele Menschen unter chronischer Erschöpfung, Infektanfälligkeit, Schlafstörungen oder vorzeitigen Alterserscheinungen. Oft liegen die Ursachen in mikronährstoffbedingten Mangelzuständen, oxidativem Stress auf Zellebene oder gestörten mitochondrialen Energieprozessen, die durch normale orale Nahrungsergänzungsmittel nur unzureichend behoben werden können.
      </p>
      <p style={{ lineHeight: '1.75', fontSize: '1.05rem', color: '#4b5563', marginBottom: '2rem' }}>
        Durch gezielte intravenöse Verabreichung (Infusionstherapie) gelangen hochdosierte Wirkstoffe unter Umgehung des Magen-Darm-Traktes zu 100 % in die Blutbahn und stehen den Zellen unmittelbar für Regenerations- und Entgiftungsprozesse zur Verfügung. Sämtliche Therapien erfolgen in unserer Praxis nach sorgfältiger individueller ärztlicher Indikation und labormedizinischer Vorabklärung.
      </p>

      {/* Services Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
        {NATURMEDIZIN.map((item, idx) => (
          <div key={idx} style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '10px', backgroundColor: '#fafafa', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#005b4f', marginBottom: '0.5rem', fontFamily: 'var(--font-dm-serif), serif' }}>{item.title}</h3>
              <p style={{ color: '#4b5563', marginBottom: '1rem', lineHeight: '1.6', fontSize: '0.96rem' }}>{item.desc}</p>
            </div>
            <p style={{ fontWeight: 'bold', color: '#0284c7', margin: 0, fontSize: '1rem' }}>{item.price}</p>
          </div>
        ))}
      </div>

      {/* Infusion Visual */}
      <div style={{ margin: '2.5rem 0', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <Image
          src="/images/services/Eisenmangel.webp"
          alt="Vitalstoff- und Eiseninfusionen für Zellgesundheit und Vitalität in Dübendorf"
          width={840}
          height={380}
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
        />
        <div style={{ padding: '0.75rem 1rem', background: '#f9fafb', fontSize: '0.88rem', color: '#6b7280', fontStyle: 'italic', textAlign: 'center' }}>
          Ärztlich überwachte Infusionstherapie in entspannter Praxisatmosphäre.
        </div>
      </div>

      <h2 style={{ fontSize: '1.65rem', color: '#005b4f', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>
        Unser Infusionsspektrum: NAD+, Hochdosis Vitamin C &amp; Eiseninfusionen
      </h2>
      <p style={{ lineHeight: '1.75', fontSize: '1.05rem', color: '#4b5563', marginBottom: '1rem' }}>
        Unser Therapieangebot umfasst spezialisierte Infusionsprotokolle nach neuesten internationalen Standards:
      </p>
      <ul style={{ lineHeight: '1.75', fontSize: '1.05rem', color: '#374151', paddingLeft: '1.5rem', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
        <li>
          <strong>NAD+ Cellular Longevity Infusion:</strong> Gilt in der modernen Altersforschung als Schlüsselfaktor zur Verjüngung der Zellfunktion. Fördert die zelluläre DNA-Reparatur, aktiviert Sirtuine (Langlebigkeitsgene) und steigert die mitochondriale ATP-Energiebildung bei Brain Fog und chronischer Müdigkeit.
        </li>
        <li>
          <strong>Hochdosierte Vitamin-C-Infusionen:</strong> Starke antioxidative Unterstützung für das Immunsystem zur Abwehr von Infekten, bei Rekonvaleszenz nach schweren Erkrankungen sowie zum Schutz vor oxidativem Gewebestress.
        </li>
        <li>
          <strong>Gezielte Eiseninfusionen (Ferinject):</strong> Rasche Behebung eines klinischen Eisenmangels (Ferritindefizit) ohne Magen-Darm-Nebenwirkungen für sofortige Steigerung der Leistungsfähigkeit und Beseitigung von Erschöpfung.
        </li>
        <li>
          <strong>Myers&apos; Cocktail &amp; Vitalstoff-Infusionen:</strong> Balancierte Kombination aus B-Komplex-Vitaminen, Magnesium, Spurenelementen und Aminosäuren zur Regeneration bei hoher beruflicher oder sportlicher Belastung.
        </li>
      </ul>

      {/* Lab Diagnostic Visual */}
      <div style={{ margin: '2.5rem 0', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <Image
          src="/images/labor-team.webp"
          alt="Präzise labormedizinische Analyse von Mikronährstoffen und Vitalstoffstatus in Dübendorf"
          width={840}
          height={380}
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain', background: '#f8fafc' }}
        />
        <div style={{ padding: '0.75rem 1rem', background: '#f9fafb', fontSize: '0.88rem', color: '#6b7280', fontStyle: 'italic', textAlign: 'center' }}>
          Genaue labormedizinische Bestimmung Ihres Mikronährstoffstatus als Basis jeder Infusionstherapie.
        </div>
      </div>

      <h2 style={{ fontSize: '1.65rem', color: '#005b4f', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>
        Regenerative Medizin, Eigenbluttherapie (PRP) &amp; Vitalstoffkuren
      </h2>
      <p style={{ lineHeight: '1.75', fontSize: '1.05rem', color: '#4b5563', marginBottom: '1.5rem' }}>
        Neben intravenösen Nährstoffinfusionen setzen wir auf die körpereigenen Selbstheilungskräfte mittels <strong>Platelet-Rich Plasma (PRP / Eigenbluttherapie)</strong>. Hierbei wird eine geringe Menge patienteneigenes Blut zentrifugiert, um Thrombozyten und hochkonzentrierte Wachstumsfaktoren zu gewinnen. Die gezielte Injektion stimuliert die Geweberegeneration bei Gelenkbeschwerden, Sehnenüberlastungen sowie zur natürlichen Hautverjüngung und Haarwurzelstärkung.
      </p>

      <h2 style={{ fontSize: '1.65rem', color: '#005b4f', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>
        Ganzheitliche Naturheilkunde, Schmerztherapie &amp; Akupunktur-Beratung
      </h2>
      <p style={{ lineHeight: '1.75', fontSize: '1.05rem', color: '#4b5563', marginBottom: '1.5rem' }}>
        Als ganzheitliche Hausarztpraxis verknüpfen wir moderne Evidenzmedizin mit bewährter Naturheilkunde und komplementären Ansätzen. Bei chronischer Erschöpfung, muskulären Verspannungen, Rückenschmerzen oder funktionellen Beschwerden bieten wir Ihnen eine fundierte ärztliche Schmerztherapie sowie Beratung zu Akupunktur und naturheilkundlichen Begleitbehandlungen.
      </p>

      <h2 style={{ fontSize: '1.65rem', color: '#005b4f', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-dm-serif), serif' }}>
        Medizinischer Ablauf, Diagnostik &amp; Individuelle Beratung
      </h2>
      <p style={{ lineHeight: '1.75', fontSize: '1.05rem', color: '#4b5563', marginBottom: '2rem' }}>
        Vor jeder Infusionsbehandlung steht ein ausführliches ärztliches Beratungsgespräch mit Dipl. Arzt Awad Abuawad oder Dr. med. Saskia Rodriguez. Anhand einer gezielten Blutuntersuchung in unserem In-House-Labor ermitteln wir Ihren genauen Vitalstoffstatus und stellen einen massgeschneiderten Infusionsplan zusammen. Die Behandlungen finden in bequemen Ruhesesseln in angenehmer Praxisatmosphäre statt.
      </p>

      {/* Booking CTA Box */}
      <div style={{ padding: '2.5rem', backgroundColor: '#f0fdfa', borderRadius: '14px', border: '1px solid #99f6e4', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.45rem', color: '#005b4f', marginBottom: '0.75rem', fontFamily: 'var(--font-dm-serif), serif' }}>
          Persönliche Beratung &amp; Infusionstermin vereinbaren
        </h3>
        <p style={{ color: '#374151', maxWidth: '620px', margin: '0 auto 1.5rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
          Gerne beraten wir Sie individuell über die optimale Infusionstherapie für Ihre Gesundheit, Vitalität und Longevity-Ziele.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://app.arzt-direkt.de/hausarztpraxis-zuerich/booking"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '0.85rem 1.75rem', backgroundColor: '#005b4f', color: '#ffffff', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', boxShadow: '0 4px 12px rgba(0,91,79,0.2)' }}
          >
            📅 Termin online vereinbaren
          </a>
          <a
            href="tel:+41448201020"
            style={{ display: 'inline-block', padding: '0.85rem 1.75rem', backgroundColor: '#ffffff', color: '#005b4f', border: '2px solid #005b4f', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem' }}
          >
            📞 Tel: 044 820 10 20
          </a>
        </div>
      </div>
      <p style={{ fontSize: '0.85rem', color: '#9ca3af', marginTop: '2rem', fontStyle: 'italic', textAlign: 'center' }}>
        Hinweis: Alle medizinischen und komplementärmedizinischen Behandlungen erfolgen nach sorgfältiger individueller ärztlicher Indikationsstellung durch den behandelnden Arzt.
      </p>
    </main>
  );
}
