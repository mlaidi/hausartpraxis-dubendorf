'use client';
import { SITE } from '@/data/siteData';

export default function Cookies() {
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
        .legalBody h3 { font-family: var(--f-head); font-size: 17px; font-weight: 600; color: var(--navy); margin: 24px 0 10px; }
        .legalBody p, .legalBody li { font-size: 15px; line-height: 1.85; color: var(--text-light); margin-bottom: 14px; }
        .legalBody ul { padding-left: 20px; margin-bottom: 16px; }
        .legalBody li { margin-bottom: 6px; }
        .legalBody a { color: var(--green); text-decoration: underline; }
        .cookieTable { width: 100%; border-collapse: collapse; margin: 16px 0 24px; font-size: 14px; }
        .cookieTable th { background: var(--slate-50, var(--cream)); padding: 12px 14px; text-align: left; font-weight: 600; color: var(--navy); border: 1px solid var(--slate-200, var(--border)); }
        .cookieTable td { padding: 10px 14px; border: 1px solid var(--slate-200, var(--border)); color: var(--text-light); }
      `}</style>

      <div className="legalHero">
        <a href="/" className="legalBack">← Zurück zur Startseite</a>
        <h1>Cookie-Richtlinie</h1>
        <p>Informationen zur Verwendung von Cookies</p>
      </div>

      <main role="main" className="legalBody">
        <h2>1. Was sind Cookies?</h2>
        <p>Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Computer oder Mobilgerät gespeichert werden. Sie ermöglichen es der Website, sich an Ihre Aktionen und Einstellungen über einen bestimmten Zeitraum hinweg zu erinnern, sodass Sie diese nicht bei jedem erneuten Besuch neu eingeben müssen.</p>

        <h2>2. Welche Cookies verwenden wir?</h2>

        <h3>2.1 Technisch notwendige Cookies</h3>
        <p>Diese Cookies sind für den Betrieb der Website unerlässlich. Ohne diese Cookies können grundlegende Funktionen nicht gewährleistet werden.</p>
        <table className="cookieTable">
          <thead>
            <tr><th>Cookie</th><th>Zweck</th><th>Dauer</th></tr>
          </thead>
          <tbody>
            <tr><td>Session-Cookie</td><td>Verwaltung der Benutzersitzung</td><td>Sitzung</td></tr>
          </tbody>
        </table>

        <h3>2.2 Funktionale Cookies</h3>
        <p>Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung, wie z.B. die Speicherung Ihrer Spracheinstellungen.</p>

        <h3>2.3 Drittanbieter-Cookies</h3>
        <p>Auf unserer Website werden folgende Dienste von Drittanbietern eingesetzt, die möglicherweise Cookies setzen:</p>
        <table className="cookieTable">
          <thead>
            <tr><th>Dienst</th><th>Anbieter</th><th>Zweck</th></tr>
          </thead>
          <tbody>
            <tr><td>Google Maps</td><td>Google LLC</td><td>Karteneinbindung zur Standortanzeige</td></tr>
            <tr><td>Google Fonts</td><td>Google LLC</td><td>Bereitstellung von Schriftarten</td></tr>
            <tr><td>arzt-direkt</td><td>Monks Ärzte im Netz GmbH</td><td>Online-Terminbuchung</td></tr>
          </tbody>
        </table>

        <h2>3. Wie können Sie Cookies verwalten?</h2>
        <p>Sie können Ihren Browser so einstellen, dass Cookies blockiert oder gelöscht werden. Die meisten Browser akzeptieren Cookies automatisch, bieten aber die Möglichkeit, diese Einstellung zu ändern.</p>
        <ul>
          <li><strong>Chrome:</strong> Einstellungen → Datenschutz und Sicherheit → Cookies</li>
          <li><strong>Firefox:</strong> Einstellungen → Datenschutz & Sicherheit → Cookies</li>
          <li><strong>Safari:</strong> Einstellungen → Datenschutz → Cookies</li>
          <li><strong>Edge:</strong> Einstellungen → Datenschutz → Cookies</li>
        </ul>
        <p>Bitte beachten Sie, dass bei Deaktivierung von Cookies die Funktionalität unserer Website eingeschränkt sein kann.</p>

        <h2>4. Einwilligung</h2>
        <p>Beim ersten Besuch unserer Website werden Sie über die Verwendung von Cookies informiert und um Ihre Einwilligung gebeten. Technisch notwendige Cookies werden ohne Einwilligung gesetzt, da sie für den Betrieb der Website erforderlich sind.</p>

        <h2>5. Weitere Informationen</h2>
        <p>Weitere Informationen zum Datenschutz finden Sie in unserer <a href="/datenschutz">Datenschutzerklärung</a>.</p>
        <p>Bei Fragen zur Verwendung von Cookies kontaktieren Sie uns unter:<br />
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>

        <p style={{ marginTop: 36, fontSize: 13, color: 'rgba(0,0,0,.35)' }}>Stand: Mai 2025</p>
      </main>
    </div>
  );
}
