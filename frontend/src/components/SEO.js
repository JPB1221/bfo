import React from 'react';
import { Helmet } from 'react-helmet-async';

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Bare Force One LLC",
  "url": "https://bareforceone.com",
  "logo": "https://bareforceone.com/logo.png",
  "description": "Bare Force One LLC delivers custom software development, cloud architecture, and digital transformation solutions for government agencies, enterprise organizations, and growth-focused businesses.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Fort Lauderdale",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "26.1224",
    "longitude": "-80.1373"
  },
  "telephone": "+1-954-296-9953",
  "email": "contracts@bareforceone.com",
  "priceRange": "$$",
  "openingHours": "Mo-Fr 09:00-17:00",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Development Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Software Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local Business Website Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Small Business Website Design" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Government Software Contracts" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Government Web Development Contracts" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Government Digital Modernization" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise Digital Transformation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Architecture & Deployment" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI & Workflow Automation" } }
    ]
  },
  "sameAs": []
};

const OG_IMAGE = 'https://bareforceone.com/og-image.jpg';
const SITE_NAME = 'Bare Force One LLC';

function buildBreadcrumb(path) {
  if (!path || path === '/') return null;
  const segments = path.replace(/^\//, '').split('/');
  const items = [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bareforceone.com/" }
  ];
  let accumulated = '';
  segments.forEach((seg, i) => {
    accumulated += '/' + seg;
    const name = seg
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
    items.push({
      "@type": "ListItem",
      "position": i + 2,
      "name": name,
      "item": `https://bareforceone.com${accumulated}`
    });
  });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items
  };
}

function buildServiceSchema(title, description, path) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "url": `https://bareforceone.com${path}`,
    "provider": {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": "https://bareforceone.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  };
}

const SERVICE_PATHS = ['/government', '/enterprise', '/local-business', '/capabilities'];

export default function SEO({ title, description, path = '', image }) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `Custom Software Development & Digital Transformation | ${SITE_NAME}`;
  const desc = description || 'Bare Force One LLC — custom software development, local business websites, and government software contracts. Serving government agencies, enterprise organizations, and small businesses in Fort Lauderdale, FL and nationwide.';
  const url = `https://bareforceone.com${path}`;
  const ogImage = image || OG_IMAGE;
  const isHomepage = path === '' || path === '/';
  const isServicePage = SERVICE_PATHS.includes(path);
  const breadcrumb = buildBreadcrumb(path);

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Bare Force One LLC — Custom Software Development" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Bare Force One LLC — Custom Software Development" />

      {/* Indexing */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Structured Data: Organization (homepage only) */}
      {isHomepage && (
        <script type="application/ld+json">{JSON.stringify(ORG_SCHEMA)}</script>
      )}

      {/* Structured Data: Service (service pages) */}
      {isServicePage && title && description && (
        <script type="application/ld+json">
          {JSON.stringify(buildServiceSchema(title, description, path))}
        </script>
      )}

      {/* Structured Data: BreadcrumbList (all non-homepage pages) */}
      {breadcrumb && (
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      )}
    </Helmet>
  );
}
