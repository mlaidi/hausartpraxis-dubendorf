'use client';
import { SITE, NATURMEDIZIN } from '@/data/siteData';
import { CloseIcon, CalendarIcon } from './Icons';

export default function NaturmedizinModal({ onClose }) {
  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 800, maxHeight: '85vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ background: 'linear-gradient(135deg, #0c2040, #15366C)', padding: '32px 28px 28px', borderRadius: '6px 6px 0 0', position: 'relative', flexShrink: 0 }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: '6px 6px 0 0', backgroundImage: 'radial-gradient(rgba(255,255,255,.04) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <p style={{ fontFamily: 'var(--f-head)', fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#6dbfef', marginBottom: 8, fontWeight: 600, position: 'relative' }}>Ganzheitliche Medizin</p>
          <h2 style={{ fontFamily: 'var(--f-head)', fontSize: 26, fontWeight: 700, color: 'white', lineHeight: 1.2, position: 'relative' }}>Alle Naturmedizin-Behandlungen</h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,.85)', marginTop: 10, position: 'relative', lineHeight: 1.6 }}>{NATURMEDIZIN.length} Behandlungen für Energie, Vitalität und Langlebigkeit</p>
        </div>
        <button className="modalClose" onClick={onClose} aria-label="Schliessen" style={{ color: 'white' }}><CloseIcon size={24} /></button>
        <div style={{ padding: '24px 28px 32px', overflowY: 'auto', flex: 1 }}>
          {NATURMEDIZIN.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '18px 0', borderBottom: idx < NATURMEDIZIN.length - 1 ? '1px solid #E8F0F8' : 'none' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#E3F4FB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--teal-light)" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                  <h3 style={{ fontFamily: 'var(--f-head)', fontSize: 17, fontWeight: 700, color: 'var(--navy)', margin: 0 }}>{item.title}</h3>
                  <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, color: 'var(--teal-dark)', background: '#E3F4FB', border: '1px solid #D6EAF5', whiteSpace: 'nowrap' }}>
                    {item.price}
                  </span>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text-light)', margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
          <div style={{ textAlign: 'center', marginTop: 28, paddingTop: 20, borderTop: '1px solid #E8F0F8' }}>
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary" style={{ fontSize: 15, padding: '14px 32px' }}>
              <CalendarIcon size={18} /> Termin vereinbaren
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
