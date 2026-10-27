'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { SITE } from '@/data/siteData';
import { CloseIcon, CalendarIcon, PhoneIcon } from './Icons';

export default function TeamModal({ member, onClose }) {
  useEffect(() => {
    if (!member) return;
    document.body.style.overflow = 'hidden';
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', h); };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 560 }}>
        {/* Header with photo */}
        <div style={{ background: 'linear-gradient(135deg, var(--navy), var(--navy-dark))', padding: '36px 28px', borderRadius: '6px 6px 0 0', textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: '6px 6px 0 0', backgroundImage: 'radial-gradient(rgba(255,255,255,.04) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            {member.photo ? (
              <Image
                src={member.photo}
                alt={member.name}
                width={110}
                height={110}
                style={{ borderRadius: '50%', objectFit: 'cover', margin: '0 auto 20px', display: 'block', border: '4px solid rgba(255,255,255,.15)', boxShadow: '0 8px 30px rgba(0,0,0,.3)' }}
              />
            ) : (
              <div style={{ width: 110, height: 110, borderRadius: '50%', margin: '0 auto 20px', background: 'linear-gradient(135deg, var(--slate-100), var(--slate-200))', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid rgba(255,255,255,.15)', color: 'var(--teal-light)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '45%', height: '45%' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
            )}
            <h2 style={{ fontFamily: 'var(--f-head)', fontSize: 24, fontWeight: 700, color: 'white', marginBottom: 6 }}>{member.name}</h2>
            <p style={{ fontSize: 14, color: 'var(--green-light)', fontWeight: 500, whiteSpace: 'pre-line' }}>{member.role}</p>
          </div>
        </div>
        <button className="modalClose" onClick={onClose} aria-label="Schliessen" style={{ color: 'white' }}><CloseIcon size={24} /></button>
        {/* Actions */}
        <div style={{ padding: '28px 32px 32px', display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary" style={{ fontSize: 14, padding: '12px 26px' }}><CalendarIcon size={18} /> Termin vereinbaren</a>
          <a href={`tel:${SITE.phoneTel}`} className="btn btnOutline" style={{ fontSize: 14, padding: '12px 26px' }}><PhoneIcon size={18} /> Anrufen</a>
        </div>
      </div>
    </div>
  );
}
