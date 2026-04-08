self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Dibiarkan kosong hanya sebagai syarat formal PWA
});
