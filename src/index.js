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
      messageTextNode.nodeValue = "Device orientation - requesting permission";

      DeviceOrientationEvent.requestPermission().then((requestStatus) => {
        if (requestStatus === 'granted') {
          messageTextNode.nodeValue = "Device orientation permission granted - no data yet";

          addDeviceOrientationHandler();
        }
        else {
          messageTextNode.nodeValue = "Device orientation permission refused";
        }
      }).catch() {
        messageTextNode.nodeValue = "Device orientation permission error";
      };
    });
  }
  else {
    messageTextNode.nodeValue = "Device orientation supported - no data yet";

    addDeviceOrientationHandler();
  }
}
else {
  messageTextNode.nodeValue = "Device orientation not supported";
}

function addDeviceOrientationHandler () {
  window.addEventListener('deviceorientation', (event) => {
    const message = `Alpha: ${event.alpha} Beta: ${event.beta} Gamma: ${event.gamma}`;

    messageTextNode.nodeValue = message;
  });
}
