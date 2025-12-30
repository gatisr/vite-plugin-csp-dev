import { Plugin as Plugin_2 } from 'vite';

declare type Options = {
    /**
     * - Whether to use Content-Security-Policy-Report-Only header instead of Content-Security-Policy header. For development purposes.
     */
    reportOnly?: boolean;
    /**
     * - Whether to process i18n
     */
    processI18n?: boolean;
    /**
     * - Value for default-src directive in CSP
     */
    defaultSrc?: string;
    /**
     * - The placeholder for nonce in the HTML
     */
    noncePlaceholder?: string;
    /**
     * - Value for X-XSS-Protection header
     */
    xssProtection?: string;
    /**
     * - Value for X-Frame-Options header
     */
    frameOptions?: string;
    /**
     * - Value for X-Content-Type-Options header
     */
    contentTypeOptions?: string;
    /**
     * - Value for Referrer-Policy header
     */
    referrerPolicy?: string;
    /**
     * - Value for Permissions-Policy header
     */
    permissionsPolicy?: string;
    /**
     * - Value for Cache-Control header
     */
    cacheControl?: string;
    /**
     * - Function to generate script-src directive in CSP, nonce is the generated nonce value
     */
    scriptSrc?: (nonce: string) => string;
    /**
     * - Function to generate style-src directive in CSP, nonce is the generated nonce value
     */
    styleSrc?: (nonce: string) => string;
    /**
     * - Value for img-src directive in CSP
     */
    imgSrc?: string;
    /**
     * - Value for font-src directive in CSP
     */
    fontSrc?: string;
    /**
     * - Value for object-src directive in CSP
     */
    objectSrc?: string;
    /**
     * - Value for frame-src directive in CSP
     */
    frameSrc?: string;
    /**
     * - Value for base-uri directive in CSP
     */
    baseUri?: string;
    /**
     * - Value for form-action directive in CSP
     */
    formAction?: string;
    /**
     * - Value for frame-ancestors directive in CSP
     */
    frameAncestors?: string;
    /**
     * - Value for worker-src directive in CSP
     */
    workerSrc?: string;
    /**
     * - Value for connect-src directive in CSP
     */
    connectSrc?: string;
};

/**
 * Creates a Vite plugin for handling Content Security Policy with nonce and i18n processing
 * @param {Options} [options] - Configuration options for the plugin
 * @returns {import('vite').Plugin} The Vite plugin instance
 */
export declare function secureHeaders(options?: Options): Plugin_2;

export { }
