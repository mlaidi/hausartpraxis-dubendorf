import '@/styles/globals.css';
import '@/styles/components.css';
import { DM_Serif_Display, Inter, Playfair_Display, Source_Sans_3 } from 'next/font/google';
import Script from 'next/script';

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
  display: 'optional',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'optional',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-playfair',
  display: 'optional',
});

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-source-sans',
  display: 'optional',
});


export const metadata = {
  title: "Hausarzt Dübendorf | Arztpraxis & Permanence (Ohne Termin)",
  description:
    "Ihre Hausarztpraxis in Dübendorf: moderne Grundversorgung & Walk-in Notfallpraxis ohne Voranmeldung. Für Dübendorf, Stettbach & Glattal.",
  metadataBase: new URL("https://hausarztpraxis-duebendorf.ch"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://hausarztpraxis-duebendorf.ch",
    siteName: "Hausarztpraxis Dübendorf",
    title: "Hausarzt Dübendorf | Arztpraxis & Permanence (Ohne Termin)",
    description:
      "Ihre Hausarztpraxis in Dübendorf: moderne Grundversorgung & Walk-in Notfallpraxis ohne Voranmeldung. Für Dübendorf, Stettbach & Glattal.",
    locale: "de_CH",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Hausarztpraxis Dübendorf – Ihr Arzt in 8600",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "192x192", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  keywords: [
    "Hausarzt Dübendorf",
    "Hausarztpraxis Dübendorf",
    "Arzt Dübendorf",
    "Gemeinschaftspraxis Dübendorf",
    "Permanence Dübendorf",
    "Notfall Arzt Dübendorf",
    "Arzt ohne Termin Dübendorf",
    "Walk-in Praxis Dübendorf",
    "Hausarzt Samstag geöffnet",
    "Dr. Koller Dübendorf",
    "Dipl. Arzt Awad Abuawad",
    "Dr. med. Saskia Rodriguez",
    "Hausarzt Stettbach",
  ],
};

// 1. MedicalClinic — all services including Naturmedizin
const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://hausarztpraxis-duebendorf.ch/#clinic",
  "name": "Hausarztpraxis Dübendorf",
  "alternateName": [
    "Jerumed Praxis Dübendorf",
    "Arztpraxis Dübendorf",
    "Gesundheitszentrum Dübendorf",
    "Permanence Dübendorf",
    "Ärztezentrum Dübendorf",
    "Walk-in Praxis Dübendorf",
    "Medizinische Praxis"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "125"
  },
  "url": "https://hausarztpraxis-duebendorf.ch",
  "mainEntityOfPage": "https://hausarztpraxis-duebendorf.ch",
  "logo": "https://hausarztpraxis-duebendorf.ch/images/logo.webp",
  "image": "https://hausarztpraxis-duebendorf.ch/og-image.jpg",
  "description": "Ihre Hausarztpraxis, Permanence Walk-in Notfallpraxis und medizinisches Versorgungszentrum in Dübendorf (8600) an der Leepüntstrasse 5. Ihr Doktor und Arzt in der Nähe für Allgemeinmedizin, Urologie, eigene Praxisapotheke und Notfälle ohne Termin – auch am Samstag geöffnet.",
  "telephone": "+41 44 820 10 20",
  "alternateTelephone": "+41 44 820 10 12",
  "email": "praxis-duebendorf@hin.ch",
  "acceptsPatients": true,
  "areaServed": [
    "Dübendorf",
    "Stettbach",
    "Wallisellen",
    "Zürich",
    "Schwamendingen",
    "Gockhausen",
    "Fällanden",
    "Schwerzenbach",
    "Volketswil",
    "Dübendorf Zentrum",
    "Leepünt"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Leepuntstrasse 5",
    "addressLocality": "Dübendorf",
    "postalCode": "8600",
    "addressCountry": "CH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.3969,
    "longitude": 8.6183
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
  ],
  "availableLanguage": [
    { "@type": "Language", "name": "German", "alternateName": "de" },
    { "@type": "Language", "name": "Arabic", "alternateName": "ar" },
    { "@type": "Language", "name": "English", "alternateName": "en" },
    { "@type": "Language", "name": "Spanish", "alternateName": "es" },
    { "@type": "Language", "name": "French", "alternateName": "fr" }
  ],
  "medicalSpecialty": [
    "General Practice",
    "Urology",
    "Preventive Medicine"
  ],
  "knowsAbout": ["Arzt", "Doktor", "Hausarzt", "Walk-in Klinik", "Gesundheitszentrum", "Medizinische Praxis", "Arzt in der Nähe"],
  "hasMap": "https://maps.google.com/?q=Hausarztpraxis+Dübendorf",
  "priceRange": "$$",
  "currenciesAccepted": "CHF",
  "paymentAccepted": "Krankenkasse, Barzahlung, Kreditkarte",
  "sameAs": [
    "https://praxen-jerumed.ch",
    "https://www.facebook.com/people/Praxen-Jerumed/61561645107988/",
    "https://www.instagram.com/praxenjerumed/",
    "https://g.page/r/CdnpPlaLy_cNEBM"
  ],
  "speakableSpecification": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".heroTitle", ".heroDesc", "h1", ".sectionH2"]
  },
  "parentOrganization": {
    "@type": "MedicalOrganization",
    "@id": "https://praxen-jerumed.ch/#organization",
    "name": "Praxen Jerumed"
  },
  "employee": [
    {
      "@type": "Physician",
      "@id": "https://hausarztpraxis-duebendorf.ch/#awad-abuawad",
      "name": "Dipl. Arzt Awad Abuawad",
      "jobTitle": "Praktischer Arzt / Leitung",
      "url": "https://hausarztpraxis-duebendorf.ch/team/awad-abuawad"
    },
    {
      "@type": "Physician",
      "@id": "https://hausarztpraxis-duebendorf.ch/#saskia-rodriguez",
      "name": "Dr. med. (RO) Saskia Rodriguez",
      "jobTitle": "Praktische Ärztin / Leitung",
      "url": "https://hausarztpraxis-duebendorf.ch/team/saskia-rodriguez"
    }
  ],
  "medicalService": [
    { "@type": "MedicalTherapy", "name": "NAD+ Infusion Dübendorf" },
    { "@type": "MedicalTherapy", "name": "PRP Therapie / Eigenbluttherapie" },
    { "@type": "MedicalTherapy", "name": "Eiseninfusion Dübendorf" },
    { "@type": "MedicalProcedure", "name": "EKG Dübendorf" },
    { "@type": "MedicalProcedure", "name": "Spirometrie / Lungentest" },
    { "@type": "MedicalProcedure", "name": "Fahreignungsabklärung" },
    { "@type": "MedicalProcedure", "name": "Röntgen Dübendorf" },
    { "@type": "MedicalProcedure", "name": "Labordiagnostik" }
  ]
};

// 2. Physicians
const doctorsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": "https://hausarztpraxis-duebendorf.ch/#awad-abuawad",
    "name": "Dipl. Arzt Awad Abuawad",
    "jobTitle": "Diplomierter Arzt für Allgemeinmedizin",
    "description": "Hausarzt in Dübendorf an der Leepüntstrasse 5. Über 20 Jahre Erfahrung in der Grundversorgung. Schwerpunkte: ganzheitliche Betreuung, Prävention, Diagnostik.",
    "image": "https://hausarztpraxis-duebendorf.ch/images/team/Dr. Awad.webp",
    "url": "https://hausarztpraxis-duebendorf.ch/team/awad-abuawad",
    "medicalSpecialty": "GeneralPractice",
    "worksFor": { "@id": "https://hausarztpraxis-duebendorf.ch/#clinic" },
    "address": { "@type": "PostalAddress", "streetAddress": "Leepüntstrasse 5", "addressLocality": "Dübendorf", "postalCode": "8600", "addressCountry": "CH" },
    "telephone": "+41 44 820 10 20",
    "alternateTelephone": "+41 44 820 10 12",
    "knowsLanguage": ["de", "ar"]
  },
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": "https://hausarztpraxis-duebendorf.ch/#saskia-rodriguez",
    "name": "Dr. med. (RO) Saskia Rodriguez",
    "jobTitle": "Diplomierte Ärztin für Allgemeinmedizin",
    "description": "Ärztin in Dübendorf an der Leepüntstrasse 5. Schwerpunkte: Frauengesundheit, Prävention und mehrsprachige Grundversorgung.",
    "image": "https://hausarztpraxis-duebendorf.ch/images/team/Dr. Saskia.webp",
    "url": "https://hausarztpraxis-duebendorf.ch/team/saskia-rodriguez",
    "medicalSpecialty": "GeneralPractice",
    "worksFor": { "@id": "https://hausarztpraxis-duebendorf.ch/#clinic" },
    "address": { "@type": "PostalAddress", "streetAddress": "Leepüntstrasse 5", "addressLocality": "Dübendorf", "postalCode": "8600", "addressCountry": "CH" },
    "telephone": "+41 44 820 10 20",
    "alternateTelephone": "+41 44 820 10 12",
    "knowsLanguage": ["de", "en", "fr", "es", "ro"]
  }
];

// 3. WebSite Schema (für Sitelinks-Suchfeld)
const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://hausarztpraxis-duebendorf.ch/#website",
  "name": "Hausarztpraxis Dübendorf",
  "url": "https://hausarztpraxis-duebendorf.ch",
  "inLanguage": "de-CH",
  "publisher": { "@id": "https://hausarztpraxis-duebendorf.ch/#clinic" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <meta name="geo.region" content="CH-ZH" />
        <meta name="geo.placename" content="Dübendorf" />
        <meta name="geo.position" content="47.3970;8.6180" />
        <meta name="ICBM" content="47.3970, 8.6180" />
        <meta name="google-site-verification" content="9wmTYpxeLxDDxqCHWLdWPRAbZrIR7hp51DD1jQ-yxe8" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorsSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
        <link rel="preload" as="image" href="/images/banner-640w.webp" fetchPriority="high" media="(min-width: 901px)" />
      </head>
      <body className={`${dmSerifDisplay.variable} ${inter.variable} ${playfairDisplay.variable} ${sourceSans3.variable}`}>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6Z9VQTFXX3" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6Z9VQTFXX3');
          `}
        </Script>
      </body>
    </html>
  );
}
