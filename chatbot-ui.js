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
function addMessage(text, sender = "bot", inlineOptions = null, specialType = null) {
  const messages = document.getElementById("chatbot-messages");
  if (!messages) {
    console.error("Chatbot messages element not found.");
    return;
  }

  // Carousel special message type
  if (specialType === "carousel" && Array.isArray(text)) {
    renderCarouselMessage(text);
    return;
  }

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
      buttonsContainer.style.marginTop = "20px";
      inlineOptions.forEach(option => {
        const btn = document.createElement("button");
        btn.classList.add('inline-option');
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
        btn.addEventListener("click", option.action);
        btn.addEventListener("mouseover", () => {
          btn.style.transform = "scale(1.05)";
          btn.style.boxShadow = "0 4px 8px rgba(76, 175, 80, 0.4)";
          btn.style.opacity = "1";
        });
        btn.addEventListener("mouseout", () => {
          btn.style.transform = "scale(1)";
          btn.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
          btn.style.opacity = "0.8";
        })
        buttonsContainer.appendChild(btn);
      });
      div.appendChild(buttonsContainer);
    }
    div.appendChild(timestamp);
  } else {
    div.innerText = text;
  }
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

// Carousel rendering logic
function renderCarouselMessage(cards) {
  const messages = document.getElementById("chatbot-messages");
  // Carousel wrapper
  const carouselWrapper = document.createElement("div");
  carouselWrapper.className = "chatbot-carousel-wrapper";
  // Track for cards
  const track = document.createElement("div");
  track.className = "chatbot-carousel-track";

  // Each card
  const cardDivs = cards.map((card, idx) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "chatbot-carousel-card";
    // Card image
    if (card.image) {
      const img = document.createElement("img");
      img.src = card.image;
      img.alt = card.title || "";
      img.className = "carousel-card-image";
      cardDiv.appendChild(img);
    }
    // Card text
    const textDiv = document.createElement("div");
    textDiv.className = "carousel-card-text";
    if (card.title) {
      const title = document.createElement("div");
      title.className = "carousel-card-title";
      title.innerText = card.title;
      textDiv.appendChild(title);
    }
    if (card.description) {
      const desc = document.createElement("div");
      desc.className = "carousel-card-desc";
      desc.innerText = card.description;
      textDiv.appendChild(desc);
    }
    cardDiv.appendChild(textDiv);
    // Card action button
    if (card.button) {
      const btn = document.createElement("button");
      btn.className = "carousel-card-btn";
      btn.innerText = card.button.text;
      btn.onclick = card.button.action;
      cardDiv.appendChild(btn);
    }
    track.appendChild(cardDiv);
    return cardDiv;
  });

  carouselWrapper.appendChild(track);

  // Pagination dots
  const dots = document.createElement("div");
  dots.className = "carousel-pagination-dots";
  for (let i = 0; i < cards.length; i++) {
    const dot = document.createElement("span");
    dot.className = "carousel-dot" + (i === 0 ? " active" : "");
    dots.appendChild(dot);
  }
  carouselWrapper.appendChild(dots);

  // Navigation arrows
  const leftArrow = document.createElement("div");
  leftArrow.className = "carousel-arrow left";
  leftArrow.innerHTML = "&#8592;";
  leftArrow.style.display = "none";
  const rightArrow = document.createElement("div");
  rightArrow.className = "carousel-arrow right";
  rightArrow.innerHTML = "&#8594;";
  carouselWrapper.appendChild(leftArrow);
  carouselWrapper.appendChild(rightArrow);

  // Scroll logic
  let currentIdx = 0;
  function updateCarousel(dir = 0) {
    cardDivs.forEach((div, i) => {
      div.classList.remove('active', 'left', 'right');
      if (i === currentIdx) {
        div.classList.add('active');
      } else if (i < currentIdx) {
        div.classList.add('left');
      } else {
        div.classList.add('right');
      }
    });
    // Dots
    Array.from(dots.children).forEach((dot, i) => {
      dot.className = "carousel-dot" + (i === currentIdx ? " active" : "");
    });
    // Arrows
    leftArrow.style.display = currentIdx > 0 ? "flex" : "none";
    rightArrow.style.display = currentIdx < cards.length - 1 ? "flex" : "none";
  }
  leftArrow.onclick = () => {
    if (currentIdx > 0) {
      currentIdx--;
      updateCarousel(-1);
    }
  };
  rightArrow.onclick = () => {
    if (currentIdx < cards.length - 1) {
      currentIdx++;
      updateCarousel(1);
    }
  };
  // Dot click
  Array.from(dots.children).forEach((dot, i) => {
    dot.onclick = () => {
      currentIdx = i;
      updateCarousel();
    };
  });

  // Initial update after DOM is ready
  setTimeout(() => updateCarousel(), 30);

  // Timestamp below carousel
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const timestamp = document.createElement("div");
  timestamp.className = "timestamp";
  timestamp.innerText = timeString;
  timestamp.style.fontSize = "0.7em";
  timestamp.style.color = "#666";
  timestamp.style.marginTop = "8px";
  timestamp.style.textAlign = "right";
  carouselWrapper.appendChild(timestamp);

  messages.appendChild(carouselWrapper);
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



