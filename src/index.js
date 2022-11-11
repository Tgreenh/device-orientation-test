import './style.css';

const messageElement = document.createElement("div");
const messageTextNode = document.createTextNode("");
messageElement.className = "message";
messageElement.appendChild(messageTextNode);

document.body.appendChild(messageElement);

if (window.DeviceOrientationEvent) {

  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    messageTextNode.nodeValue = "Device orientation supported - tap to allow";

    messageElement.addEventListener('click', (event) => {
      DeviceOrientationEvent.requestPermission().then((requestStatus) => {
        if (requestStatus === 'granted') {
          messageTextNode.nodeValue = "Device orientation permission granted - no data yet";
        }
        else {
          messageTextNode.nodeValue = "Device orientation permission refused";
        }
      });
    });
  }
  else {
    messageTextNode.nodeValue = "Device orientation supported - no data yet";
  }
}
else {
  messageTextNode.nodeValue = "Device orientation not supported";
}

window.addEventListener('deviceorientation', (event) => {
  const message = `Alpha: ${event.alpha} Beta: ${event.beta} Gamma: ${event.gamma}`;

  messageTextNode.nodeValue = message;
});
