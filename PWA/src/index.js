// Based on Creating a Progressive Web Application (PWA) - HTML, CSS & JavaScript Tutorial
// https://www.youtube.com/watch?v=WbbAPfDVqfY

if("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(registration => {
    console.log("ServiceWorker registered.")
    console.log({registration})
  }).catch(error => {
    console.log("ServiceWorker registration failed. " + error)
  })
} else {
  console.log("Application not supported")
}