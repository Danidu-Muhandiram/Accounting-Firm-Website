//chatbot engine with state control

let currentState = null;
let currentLanguage = "en"; // default language

// CHATBOT mode
let aiMode = false;


//render a state by name
function renderState(stateName){
    currentState = stateName;

    //clear old buttons
    clearOptions();

    // If user requested AI assistant, enable AI mode immediately
    if (stateName === "AI_ASSISTANT" || stateName === "AI_ASSISTANT_SI") {
        enableAIMode();
        return;
    }

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

    // Activate AI mode for AI_ASSISTANT states
    if (stateName === "AI_ASSISTANT" || stateName === "AI_ASSISTANT_SI") {
        enableAIMode();
        return;
    }

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

    // Determine if buttons should be shown inline or in bottom layer
    const showInBottomLayer = (stateName === "HOME"); // Only HOME state uses bottom layer
    
    //render options
    if (optionsToShow) {
        const mappedOptions = optionsToShow.map(option => ({
            text: option.text,
            action: () => {
                disableButtons();
                addMessage(option.text, "user");
                // Update language and render state
                if (option.lang) {
                    currentLanguage = option.lang; // Update language
                    renderState(option.next); // Transition to next state
                } else {
                    renderState(option.next);
                }
            }
        }));
        
        if (showInBottomLayer) {
            // Show bot message without inline buttons
            addMessage(messageToShow, "bot");
            // Show buttons in bottom layer
            showOptions(mappedOptions);
        } else {
            // Show bot message with inline buttons
            addMessage(messageToShow, "bot", mappedOptions);
        }
    } else {
        // No options, just show the message
        addMessage(messageToShow, "bot");
    }

    // Enable AI mode: use the existing chat input (so it's visible in the widget)
    function enableAIMode() {
        aiMode = true;
        clearOptions();
        // Localized welcome
        const welcomeText = (currentLanguage === 'si')
            ? "හායි, මම පාලෝ, ශ්‍රී ලංකාවේ වඩාත්ම ජනප්‍රිය ගිණුම්කරණ සමාගමක AI සහායක. අද මට ඔබට උදව් කළ හැක්කේ කෙසේද?"
            : "Hi, I'm Palo, the AI assistant for one of the most popular accounting firms in Sri Lanka. How can I assist you today?";

        addMessage(welcomeText);

        // Focus the existing input field in the UI so user can type immediately
        const inputField = document.getElementById('chatbot-text');
        const sendBtn = document.getElementById('chatbot-send');

        if (inputField) {
            inputField.focus();
            // make sure it's visible (in case styles hide it)
            inputField.style.display = '';
        }

        if (sendBtn) {
            sendBtn.style.display = '';
        }
    }

// Disable all buttons
function disableButtons() {
    // Only disable option buttons so global controls (Send, Clear) remain usable
    const optionButtons = document.querySelectorAll("#chatbot-options button, .inline-option");
    optionButtons.forEach(button => button.disabled = true);
}

// Function to send user message to the backend and get AI response
async function sendMessageToAI(userMessage) {
    try {
        const response = await fetch('http://localhost:3000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userMessage })
        });

        if (response.ok) {
            const data = await response.json();
            addMessage(data.reply, 'bot');
        } else {
            addMessage('Sorry, there was an error connecting to the AI assistant.', 'bot');
        }
    } catch (error) {
        addMessage('Unable to connect to the AI assistant. Please try again later.', 'bot');
    }
}
    // Expose to global scope for chatbot-main.js
    window.sendMessageToAI = sendMessageToAI;
}

