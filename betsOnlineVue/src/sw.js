// src/sw.js

// ESLint global registration
/* global serviceWorkerOption: false */

const cacheName = 'appuesto-cache';
const isExcluded = f => /hot-update|sockjs/.test(f);

const filesToCache = [
  ...serviceWorkerOption.assets.filter(file => !isExcluded(file)),
  './',
  './index.html',
  'https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0-beta.2/superhero/bootstrap.min.css',
  'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
];

// Cache known assets up-front
const preCache = () =>
  caches.open(cacheName).then(cache => {
    cache.addAll(filesToCache);
  });

// Handle the 'install' event
self.addEventListener('install', event => {
  event.waitUntil(preCache());
});
// self.addEventListener('install', function(e) {
//  e.waitUntil(
//    caches.open('appuesto-cache').then(function(cache) {
//      return cache.addAll([
//        '/',
//        '/index.html',
//        'https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0-beta.2/superhero/bootstrap.min.css',
//        'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
//      ]);
//    })
//  );
// });
// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     fetch(event.request).catch(function() {
//       return caches.match(event.request);
//     })
//   );
// });

self.addEventListener('fetch', function(event) {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request)

    }).catch(function(error) {

      return caches.match('./index.html');

    })
  );
});
