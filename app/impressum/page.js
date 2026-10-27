'use client';
import { SITE } from '@/data/siteData';
import { MapPinIcon, PhoneIcon, MailIcon } from '@/components/Icons';

export default function Impressum() {
  return (
    <div className="legalPage">
      <style>{`
        .legalPage { font-family: var(--f-body); color: var(--text); background: var(--warm-white); min-height: 100vh; }
        .legalHero { background: linear-gradient(135deg, var(--navy), var(--navy-dark)); padding: 48px 24px 44px; text-align: center; }
        .legalHero h1 { font-family: var(--f-head); font-size: clamp(28px,4vw,40px); font-weight: 700; color: white; margin-bottom: 8px; }
        .legalHero p { color: rgba(255,255,255,.6); font-size: 14px; letter-spacing: .3px; }
        .legalBack { display: inline-flex; align-items: center; gap: 6px; color: var(--teal-light); font-size: 13px; font-weight: 600; text-decoration: none; margin-bottom: 20px; transition: opacity .2s; }
        .legalBack:hover { opacity: .7; }
        .legalBody { max-width: 760px; margin: 0 auto; padding: 48px 24px 80px; }
        .legalBody h2 { font-family: var(--f-head); font-size: 22px; font-weight: 700; color: var(--navy); margin: 36px 0 14px; }
        .legalBody h2:first-child { margin-top: 0; }
        .legalBody p { font-size: 15px; line-height: 1.85; color: var(--text-light); margin-bottom: 14px; }
        .legalBody a { color: var(--teal-dark); text-decoration: underline; }
        .legalInfo { background: var(--slate-50, var(--cream)); border-radius: 6px; padding: 28px; margin-bottom: 32px; border: 1px solid var(--slate-200, var(--border)); }
        .legalInfoItem { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px; font-size: 15px; color: var(--text); }
        .legalInfoItem:last-child { margin-bottom: 0; }
        .legalInfoItem svg { color: var(--teal-dark); flex-shrink: 0; margin-top: 2px; }
      `}</style>

      <div className="legalHero">
        <a href="/" className="legalBack">← Zurück zur Startseite</a>
        <h1>Impressum</h1>
        <p>Angaben gemäss Art. 3 Abs. 1 Bst. s UWG</p>
      </div>

      <main role="main" className="legalBody">
        <h2>Betreiberin der Website</h2>
        <div className="legalInfo">
          <p style={{ fontFamily: 'var(--f-head)', fontSize: 20, fontWeight: 700, color: 'var(--navy)', marginBottom: 16 }}>
            Hausarztpraxis Duebendorf
          </p>
          <div className="legalInfoItem"><MapPinIcon size={18} /><span>{SITE.addressStreet}<br />{SITE.addressCity}</span></div>
          <div className="legalInfoItem"><PhoneIcon size={18} /><span>{SITE.phone}</span></div>
          <div className="legalInfoItem"><MailIcon size={18} /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
        </div>

        <h2>Vertretungsberechtigte Person</h2>
        <p>A. Abuawad, Dipl. Arzt Allgemeinmedizin</p>

        <h2>Berufsbezeichnung</h2>
        <p>Ärzte für Allgemeinmedizin, verliehen in der Schweiz. Die Berufsausübung unterliegt dem Medizinalberufegesetz (MedBG) und wird durch die kantonale Gesundheitsdirektion des Kantons Zürich beaufsichtigt.</p>

        <h2>Berufsverband</h2>
        <p>FMH – Verbindung der Schweizer Ärztinnen und Ärzte<br />
        <a href="https://www.fmh.ch" target="_blank" rel="noopener noreferrer">www.fmh.ch</a></p>

        <h2>ZSR-Nummer</h2>
        <p>Zahlstellenregister-Nummer (ZSR): Auf Anfrage</p>

        <h2>Haftungsausschluss</h2>
        <p>Die Inhalte dieser Website werden mit grösster Sorgfalt erstellt. Die Betreiberin übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte erfolgt auf eigene Gefahr.</p>
        <p>Die Informationen auf dieser Website ersetzen in keinem Fall eine professionelle medizinische Beratung, Untersuchung oder Behandlung durch einen Arzt. Bitte suchen Sie bei gesundheitlichen Beschwerden immer einen Arzt auf.</p>

        <h2>Urheberrecht</h2>
        <p>Die durch die Betreiberin erstellten Inhalte und Werke auf dieser Website unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der Betreiberin.</p>

        <h2>Website-Gestaltung</h2>
        <p>Konzept, Design und technische Umsetzung:<br />
        <strong>Jerumed Nexus GmbH</strong><br />
        <a href="https://jerumed.com" target="_blank" rel="noopener noreferrer">jerumed.com</a></p>
      </main>
    </div>
  );
}
