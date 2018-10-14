"use strict";

function launch_toast(message) {
  var toast = document.getElementById("toast");

  toast.className = "show";

  var toastDescription = document.getElementById("toast--desc");

  setTimeout(function() {
    toastDescription.innerHTML = message;
  }, 600);

  setTimeout(function() {
    toastDescription.innerHTML = "";
  }, 4500);

  setTimeout(function() {
    toast.className = toast.className.replace("show", "");
  }, 6000);
}
