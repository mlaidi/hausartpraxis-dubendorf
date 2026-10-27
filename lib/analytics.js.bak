// lib/analytics.js – GA4 Custom Event Tracking for Hausarztpraxis Dübendorf
// GA4 Property: G-6Z9VQTFXX3

/**
 * Core tracking function — sends a custom event to GA4 via gtag.
 * Safe for SSR (checks window exists).
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

/* ── Conversion Events (mark as Key Events in GA4 Admin) ── */

/**
 * Track clicks on "Termin buchen" / "Termin vereinbaren" booking buttons.
 * @param {string} location - Where the click happened: 'hero', 'navbar', 'prevention', 'hours_strip', 'naturmedizin', 'mobile_sticky', 'footer'
 */
export function trackBookingClick(location) {
  trackEvent('click_book_appointment', {
    event_category: 'conversion',
    event_label: location,
    value: 1,
  });
}

/**
 * Track clicks on telephone links (tel:).
 * @param {string} location - 'hero', 'mobile_sticky', 'footer', 'topbar'
 */
export function trackPhoneClick(location) {
  trackEvent('click_phone_call', {
    event_category: 'conversion',
    event_label: location,
    phone_number: '+41448201020',
  });
}

/**
 * Track clicks on email links (mailto:).
 * @param {string} location - 'footer', 'contact'
 */
export function trackEmailClick(location) {
  trackEvent('click_email', {
    event_category: 'conversion',
    event_label: location || 'footer',
  });
}

/* ── Engagement Events ── */

/**
 * Track when a service modal is opened.
 * @param {string} serviceName - e.g. 'Herzuntersuchung', 'Röntgen'
 */
export function trackServiceModal(serviceName) {
  trackEvent('open_service_modal', {
    event_category: 'engagement',
    service_name: serviceName,
  });
}

/**
 * Track when "Über uns" / About modal is opened.
 */
export function trackAboutModal() {
  trackEvent('open_about_modal', {
    event_category: 'engagement',
  });
}

/**
 * Track when Naturmedizin modal ("+X weitere") is opened.
 */
export function trackNaturmedizinModal() {
  trackEvent('open_naturmedizin_modal', {
    event_category: 'engagement',
  });
}

/**
 * Track in-page section navigation (smooth scroll).
 * @param {string} sectionId - 'hero', 'about', 'services', 'team', 'contact'
 */
export function trackSectionScroll(sectionId) {
  trackEvent('scroll_to_section', {
    event_category: 'navigation',
    section: sectionId,
  });
}

/**
 * Track clicks on "Bewerten Sie uns auf Google" review button.
 * @param {string} location - 'contact', 'footer'
 */
export function trackGoogleReview(location) {
  trackEvent('click_google_review', {
    event_category: 'engagement',
    event_label: location || 'contact',
  });
}

/**
 * Track clicks on Google Maps link.
 * @param {string} location - 'topbar', 'contact', 'footer'
 */
export function trackMapsClick(location) {
  trackEvent('click_google_maps', {
    event_category: 'engagement',
    event_label: location || 'contact',
  });
}

/**
 * Track external partner link clicks (Med-Esthec, Labor Team, etc.).
 * @param {string} partnerName - 'med-esthec', 'labor-team', etc.
 */
export function trackPartnerClick(partnerName) {
  trackEvent('click_partner_link', {
    event_category: 'engagement',
    partner: partnerName,
  });
}

/**
 * Track mobile menu open/close.
 * @param {boolean} isOpen
 */
export function trackMobileMenu(isOpen) {
  trackEvent('toggle_mobile_menu', {
    event_category: 'navigation',
    action: isOpen ? 'open' : 'close',
  });
}

/**
 * Track scroll depth milestones (25 / 50 / 75 / 100).
 * Each milestone fires only once per page load.
 * @param {number} depth - 25, 50, 75, or 100
 */
export function trackScrollDepth(depth) {
  trackEvent(`scroll_depth_${depth}`, {
    event_category: 'engagement',
    event_label: `${depth}%`,
    value: depth,
    non_interaction: true,
  });
}

/**
 * Track clicks on the Desktop Sticky CTA bar.
 * @param {'booking'|'phone'} type
 */
export function trackDesktopStickyCTA(type) {
  trackEvent('click_desktop_sticky_cta', {
    event_category: 'conversion',
    event_label: type,
    value: 1,
  });
}
