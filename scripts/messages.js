const messages = []; // local storage of messages

document.getElementById("send-btn-send").onclick = function () {
  sendMessage();
};

function renderMessages() {
  const msgContainer = document.getElementById("messages");
  msgContainer.innerHTML = "";

  messages.forEach(msg => {
    const div = document.createElement("div");
    div.classList.add("message", msg.type);

    // text part
    const textEl = document.createElement("p");
    textEl.classList.add("text");
    textEl.textContent = msg.text;
    div.appendChild(textEl);

    // meta (time + ticks)
    const meta = document.createElement("div");
    meta.classList.add("meta");

    // timestamp
    const time = document.createElement("span");
    time.classList.add("time");
    const now = new Date();
    time.textContent = now.getHours() + ":" + String(now.getMinutes()).padStart(2, "0") + " pm";
    meta.appendChild(time);

    // ticks only for "sent"
    if (msg.type === "sent") {
      const tick = document.createElement("span");
      tick.classList.add("tick");
      tick.textContent = "✓✓"; // replace with SVG later if you want
      meta.appendChild(tick);
    }

    div.appendChild(meta);
    msgContainer.appendChild(div);
  });

  msgContainer.scrollTop = msgContainer.scrollHeight; // auto scroll
}

const input = document.getElementById("input-msg");

function sendMessage() {
  
  const text = input.value.trim();
  if (text === "") return;

  // Add "sent" message
  messages.push({ text, type: "sent" });

  // Fake "received" reply
  setTimeout(() => {
    messages.push({ text:text, type: "received" });
    renderMessages();
  }, 1000);

  input.value = "";
  renderMessages();
}

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});



