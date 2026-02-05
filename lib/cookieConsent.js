'use client';

/**
 * Cookie consent management utility
 * Handles storing and retrieving user cookie preferences
 */

const COOKIE_CONSENT_KEY = 'cookie_consent';
const COOKIE_EXPIRY_DAYS = 365;

// Temporary experiment flag:
// When true, analytics/advertising cookies are treated as consented
// without showing the cookie banner. Set to false to restore
// the normal consent flow.
export const COOKIE_CONSENT_TEMPORARILY_DISABLED = true;

export const CookieTypes = {
  NECESSARY: 'necessary',
  ANALYTICS: 'analytics',
  ADVERTISING: 'advertising',
};

/**
 * Get cookie consent preferences from localStorage
 */
export function getCookieConsent() {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) return null;

    const consent = JSON.parse(stored);

    // Check if consent has expired (older than expiry days)
    const expiryDate = new Date(consent.expiryDate);
    if (expiryDate < new Date()) {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      return null;
    }

    return consent;
  } catch (error) {
    console.error('Error reading cookie consent:', error);
    return null;
  }
}

/**
 * Save cookie consent preferences to localStorage
 */
export function saveCookieConsent(preferences) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + COOKIE_EXPIRY_DAYS);

    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
      expiryDate: expiryDate.toISOString(),
    };

    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));

    // Dispatch custom event for other components to listen
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: consent }));
  } catch (error) {
    console.error('Error saving cookie consent:', error);
  }
}

/**
 * Check if user has given consent for a specific cookie type
 */
export function hasConsent(cookieType) {
  if (COOKIE_CONSENT_TEMPORARILY_DISABLED) {
    // During the temporary experiment we treat all cookie types
    // as consented so that analytics/advertising scripts always run.
    // NOTE: To restore normal behavior, set
    // COOKIE_CONSENT_TEMPORARILY_DISABLED to false.
    return true;
  }

  const consent = getCookieConsent();
  if (!consent) return false;

  // Necessary cookies are always allowed
  if (cookieType === CookieTypes.NECESSARY) return true;

  return consent[cookieType] === true;
}

/**
 * Check if user has given any consent
 */
export function hasAnyConsent() {
  if (COOKIE_CONSENT_TEMPORARILY_DISABLED) {
    return true;
  }

  const consent = getCookieConsent();
  return consent !== null;
}

/**
 * Accept all cookies
 */
export function acceptAllCookies() {
  saveCookieConsent({
    necessary: true,
    analytics: true,
    advertising: true,
  });
}

/**
 * Reject all non-necessary cookies
 */
export function rejectAllCookies() {
  saveCookieConsent({
    necessary: true,
    analytics: false,
    advertising: false,
  });
}

/**
 * Reset cookie consent (remove preferences)
 */
export function resetCookieConsent() {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: null }));
}
