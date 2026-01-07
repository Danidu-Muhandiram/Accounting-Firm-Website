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
function addMessage(text, sender = "bot", inlineOptions = null) {
  const div = document.createElement("div");
  div.className = sender;
  
  // Add timestamp for bot messages
  if (sender === "bot") {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    
    const messageText = document.createElement("div");
    messageText.innerText = text;
    
    const timestamp = document.createElement("div");
    timestamp.className = "timestamp";
    timestamp.innerText = timeString;
    timestamp.style.fontSize = "0.7em";
    timestamp.style.color = "#666";
    timestamp.style.marginTop = "4px";
    timestamp.style.textAlign = "right";
    
    div.appendChild(messageText);
    
    // Add inline buttons if provided
    if (inlineOptions && inlineOptions.length > 0) {
      const buttonsContainer = document.createElement("div");
      buttonsContainer.style.display = "flex";
      buttonsContainer.style.flexDirection = "column";
      buttonsContainer.style.gap = "8px";
      buttonsContainer.style.marginTop = "20px"; // Increase space between message and option lists
      
      inlineOptions.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option.text;
        btn.style.padding = "10px 16px";
        btn.style.background = "linear-gradient(135deg, #4CAF50, #81C784)";
        btn.style.color = "#fff";
        btn.style.border = "none";
        btn.style.borderRadius = "8px";
        btn.style.cursor = "pointer";
        btn.style.fontSize = "14px";
        btn.style.fontWeight = "500";
        btn.style.transition = "all 0.3s ease";
        btn.style.opacity = "0.8";
        btn.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";

        //When the button is clicked, run the action link
        btn.addEventListener("click", option.action);

        // When the mouse pointer moves over the button
        btn.addEventListener("mouseover", () => {
          btn.style.transform = "scale(1.05)";
          btn.style.boxShadow = "0 4px 8px rgba(76, 175, 80, 0.4)";
          btn.style.opacity = "1";
        });

        // When the mouse pointer leaves the button
        btn.addEventListener("mouseout", () => {
          btn.style.transform = "scale(1)";
          btn.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
          btn.style.opacity = "0.8";
        })

        // Add the button inside the buttons container div
        buttonsContainer.appendChild(btn);
      });
      
      
      div.appendChild(buttonsContainer);
    }
    
    div.appendChild(timestamp);
  } else {
    div.innerText = text;
  }
  
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



