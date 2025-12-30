# vite-plugin-csp-dev

Vite plugin for Content Security Policy with nonce support. Adds CSP headers in development and injects nonce placeholders in production builds for server-side replacement.

## Usage

In your `vite.config.mjs`:

```js
import { secureHeaders } from 'vite-plugin-csp-dev';

export default {
  plugins: [
    secureHeaders({
      reportOnly: false, // default: false - Report CSP violations instead of blocking them.
      processI18n: false, // default: false - Process i18n.
      defaultSrc: "'self'", // default: "'self'" - Value for default-src directive in CSP.
      noncePlaceholder: 'NONCE_PLACEHOLDER', // default: 'NONCE_PLACEHOLDER' - Placeholder replaced by server.
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

## How It Works

**Development:** Plugin generates a nonce and sets CSP headers via middleware.

**Production:** Plugin injects `NONCE_PLACEHOLDER` in HTML. Your web server replaces it with a real nonce per request.

## Server Configuration

**Nginx example:**

```nginx
map $request_id $nonce {
    ~. $request_id;
}

server {
    sub_filter_once off;
    sub_filter_types *;
    sub_filter NONCE_PLACEHOLDER $nonce;

    add_header Content-Security-Policy "default-src 'self';
        script-src 'self' 'nonce-$nonce';
        style-src 'self' 'nonce-$nonce';
        img-src 'self' data:;
        font-src 'self';
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        worker-src 'self';
        connect-src 'self';
        upgrade-insecure-requests;
    " always;
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Frame-Options "DENY";
    add_header X-Content-Type-Options "nosniff";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=()";
    add_header Cache-Control "no-store, max-age=0";

    # Other server configurations...
}
```
