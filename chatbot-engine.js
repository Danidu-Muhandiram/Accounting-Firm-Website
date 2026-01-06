//start chatbot
//include control entry points and handle safety exits
//called from main.js

function startChatEngine(){
   //start the chatbot by showing welcome messages
   addMessage("Welcome to Palo accounting firm.");
   addMessage("How can we assist you today?");

   //display the main options to the user
   showOptions([
      { text: "Tax Services", action: taxFlow },
      { text: "Accounting & Bookkeeping", action: accountingFlow },
      { text: "Talk to an Accountant", action: contactFlow }
    ]);
}

//safety exit function to end the chat (for sensitive detais)
function unasfeQuestion(){
    clearOptions();
    addMessage("This requires professional review. Please consult our professionals directly.");

}

