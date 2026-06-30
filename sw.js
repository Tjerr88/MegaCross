const CACHE_NAME = "crossfit-generator-v11";
const APP_SHELL = [
  "./index.html",
  "./manifest.webmanifest",
  "./styles.css?v=11",
  "./app.js?v=11"
];
const STATIC_ASSETS = [
  "./icon-192.png",
  "./icon-512.png",
  "./maskable-512.png",
  "./icon.svg",
  "./maskable.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll([...APP_SHELL, ...STATIC_ASSETS]))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

async function cacheResponse(request, response) {
  if (!response || !response.ok) return response;
  const cache = await caches.open(CACHE_NAME);
  await cache.put(request, response.clone());
  return response;
}

async function networkFirst(request) {
  try {
    return await cacheResponse(request, await fetch(request, { cache: "no-store" }));
  } catch {
    const cached = await caches.match(request);
    return cached || caches.match("./index.html");
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  return cacheResponse(request, await fetch(request));
}

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  const isSameOrigin = url.origin === self.location.origin;
  if (!isSameOrigin) return;

  const isNavigation = event.request.mode === "navigate";
  const isCodeAsset = /\.(?:js|css)$/i.test(url.pathname);

  if (isNavigation || isCodeAsset) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  event.respondWith(cacheFirst(event.request));
});
