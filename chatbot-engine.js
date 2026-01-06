//chatbot engine with state control

let currentState = null;

//render a state by name
function renderState(stateName){
    const state = flows[stateName];
    if(!state) return;

    currentState = stateName;

    //clear old buttons
    clearOptions();

    //show bot message
    addMessage(state.message, "bot");

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
    if(state.options){
        showOptions(
            state.options.map(option => ({
                text: option.text,
                action: () => {
                    addMessage(option.text, "user");
                    renderState(option.next);
                }
            }))
        );
    }
}

