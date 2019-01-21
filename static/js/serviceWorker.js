"use strict";

// Extracted from https://github.com/GoogleChromeLabs/sw-precache/blob/master/demo/app/js/service-worker-registration.js#L27
// Modified from https://serviceworke.rs/offline-status.html

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/sw.js", { scope: "/" })
      .catch(function(e) {
        console.error("Error during service worker registration:", e);
      });
  });
}
