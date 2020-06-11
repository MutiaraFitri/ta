const publicVapidKey =
  "BKh1biqQNSmXP62RjznwyzSGCm_FXcvtVMm8XPGophGFRxD2oycxY1LgTDRAv0gA2D7_00epR9SOwF9NGToCZcM";

// Check for service worker
if ("serviceWorker" in navigator) {
  send().catch(err => console.error(err));
}

// Register SW, Register Push, Send Push
async function send() {
  // Register Service Worker
  const register = await navigator.serviceWorker.register("/worker.js", {
    scope: "/"
  });
}