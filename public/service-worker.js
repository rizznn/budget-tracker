const APP_PREFIX = 'BudgetTracker-';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;
const FILES_TO_CACHE = [
  './index.html',
  './css/styles.css',
  './js/idb.js',
  './js/index.js',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png'
];

// Cache the files
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      // installing the cache
      return cache.addAll(FILES_TO_CACHE);
    })
  )
});

// Delete outdated cache files
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      let cacheKeepList = keyList.filter(function(key) {
        return key.indexOf(APP_PREFIX);
      });
      // add current cache name to keeplist
      cacheKeepList.push(CACHE_NAME);

      return Promise.all(
        keyList.map(function(key, i) {
          if(cacheKeepList.indexOf(key) === -1) {
            // deleting the old cache
            return caches.delete(keyList[i]);
          };
        })
      );
    })
  );
}); 


self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request)
      .then(function(request) {
        if(request) {
          // respond with cached files
          return request;
        } else {
          // respond with fetch request
          return fetch(e.request);
        }
      })
      .catch(err => console.log(err))
  )
});