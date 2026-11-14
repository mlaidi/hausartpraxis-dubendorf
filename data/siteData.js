/* ══════════════════════════════════════════════
   Hausarztpraxis Duebendorf – Site Data
   ══════════════════════════════════════════════ */

export const SITE = {
  name: "Hausarztpraxis Duebendorf",
  shortName: "Hausarztpraxis Duebendorf",
  bookingUrl: "https://app.arzt-direkt.de/hausarztpraxis-zuerich/booking",
  phone: "044 820 10 20",
  phoneTel: "+41448201020",
  email: "praxis-duebendorf@hin.ch",
  emailOrder: "praxis-duebendorf@hin.ch",
  address: "Leepuntstrasse 5 CH- 8600 Duebendorf",
  addressStreet: "Leepuntstrasse 5",
  addressCity: "CH-8600 Duebendorf",
  hours: "Mo, Di, Do, Sa: 09:00–13:00 & 14:00–18:00 | Mi + Fr: geschlossen",
  facebook: "https://www.facebook.com/people/Praxen-Jerumed/61561645107988/",
  instagram: "https://www.instagram.com/praxenjerumed/",
  mapEmbed: "https://maps.google.com/maps?q=Leepuntstrasse+5+8600+Dübendorf&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapsLink: "https://maps.google.com/?q=Leepuntstrasse+5+8600+Dübendorf",
  logoUrl: "/images/logo.webp",
  praxisPhotos: [
    {
      src: "/images/praxis/Warte-Raum.webp",
      srcSet: "/images/praxis/Warte-Raum-240w.webp 240w, /images/praxis/Warte-Raum-360w.webp 360w, /images/praxis/Warte-Raum-480w.webp 480w, /images/praxis/Warte-Raum-640w.webp 640w, /images/praxis/Warte-Raum-720w.webp 720w, /images/praxis/Warte-Raum-960w.webp 960w, /images/praxis/Warte-Raum-1280w.webp 1280w, /images/praxis/Warte-Raum.webp 1334w",
      alt: "Hausarztpraxis Dübendorf - Wartezimmer Walk-in Praxis",
    },
  ],
};

export const SERVICES = [
  {
    slug: "herzuntersuchung",
    title: "Herzuntersuchung",
    img: "/images/services/Herzuntersuchung.webp",
    srcSet: "/images/services/Herzuntersuchung-240w.webp 240w, /images/services/Herzuntersuchung-360w.webp 360w, /images/services/Herzuntersuchung-480w.webp 480w, /images/services/Herzuntersuchung.webp 800w",
    short: "Präzise kardiologische Abklärung mittels EKG.",
    full: "Präzise Herzdiagnostik dank modernster EKG-Technologie für Ihre Sicherheit. Wir bieten sowohl Ruhe- als auch Langzeit-EKGs an, um mögliche Rhythmusstörungen oder kardiale Probleme frühzeitig zu identifizieren. Falls nötig, koordinieren wir die Weiterbehandlung mit erfahrenen Kardiologen in der Nähe.",
  },
  {
    slug: "lungenuntersuchungen",
    title: "Lungenuntersuchungen",
    img: "/images/services/Lungenuntersuchungen.webp",
    srcSet: "/images/services/Lungenuntersuchungen-240w.webp 240w, /images/services/Lungenuntersuchungen-360w.webp 360w, /images/services/Lungenuntersuchungen-480w.webp 480w, /images/services/Lungenuntersuchungen.webp 800w",
    short: "Umfassende Atemwegsdiagnostik und Spirometrie.",
    full: "Detaillierte Abklärung Ihrer Atemwege durch professionelle Spirometrie und Lungenfunktionstests. Egal ob Verdacht auf Asthma, COPD oder andere Atembeschwerden – wir gehen der Ursache auf den Grund. Unsere modernen Geräte liefern rasche und aussagekräftige Messergebnisse direkt vor Ort.",
  },
  {
    slug: "roentgenuntersuchung",
    title: "Röntgenuntersuchung",
    img: "/images/services/Röntgenuntersuchung.webp",
    srcSet: "/images/services/Röntgenuntersuchung-240w.webp 240w, /images/services/Röntgenuntersuchung-360w.webp 360w, /images/services/Röntgenuntersuchung-480w.webp 480w, /images/services/Röntgenuntersuchung.webp 800w",
    short: "Digitales Röntgen direkt vor Ort ohne Wartezeiten.",
    full: "Hochmoderne digitale Röntgendiagnostik unmittelbar in der Praxis für sofortige Ergebnisse. Wir untersuchen Thorax, Knochen und Gelenke effizient und ohne lange Wartezeiten. Die digitale Technik sorgt für maximale Bildqualität bei gleichzeitig minimaler Strahlenbelastung.",
  },
  {
    slug: "ohrenspuelung",
    title: "Ohrenspülung",
    img: "/images/services/Ohrenspülung.webp",
    srcSet: "/images/services/Ohrenspülung-240w.webp 240w, /images/services/Ohrenspülung-360w.webp 360w, /images/services/Ohrenspülung-480w.webp 480w, /images/services/Ohrenspülung.webp 800w",
    short: "Sanfte und professionelle Gehörgangreinigung.",
    full: "Fachgerechte Reinigung und Spülung der Gehörgänge für ein optimales Hörerlebnis und mehr Wohlbefinden. Überschüssiges Ohrenschmalz (Cerumen) kann das Gehör beeinträchtigen und unangenehmes Druckgefühl verursachen. Wir beseitigen solche Blockaden sanft und sicher, damit Sie umgehend wieder klar hören.",
  },
  {
    slug: "check-ups",
    title: "Check-ups & Atteste",
    img: "/images/services/Fahreignungsabklärung.webp",
    srcSet: "/images/services/Fahreignungsabklärung-240w.webp 240w, /images/services/Fahreignungsabklärung-360w.webp 360w, /images/services/Fahreignungsabklärung-480w.webp 480w, /images/services/Fahreignungsabklärung.webp 800w",
    short: "Individuelle Vorsorgeuntersuchungen und medizinische Zeugnisse.",
    full: "Ihre Gesundheit im Blick: Wir führen gründliche medizinische Vorsorgeuntersuchungen durch und stellen Ihnen benötigte Gesundheitszeugnisse aus. Ganz gleich, ob für den Arbeitgeber, für Sportvereine oder die persönliche Gesundheitsprävention – wir kümmern uns rasch und kompetent darum.",
  },
  {
    slug: "mineralmangel",
    title: "Mineral- & Eisenmangel",
    img: "/images/services/Eisenmangel.webp",
    srcSet: "/images/services/Eisenmangel-240w.webp 240w, /images/services/Eisenmangel-360w.webp 360w, /images/services/Eisenmangel-480w.webp 480w, /images/services/Eisenmangel-640w.webp 640w, /images/services/Eisenmangel.webp 800w",
    short: "Effiziente Infusionstherapien bei Eisen- und Nährstoffdefiziten.",
    full: "Gezielte Hilfe bei andauernder Müdigkeit und Erschöpfung durch Eisen- oder Nährstoffmangel. Fehlende essenzielle Mineralien beeinträchtigen oft massiv die Leistungsfähigkeit und Lebensqualität. Wir bieten Ihnen individuell abgestimmte, intravenöse Infusionstherapien für eine schnelle und nachhaltige Regeneration.",
  },
  {
    slug: "labor",
    title: "Labor",
    img: "/images/services/Labor.webp",
    srcSet: "/images/services/Labor-240w.webp 240w, /images/services/Labor-360w.webp 360w, /images/services/Labor-480w.webp 480w, /images/services/Labor.webp 800w",
    short: "In-House Labor für umgehende Blut- und Stoffwechselanalysen.",
    full: "Schnelle und präzise Analytik dank unserer hochmodernen, internen Laboreinrichtung. Wir werten ein grosses Spektrum an Parametern aus – vom einfachen Blutbild über Entzündungswerte bis hin zu Schilddrüsen- und Stoffwechselfunktionen. Viele Resultate erhalten Sie bereits nach wenigen Minuten, was eine sofortige Behandlungsplanung ermöglicht.",
  },
  {
    slug: "leistungen-therapien",
    title: "Leistungen und Therapien",
    img: "/images/services/Leistungen und Therapien.webp",
    srcSet: "/images/services/Leistungen und Therapien-240w.webp 240w, /images/services/Leistungen und Therapien-360w.webp 360w, /images/services/Leistungen und Therapien-480w.webp 480w, /images/services/Leistungen und Therapien-640w.webp 640w, /images/services/Leistungen und Therapien.webp 800w",
    short: "Massgeschneiderte Therapiepläne und präventive Gesundheitsangebote.",
    full: "Profitieren Sie von einem breit gefächerten Spektrum an medizinischen Angeboten, darunter reisemedizinische Beratung, Impfungen, spezifische Infusionstherapien, Wundbehandlungen und kleinere chirurgische Eingriffe. Wir entwerfen massgeschneiderte Therapiekonzepte für Sie und arbeiten bei Bedarf eng mit regionalen Fachärzten und Kliniken zusammen.",
  },
  {
    slug: "weitere-untersuchungen",
    title: "Weitere Untersuchungen",
    img: "/images/services/Weitere Untersuchungen.webp",
    srcSet: "/images/services/Weitere Untersuchungen-240w.webp 240w, /images/services/Weitere Untersuchungen-360w.webp 360w, /images/services/Weitere Untersuchungen-480w.webp 480w, /images/services/Weitere Untersuchungen-640w.webp 640w, /images/services/Weitere Untersuchungen.webp 800w",
    short: "Ergänzende diagnostische Massnahmen für Ihre Gesundheit.",
    full: "Eine Vielzahl an ergänzenden diagnostischen und therapeutischen Massnahmen für Ihr ganzheitliches Wohlbefinden. Zusätzlich zur hausärztlichen Grundversorgung offerieren wir Ihnen spezifische Vorsorge-Checks, individuelle Impfberatungen, kleinchirurgische Behandlungen sowie ein professionelles Wundmanagement.",
  },
  {
    slug: "urologie",
    title: "Urologie",
    img: "/images/services/Urologie.webp",
    srcSet: "/images/services/Urologie-240w.webp 240w, /images/services/Urologie-360w.webp 360w, /images/services/Urologie-480w.webp 480w, /images/services/Urologie.webp 800w",
    short: "Kompetente Abklärung von Erkrankungen der Nieren und Harnwege.",
    full: "Spezialisierte Abklärung und Behandlung bei Beschwerden der Nieren und Harnwege in unserer urologischen Sprechstunde. Von Blasenentzündungen über wiederkehrende Harnwegsinfektionen bis hin zu Prostata- und Nierenproblemen – mit hauseigenem Ultraschall und Labor sorgen wir für schnelle Klarheit. Wir kooperieren zudem eng mit etablierten urologischen Fachzentren. Tel. Urologie: 052 551 00 49.",
  },
  {
    slug: "prp-therapie",
    title: "PRP-Therapie (Eigenblut)",
    img: "/images/prp-banner.webp",
    srcSet: "/images/prp-banner-240w.webp 240w, /images/prp-banner-360w.webp 360w, /images/prp-banner-480w.webp 480w, /images/prp-banner-640w.webp 640w, /images/prp-banner-720w.webp 720w, /images/prp-banner.webp 800w",
    short: "Natürliche Zellerneuerung und Gewebsregeneration aus dem eigenen Blut.",
    full: "Erleben Sie die regenerative Kraft der Eigenbluttherapie (Platelet-Rich Plasma). Diese 100% natürliche Methode nutzt konzentrierte Wachstumsfaktoren aus Ihrem eigenen Blut zur Gewebserneuerung, Förderung der Kollagenproduktion und Stärkung der Haarwurzeln. Ideal als Vampir-Lifting zur Hautverjüngung oder als sanfte Behandlung bei Haarausfall, stets durchgeführt unter strengsten medizinischen Qualitätsstandards in unserer Praxis.",
  },
  {
    slug: "hauseigene-apotheke",
    title: "Hauseigene Apotheke",
    img: "/images/services/Hauseigene Apotheke.webp",
    srcSet: "/images/services/Hauseigene Apotheke-240w.webp 240w, /images/services/Hauseigene Apotheke-360w.webp 360w, /images/services/Hauseigene Apotheke-480w.webp 480w, /images/services/Hauseigene Apotheke.webp 800w",
    short: "Direkte Medikamentenabgabe und einfache Nachbestellung.",
    full: "Profitieren Sie von der bequemen und unkomplizierten Medikamentenbestellung via Telefon oder E-Mail an praxis-duebendorf@hin.ch. Durch unsere gut sortierte interne Praxisapotheke stellen wir sicher, dass Sie Ihre benötigten Arzneimittel ohne unnötige Umwege oder lange Wartezeiten direkt vor Ort nach der Konsultation mitnehmen können.",
  },
  {
    slug: "notfallpraxis-walk-in",
    title: "Notfallarzt & Walk-in Praxis",
    img: "/images/services/Notfall.webp",
    srcSet: "/images/services/Notfall-240w.webp 240w, /images/services/Notfall.webp 800w",
    short: "Kurzfristige Arzttermine bei akuten Beschwerden – auch ohne Voranmeldung.",
    full: "Unsere Notfallpraxis in Dübendorf ist auf die schnelle Behandlung von akuten medizinischen Problemen spezialisiert. Bei plötzlichen Beschwerden wie starken Schmerzen, hohem Fieber, Infektionen, Schnittwunden oder kleinen Unfällen bieten wir kurzfristige Termine an. Sie können auch als Walk-in Patient ohne Voranmeldung vorbeikommen (Arzt ohne Termin). Für einen optimalen Ablauf und möglichst kurze Wartezeiten bitten wir, sofern möglich, um einen kurzen Anruf vorab. Die Praxis ist hervorragend aus Dübendorf, Stettbach und Umgebung erreichbar.",
  },
  {
    slug: "naturmedizin",
    title: "Naturmedizin & Ganzheitliche Medizin",
    img: "/images/services/Naturmedizin.webp",
    srcSet: "/images/services/Naturmedizin-240w.webp 240w, /images/services/Naturmedizin.webp 800w",
    short: "Ganzheitliche Behandlungskonzepte und Naturheilverfahren.",
    full: "Neben der klassischen Schulmedizin bieten wir ganzheitliche Naturmedizin und alternative Heilmethoden an. Zu unseren Schwerpunkten gehört unter anderem die Akupunktur, die sich hervorragend zur Behandlung von chronischen Schmerzen, Migräne oder Stress eignet. Zudem bieten wir hochdosierte Vitamin-C-Infusionen, Eigenbluttherapie und Phythotherapie an. Naturmedizin ist besonders sinnvoll bei chronischen Erschöpfungszuständen, Allergien oder Schlafstörungen. In unserer Praxis in Dübendorf kombinieren wir Schulmedizin und Naturheilkunde für Ihre optimale Gesundheit.",
  },
];

export const TEAM = [
  {
    name: "Dipl. Arzt Awad Abuawad",
    slug: "awad-abuawad",
    href: "/team/awad-abuawad",
    role: "Praktischer Arzt",
    roleDetail: "Allgemeinmedizin FMH Leitung Jerumed",
    initials: "AA",
    photo: "/images/team/Dr. Awad.webp",
    photoSrcSet: "/images/team/Dr. Awad-240w.webp 240w, /images/team/Dr. Awad-360w.webp 360w, /images/team/Dr. Awad.webp 480w",
    bio: "A. Abuawad ist diplomierter Arzt für Allgemeinmedizin und leitet die Hausarztpraxis Dübendorf sowie den Verbund Praxen Jerumed. Mit über 20 Jahren Erfahrung in der Grundversorgung betreut er Patientinnen und Patienten aller Altersgruppen. Sein Schwerpunkt liegt auf der ganzheitlichen Betreuung, Prävention und der persönlichen Arzt-Patient-Beziehung.",
    languages: "Deutsch, Arabisch",
  },
  {
    name: "Dr. med. (RO) Saskia Rodriguez",
    slug: "saskia-rodriguez",
    href: "/team/saskia-rodriguez",
    role: "Praktische Ärztin",
    roleDetail: "Allgemeinmedizin Leitung Jerumed",
    initials: "SR",
    photo: "/images/team/Dr. Saskia.webp",
    photoSrcSet: "/images/team/Dr. Saskia-240w.webp 240w, /images/team/Dr. Saskia-360w.webp 360w, /images/team/Dr. Saskia.webp 480w",
    bio: "Saskia Rodriguez ist diplomierte Ärztin für Allgemeinmedizin und verstärkt unser Praxisteam mit ihrem einfühlsamen Behandlungsansatz. Sie legt besonderen Wert auf eine individuelle Betreuung und nimmt sich Zeit für die Anliegen jeder Patientin und jedes Patienten. Ihr Interesse gilt insbesondere der Frauengesundheit und der Prävention.",
    languages: "Deutsch, Spanisch, Englisch, Französisch, Rumänisch",
  },
];

export const FOOTER_SERVICES = [
  { label: "Herzuntersuchung", index: 0 },
  { label: "Lungenuntersuchungen", index: 1 },
  { label: "Röntgenuntersuchung", index: 2 },
  { label: "Ohrenspülung", index: 3 },
  { label: "Check-ups & Atteste", index: 4 },
  { label: "Eisenmangel", index: 5 },
  { label: "Labor", index: 6 },
  { label: "Leistungen & Therapien", index: 7 },
  { label: "Weitere Untersuchungen", index: 8 },
  { label: "Urologie", index: 9 },
  { label: "PRP-Therapie (Eigenblut)", index: 10 },
  { label: "Hauseigene Apotheke", index: 11 },
  { label: "Naturmedizin & Longevity", id: "naturmedizin" },
];

export const FOOTER_PARTNERS = [
  { label: "Jerumed Shop", link: "https://jerumed.com" },
  { label: "Praxen Jerumed", link: "https://praxen-jerumed.ch/en"},
  { label: "Praxis Altstetten", link: "https://www.praxis-altstetten.ch/"},
  { label: "Ästhetische Medizin", link: "https://www.med-esthec.ch" },
  { label: "Hausarztpraxis am Seefeld", link: "https://www.praxis-seefeld.ch" },
  { label: "Hausarztpraxis Winterthur", link: "https://hausarztpraxis-winterthur.ch" },
  { label: "Praxis Wald", link: "https://praxis-felsenau.ch" },
  { label: "Labor Team Wyss", link: "https://www.laborteam.ch" }
];

export const NAV_LINKS = [
  { label: "Startseite", id: "hero" },
  { label: "Leistungen", id: "services" },
  { label: "Über uns", id: "about" },
  { label: "Team", id: "team" },
  { label: "Kontakt", id: "contact" },
];

export const FEATURES = [
  { label: "Präzise Diagnostik", sub: "Modernste Technik", iconKey: "diagnostik", desc: "Schnelle und zuverlässige Befundung dank fortschrittlicher technologischer Ausstattung. Untersuchungen wie digitales Röntgen, EKG und Spirometrie absolvieren wir direkt und bequem vor Ort." },
  { label: "Eigenes Labor", sub: "Schnelle Befunde", iconKey: "labor", desc: "Unser Praxislabor ermöglicht umgehende Auswertungen von Blut- und Urinproben. Wir bieten zudem HIV-Schnelltests sowie spezifische genetische Abklärungen im Bereich Übergewicht an." },
  { label: "Hauseigene Apotheke", sub: "Medikamente direkt bestellen", iconKey: "apotheke", desc: "Beziehen Sie Ihre Medikamente unkompliziert direkt bei uns. Bestellungen nehmen wir jederzeit gerne per Telefon oder E-Mail entgegen, um Ihnen zusätzliche Wege zu ersparen." },
  { label: "Ganzheitliche Prävention", sub: "Vorsorge & Beratung", iconKey: "praevention", desc: "Wir legen grossen Wert auf die Erhaltung Ihrer Gesundheit. Durch individuelle Check-ups und kompetente persönliche Beratung beugen wir Krankheiten aktiv vor und stärken Ihr Wohlbefinden." },
];

export const NATURMEDIZIN = [
  { title: "Vitamin-C-Hochdosis IV", desc: "Stärkt das Immunsystem, wirkt antioxidativ und unterstützt bei Infektanfälligkeit und chronischer Erschöpfung.", price: "ab CHF 250" },
  { title: "NAD+ Infusion", desc: "Das «Anti-Aging-Molekül» fördert die zelluläre Energieproduktion und ist hocheffektiv bei chronischer Müdigkeit.", price: "ab CHF 450" },
  { title: "Glutathion-Infusion", desc: "Das stärkste körpereigene Antioxidans zur Entgiftung und zum Schutz vor oxidativem Stress.", price: "ab CHF 280" },
  { title: "Eisen-Infusion", desc: "Schnelle Behandlung von Eisenmangel — eine der häufigsten Ursachen für ständige Müdigkeit und Erschöpfung.", price: "ab CHF 200" },
  { title: "Aminosäuren-Infusion", desc: "Bausteine für Muskeln und Geist.", price: "ab CHF 220" },
  { title: "Vitamin-Shots (B12, D3)", desc: "Schnelle intramuskuläre Versorgung mit essenziellen Vitaminen gegen Müdigkeit und Antriebslosigkeit.", price: "ab CHF 50" },
  { title: "Ozon-Eigenbluttherapie", desc: "Verbessert die Sauerstoffversorgung der Zellen und aktiviert gezielt das Immunsystem.", price: "ab CHF 180" },
  { title: "PRP-Eigenbluttherapie", desc: "Plättchenreiches Plasma zur natürlichen Geweberegeneration bei Gelenk- und Hautproblemen.", price: "ab CHF 350" },
  { title: "Peptidtherapie", desc: "Spezifische Aminosäureketten zur Unterstützung von Heilungsprozessen und Anti-Aging.", price: "ab CHF 300" },
  { title: "PEMF-Therapie", desc: "Pulsierende Magnetfeldtherapie zur Verbesserung der Mikrozirkulation und Zellregeneration.", price: "ab CHF 100" },
  { title: "Mikronährstofftherapie", desc: "Gezielte, laborbasierte Supplementierung zum Ausgleich von Defiziten und Stoffwechseloptimierung.", price: "ab CHF 150" },
  { title: "Stressmedizin & Burnout", desc: "Ganzheitliche Konzepte zur Cortisol-Regulation und Behandlung von Erschöpfungszuständen.", price: "ab CHF 200" },
  { title: "Long-Covid-Therapie", desc: "Spezialprogramm bei Post-Covid-Fatigue, Atembeschwerden und anhaltender Erschöpfung.", price: "ab CHF 300" },
  { title: "Hormonoptimierung", desc: "Diagnostik und Ausgleich hormoneller Dysbalancen mit bioidentischen Hormonen.", price: "ab CHF 350" }
];
