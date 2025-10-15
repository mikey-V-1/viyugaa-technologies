// Minimal service worker to enable PWA install criteria (manifest + SW + HTTPS)
self.addEventListener('install', (event) => {
  // Activate immediately
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Take control of uncontrolled pages immediately
  event.waitUntil(self.clients.claim());
});

// Basic fetch handler: try network, fallback to cache (no caching here, passthrough)
self.addEventListener('fetch', (event) => {
  // For now, just perform a network fetch so the SW has a fetch handler (required by some browsers
  // for the install prompt). Do not alter responses.
  event.respondWith(
    fetch(event.request).catch(() => {
      // If network fails, attempt to return a fallback response if desired.
      return new Response('', { status: 503, statusText: 'Service Unavailable' });
    })
  );
});
