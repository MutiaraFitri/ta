console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: data.description,
    icon: "https://api.ict-servicedesk.xyz/uploads/icon-192x192.png",
    vibrate: [100, 50, 100],
    actions: [
      {action: 'explore', title: data.action,
        icon: 'images/checkmark.png'},
      {action: 'close', title: 'Close',
        icon: 'images/xmark.png'},
    ]
  });
});

self.addEventListener('notificationclick', function (n){
  var notification = n.notification;
  var primaryKey = notification.data.primaryKey;
  var action = n.action;

  if(action === 'close'){
      notification.close();
  }else{
      clients.openWindow('https://service.ict-servicedesk.xyz/');
      notification.close();
  }

});