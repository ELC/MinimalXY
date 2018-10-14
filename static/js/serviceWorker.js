"use strict";

// Extracted from https://github.com/GoogleChromeLabs/sw-precache/blob/master/demo/app/js/service-worker-registration.js#L27
// Modified from https://serviceworke.rs/offline-status.html

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/sw.js", { scope: "/" })
      .then(function(reg) {
        if (
          reg.active &&
          reg.active.state === "activated" &&
          navigator.onLine
        ) {
          launch_toast("Remember this site also works offline!");
        }
      })
      .catch(function(e) {
        console.error("Error during service worker registration:", e);
      });

    navigator.serviceWorker.addEventListener("controllerchange", function(
      event
    ) {
      navigator.serviceWorker.controller.addEventListener(
        "statechange",
        function(e) {
          if (e.currentTarget.state === "activated") {
            launch_toast("Content is now available offline!");
          }
        }
      );
    });
  });
}
