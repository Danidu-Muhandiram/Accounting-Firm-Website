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


// Render initial state
renderState("WELCOME");


//user input handling

// Handle Send button click
sendButton.addEventListener("click", () => {
  const userMessage = inputField.value.trim();
  // Only send the message if input is not empty
  if (userMessage) {
    addMessage(userMessage, "user");
    inputField.value = "";// Clear input after sending
  }
});

// Event listener for Enter key
inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendButton.click();
  }
});
