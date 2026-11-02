import { SERVICES } from '@/data/siteData';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Urologie Dübendorf | Urologische Abklärung & Sprechstunde",
  description: "Urologie in Dübendorf: Diagnostik von Niere, Blase und Prostata mit Ultraschall & Sofortlabor. Schnelle Sprechstundentermine ohne lange Wartezeit.",
  alternates: {
    canonical: "/leistungen/urologie",
  },
};

export default function UrologiePage() {
  const service = SERVICES.find(s => s.slug === "urologie") || {
    title: "Urologie",
    img: "/images/services/Urologie.webp"
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
        "name": "Urologie",
        "item": "https://hausarztpraxis-duebendorf.ch/leistungen/urologie"
      }
    ]
  };

  const urologySchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Urologische Sprechstunde Dübendorf",
    "url": "https://hausarztpraxis-duebendorf.ch/leistungen/urologie",
    "telephone": "+41 44 820 10 20",
    "medicalSpecialty": "Urology",
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
        "name": "Benötige ich eine Überweisung für die urologische Sprechstunde?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Patientinnen und Patienten im traditionellen Modell der freien Arztwahl können sich direkt an uns wenden. Wenn Sie im Hausarzt- oder HMO-Modell versichert sind, kann die Zuweisung direkt intern durch unsere Grundversorger erfolgen – ohne zeitaufwändige Umwege."
        }
      },
      {
        "@type": "Question",
        "name": "Werden urologische Untersuchungen von der Krankenkasse bezahlt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Sämtliche medizinisch indizierten urologischen Abklärungen, Ultraschalluntersuchungen und Labortests fallen unter die obligatorische Schweizer Krankenpflege-Grundversicherung (KVG)."
        }
      },
      {
        "@type": "Question",
        "name": "Wie schnell erhalte ich einen urologischen Termin in Dübendorf?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bei akuten Schmerzen (wie bei Verdacht auf Nierenkolik oder akuter Blasenentzündung) können wir Sie im Rahmen unserer Walk-in Notfallpraxis noch am selben Tag untersuchen. Für planbare Vorsorgen oder Kontrolltermine bieten wir zeitnahe Termine an."
        }
      }
    ]
  };

  return (
    <main role="main" style={{ maxWidth: 840, margin: '3.5rem auto', padding: '0 1.25rem', fontFamily: 'var(--font-inter), sans-serif', color: '#1f2937' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(urologySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Link href="/" style={{ color: '#005b4f', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block', fontWeight: 'bold' }}>
        &larr; Zurück zur Startseite
      </Link>

      <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#005b4f', marginBottom: '1.25rem', fontFamily: 'var(--font-dm-serif), serif', lineHeight: 1.2 }}>
        Urologie in Dübendorf – Diagnostik, Vorsorge & Therapie
      </h1>

      {service.img && (
        <Image
          src={service.img}
          alt="Urologische Abklärung und Diagnostik in Dübendorf"
          width={840}
          height={420}
          priority
          style={{ borderRadius: '10px', objectFit: 'cover', marginBottom: '2rem', width: '100%', height: 'auto' }}
        />
      )}

      <p style={{ fontSize: '1.15rem', lineHeight: '1.75', color: '#374151', marginBottom: '2rem', fontWeight: '500' }}>
        Erkrankungen des Harntrakts und der Geschlechtsorgane erfordern eine einfühlsame, diskrete und medizinisch fundierte Abklärung. In der Hausarztpraxis Dübendorf bieten wir Ihnen eine umfassende urologische Grundabklärung für Frauen und Männer an. Dank unserer modernen Praxisausstattung mit hochauflösendem Ultraschall und vollwertigem In-House-Labor klären wir Beschwerden zügig und präzise vor Ort ab – ohne lange Wartezeiten auf externe Facharzttermine.
      </p>

      <h2 style={{ fontSize: '1.6rem', color: '#111827', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair), serif' }}>
        Urologische Leistungen & Diagnostik vor Ort
      </h2>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#4b5563', marginBottom: '1.5rem' }}>
        Unser Behandlungsspektrum umfasst die Prävention, Diagnosestellung und konservative Therapie von Funktionsstörungen und Erkrankungen der Nieren, der Harnblase, der Harnleiter und der Harnröhre sowie der männlichen Geschlechtsorgane.
      </p>
      <ul style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#374151', marginBottom: '2.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Ultraschall (Sonographie):</strong> Schmerzfreie, strahlenfreie Beurteilung von Nieren, Blasenfüllung, Restharn und Prostata in Echtzeit.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>In-House Labordiagnostik:</strong> Sofortige mikroskopische und biochemische Urinanalysen, Bakteriennachweis, Entzündungsparameter (CRP, Leukozyten) sowie Blutbildanalysen in wenigen Minuten.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Prostata-Vorsorge & PSA-Bestimmung:</strong> Individuelle Früherkennungsuntersuchungen für Männer ab 45–50 Jahren zur rechtzeitigen Erkennung gutartiger Vergrösserungen (BPH) oder bösartiger Veränderungen.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Abklärung von Blasenentzündungen & Infekten:</strong> Gezielte Differenzierung akuter oder wiederkehrender Harnwegsinfekte bei Frauen und Männern sowie Erstellung schonender Therapiepläne.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Harnsteindiagnostik:</strong> Schnelle Erstabklärung und Schmerztherapie bei Koliken oder Verdacht auf Nieren- und Blasensteine.</li>
      </ul>

      <div style={{ borderRadius: '12px', overflow: 'hidden', margin: '2.5rem 0', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <Image
          src="/images/services/Labor.webp"
          alt="In-House Praxislabor Dübendorf – Schnelle Urin- und Blutanalysen bei urologischen Beschwerden"
          width={840}
          height={380}
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
        />
        <div style={{ padding: '0.75rem 1rem', background: '#f9fafb', fontSize: '0.88rem', color: '#6b7280', fontStyle: 'italic', textAlign: 'center' }}>
          Sofortige Labordiagnostik vor Ort zur Differenzierung von Harnwegsinfekten und Nierenfunktionswerten.
        </div>
      </div>

      <h2 style={{ fontSize: '1.6rem', color: '#111827', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair), serif' }}>
        Häufige Symptome: Wann sollten Sie die Sprechstunde aufsuchen?
      </h2>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#4b5563', marginBottom: '1.25rem' }}>
        Urologische Beschwerden können plötzlich auftreten oder sich schleichend entwickeln. Eine frühzeitige Untersuchung verhindert Komplikationen und chronische Verläufe. Wenden Sie sich an uns bei:
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        <div style={{ padding: '1.25rem', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#005b4f', marginBottom: '0.5rem' }}>Harnwegsbeschwerden</h3>
          <p style={{ fontSize: '0.95rem', color: '#4b5563', margin: 0 }}>Brennen beim Wasserlassen, häufiger Harndrang, trüber oder verfärbter Urin, Blutspuren im Urin.</p>
        </div>
        <div style={{ padding: '1.25rem', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#005b4f', marginBottom: '0.5rem' }}>Flankenschmerzen</h3>
          <p style={{ fontSize: '0.95rem', color: '#4b5563', margin: 0 }}>Stechende oder krampfartige Schmerzen im Bereich des unteren Rückens oder der Flanken (Verdacht auf Nierenkolik).</p>
        </div>
        <div style={{ padding: '1.25rem', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#005b4f', marginBottom: '0.5rem' }}>Männergesundheit</h3>
          <p style={{ fontSize: '0.95rem', color: '#4b5563', margin: 0 }}>Abschwächung des Harnstrahls, nächtliches Wasserlassen (Nykturie), Druckgefühl im Becken oder Hodenbeschwerden.</p>
        </div>
      </div>

      <div style={{ borderRadius: '12px', overflow: 'hidden', margin: '2.5rem 0', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
        <Image
          src="/images/banner.webp"
          alt="Hausarztpraxis Dübendorf – Diskrete Behandlungsräume für urologische Konsultationen"
          width={840}
          height={360}
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
        />
        <div style={{ padding: '0.75rem 1rem', background: '#f9fafb', fontSize: '0.88rem', color: '#6b7280', fontStyle: 'italic', textAlign: 'center' }}>
          Diskrete, vertrauensvolle Sprechstundenräume an der Leepüntstrasse 5.
        </div>
      </div>

      <h2 style={{ fontSize: '1.6rem', color: '#111827', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair), serif' }}>
        Ablauf einer Untersuchung &amp; Patientenbetreuung
      </h2>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#4b5563', marginBottom: '1.5rem' }}>
        Ihr Besuch beginnt mit einem ausführlichen Anamnesegespräch in ruhiger Atmosphäre. Anschliessend führen wir die notwendigen körperlichen und sonographischen Untersuchungen durch. Bei Bedarf erfolgt die direkte Blut- und Urinuntersuchung in unserem Labor, sodass Sie die wesentlichen Resultate oft noch während desselben Termins besprechen können. Sollten weiterführende operative Eingriffe notwendig sein, arbeiten wir eng mit spezialisierten urologischen Zentren und Kliniken im Kanton Zürich zusammen.
      </p>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#4b5563', marginBottom: '2.5rem' }}>
        <strong>Krankenkassenabrechnung &amp; Hausarztmodell:</strong> Alle medizinisch indizierten urologischen Konsultationen und Ultraschalluntersuchungen werden zu 100 % von der Grundversicherung (KVG/TARMED) sämtlicher Schweizer Krankenkassen übernommen. Patientinnen und Patienten im Hausarzt-, HMO- oder Telmed-Modell können sich unkompliziert direkt über unsere Grundversorger zuweisen lassen.
      </p>

      <div style={{ padding: '2rem', backgroundColor: '#f0fdfa', borderRadius: '10px', border: '1px solid #ccfbf1', marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.35rem', color: '#005b4f', marginBottom: '0.5rem' }}>Termin für die urologische Sprechstunde vereinbaren</h3>
        <p style={{ color: '#374151', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          Vereinbaren Sie Ihren Termin bequem online oder kontaktieren Sie unser Praxisteam telefonisch. Wir beraten Sie gerne und finden zeitnah den passenden Termin für Sie.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://app.arzt-direkt.de/hausarztpraxis-zuerich/booking" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '0.85rem 1.75rem', backgroundColor: '#005b4f', color: '#ffffff', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold' }}>
            Online Termin buchen
          </a>
          <a href="tel:+41448201020" style={{ display: 'inline-block', padding: '0.85rem 1.75rem', backgroundColor: '#ffffff', color: '#005b4f', border: '1px solid #005b4f', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold' }}>
            Praxis: 044 820 10 20
          </a>
          <a href="tel:+41525510049" style={{ display: 'inline-block', padding: '0.85rem 1.75rem', backgroundColor: '#ffffff', color: '#005b4f', border: '1px solid #005b4f', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold' }}>
            Direkt Urologie: 052 551 00 49
          </a>
        </div>
      </div>

      <h2 style={{ fontSize: '1.6rem', color: '#111827', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair), serif' }}>
        Häufig gestellte Fragen (FAQ)
      </h2>
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '0.35rem' }}>Benötige ich eine Überweisung für die urologische Sprechstunde?</h3>
          <p style={{ color: '#4b5563', lineHeight: '1.6' }}>Patientinnen und Patienten im Modell der freien Arztwahl können sich direkt bei uns anmelden. Wenn Sie im Hausarzt- oder HMO-Modell versichert sind, kann die Überweisung direkt intern über unsere Allgemeinmediziner koordiniert werden.</p>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '0.35rem' }}>Werden die Kosten von der Grundversicherung übernommen?</h3>
          <p style={{ color: '#4b5563', lineHeight: '1.6' }}>Ja. Medizinisch notwendige Abklärungen, Ultraschalluntersuchungen und Labortests werden von der Schweizer Grundversicherung (KVG) aller Krankenkassen vollumfänglich anerkannt.</p>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '0.35rem' }}>Was tun bei akuten Notfällen oder starken Schmerzen?</h3>
          <p style={{ color: '#4b5563', lineHeight: '1.6' }}>Bei akuten Symptomen (starke Flankenschmerzen, blutiger Urin, Unfähigkeit Wasser zu lassen) empfangen wir Sie während der Öffnungszeiten auch als Walk-in-Patient ohne Voranmeldung in unserer Praxis.</p>
        </div>
      </div>

      <p style={{ fontSize: '0.85rem', color: '#9ca3af', borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem', fontStyle: 'italic' }}>
        Medizinischer Inhalt zur Information. Fachlich geprüft durch den ärztlichen Dienst der Hausarztpraxis Dübendorf.
      </p>
    </main>
  );
}
