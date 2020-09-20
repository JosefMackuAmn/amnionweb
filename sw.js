const CACHE_STATIC_NAME = "static-v1.0.11"
const CACHE_DYNAMIC_NAME = "dynamic-v1.0.13"

const STATIC_PATHS = [
    '/',
    '/offline',
    'css/style.css',
    'js/script.js',
    'images/amnion-favicon.png',
    'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'
];

self.addEventListener('install', event => {
    // Storing static files
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME)
            .then(cache => {
                return Promise.all(STATIC_PATHS.map(url => {
                    return fetch(`${url}?${Math.random()}`)
                        .then(response => {
                            if (!response.ok) throw Error('Not ok');
                            return cache.put(url, response);
                        })
                }));
            })
    )
})

self.addEventListener('activate', event => {
    // Clearing old caches
    event.waitUntil(
        caches.keys()
            .then(keyList => {
                return Promise.all(keyList.map(key => {
                    if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
                        return caches.delete(key);
                    }
                }))
            })
    );
    return self.clients.claim();
})

self.addEventListener('fetch', event => {
    event.respondWith(
        // Serve cached files with network fallback
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request)
                    .then(res => {
                        return caches.open(CACHE_DYNAMIC_NAME)
                            .then(cache => {
                                if (res.type !== 'opaque' && res.ok) {
                                    cache.put(event.request.url, res.clone());
                                }
                                return res;
                            })
                    })
                    .catch(err => {
                        return caches.open(CACHE_STATIC_NAME)
                            .then(cache => {
                                // Serve offline page if html is not cached
                                if (event.request.headers.get('accept').includes('text/html')) {
                                    return cache.match('/offline');
                                }
                            })
                    })
            })
    )
})