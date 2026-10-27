'use client';
import { useEffect } from 'react';
import { SITE } from '@/data/siteData';
import { CloseIcon, CalendarIcon } from './Icons';

export default function AboutModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', h); };
  }, [onClose]);

  const sections = [
    { icon: '🏥', title: 'Unsere Praxis', text: 'Als Ihre kompetente Hausarztpraxis in Dübendorf stehen wir Ihnen mit Rat und Tat zur Seite. An der Leepuntstrasse 5 bieten wir Ihnen ein breites medizinisches Angebot – von der eigenen Apotheke und einem topmodernen Labor bis hin zu speziellen Behandlungen wie der PRP-Therapie.' },
    { icon: '📚', title: 'Was wir bieten', text: 'Von der klassischen Allgemeinmedizin über Vorsorgeuntersuchungen bis zur Wundversorgung: Wir bieten Ihnen umfassende Leistungen. Dazu gehören Herz- und Lungenuntersuchungen, Fahreignungsprüfungen, Laboranalysen sowie gezielte Infusions- und PRP-Behandlungen.' },
    { icon: '🤝', title: 'Unser Engagement', text: 'Ihre Gesundheit und Ihr Wohlbefinden sind unser Fokus. Wir nehmen uns die nötige Zeit für Sie und pflegen eine enge Zusammenarbeit mit regionalen Spezialisten und Spitälern. Ihre Medikamente können Sie bei uns ganz einfach telefonisch oder per E-Mail nachbestellen.' },
    { icon: '🎯', title: 'Unsere Vision', text: 'Unser Ziel ist es, Sie als verlässlicher Partner in allen Gesundheitsfragen langfristig zu begleiten. Mit gezielten präventiven Massnahmen, einer offenen Kommunikation und individueller Beratung setzen wir uns täglich für Ihre Gesundheit ein.' },
  ];

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 680 }}>
        <div style={{ background: 'linear-gradient(135deg, var(--navy), var(--navy-dark))', padding: '36px 28px 32px', borderRadius: '6px 6px 0 0', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: '6px 6px 0 0', backgroundImage: 'radial-gradient(rgba(255,255,255,.04) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <p style={{ fontFamily: 'var(--f-head)', fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--green-light)', marginBottom: 10, fontWeight: 600, position: 'relative' }}>Hausarztpraxis Duebendorf</p>
          <h2 style={{ fontFamily: 'var(--f-head)', fontSize: 28, fontWeight: 700, color: 'white', lineHeight: 1.2, position: 'relative' }}>Mehr über uns</h2>
          <div style={{ width: 48, height: 2, marginTop: 14, borderRadius: 0, position: 'relative', background: 'var(--teal-light)' }} />
        </div>
        <button className="modalClose" onClick={onClose} aria-label="Schliessen" style={{ color: 'white' }}><CloseIcon size={24} /></button>
        <div style={{ padding: '32px 32px 40px' }}>
          {sections.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 18, marginBottom: i < sections.length - 1 ? 28 : 0, paddingBottom: i < sections.length - 1 ? 28 : 0, borderBottom: i < sections.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ width: 44, height: 44, borderRadius: 6, flexShrink: 0, background: 'var(--slate-50, var(--green-pale))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, border: '1px solid var(--slate-200, #e2e8f0)' }}>{s.icon}</div>
              <div>
                <h3 style={{ fontFamily: 'var(--f-head)', fontSize: 18, fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--text-light)' }}>{s.text}</p>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 32, textAlign: 'center' }}>
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary" style={{ fontSize: 15, padding: '14px 32px' }}><CalendarIcon /> Termin vereinbaren</a>
          </div>
        </div>
      </div>
    </div>
  );
}
