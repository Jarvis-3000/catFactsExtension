
//notification hello
document.addEventListener('DOMContentLoaded', function() {
 if (!Notification) {
  alert('Desktop notifications not available in your browser. Try Chromium.');
  return;
 }

 if (Notification.permission !== 'granted')
  Notification.requestPermission();
});


var notify={
    type:'basic',
    icon: 'cat.png',
    title:'Hello Dude!',
    body: 'Hey there, Get amazing facts of cat right now!',
}

function notifyMe() {
 if (Notification.permission !== 'granted')
  Notification.requestPermission();

 else {
  var notification = new Notification('Visit us!',notify);

  notification.onclick = function() {
   window.open('option.html');
  };
 }
}
document.querySelector("#notify").addEventListener("click",notifyMe)
