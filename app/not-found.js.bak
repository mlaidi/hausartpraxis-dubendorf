import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 24px',
      textAlign: 'center',
      background: 'var(--warm-white)',
    }}>
      <h1 style={{
        fontFamily: 'var(--f-head)',
        fontSize: 'clamp(80px, 10vw, 120px)',
        fontWeight: 700,
        color: 'var(--teal-light)',
        margin: 0,
        lineHeight: 1,
      }}>
        404
      </h1>
      <h2 style={{
        fontFamily: 'var(--f-head)',
        fontSize: 'clamp(24px, 4vw, 36px)',
        fontWeight: 600,
        color: 'var(--navy)',
        marginTop: '24px',
        marginBottom: '16px',
      }}>
        Seite nicht gefunden
      </h2>
      <p style={{
        fontSize: '18px',
        color: 'var(--text-light)',
        maxWidth: '500px',
        margin: '0 auto 30px',
        lineHeight: 1.6,
      }}>
        Die von Ihnen gesuchte Seite existiert leider nicht mehr, wurde verschoben oder der Link ist fehlerhaft.
      </p>
      
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '14px 32px',
          background: 'var(--teal-light)',
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: 600,
          borderRadius: '4px',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(60, 161, 222, 0.2)',
        }}>
          Zurück zur Startseite
        </Link>
        <a href="tel:+41448201020" style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '14px 32px',
          background: 'transparent',
          color: 'var(--teal-dark)',
          border: '2px solid var(--teal-light)',
          fontSize: '16px',
          fontWeight: 600,
          borderRadius: '4px',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
        }}>
          Praxis anrufen
        </a>
      </div>
    </div>
  );
}
