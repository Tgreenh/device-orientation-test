import './style.css';

const messageElement = document.createElement("div");
const messageTextNode = document.createTextNode("No orientation data");
messageElement.className = "message";
messageElement.appendChild(messageTextNode);

document.body.appendChild(messageElement);

window.addEventListener('deviceorientation', (event) => {
  const message = `Alpha: ${event.alpha} Beta: ${event.beta} Gamma: ${event.gamma}`;

  messageTextNode.nodeValue = message;
});
