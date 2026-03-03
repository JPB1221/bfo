import React from 'react';
import { Helmet } from 'react-helmet-async';

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Bare Force One LLC",
  "url": "https://bareforceone.com",
  "description": "Bare Force One LLC builds secure, scalable software systems for government agencies, enterprise organizations, and growth-focused businesses.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Fort Lauderdale",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "telephone": "+1-954-296-9953",
  "email": "contracts@bareforceone.com",
  "sameAs": []
};

export default function SEO({ title, description, path = '' }) {
  const base = 'Bare Force One LLC';
  const fullTitle = title ? `${title} | ${base}` : `${base} — Software Development & Digital Transformation`;
  const desc = description || 'Bare Force One LLC builds secure, scalable software systems for government agencies, enterprise organizations, and growth-focused businesses.';
  const url = `https://bareforceone.com${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Bare Force One LLC" />
      <meta property="og:image" content="https://bareforceone.com/logo.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="robots" content="index, follow" />
      {path === '' && (
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      )}
    </Helmet>
  );
}
