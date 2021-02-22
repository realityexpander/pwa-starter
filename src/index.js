if("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(registraion => {
    console.log("ServiceWorker registered.")
    console.log({registraion})
  }).catch(error => {
    console.log("ServiceWorker registration failed. " + error)
  })
} else {
  console.log("Application not supported")
}