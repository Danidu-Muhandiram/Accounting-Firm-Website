//chatbot engine with state control

let currentState = null;
let currentLanguage = "en"; // default language


//render a state by name
function renderState(stateName){
    currentState = stateName;

    //clear old buttons
    clearOptions();

    // Determine message and options based on language
    let messageToShow;
    let optionsToShow;
    let state;

    // Check for language-specific state
    if (flows[currentLanguage] && flows[currentLanguage][stateName]) {
        // Load content in selected language
        state = flows[currentLanguage][stateName];
        messageToShow = state.message;
        optionsToShow = state.options;
    } else if (flows[stateName]) {
        // Fallback to root level (for HOME state)
        state = flows[stateName];
        messageToShow = state.message;
        optionsToShow = state.options;
    } else {
        return; // State not found
    }

    // Show bot message
    addMessage(messageToShow, "bot");


    //if contact state
    if(state.contact){
        addMessage("Email: contact@paloaccounting.com");
        addMessage("Phone: +94 123 456 7890");
        return;
    }

    //if end state
    if(state.end){
        addMessage("Chat ended. Have a great day!");
        return;
    }

    //render options
    if (optionsToShow) {
    showOptions(
        optionsToShow.map(option => ({
            text: option.text,
            action: () => {
                addMessage(option.text, "user");
                // Update language and render state
                if (option.lang) {
                    currentLanguage = option.lang; // Update language
                    renderState(option.next); // Transition to next state
                } else {
                    renderState(option.next);
                }
            }
        }))
    );
}

}

