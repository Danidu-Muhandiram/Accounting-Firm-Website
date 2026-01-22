//chatbot engine with state control

let currentState = null;
let currentLanguage = "en"; // default language

// CHATBOT mode
let aiMode = false;

// Global variable to store user details
let userContext = { name: "" };

// Check if waiting for the user to type a name
function isWaitingForName() {
    let stateObj = (flows[currentLanguage] && flows[currentLanguage][currentState]) 
                   ? flows[currentLanguage][currentState] 
                   : flows[currentState];
    return stateObj && stateObj.type === "capture_name";
}

// Handle the name input
function handleUserResponse(userText) {
    userContext.name = userText; // Save the name
    
    // Capitalize first letter of name
    if(userContext.name) userContext.name = userContext.name.charAt(0).toUpperCase() + userContext.name.slice(1);

    // Go next state (WELCOME)
    let stateObj = flows[currentLanguage][currentState];
    if (stateObj && stateObj.next) renderState(stateObj.next);
}
// Expose to main
window.isWaitingForName = isWaitingForName;
window.handleUserResponse = handleUserResponse;

function renderState(stateName) {
    currentState = stateName;
    clearOptions(); // clear old buttons

    // AI Check
    if (stateName === "AI_ASSISTANT" || stateName === "AI_ASSISTANT_SI") {
        enableAIMode();
        return;
    }

    // Load State Data
    let state = (flows[currentLanguage] && flows[currentLanguage][stateName]) 
                ? flows[currentLanguage][stateName] 
                : flows[stateName];

    if (!state) return; 

    // Process Message (Swap {name} placeholder)
    let messageToShow = state.message;
    if (messageToShow && messageToShow.includes("{name}")) {
        let displayName = userContext.name || "Guest";
        messageToShow = messageToShow.replace(/{name}/g, displayName);
    }

    // Render Text and Options
    let optionsToShow = state.options;
    if (optionsToShow) {
        const mappedOptions = optionsToShow.map(option => ({
            text: option.text,
            action: () => {
                disableButtons();
                addMessage(option.text, "user");
                if (option.lang) currentLanguage = option.lang;
                renderState(option.next);
            }
        }));
        
        // Show message with buttons attached (or separate if HOME)
        if (stateName === "HOME") {
            addMessage(messageToShow, "bot");
            showOptions(mappedOptions);
        } else {
            addMessage(messageToShow, "bot", mappedOptions);
        }
    } else {
        // Just text (like INITIAL state)
        if (messageToShow) addMessage(messageToShow, "bot");
    }

    // Render Carousel (shows AFTER the text)
    if (state.carousel && Array.isArray(state.carousel)) {
        addMessage(state.carousel, "bot", null, "carousel");
    }

    // Special States
    if(state.contact) {
        addMessage("Email: contact@paloaccounting.com");
        addMessage("Phone: +94 123 456 7890");
    }
    if(state.end) {
        addMessage("Chat ended. Have a great day!");
    }
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

