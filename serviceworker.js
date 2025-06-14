const CACHE_NAME = 'my-site-cache-v1';

const urlsToCache = [
    '/',
    '/index.html',
    '/home.html',
    '/profile.html',
    '/css/output.css',
    '/images/logos/dicoding.png',
    '/images/logos/gdgoc.png',
    '/js/alpine.js',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
})

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    )
})
    