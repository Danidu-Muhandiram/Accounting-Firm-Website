//Connects the chatbot UI to Js
// Starts the chatbot in the WELCOME state
// Handles user text input (Send button & Enter key)


// Initialize DOM elements
//message display area
const messages = document.getElementById("chatbot-messages");
//Creates a container for option buttons
const options = document.createElement("div");
options.id = "chatbot-options";
//Insert the options container just below the messages area
messages.parentNode.insertBefore(options, messages.nextSibling);
// Text input field for user messages
const inputField = document.getElementById("chatbot-text");
// Send button for submitting user messages
const sendButton = document.getElementById("chatbot-send");


//start chatbot

// Add date header
const dateHeader = document.createElement("div");
dateHeader.style.textAlign = "center";
dateHeader.style.padding = "10px 0";
dateHeader.style.color = "#666";
dateHeader.style.fontSize = "0.9em";
dateHeader.style.borderBottom = "1px solid #e0e0e0";
dateHeader.style.marginBottom = "10px";

const today = new Date();
const dateString = today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
dateHeader.innerText = `Today - ${dateString}`;

messages.insertBefore(dateHeader, messages.firstChild);

// Render initial state
renderState("HOME");


//user input handling

// Handle Send button click
sendButton.addEventListener("click", () => {
  const userMessage = inputField.value.trim();
  // Only send the message if input is not empty
  if (userMessage) {
    addMessage(userMessage, "user"); // Show user text
    inputField.value = ""; // Clear input

    
    // If AI mode is active, route the message to the AI backend
    if (typeof aiMode !== 'undefined' && aiMode) {
      // AI Mode is ON (User clicked "Chat with AI") -> Send to AI
      if (typeof sendMessageToAI === 'function') sendMessageToAI(userMessage);
      
    } else if (typeof isWaitingForName === 'function' && isWaitingForName()) {
      // We are waiting for a Name (INITIAL state) -> Save Name
      handleUserResponse(userMessage);
      
    } else {
      // Normal Mode -> Input does nothing (User must click buttons)
      "Please select an option"
    }
  }
});

// Event listener for Enter key
inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendButton.click();
  }
});

// Adjust close button placement and add clear button next to it
const closeButton = document.getElementById("chatbot-close");
closeButton.style.position = "absolute";
closeButton.style.top = "10px";
closeButton.style.right = "10px";

//clear button to remove chat messages
const clearButton = document.createElement("button");

//// direct js styles
clearButton.innerText = "Clear";
clearButton.style.background = "none";
clearButton.style.border = "none";
clearButton.style.color = "#fff";
clearButton.style.fontSize = "14px";
clearButton.style.cursor = "pointer";
clearButton.style.position = "absolute";
clearButton.style.top = "10px";
clearButton.style.right = "50px";

const header = document.getElementById("chatbot-header");
header.appendChild(clearButton);

// Clear all messages when the Clear button is clicked
clearButton.addEventListener("click", () => {
  const messages = document.getElementById("chatbot-messages");
  messages.innerHTML = "";
  // Reset chatbot to initial welcome state
  renderState("HOME");
});
