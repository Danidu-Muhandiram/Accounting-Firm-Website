/*WELCOME
│
├── TAX
│   ├── INDIVIDUAL
│   ├── BUSINESS
│
├── ACCOUNTING
│
├── CONSULTATION
│
└── HUMAN_HANDOFF*/


// Adds a new message to the chat interface.
// creates a message element, assigns it as a bot or user message,
// sets the message text, and appends it to the chat messages area.
function addMessage(text, sender = "bot") {
  const div = document.createElement("div");
  div.className = sender;
  div.innerText = text;
  messages.appendChild(div);

  //moves the scroll position to the bottom
  messages.scrollTop = messages.scrollHeight;
}

// Displays a list of options as buttons for the user to select from.
// and attaches click actions to each button.
function showOptions(optionList) {
  options.innerHTML = "";

  optionList.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option.text;
    btn.addEventListener("click", option.action);
    options.appendChild(btn);
  });
}

// Clears all option buttons from the chat interface.
function clearOptions() {
  options.innerHTML = "";
}



