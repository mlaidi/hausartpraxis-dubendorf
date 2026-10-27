export const metadata = {
  title: "Impressum | Hausarztpraxis Dübendorf",
  description: "Impressum und rechtliche Hinweise der Hausarztpraxis Dübendorf.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/impressum",
  },
};

export default function ImpressumLayout({ children }) {
  return <>{children}</>;
}
