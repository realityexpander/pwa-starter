self.addEventListener("install", e=> {
  console.log("Installed service worker")
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["./", "./src/master.css", "./images/logo192.png"])
    })
  )
})

self.addEventListener("fetch", e=> {
  console.log(`Intercept fetch for ${e.request.url}`)
  e.respondWith(
    caches.match(e.request).then(response => {
      if(response) console.log("Hit cache")
      return response || fetch(e.request)
    })
  )
})