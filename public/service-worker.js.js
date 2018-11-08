const CACHE_NAME = 'pwa-pop-movies-cache'

const urlsToCache = ['/', 'static/js/bundle.js', 'static/media/**/*']

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE_NAME).then(cache => {
			return cache.addAll(urlsToCache)
		})
	)
})

self.addEventListener('activate', event => {
	const cacheWhitelist = [CACHE_NAME]
	event.waitUntil(
		caches.keys().then(keyList =>
			Promise.all(
				keyList.map(key => {
					if (!cacheWhitelist.includes(key)) {
						return caches.delete(key)
					}
				})
			)
		)
	)
})

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
			return response || fetch(event.request)
		})
	)
})
