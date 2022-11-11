import './style.css';

const messageElement = document.createElement("div");
const messageTextNode = document.createTextNode("");
messageElement.className = "message";
messageElement.appendChild(messageTextNode);

document.body.appendChild(messageElement);

if (window.DeviceOrientationEvent) {
  messageTextNode.nodeValue = "Device orientation supported - no data yet";
}
else {
  messageTextNode.nodeValue = "Device orientation not supported";
}

window.addEventListener('deviceorientation', (event) => {
  const message = `Alpha: ${event.alpha} Beta: ${event.beta} Gamma: ${event.gamma}`;

  messageTextNode.nodeValue = message;
});
