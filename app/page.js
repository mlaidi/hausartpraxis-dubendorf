'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { SITE, SERVICES, TEAM, NAV_LINKS, FEATURES, FOOTER_SERVICES, FOOTER_PARTNERS, NATURMEDIZIN } from '@/data/siteData';
import FadeIn from '@/components/FadeIn';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import {
  trackBookingClick, trackPhoneClick, trackEmailClick,
  trackServiceModal, trackAboutModal, trackNaturmedizinModal,
  trackSectionScroll, trackGoogleReview, trackMapsClick,
  trackPartnerClick, trackMobileMenu,
  trackScrollDepth, trackDesktopStickyCTA,
} from '@/lib/analytics';

const ServiceModal = dynamic(() => import('@/components/ServiceModal'), { ssr: false });
const AboutModal = dynamic(() => import('@/components/AboutModal'), { ssr: false });
const TeamModal = dynamic(() => import('@/components/TeamModal'), { ssr: false });
const NaturmedizinModal = dynamic(() => import('@/components/NaturmedizinModal'), { ssr: false });

import {
  PhoneIcon, MailIcon, MapPinIcon, ClockIcon, CalendarIcon,
  MenuIcon, CloseIcon, ArrowRightIcon,
  FacebookIcon, InstagramIcon, GoogleMapsIcon,
} from '@/components/Icons';
import MedicalHero from '@/components/MedicalHero';
import Stethoscope from 'lucide-react/dist/esm/icons/stethoscope.mjs';
import Microscope from 'lucide-react/dist/esm/icons/microscope.mjs';
import Filter from 'lucide-react/dist/esm/icons/filter.mjs';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check.mjs';
import Star from 'lucide-react/dist/esm/icons/star.mjs';

const FEATURE_ICONS = {
  diagnostik: Stethoscope,
  labor: Microscope,
  apotheke: Filter,
  praevention: ShieldCheck,
};

/* ── Bespoke Vector Icons for SEO Hub ── */
function EmergencyWalkInIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </svg>
  );
}

function LocationTransitIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClinicSpecialistIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12l2 6H4l2-6z" />
      <path d="M4 9v11a1 1 0 001 1h14a1 1 0 001-1V9" />
      <path d="M10 13h4" />
      <path d="M12 11v4" />
    </svg>
  );
}

function MultilingualTeamIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

const FAQS = [
  {
    q: "Behandelt die Praxis Notfälle auch ohne Termin (Walk-in Notfallpraxis)?",
    a: "Ja! Für Notfälle, akute Schmerzen, Infektionen, Schnittwunden und dringende Anliegen empfangen wir Sie während unserer Öffnungszeiten als Walk-in Praxis (Permanence) auch ohne Voranmeldung. Wir sind auch am Samstag für Sie da! Für planbare Routinekontrollen oder Check-ups können Sie jederzeit bequem online oder telefonisch einen Termin vereinbaren."
  },
  {
    q: "Wo befindet sich die Praxis und wie ist sie ab Stettbach & Dübendorf erreichbar?",
    a: "Die Hausarztpraxis Dübendorf befindet sich zentral an der Leepüntstrasse 5, 8600 Dübendorf. Wir sind in wenigen Minuten vom Bahnhof Dübendorf sowie vom Bahnhof Stettbach aus erreichbar. Dank bester Anbindung erreichen uns Patientinnen und Patienten aus Dübendorf, Stettbach, Wallisellen, Schwamendingen, Gockhausen und Zürich schnell und bequem."
  },
  {
    q: "Verfügt die Praxis über eine hauseigene Apotheke?",
    a: "Ja, unsere integrierte Praxisapotheke ermöglicht die direkte Medikamentenabgabe unmittelbar nach der Konsultation – ohne Umwege über eine externe Apotheke. Sie können benötigte Dauermedikamente auch bequem telefonisch unter 044 820 10 20 oder per E-Mail nachbestellen."
  },
  {
    q: "Nimmt die Hausarztpraxis Dübendorf neue Patientinnen und Patienten auf?",
    a: "Ja, wir nehmen laufend neue Patientinnen und Patienten für die hausärztliche Grundversorgung auf. Wir arbeiten mit allen Schweizer Krankenkassen zusammen (Grundversicherung KVG, Hausarztmodell, HMO, Telmed und freie Arztwahl)."
  },
  {
    q: "Welche Sprachen spricht das Praxisteam?",
    a: "Unser Ärzteteam berät Sie mehrsprachig: Deutsch, Spanisch (Médico general español), Englisch (English speaking doctor / GP), Arabisch (Arabisch sprechende Ärzte / Arabic speaking), Französisch und Rumänisch. Internationale Patientinnen und Patienten fühlen sich bei uns bestens aufgehoben."
  },
  {
    q: "Welche diagnostischen Abklärungen sind direkt in der Praxis möglich?",
    a: "Dank modernster technischer Ausstattung verfügen wir über ein eigenes Praxislabor (Blut- und Entzündungswerte in wenigen Minuten), digitales Röntgen, Ruhe- und Langzeit-EKG, Lungenfunktionstests (Spirometrie) sowie urologische Abklärungen mit Ultraschall."
  }
];

/* ── Section Title ── */
function SectionTitle({ sub, title, light, green }) {
  return (
    <div className="sectionTitle">
      <p className={`sectionSub ${light ? 'sectionSubLight' : ''} ${green ? 'sectionSubGreen' : ''}`}>{sub}</p>
      <h2 className={`sectionH2 ${light ? 'sectionH2Light' : ''} ${green ? 'sectionH2Green' : ''}`}>{title}</h2>
      <div className={`sectionLine ${green ? 'sectionLineGreen' : ''}`} />
    </div>
  );
}

/* ── Photo Slider ── */
function PhotoSlider({ photos }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const next = useCallback(() => setCurrent(c => (c + 1) % photos.length), [photos.length]);
  const prev = useCallback(() => setCurrent(c => (c - 1 + photos.length) % photos.length), [photos.length]);
  useEffect(() => {
    timerRef.current = setInterval(next, 4500);
    return () => clearInterval(timerRef.current);
  }, [next]);
  const goTo = (i) => { setCurrent(i); clearInterval(timerRef.current); timerRef.current = setInterval(next, 4500); };

  return (
    <div className="sliderWrap">
      <div className="sliderTrack" style={{ transform: `translateX(-${current * 100}%)` }}>
        {photos.map((p, i) => (
          <Image
            key={i}
            src={p.src}
            alt={p.alt}
            className="sliderImg"
            width={667}
            height={500}
            sizes="(max-width: 768px) calc(100vw - 48px), (max-width: 1024px) 45vw, 600px"
            loading="lazy"
            style={{ objectFit: 'cover' }}
          />
        ))}
      </div>
      <div className="sliderOverlay">
        <p className="sliderAddress">{SITE.addressStreet}</p>
        <p className="sliderCity">{SITE.addressCity}</p>
      </div>
      <button className="sliderArrow sliderArrowL" onClick={prev} aria-label="Vorherige">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button className="sliderArrow sliderArrowR" onClick={next} aria-label="Nächste">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 6 15 12 9 18" /></svg>
      </button>
      <div className="sliderDots">
        {photos.map((_, i) => (
          <button key={i} className={`sliderDot ${i === current ? 'sliderDotActive' : ''}`} onClick={() => goTo(i)} aria-label={`Foto ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}



/* ── Scroll Depth Tracker ── */
function useScrollDepth() {
  const fired = useRef(new Set());
  useEffect(() => {
    const milestones = [25, 50, 75, 100];
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const pct = Math.round((scrolled / total) * 100);
      milestones.forEach((m) => {
        if (pct >= m && !fired.current.has(m)) {
          fired.current.add(m);
          trackScrollDepth(m);
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}

/* ══════════ MAIN PAGE ══════════ */
export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [activeTeam, setActiveTeam] = useState(null);
  const [natMedOpen, setNatMedOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [openFaq, setOpenFaq] = useState(null);

  useScrollDepth();

  /* ── Scroll: navbar state + progress bar + back-to-top ── */
  useEffect(() => {
    const h = () => {
      setScrolled(window.scrollY > 60);
      setShowBackToTop(window.scrollY > 300);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (window.scrollY / docH) * 100 : 0);
    };
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  /* ── IntersectionObserver: active nav section ── */
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'services', 'team', 'contact'];
    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => { setMenuOpen(false); trackSectionScroll(id); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  const openFooterService = (s) => {
    if (s.id) {
      scrollTo(s.id);
    } else if (s.serviceIndex !== undefined) {
      scrollTo('services');
      setTimeout(() => setActiveService(s.serviceIndex), 600);
    } else if (s.link) {
      window.open(s.link, '_blank', 'noopener,noreferrer');
    } else {
      scrollTo('services');
      setTimeout(() => setActiveService(s.index), 600);
    }
  };

  return (
    <>
      {/* Modals */}
      {activeService !== null && <ServiceModal service={SERVICES[activeService]} onClose={() => setActiveService(null)} />}
      {aboutOpen && <AboutModal onClose={() => setAboutOpen(false)} />}
      {activeTeam !== null && <TeamModal member={TEAM[activeTeam]} onClose={() => setActiveTeam(null)} />}

      {/* ══════════ HEADER / NAVIGATION ══════════ */}
      <header role="banner">
        {/* ══════════ TOP BAR ══════════ */}
        <div className="topBar">
          <div className="topBarInner">
            <div className="topBarLeft">
              <span className="topBarItem"><ClockIcon size={16} /> {SITE.hours}</span>
              <span className="topBarItem"><MapPinIcon size={16} /> {SITE.address}</span>
            </div>
            <div className="topBarSocial">
              {SITE.facebook && <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook"><FacebookIcon /></a>}
              {SITE.instagram && <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram"><InstagramIcon /></a>}
              {SITE.mapsLink && <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" title="Google Maps" aria-label="Google Maps"><GoogleMapsIcon /></a>}
            </div>
          </div>
        </div>

        {/* ══════════ NAVBAR ══════════ */}
        <nav className={`navbar ${scrolled ? 'navbarScrolled' : ''}`}>
          {/* ── Scroll Progress Bar ── */}
          <div className="scrollProgressWrap"><div className="scrollProgressBar" style={{ width: `${scrollProgress}%` }} /></div>
          <div className="navInner">
            <div className="navLogo" onClick={() => scrollTo('hero')}>
              <Image
                src={SITE.logoUrl}
                alt="Hausarztpraxis Duebendorf Logo"
                className="navLogoImg"
                width={320}
                height={69}
                sizes="(max-width: 768px) 260px, 320px"
                priority
              />
            </div>
            <div className="navLinks">
              {NAV_LINKS.map((l) => (
                <button key={l.id} className={`navLink ${activeSection === l.id ? 'navLinkActive' : ''}`} onClick={() => scrollTo(l.id)}>{l.label}</button>
              ))}
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary" style={{ padding: '10px 24px', fontSize: 14, animation: 'pulse 2s infinite' }} onClick={() => trackBookingClick('navbar')}>Termin buchen</a>
            </div>
            <button className="mobileMenuBtn" onClick={() => { trackMobileMenu(!menuOpen); setMenuOpen(!menuOpen); }} aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}>{menuOpen ? <CloseIcon /> : <MenuIcon />}</button>
          </div>
          {menuOpen && (
            <div className="mobileMenu">
              {NAV_LINKS.map((l) => <div key={l.id} className={`mobileMenuItem ${activeSection === l.id ? 'mobileMenuItemActive' : ''}`} onClick={() => scrollTo(l.id)}>{l.label}</div>)}
              <div style={{ paddingTop: 16 }}><a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => trackBookingClick('mobile_menu')}>Termin buchen</a></div>
            </div>
          )}
        </nav>
      </header>

      {/* ══════════ HERO ══════════ */}
      <main role="main">
        <section id="hero" className="hero" style={{ overflow: 'hidden' }}>
          <div className="heroOrb1" /><div className="heroOrb2" /><div className="heroDots" />
          <div className="heroInnerFlex">
            {/* Text */}
            <div className="heroContent">
              <div className="heroBadgesContainer" style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
                <div className="heroBadge" style={{ margin: 0 }}><span className="heroBadgeDot heroBadgeDotGreen" />IHRE GESUNDHEIT IM FOKUS</div>
                <div className="heroBadge" style={{ margin: 0, background: 'rgba(239, 68, 68, 0.14)', borderColor: 'rgba(239, 68, 68, 0.4)', borderLeft: '3px solid #ef4444' }}><span className="heroBadgeDot heroBadgeDotRed" />NOTFÄLLE AUCH OHNE TERMIN (WALK-IN)</div>
                <div className="heroBadge" style={{ margin: 0, background: 'rgba(56, 189, 248, 0.18)', color: '#ffffff', borderColor: 'rgba(56, 189, 248, 0.45)', borderLeft: '3px solid #38bdf8' }}><span className="heroBadgeDot heroBadgeDotBlue" />ZENTRALE LAGE / BAHNHOF DÜBENDORF & STETTBACH (LEEPÜNTSTRASSE 5)</div>
              </div>
              <h1 className="heroTitle">Ihr Hausarzt in Dübendorf –<br /><span className="heroTitleAccent">Neue Patienten willkommen, auch samstags</span></h1>
              <p className="heroDesc">Ihre erste Anlaufstelle für Medizin und Gesundheit in Dübendorf, nahe Stettbach. Wir bieten Ihnen als kompetente Hausarztpraxis und Permanence eine umfassende Grundversorgung – von modernster Diagnostik über persönliche Beratung bis hin zu unserer integrierten Praxisapotheke. Bei Notfällen behandeln wir Sie auch ohne Termin.</p>
              <div className="heroCtaWrapper">
                <div className="heroBtns">
                  <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary" style={{ fontSize: 16, padding: '14px 28px', animation: 'pulse 2s infinite', boxShadow: '0 0 20px rgba(60, 161, 222, 0.4)' }} onClick={() => trackBookingClick('hero')}><CalendarIcon /> Termin vereinbaren</a>
                  <a href={`tel:${SITE.phoneTel}`} className="btn btnSecondary" style={{ fontSize: 16, padding: '14px 24px' }} onClick={() => trackPhoneClick('hero')}><PhoneIcon /> {SITE.phone}</a>
                </div>
                <div className="heroLangText" style={{ marginTop: '20px', fontSize: '13.5px', color: '#cbd5e1', fontWeight: 500, textAlign: 'left' }}>
                  Wir sprechen: 🇩🇪 Deutsch | 🇬🇧 English | 🇪🇸 Español | 🇸🇦 Arabisch (Arabic) | 🇫🇷 Français | 🇷🇴 Rumänisch
                </div>
              </div>
            </div>
            {/* Radial tree – hidden on mobile via CSS .heroVisual rule */}
            <div className="heroVisual" style={{ flex: '1 1 48%' }}>
              <MedicalHero onNodeClick={(idx) => { scrollTo('services'); setTimeout(() => setActiveService(idx), 650); }} />
            </div>
          </div>
        </section>

        {/* ══════════ FEATURES ══════════ */}
        <section className="features">
          <div className="featuresInner">
            <div className="featuresGrid">
              {FEATURES.map((f, i) => {
                const IconComponent = FEATURE_ICONS[f.iconKey];
                return (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="featureCard">
                      <div className="featureEmoji">
                        {IconComponent ? <IconComponent size={24} color="var(--teal-dark)" strokeWidth={2} /> : null}
                      </div>
                      <div className="featureLabel">{f.label}</div>
                      <div className="featureSub">{f.sub}</div>
                      {f.desc && <div className="featureDesc">{f.desc}</div>}
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════ ABOUT ══════════ */}
        <section id="about" className="about">
          <div className="aboutInner">
            <div className="aboutGrid">
              <FadeIn className="aboutText">
                <p className="aboutSectionTitle">Über unsere Praxis</p>
                <h2 className="aboutSectionHeading">Hausarzt ohne Termin Dübendorf – Walk-in Praxis & Permanence</h2>
                <p>Ihr Familienarzt des Vertrauens in Dübendorf. Wir bieten Ihnen eine ganzheitliche medizinische Versorgung, die Vorsorge, Diagnostik und Therapie miteinander verbindet. Als Permanence sind wir bei dringenden Notfällen auch ohne Termin für Sie da.</p>
                <p>Unter der ärztlichen Leitung von Dr. Awad Abuawad und gemeinsam mit erfahrenen Ärzten wie Dr. med. Saskia Rodriguez, Dr. med. Koller und Dr. Fedi Farah kümmern wir uns persönlich um Ihre Anliegen. Wir begrüssen auch Patienten aus Stettbach, Wallisellen und Zürich.</p>
                <p className="aboutListLabel">Was uns auszeichnet:</p>
                <ul className="aboutList">
                  <li className="aboutListItem">
                    <span className="aboutListIcon">✓</span>
                    <span className="aboutListText"><strong>Umfassende Betreuung:</strong> Vorsorge, präzise Diagnostik und massgeschneiderte Therapien aus einer Hand.</span>
                  </li>
                  <li className="aboutListItem">
                    <span className="aboutListIcon">✓</span>
                    <span className="aboutListText"><strong>Breites Spektrum:</strong> Von der schnellen Notfallbehandlung bis hin zu kleinchirurgischen Eingriffen.</span>
                  </li>
                  <li className="aboutListItem">
                    <span className="aboutListIcon">✓</span>
                    <span className="aboutListText"><strong>Eigenes Labor:</strong> Vollständige Blut- und Urinuntersuchungen, HIV-Schnelltest und genetische Untersuchungen direkt vor Ort.</span>
                  </li>
                  <li className="aboutListItem">
                    <span className="aboutListIcon">✓</span>
                    <span className="aboutListText"><strong>Hauseigene Apotheke:</strong> Medikamente bequem per Telefon oder E-Mail bestellen – direkt bei uns.</span>
                  </li>
                </ul>
                <p style={{ marginBottom: 32 }}>Unser engagiertes Team legt grössten Wert auf Ihr Wohlbefinden und eine persönliche, vertrauensvolle Arzt-Patient-Beziehung.</p>
                <button onClick={() => { trackAboutModal(); setAboutOpen(true); }} className="btn btnPrimary" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '16px', marginTop: '8px' }}>Mehr erfahren</button>
              </FadeIn>
              <div className="aboutVisual">
                <PhotoSlider photos={SITE.praxisPhotos} />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ AERZTEZENTRUM & QUARTIERE DÜBENDORF (SEO HUB) ══════════ */}
        <section id="aerztezentrum" className="seoHub">
          <div className="seoHubInner">
            <SectionTitle sub="Medizinisches Zentrum & Notfallversorgung" title="Ihr Ärztezentrum & Hausarzt in Dübendorf – Zentrale Lage, Walk-in & Samstag geöffnet" />
            <p style={{ textAlign: 'center', fontSize: 16, lineHeight: 1.8, color: 'var(--text-light)', maxWidth: 840, margin: '-24px auto 40px' }}>
              Als modernes medizinisches Versorgungszentrum an der Leepüntstrasse 5 bieten wir erstklassige Hausarztmedizin, schnelle Notfallhilfe ohne Voranmeldung (Permanence Walk-in), eigene Praxisapotheke und Samstags-Sprechstunden für Patientinnen und Patienten aus ganz Dübendorf, Stettbach, Wallisellen und der Region Zürich Nord.
            </p>
            <div className="seoGrid">
              <FadeIn delay={0.05} className="seoFadeWrapper" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="seoCard">
                  <div className="seoCardIcon"><EmergencyWalkInIcon /></div>
                  <h3>Walk-in Notfallpraxis & Arzt ohne Termin</h3>
                  <p>
                    Bei akuten Schmerzen, Infekten, Wunden oder plötzlichen Beschwerden empfangen wir Sie während der Öffnungszeiten auch ohne Voranmeldung. Unser Sofortarzt-Team sichert eine zügige Triage und direkte Behandlung vor Ort – auch samstags.
                  </p>
                  <div className="seoCardTags">
                    <span className="seoTag">Arzt ohne Termin</span>
                    <span className="seoTag">Walk-in Dübendorf</span>
                    <span className="seoTag">Permanence</span>
                    <span className="seoTag">Samstag geöffnet</span>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1} className="seoFadeWrapper" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="seoCard">
                  <div className="seoCardIcon"><LocationTransitIcon /></div>
                  <h3>Zentrale Lage Leepünt – Nahe Bahnhof & Stettbach</h3>
                  <p>
                    Zentral gelegen an der Leepüntstrasse 5 in 8600 Dübendorf. Schnell und bequem erreichbar vom Bahnhof Dübendorf, Bahnhof Stettbach, Wallisellen, Schwamendingen, Gockhausen, Fällanden und Zürich.
                  </p>
                  <div className="seoCardTags">
                    <span className="seoTag">Dübendorf Leepünt</span>
                    <span className="seoTag">Bahnhof Stettbach</span>
                    <span className="seoTag">Wallisellen</span>
                    <span className="seoTag">Zürich Nord</span>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15} className="seoFadeWrapper" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="seoCard">
                  <div className="seoCardIcon"><ClinicSpecialistIcon /></div>
                  <h3>Allgemeinmedizin, Urologie & Praxisapotheke</h3>
                  <p>
                    Kompetente Betreuung durch Dipl. Arzt Awad Abuawad und Dr. med. (RO) Saskia Rodriguez. Eigene Praxisapotheke zur direkten Medikamentenmitnahme, digitales Röntgen, Labor sowie spezialisierte urologische Abklärungen.
                  </p>
                  <div className="seoCardTags">
                    <span className="seoTag">Dr. Abuawad</span>
                    <span className="seoTag">Dr. Rodriguez</span>
                    <span className="seoTag">Praxisapotheke</span>
                    <span className="seoTag">Urologie</span>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} className="seoFadeWrapper" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="seoCard">
                  <div className="seoCardIcon"><MultilingualTeamIcon /></div>
                  <h3>Mehrsprachiges Team & Neue Patienten</h3>
                  <p>
                    Wir nehmen laufend neue Patientinnen und Patienten für alle Krankenkassenmodelle auf. Unser Ärzteteam berät Sie auf Deutsch, Spanisch (Médico general español), Englisch (English speaking doctor), Arabisch (Arabisch sprechender Arzt / Arabic), Französisch und Rumänisch.
                  </p>
                  <div className="seoCardTags">
                    <span className="seoTag">Neue Patienten</span>
                    <span className="seoTag">English speaking GP</span>
                    <span className="seoTag">Médico español</span>
                    <span className="seoTag">Arabischer Arzt</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ══════════ SERVICES ══════════ */}
        <section id="services" className="services">
          <div className="servicesInner">
            <SectionTitle sub="Was wir bieten" title="Unsere Leistungen" />
          </div>
          <div className="servicesMarqueeContainer">
            <div className="servicesMarqueeTrack">
              <div className="servicesMarqueeGroup">
                {SERVICES.map((s, i) => (
                  <div key={i} className="serviceCard marqueeCard" onClick={() => { trackServiceModal(s.title); setActiveService(i); }}>
                    <div className="serviceImgWrap">
                      <Image
                        className="serviceImg"
                        src={s.img}
                        alt={`Hausarztpraxis Dübendorf - ${s.title}`}
                        width={358}
                        height={239}
                        loading="lazy"
                      />
                      <div className="serviceImgOverlay" />
                    </div>
                    <div className="serviceBody">
                      <h3>{s.title}</h3>
                      <p>{s.short}</p>
                      <div className="serviceMore"><span>Mehr erfahren</span><span className="serviceArrow"><ArrowRightIcon /></span></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="servicesMarqueeGroup" aria-hidden="true">
                {SERVICES.map((s, i) => (
                  <div key={i} className="serviceCard marqueeCard" onClick={() => { trackServiceModal(s.title); setActiveService(i); }}>
                    <div className="serviceImgWrap">
                      <Image
                        className="serviceImg"
                        src={s.img}
                        alt={`Hausarztpraxis Dübendorf - ${s.title}`}
                        width={358}
                        height={239}
                        loading="lazy"
                      />
                      <div className="serviceImgOverlay" />
                    </div>
                    <div className="serviceBody">
                      <h3>{s.title}</h3>
                      <p>{s.short}</p>
                      <div className="serviceMore"><span>Mehr erfahren</span><span className="serviceArrow"><ArrowRightIcon /></span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ══════════ NATURMEDIZIN & LONGEVITY ══════════ */}
        <section id="naturmedizin" style={{ padding: '100px 24px', background: 'var(--warm-white)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div className="sectionTitle">
              <p className="sectionSub">Ganzheitliche Medizin</p>
              <h2 className="sectionH2">Longevity, NAD+-Infusionen & PRP-Therapie: Moderne Medizin für Ihr Wohlbefinden</h2>
              <div className="sectionLine" />
            </div>
            <p style={{ textAlign: 'center', fontSize: 16, lineHeight: 1.85, color: 'var(--text-light)', maxWidth: 650, margin: '-28px auto 48px' }}>
              Moderne Infusionstherapien, regenerative Behandlungen und evidenzbasierte Naturmedizin — für mehr Energie, Vitalität und Langlebigkeit.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {NATURMEDIZIN.slice(0, 5).map((item, idx) => (
                <div key={idx} style={{ background: '#F0F8FF', borderRadius: '14px', padding: '28px 24px', border: '1px solid #D6EAF5', transition: 'all .35s ease', cursor: 'default', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#E3F4FB', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal-light)" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                      </svg>
                    </div>
                    <h3 style={{ fontFamily: 'var(--f-head)', fontSize: '18px', fontWeight: 700, color: 'var(--navy)', marginBottom: '10px' }}>{item.title}</h3>
                    <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-light)', marginBottom: '16px' }}>{item.desc}</p>
                  </div>
                  <div>
                    <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, color: 'var(--teal-dark)', background: '#E3F4FB', border: '1px solid #D6EAF5' }}>
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
              {/* 6th card = CTA placeholder */}
              <div onClick={() => { trackNaturmedizinModal(); setNatMedOpen(true); }} style={{ background: 'linear-gradient(135deg, #E3F4FB, #F0F8FF)', borderRadius: '14px', padding: '28px 24px', border: '2px dashed var(--teal-light)', transition: 'all .35s ease', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: 220, textAlign: 'center' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px', boxShadow: '0 4px 16px rgba(26,124,175,.3)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                </div>
                <h3 style={{ fontFamily: 'var(--f-head)', fontSize: '18px', fontWeight: 700, color: 'var(--teal-dark)', marginBottom: '8px' }}>+{NATURMEDIZIN.length - 5} weitere</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-light)' }}>Klicken Sie hier, um alle Behandlungen zu sehen</p>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary" style={{ fontSize: '15px', padding: '14px 32px' }} onClick={() => trackBookingClick('naturmedizin')}>
                <CalendarIcon size={18} /> Termin vereinbaren
              </a>
            </div>
          </div>
        </section>

        {/* ══════════ NATURMEDIZIN MODAL ══════════ */}
        {natMedOpen && <NaturmedizinModal onClose={() => setNatMedOpen(false)} />}
        {/* ══════════ MED-ESTHEC BANNER ══════════ */}
        <section id="medesthek" className="medEsthec">
          <div className="medEsthecInner">
            <FadeIn className="medEsthecContent">
              <div className="medEsthecLogoWrap">
                <Image src="/images/medesthec-logo.webp" alt="Med-Esthec Partner Ästhetische Medizin Dübendorf" className="medEsthecLogo" width={146} height={146} sizes="146px" loading="lazy" />
              </div>
              <div className="medEsthecText">
                <p className="medEsthecSub">Partnerschaft</p>
                <h2 className="medEsthecTitle">Partnerschaft für Ästhetische Medizin</h2>
                <p className="medEsthecDesc">
                  Ergänzend zu unserer hausärztlichen Versorgung bieten wir Ihnen in Kooperation mit Med-Esthec modernste Behandlungen im Bereich der ästhetischen Medizin an. Entdecken Sie individuelle Therapien für Ihre natürliche Ausstrahlung.
                </p>
                <a href="https://www.med-esthec.ch" target="_blank" rel="noopener noreferrer" className="btn btnMedEsthec" onClick={() => trackPartnerClick('med-esthec')}>
                  Mehr erfahren <ArrowRightIcon />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
        {/* ══════════ PREVENTION ══════════ */}
        <section className="prevention">
          <div className="preventionDots" />
          <div className="preventionInner">
            <FadeIn>
              <SectionTitle sub="Prävention & Pflege" title="Prävention ist der Schlüssel zu einem gesunden Leben" light />
              <p>Wir beraten Sie zu Ernährung, Bewegung, Stressbewältigung und Krankheitsfrüherkennung. Durch gezielte Prävention helfen wir Ihnen, Risiken frühzeitig zu erkennen.</p>
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary" style={{ fontSize: 16, padding: '16px 36px' }} onClick={() => trackBookingClick('prevention')}><CalendarIcon /> Jetzt Termin vereinbaren</a>
            </FadeIn>
          </div>
        </section>

        {/* ══════════ TEAM – scrolling marquee ══════════ */}
        <section id="team" className="team">
          <div className="teamInner">
            <SectionTitle sub="Unser Team" title="Unsere Praxis spricht Ihre Sprache – Arabisch, Englisch, Spanisch & Französisch" />
            <FadeIn>
              <p className="teamDesc">Unser Ärzteteam besteht aus erfahrenen und engagierten Fachärzten, die sich mit Kompetenz und Menschlichkeit um Ihre Gesundheit kümmern.</p>
            </FadeIn>
          </div>
          <div className="teamGrid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px', marginTop: '48px', maxWidth: '840px', margin: '48px auto 0', padding: '0 20px' }}>
            {TEAM.map((t, i) => (
              <div key={i} className="teamCard"
                style={{
                  animation: 'teamWaveFloat 4s ease-in-out infinite',
                  animationDelay: `${i * 0.6}s`,
                }}>
                {t.photo ? (
                  <Image
                    src={t.photo}
                    alt={`Hausarzt Dübendorf - ${t.name}`}
                    className="teamPhoto"
                    width={280}
                    height={280}
                    sizes="(max-width: 768px) 90vw, 280px"
                    loading="lazy"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  />
                ) : (
                  <div className="teamAvatar" style={{ background: 'linear-gradient(135deg, var(--slate-100), var(--slate-200))', color: 'var(--teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '45%', height: '45%' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                )}
                <h3>{t.name}</h3>
                <p>{t.role}</p>
                {t.roleDetail && <p>{t.roleDetail}</p>}
                {t.languages && <p style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 4 }}>🌐 {t.languages}</p>}
              </div>
            ))}
          </div>
        </section>



        {/* ══════════ FAQ SECTION ══════════ */}
        <section id="faq" className="faqSection">
          <div className="faqInner">
            <SectionTitle sub="Häufige Fragen" title="Häufig gestellte Fragen (FAQ) – Hausarzt & Walk-in Dübendorf" />
            <div className="faqList">
              {FAQS.map((faq, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className={`faqItem ${openFaq === i ? 'faqItemOpen' : ''}`}>
                    <button
                      id={`faq-btn-${i}`}
                      className="faqQuestion"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                      aria-controls={`faq-ans-${i}`}
                    >
                      <span>{faq.q}</span>
                      <span className="faqIcon" style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                      </span>
                    </button>
                    {openFaq === i && (
                      <div id={`faq-ans-${i}`} className="faqAnswer" role="region" aria-labelledby={`faq-btn-${i}`}>
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 36 }}>
              <p style={{ color: 'var(--text-light)', marginBottom: 16, fontSize: 15 }}>
                Haben Sie weitere Fragen oder benötigen Sie sofortige medizinische Hilfe?
              </p>
              <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnPrimary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <CalendarIcon /> Jetzt Termin vereinbaren
              </a>
            </div>
          </div>
        </section>

        {/* ══════════ TESTIMONIALS ══════════ */}
        <section className="testimonials" style={{ padding: '80px 24px', background: 'var(--slate-50)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <SectionTitle sub="Erfahrungen" title="Patientenstimmen" />
            <p style={{ textAlign: 'center', marginBottom: 48, color: 'var(--text-light)', fontSize: 16 }}>
              Mit <strong style={{ color: 'var(--teal-dark)' }}>5.0 von 5 Sternen</strong> auf Google bewertet.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              {[
                { name: "M. K.", text: "Sehr moderne Praxis und super freundliches Team. Dr. Rodriguez hat sich viel Zeit genommen und mich kompetent beraten. Fühle mich hier sehr gut aufgehoben!" },
                { name: "S. L.", text: "Schnelle Terminvergabe, kaum Wartezeit und ein eigenes Labor direkt in der Praxis. Absolut empfehlenswert für alle in Dübendorf und Umgebung." },
                { name: "A. B.", text: "Endlich eine Hausarztpraxis, die auch samstags geöffnet hat! Das Team ist sehr professionell und mehrsprachig. Tolle Beratung und Behandlung." }
              ].map((review, i) => (
                <FadeIn key={i} delay={i * 0.1} style={{ background: '#fff', padding: 32, borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: 4, marginBottom: 16, color: '#F59E0B' }}>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.6, flexGrow: 1, marginBottom: 20 }}>"{review.text}"</p>
                  <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--navy)' }}>{review.name}</div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CONTACT ══════════ */}
        <section id="contact" className="contact">
          <div className="contactInner">
            <SectionTitle sub="Kontakt" title="So erreichen Sie uns" green />
            <div className="contactGrid">
              {[
                { icon: <MapPinIcon />, title: 'Adresse', lines: [SITE.addressStreet, SITE.addressCity], href: SITE.mapsLink },
                { icon: <PhoneIcon />, title: 'Telefon', lines: [SITE.phone], href: `tel:${SITE.phoneTel}` },
                { icon: <MailIcon />, title: 'E-Mail', lines: [SITE.email], href: `mailto:${SITE.email}` },
                { icon: <CalendarIcon />, title: 'Termin', lines: ['Jetzt kontaktieren'], href: SITE.bookingUrl },
              ].map((c, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? "_blank" : undefined}
                    rel={c.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="contactCard"
                  >
                    <div className="contactCardIcon">{c.icon}</div>
                    <h3>{c.title}</h3>
                    {c.lines.map((l, j) => <p key={j}>{l}</p>)}
                  </a>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.15}>
              <div style={{ textAlign: 'center', marginTop: 16, marginBottom: 32 }}>
                <a href="https://g.page/r/CdnpPlaLy_cNEBM/review" target="_blank" rel="noopener noreferrer" className="btn" style={{ fontSize: 16, padding: '14px 28px', background: '#fff', color: '#333', border: '1px solid #e5e7eb', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'inline-flex', alignItems: 'center', gap: 10, fontWeight: 600, transition: 'all 0.3s ease' }} onClick={() => trackGoogleReview('contact')} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.1)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)'; }}>
                  <Star size={20} color="#F5BB41" fill="#F5BB41" />
                  Bewerten Sie uns auf Google
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mapWrap">
                <iframe title="Hausarztpraxis Duebendorf Karte" src={SITE.mapEmbed} loading="lazy" allowFullScreen />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════ HOURS STRIP – gradient green→blue ══════════ */}
        <section className="hoursStrip">
          <div className="hoursInner">
            <div className="hoursText"><ClockIcon /><strong>Öffnungszeiten:</strong><span>{SITE.hours}</span></div>
            <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btnWhite" style={{ padding: '10px 28px', fontSize: 14 }} onClick={() => trackBookingClick('hours_strip')}>Jetzt Termin buchen</a>
          </div>
        </section>

      </main>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="footer">
        <div className="footerInner">
          <div className="footerGrid">
            {/* Col 1 – Logo & partner */}
            <div>
              <div className="footerLogo">
                <Image
                  src={SITE.logoUrl}
                  alt="Hausarztpraxis Duebendorf Logo"
                  className="footerLogoImg"
                  width={280}
                  height={60}
                  sizes="(max-width: 768px) 280px, 280px"
                  loading="lazy"
                />
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.75, maxWidth: 300, marginBottom: 24 }}>Ihre verlässliche Hausarztpraxis für ganzheitliche Betreuung: Von der Prävention und präzisen Diagnostik über akute Notfälle bis hin zu kleineren chirurgischen Eingriffen – wir sind für Sie da.</p>
              {/* Partner */}
              <div style={{ marginTop: 8 }}>
                <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 10, color: 'rgba(255,255,255,.85)' }}>Partner</p>
                <a href="https://www.laborteam.ch" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }} onClick={() => trackPartnerClick('labor-team')}>
                  <Image src="/images/labor-team.webp" alt="Labor Team Wyss Partner" width={100} height={50} sizes="100px" loading="lazy" style={{ height: 50, width: 'auto', borderRadius: 6, opacity: 0.85, transition: 'opacity .3s' }} />
                </a>
              </div>
            </div>

            {/* Col 2 – Navigation */}
            <div>
              <h4>Navigation</h4>
              {NAV_LINKS.map((l) => <div key={l.id} className="footerLink" onClick={() => scrollTo(l.id)}>{l.label}</div>)}
            </div>

            {/* Col 3 – Leistungen (clickable!) */}
            <div>
              <h4>Leistungen</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
                {FOOTER_SERVICES.map((s) => (
                  <div key={s.label} className="footerLink" onClick={() => openFooterService(s)}>{s.label}</div>
                ))}
              </div>
            </div>

            {/* Col 4 – Partner & Links */}
            <div>
              <h4>Partner-Praxen</h4>
              {FOOTER_PARTNERS.map((p) => (
                <a
                  key={p.label}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footerLink"
                  style={{ display: 'block', ...(p.primary ? { color: 'var(--teal-light)', fontWeight: 'bold' } : {}) }}
                >
                  {p.label}
                </a>
              ))}
            </div>

            {/* Col 5 – Contact */}
            <div>
              <h4>Kontakt</h4>
              <div className="footerContactItem"><MapPinIcon size={18} /><span>{SITE.address}</span></div>
              <div className="footerContactItem"><PhoneIcon size={18} /><a href={`tel:${SITE.phoneTel}`} onClick={() => trackPhoneClick('footer')}>{SITE.phone}</a></div>
              <div className="footerContactItem"><MailIcon size={18} /><a href={`mailto:${SITE.email}`} onClick={() => trackEmailClick('footer')}>{SITE.email}</a></div>
              <div style={{ marginTop: 24, marginBottom: 24 }}>
                <a href="https://g.page/r/CdnpPlaLy_cNEBM/review" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#333', padding: '10px 16px', borderRadius: 8, fontSize: 14, fontWeight: '600', textDecoration: 'none', border: '1px solid #e5e7eb', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', transition: 'all 0.3s ease' }} onClick={() => trackGoogleReview('footer')} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'; }}>
                  <Star size={16} color="#F5BB41" fill="#F5BB41" />
                  Auf Google bewerten
                </a>
              </div>
              <div className="footerSocial">
                {SITE.facebook && <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook"><FacebookIcon /></a>}
                {SITE.instagram && <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram"><InstagramIcon /></a>}
                {SITE.mapsLink && <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" title="Google Maps" aria-label="Google Maps"><GoogleMapsIcon /></a>}
              </div>
            </div>
          </div>

          {/* Bottom bar with legal links */}
          <div className="footerBottom">
            <p>&copy; {new Date().getFullYear()} Hausarztpraxis Duebendorf. Alle Rechte vorbehalten.</p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
              <a href={`tel:${SITE.phoneTel}`} style={{ color: 'rgba(255,255,255,.8)', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }} onClick={() => trackPhoneClick('footer_bottom')}><PhoneIcon size={14} /> {SITE.phone}</a>
            </div>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/impressum" className="footerLegal">Impressum</Link>
              <Link href="/datenschutz" className="footerLegal">Datenschutz</Link>
              <Link href="/cookies" className="footerLegal">Cookies</Link>
              <span style={{ color: 'rgba(255,255,255,.5)' }}>|</span>
              <span style={{ color: '#1293ca' }}>Designed by Jerumed Nexus</span>
            </div>
          </div>
        </div>
      </footer>
      {/* ══════════ FLOATING BUTTONS ══════════ */}
      {/* Back to Top */}
      <button className={`backToTop ${showBackToTop ? 'backToTopVisible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Nach oben scrollen">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15" /></svg>
      </button>

      {/* ══════════ DESKTOP STICKY CTA ══════════ */}
      <div
        id="desktop-sticky-cta"
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 9998,
          display: scrolled ? 'flex' : 'none',
          flexDirection: 'column',
          gap: 10,
          alignItems: 'flex-end',
        }}
        className="desktopStickyCTA"
      >
        {/* Phone pill */}
        <a
          href={`tel:${SITE.phoneTel}`}
          id="desktop-sticky-phone"
          onClick={() => trackDesktopStickyCTA('phone')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            background: '#fff',
            color: 'var(--navy)',
            border: '1.5px solid var(--teal-light)',
            borderRadius: 50,
            padding: '11px 22px',
            fontSize: 15,
            fontWeight: 600,
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
            transition: 'all 0.25s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(18,147,202,0.22)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)'; }}
        >
          <PhoneIcon size={17} />
          {SITE.phone}
        </a>
        {/* Booking pill */}
        <a
          href={SITE.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="desktop-sticky-booking"
          onClick={() => { trackBookingClick('desktop_sticky'); trackDesktopStickyCTA('booking'); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            background: 'linear-gradient(135deg, var(--teal-light), var(--teal-dark))',
            color: '#fff',
            border: 'none',
            borderRadius: 50,
            padding: '13px 26px',
            fontSize: 15,
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 6px 24px rgba(18,147,202,0.4)',
            animation: 'pulse 2s infinite',
            transition: 'all 0.25s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(18,147,202,0.55)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(18,147,202,0.4)'; }}
        >
          <CalendarIcon size={17} />
          Termin buchen
        </a>
      </div>

      {/* ══════════ MOBILE STICKY CONTACT BAR ══════════ */}
      <div className="mobileStickyBar" style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'var(--white)',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.15)',
        padding: '12px 16px',
        zIndex: 9999,
        gap: '12px',
        alignItems: 'center',
        borderTop: '1px solid var(--slate-200)',
      }}>
        <a
          href={`tel:${SITE.phoneTel}`}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '15px',
            padding: '12px 14px',
            background: '#f0fdf4',
            color: '#166534',
            border: '1.5px solid #86efac',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
            boxSizing: 'border-box'
          }}
          onClick={() => trackPhoneClick('mobile_sticky')}
        >
          <PhoneIcon size={18} /> Anrufen
        </a>
        <a
          href={SITE.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btnPrimary"
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '15px',
            padding: '12px 14px',
            borderRadius: '8px',
            animation: 'pulse 2s infinite',
            textDecoration: 'none',
            boxSizing: 'border-box'
          }}
          onClick={() => trackBookingClick('mobile_sticky')}
        >
          <CalendarIcon size={18} /> Termin
        </a>
      </div>
    </>
  );
}
