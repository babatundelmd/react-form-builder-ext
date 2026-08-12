/**
 * Auth token access for the form builder.
 *
 * Every call site used to read `window.localStorage.getItem('token')` directly. That is no
 * longer supported: a bearer token in localStorage is readable by any script on the page,
 * and host apps are not permitted to keep one there. A few of those reads also ran at
 * module-evaluation time, so a token issued — or rotated — after import was never picked up
 * and requests went out with a stale bearer.
 *
 * Host apps MUST call `setAuthTokenProvider()` once at startup with a getter for their
 * current token, from wherever they hold it (a cookie, memory, an auth SDK). With no
 * provider registered the builder sends no credentials at all and its API calls fail —
 * deliberately, rather than falling back to a store the token should not be in.
 */

let authTokenProvider = null;
let warnedMissingProvider = false;

export function setAuthTokenProvider(provider) {
  authTokenProvider = typeof provider === 'function' ? provider : null;
}

export function getAuthToken() {
  if (!authTokenProvider) {
    if (!warnedMissingProvider) {
      warnedMissingProvider = true;
      console.error(
        'react-form-builder-ext: no auth token provider registered. Call '
          + 'setAuthTokenProvider(() => yourToken) at app startup — requests from the form '
          + 'builder will be unauthenticated until you do.',
      );
    }
    return '';
  }

  try {
    return authTokenProvider() || '';
  } catch (err) {
    // A throwing provider must not take a form submission down with it.
    console.error('react-form-builder-ext: auth token provider threw', err);
    return '';
  }
}

export function authHeader() {
  return `Bearer ${getAuthToken()}`;
}
