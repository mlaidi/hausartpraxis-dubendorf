export const metadata = {
  title: "Cookies | Hausarztpraxis Dübendorf",
  description: "Cookie-Richtlinien der Hausarztpraxis Dübendorf.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesLayout({ children }) {
  return <>{children}</>;
}
