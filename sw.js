// Service worker : fonctionnement hors ligne.
// Pour publier une nouvelle version de l'application, change VERSION ci-dessous.
const VERSION = "v2";
const CACHE = "simulateur-freelance-" + VERSION;
const SHELL = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png", "favicon-32.png", "icon.svg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("simulateur-freelance-") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  if (req.mode === "navigate") {
    // Page : réseau d'abord (toujours la dernière version en ligne), cache si hors ligne ou si le réseau tarde
    const fromNet = fetch(req).then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put("index.html", copy)); } return res; });
    const fromCache = () => caches.match("index.html").then(r => r || caches.match("./"));
    const timer = new Promise(resolve => setTimeout(() => resolve(fromCache()), 4000));
    e.respondWith(Promise.race([fromNet.catch(fromCache), timer]).then(r => r || fromNet));
    return;
  }
  // Fichiers statiques : cache d'abord
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; })));
});
