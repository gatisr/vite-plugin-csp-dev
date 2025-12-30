# vite-plugin-csp-dev

A Vite plugin to add Content Security Policy (CSP) headers to your application in serve mode.

In order to set CSP headers in production builds, you must configure your web server accordingly, as this plugin only affects the development server.

## Usage

In your `vite.config.mjs`:

```js
import { secureHeaders } from 'vite-plugin-csp-dev';

export default {
  plugins: [
    secureHeaders({
      reportOnly: false, // default: false - Report CSP violations instead of blocking them.
      processI18n: true, // default: true - Process i18n.
      defaultSrc: "'self'", // default: "'self'" - Value for default-src directive in CSP.
      noncePlaceholder: 'NONCE_PLACEHOLDER', // default: 'NONCE_PLACEHOLDER' - Placeholder for nonce in HTML.
      xssProtection: '1; mode=block', // default: '1; mode=block' - Value for X-XSS-Protection header.
      frameOptions: 'DENY', // default: 'DENY' - Value for X-Frame-Options header.
      contentTypeOptions: 'nosniff', // default: 'nosniff' - Value for X-Content-Type-Options header.
      referrerPolicy: 'strict-origin-when-cross-origin', // default: 'strict-origin-when-cross-origin' - Value for Referrer-Policy header.
      permissionsPolicy: 'camera=(), microphone=(), geolocation=()', // default: 'camera=(), microphone=(), geolocation()' - Value for Permissions-Policy header.
      cacheControl: 'no-store, max-age=0', // default: 'no-store, max-age=0' - Value for Cache-Control header.
      scriptSrc: (nonce) => `'self' 'nonce-${nonce}'`, // default: `'self' 'nonce-${nonce}'` - Function to generate script-src directive in CSP
      styleSrc: (nonce) => `'self' 'nonce-${nonce}'`, // default: `'self' 'nonce-${nonce}'` - Function to generate style-src directive in CSP
      workerSrc: "'self'", // default: "'self'" - Value for worker-src directive in CSP.
      connectSrc: "'self'", // default: "'self'" - Value for connect-src directive in CSP.
      imgSrc: "'self' data:", // default: "'self' data:" - Value for img-src directive in CSP.
      fontSrc: "'self'", // default: "'self'" - Value for font-src directive in CSP.
      objectSrc: "'none'", // default: "'none'" - Value for object-src directive in CSP.
      frameSrc: "'self'", // default: "'self'" - Value for frame-src directive in CSP.
      baseUri: "'self'", // default: "'self'" - Value for base-uri directive in CSP.
      formAction: "'self'", // default: "'self'" - Value for form-action directive in CSP.
      frameAncestors: "'none'", // default: "'none'" - Value for frame-ancestors directive in CSP.
    }),
  ],
};
```
