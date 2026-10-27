export const metadata = {
  title: "Datenschutz | Hausarztpraxis Dübendorf",
  description: "Datenschutzerklärung der Hausarztpraxis Dübendorf.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/datenschutz",
  },
};

export default function DatenschutzLayout({ children }) {
  return <>{children}</>;
}
