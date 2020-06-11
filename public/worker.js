console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: data.description,
    icon: "http://api.ict-servicedesk.xyz/uploads/icon-192x192.png"
  });
});