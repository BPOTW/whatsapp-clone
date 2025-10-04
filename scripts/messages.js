const chats = {};

let activeContact = [];

let selectedContact = null;

function setActiveContact(name) {
  selectedContact = name;
  if (!chats[selectedContact]) {
    chats[selectedContact] = [];
  }
  renderMessages();
}

document.getElementById("send-btn-send").onclick = function () {
  sendMessage();
};

const input = document.getElementById("input-msg");

function sendMessage() {
  if (!selectedContact) {
    alert("Select a contact first!");
    return;
  }

  const text = input.value.trim();
  if (text === "") return;

  chats[selectedContact].push({ text, type: "sent" });

  setTimeout(() => {
    chats[selectedContact].push({ text: "Got it!", type: "received" });
    renderMessages();
  }, 1000);

  input.value = "";
  renderMessages();
}

function renderMessages() {
  const msgContainer = document.getElementById("messages");
  msgContainer.innerHTML = "";

  if (!selectedContact || !chats[selectedContact]) return;

  chats[selectedContact].forEach((msg) => {
    const div = document.createElement("div");
    div.classList.add("message", msg.type);

    const textEl = document.createElement("p");
    textEl.classList.add("text");
    textEl.textContent = msg.text;
    div.appendChild(textEl);

    const meta = document.createElement("div");
    meta.classList.add("meta");

    const time = document.createElement("span");
    time.classList.add("time");
    const now = new Date();
    time.textContent = `${now.getHours()}:${String(now.getMinutes()).padStart(
      2,
      "0"
    )} pm`;
    meta.appendChild(time);

    if (msg.type === "sent") {
      const tick = document.createElement("span");
      tick.classList.add("tick");
      tick.textContent = "✓✓";
      meta.appendChild(tick);
    }

    div.appendChild(meta);
    msgContainer.appendChild(div);
  });

  msgContainer.scrollTop = msgContainer.scrollHeight;
}

document.querySelectorAll("contact-card").forEach((card, i, cards) => {
  activeContact[i] = 0;

  card.onclick = function () {
    const name = card.getAttribute("name").toLowerCase().replace(" ", "_");
    const nameRaw = card.getAttribute("name");
    const img = card.getAttribute("src");
    setActiveContact(name);
    disableChat();
    changeChatProfile(nameRaw,img);
    activeContact.fill(0);
    activeContact[i] = 1;

    cards.forEach((c) => {
      const inner = c.shadowRoot.querySelector(".contact-card");
      inner.classList.remove("active");
    });

    const cs = card.shadowRoot.querySelector(".contact-card");
    cs.classList.add("active");

  };

  // const cs = card.shadowRoot.querySelector(".contact-card");
  // if (i === 0){ cs.classList.add("active");}
});

function changeChatProfile(name,img){
  console.log(name,img);
  const selectedProfileImg = document.getElementById('chat-top-profile-img');
  const selectedProfileName = document.getElementById('chat-top-name');

  selectedProfileImg.src = img;
  selectedProfileName.innerHTML = name;
}

function disableChat() {
  const chatWindow = document.getElementById("chat-section");
  const chatDisableWindow = document.getElementById("chat-disable-div");
  if (!selectedContact) {
    chatWindow.style.display = "none";
    chatDisableWindow.style.display = "flex";
  }else{
    chatWindow.style.display = "block";
    chatDisableWindow.style.display = "none";
  }
}

disableChat();

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
