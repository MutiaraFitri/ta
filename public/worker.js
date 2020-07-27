// console.log("Service Worker Loaded...");

// self.addEventListener("push", e => {
//   const data = e.data.json();
//   self.registration.showNotification(data.title, {
//     body: data.description,
//     icon: "https://api.ict-servicedesk.xyz/uploads/icon-192x192.png",
//     vibrate: [100, 50, 100],
//     actions: [
//       {
//         action: 'explore', title: data.action,
//         icon: 'images/checkmark.png'
//       },
//       {
//         action: 'close', title: 'Close',
//         icon: 'images/xmark.png'
//       },
//     ]
//   });
// });

// self.addEventListener('notificationclick', function (event) {
//   if (event.action === 'close') {
//     event.notification.close();
//   } else {
//     event.notification.close();
//     clients.openWindow("https://service.ict-servicedesk.xyz/");
//   }
// });

self.addEventListener("push", e => {
  const data = e.data.json();
  // console.log("Push Recieved...", data);
  self.registration.showNotification(data.title, {
    body: data.description,
    vibrate: [100, 50, 100],
    icon: "https://api.ict-servicedesk.xyz/uploads/icon-192x192.png",
    data: {
      link: data.link
    }
  });
});

self.addEventListener('notificationclick', function (event) {
  // console.log(event.notification);
  event.notification.close();
  clients.openWindow("https://service.ict-servicedesk.xyz/" + event.notification.data.link);
});