import React, { useEffect } from 'react';

export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
  author,
  type = 'website',
  structuredData,
}) {
  useEffect(() => {
    // Set page title
    if (title) document.title = title;

    // Helper function to set or update meta tag
    const setMetaTag = (name, content, attribute = 'name') => {
      if (!content) return;
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Set description
    if (description) setMetaTag('description', description);

    // Set keywords
    if (keywords) setMetaTag('keywords', keywords);

    // Set author
    if (author) setMetaTag('author', author);

    // Open Graph tags for social media sharing
    if (title) setMetaTag('og:title', title, 'property');
    if (description) setMetaTag('og:description', description, 'property');
    if (type) setMetaTag('og:type', type, 'property');
    if (image) setMetaTag('og:image', image, 'property');
    if (url) setMetaTag('og:url', url, 'property');

    // Twitter Card tags
    if (title) setMetaTag('twitter:title', title, 'name');
    if (description) setMetaTag('twitter:description', description, 'name');
    if (image) setMetaTag('twitter:image', image, 'name');

    // Canonical URL
    if (url) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = url;
    }

    // Add structured data (JSON-LD)
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, image, url, author, type, structuredData]);

  return null;
}
