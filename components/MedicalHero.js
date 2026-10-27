'use client';
import { useState } from 'react';
import Heart from 'lucide-react/dist/esm/icons/heart.mjs';
import Activity from 'lucide-react/dist/esm/icons/activity.mjs';
import ScanLine from 'lucide-react/dist/esm/icons/scan-line.mjs';
import Ear from 'lucide-react/dist/esm/icons/ear.mjs';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check.mjs';
import Droplets from 'lucide-react/dist/esm/icons/droplets.mjs';
import FlaskConical from 'lucide-react/dist/esm/icons/flask-conical.mjs';
import Stethoscope from 'lucide-react/dist/esm/icons/stethoscope.mjs';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles.mjs';
import Pill from 'lucide-react/dist/esm/icons/pill.mjs';

/* ── Custom Urologie Icon: 2 symmetric kidneys + 2 straight ureters ── */
function UrologieIcon({ size = 18, color = 'currentColor', strokeWidth = 1.8, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" style={style}>

      {/* Left kidney – convex on left, concave hilus on right side */}
      <path d="
        M 5 3
        C 2.5 3, 1.5 5, 1.5 7.5
        C 1.5 10, 2.5 12, 5 12
        C 6.5 12, 7.5 11, 7.8 9.8
        C 8.1 8.8, 7 8.3, 7 7.5
        C 7 6.7, 8.1 6.2, 7.8 5.2
        C 7.5 4, 6.5 3, 5 3 Z
      " />

      {/* Right kidney – mirrored: convex on right, concave hilus on left side */}
      <path d="
        M 19 3
        C 21.5 3, 22.5 5, 22.5 7.5
        C 22.5 10, 21.5 12, 19 12
        C 17.5 12, 16.5 11, 16.2 9.8
        C 15.9 8.8, 17 8.3, 17 7.5
        C 17 6.7, 15.9 6.2, 16.2 5.2
        C 16.5 4, 17.5 3, 19 3 Z
      " />

      {/* Left ureter – straight line down from left kidney hilus */}
      <line x1="10" y1="12" x2="10" y2="22" />

      {/* Right ureter – straight parallel line from right kidney hilus */}
      <line x1="14" y1="12" x2="14" y2="22" />

    </svg>
  );
}

/* ── Layout constants (580×580 virtual canvas) ── */
const S = 580, CX = 290, CY = 290;
const IR = 220;   // central image radius
const NR = 40;    // node circle radius
const BR = 224;   // center → node center distance

const TEAL  = '#3CA1DE';  // Bleu ouvert — sky medical blue
const TDARK = '#15366C';  // Bleu foncé  — deep navy blue
const TGREEN = '#27BE42'; // Vert vitalité — accent green

const rad = d => d * Math.PI / 180;
const pt = (r, d) => ({
  x: +(CX + r * Math.cos(rad(d))).toFixed(1),
  y: +(CY + r * Math.sin(rad(d))).toFixed(1),
});

/* ── 11 nodes at 32.73° intervals ── */
const NODES = [
  { idx: 0, angle: -90, Icon: Heart, label: 'Herzuntersuchung' },
  { idx: 1, angle: -57.3, Icon: Activity, label: 'Lungenuntersuchung' },
  { idx: 2, angle: -24.5, Icon: ScanLine, label: 'Röntgenuntersuchung' },
  { idx: 3, angle: 8.2, Icon: Ear, label: 'Ohrenspülung' },
  { idx: 4, angle: 40.9, Icon: ClipboardCheck, label: 'Check-ups & Atteste' },
  { idx: 5, angle: 73.6, Icon: Droplets, label: 'Eisenmangel' },
  { idx: 6, angle: 106.4, Icon: FlaskConical, label: 'Laboranalysen' },
  { idx: 7, angle: 139.1, Icon: Stethoscope, label: 'Therapien' },
  { idx: 9, angle: 171.8, Icon: UrologieIcon, label: 'Urologie' },
  { idx: 10, angle: 204.6, Icon: Sparkles, label: 'PRP-Therapie' },
  { idx: 11, angle: 237.3, Icon: Pill, label: 'Hauseigene Apotheke' },
];

/* labelStyle – Glassmorphic tooltip directly above the icon circle */
function labelStyle(isHovered) {
  return {
    position: 'absolute',
    bottom: 'calc(100% + 12px)',
    left: '50%',
    transform: `translateX(-50%) translateY(${isHovered ? '0' : '4px'}) translateZ(0)`,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    userSelect: 'none',
    fontSize: 13,
    fontWeight: 700,
    fontFamily: "var(--f-body), system-ui, sans-serif",
    letterSpacing: '.8px',
    textTransform: 'uppercase',
    color: '#ffffff',
    background: '#0c2040',
    border: `1.5px solid ${TEAL}`,
    borderRadius: 4,
    padding: '6px 14px',
    opacity: isHovered ? 1 : 0,
    transition: 'all .3s cubic-bezier(.4, 0, .2, 1)',
    zIndex: 9999,
    boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  };
}

export default function MedicalHero({ onNodeClick }) {
  const [hov, setHov] = useState(null);

  return (
    <div className="clinicalFloatCanvas" style={{ position: 'relative', width: '100%', maxWidth: S, aspectRatio: '1 / 1' }}>
      <style>{`
        @keyframes mhPop  {
          0%   { opacity: 0; transform: scale(.25); }
          65%  { transform: scale(1.12); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes clinicalOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes clinicalCounterOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        /* Orbiting wrapper and counter rotation styles */
        .orbitingWrapper {
          position: absolute;
          inset: 0;
          animation: clinicalOrbit 38s linear infinite;
          transform-origin: 50% 50%;
        }
        .counterOrbitingWrapper {
          position: relative;
          width: 100%;
          height: 100%;
          animation: clinicalCounterOrbit 38s linear infinite;
          transform-origin: 50% 50%;
        }
        
        /* Pause orbit rotation on hover */
        .clinicalFloatCanvas:hover .orbitingWrapper,
        .clinicalFloatCanvas:hover .counterOrbitingWrapper {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* ── SVG: Ambient aura & fixed central photo ── */}
      <svg viewBox={`0 0 ${S} ${S}`}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}>
        <defs>
          <clipPath id="mhC2"><circle cx={CX} cy={CY} r={IR} /></clipPath>
          <filter id="mhPG2" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <radialGradient id="mhA2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={TEAL} stopOpacity=".18" />
            <stop offset="70%" stopColor={TDARK} stopOpacity=".06" />
            <stop offset="100%" stopColor={TEAL} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient aura */}
        <circle cx={CX} cy={CY} r={IR + 78} fill="url(#mhA2)" />

        {/* Central photo (Fixed – does not float!) */}
        <foreignObject
          x={CX - IR}
          y={CY - IR}
          width={IR * 2}
          height={IR * 2}
          clipPath="url(#mhC2)"
        >
          <div
            className="heroCenterImage"
            style={{ width: '100%', height: '100%' }}
            aria-label="Hausarztpraxis Duebendorf Banner"
            role="img"
          />
        </foreignObject>

        {/* ── Concentric dashed rings around the photo ── */}
        {/* Ring 1 – closest, most opaque */}
        <circle cx={CX} cy={CY} r={IR + 22}
          fill="none"
          stroke="rgba(255,255,255,.55)"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          strokeLinecap="round" />

        {/* Ring 2 */}
        <circle cx={CX} cy={CY} r={IR + 46}
          fill="none"
          stroke="rgba(255,255,255,.38)"
          strokeWidth="1.5"
          strokeDasharray="3 10"
          strokeLinecap="round" />

        {/* Ring 3 */}
        <circle cx={CX} cy={CY} r={IR + 70}
          fill="none"
          stroke="rgba(255,255,255,.22)"
          strokeWidth="1.2"
          strokeDasharray="3 14"
          strokeLinecap="round" />

        {/* Ring 4 – furthest, most transparent */}
        <circle cx={CX} cy={CY} r={IR + 96}
          fill="none"
          stroke="rgba(255,255,255,.10)"
          strokeWidth="1"
          strokeDasharray="2 16"
          strokeLinecap="round" />

        {/* Blue glow border on photo */}
        <circle cx={CX} cy={CY} r={IR}
          fill="none" stroke={TEAL} strokeWidth="3" strokeOpacity=".65"
          filter="url(#mhPG2)" />
        <circle cx={CX} cy={CY} r={IR}
          fill="none" stroke="rgba(255,255,255,.09)" strokeWidth="1.5" />
      </svg>

      {/* ── Orbiting wrapper for circular flow ── */}
      <div className="orbitingWrapper">
        {/* ── Icon nodes – centered exactly on node point, floating individually ── */}
        {NODES.map((n, i) => {
          const pos = pt(BR, n.angle);
          const isH = hov === i;
          const delay = `${.26 + i * .07}s`;

          return (
            <div key={i}
              className="iconNodeContainer"
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              onClick={() => onNodeClick?.(n.idx)}
              style={{
                /* exactly centered on the computed node point */
                position: 'absolute',
                left: `${(pos.x / S) * 100}%`,
                top: `${(pos.y / S) * 100}%`,
                transform: `translate(-50%, -50%) scale(${isH ? 1.15 : 1})`,
                transition: 'transform .3s cubic-bezier(.34,1.56,.64,1)',
                zIndex: isH ? 999 : 10,
                cursor: 'pointer',
              }}
            >
              {/* Pop-in wrapper */}
              <div style={{
                position: 'relative',
                width: NR * 2,
                height: NR * 2,
                animation: `mhPop .5s ease ${delay} both`,
              }}>
                {/* Counter orbiting wrapper child (Keeps icons perfectly upright!) */}
                <div className="counterOrbitingWrapper">
                  {/* Icon circle */}
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: isH
                      ? `linear-gradient(135deg, ${TEAL}, #2882BE)`
                      : 'rgba(12, 32, 64, 0.92)',
                    border: `1.5px solid ${isH ? TEAL : 'rgba(60,161,222,.55)'}`,
                    boxShadow: isH
                      ? `0 0 22px rgba(60,161,222,.65), 0 0 55px rgba(60,161,222,.22)`
                      : '0 2px 10px rgba(0,0,0,.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all .3s ease',
                    backdropFilter: 'blur(8px)',
                  }}>
                    <n.Icon size={18} color={isH ? '#fff' : '#cce8f7'} strokeWidth={1.8}
                      style={{ transition: 'color .3s' }} />
                  </div>

                  {/* Tooltip label – now INSIDE the counter-orbit ring to remain perfectly horizontal and centered directly above! */}
                  <span style={labelStyle(isH)}>
                    {n.label}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
