//conversation rules for the accounting firm website chatbot

const flows = {
  //home buttons for language selection
  HOME: {
    message: "Hi, Please select your preferred language before proceeding further\n\nආයුබෝවන්, ඉදිරියට යාමට පෙර කරුණාකර ඔබ කැමති භාෂාව තෝරන්න.",
    options: [
      { text: "English", next: "INITIAL", lang: "en" },
      { text: "සිංහල", next: "INITIAL", lang: "si" }
    ]
  },

  //English language content
  en: {

    INITIAL: {
  message: "Welcome to our accounting firm. Before we begin, please tell me your name",
  type: "capture_name",
  next: "WELCOME"
},


    //first welcome state with company services and other options
    WELCOME: {
      message: "Hello {name}. we are one of leading accounting firms in sri lanka. we offer various services. How can we assist you?",
      /*options: [
        { text: "Our Services", next: "SERVICES" },
        { text: "Book a Session", next: "SESSION" },
        { text: "Talk to a Professional Expert", next: "HUMAN" },
        { text: "Chat with our AI Assistant", next: "AI_ASSISTANT" },
        { text: "About Us", next: "ABOUT_US" }
      ],*/
      carousel: [
        {
          image: "images/chatbot-our_services.jpg",
          title: "Our Services",
          description: "Explore all the services we offer for individuals and businesses.",
          button: { text: "View Services", action: function() { renderState('SERVICES'); } }
        },
        {
          image: "images/chatbot-book_session.jpg",
          title: "Book a Session",
          description: "Easily schedule a meeting or consultation with our experts.",
          button: { text: "Book Now", action: function() { renderState('SESSION'); } }
        },
        {
          image: "images/chatbot-expert.jpg",
          title: "Talk to a Professional Expert",
          description: "Connect with a professional for personalized accounting advice.",
          button: { text: "Talk Now", action: function() { renderState('HUMAN'); } }
        },
        {
          image: "images/chatbot-AI.jpg",
          title: "Chat with our AI Assistant",
          description: "Get instant answers and support from our AI-powered assistant.",
          button: { text: "Start Chat", action: function() { renderState('AI_ASSISTANT'); } }
        },
        {
          image: "images/chatbot-about_us.jpg",
          title: "About Us",
          description: "Learn more about our firm, our values, and our team of experts.",
          button: { text: "About Us", action: function() { renderState('ABOUT_US'); } }
        }
      ]
    },

    //services state with service options
    SERVICES: {
      message: "what type of service are you looking for?",
      options: [
        { text: "Tax Services", next: "TAX_SERVICES" },
        { text: "Accounting & Bookkeeping", next: "ACCOUNTING" },
        { text: "Payroll", next: "PAYROLL" },
        { text: "Auditing", next: "AUDITING" },
        { text: "Business Registration", next: "BUSINESS_REGISTRATION" },
        { text: "Consultation", next: "CONSULTATION" }
      ]
    },
    //session booking state
    SESSION: {
      message: "What type of session would you like to book?",
      options: [
        { text: "Consultation (Online)", next: "CONSULTATION" },
        { text: "Office Visit", next: "OFFICE_VISIT" },
        { text: "Call Back Request", next: "CALL_BACK_REQUEST" },
      ]
    },
    //human expert contact method state
    EXPERT: {
      message: "What type of method you like to be contacted?",
      options: [
        { text: "Call", next: "CALL" },
        { text: "WhatsApp", next: "WHATSAPP" },
        { text: "Email", next: "EMAIL" },
      ]
    },
    //location information state
    LOCATION: {
      message: "About our company:",
      options: [
        { text: "Office hours", next: "OFFICE_HOURS" },
        { text: "Locations", next: "LOCATIONS" },
        { text: "Experience", next: "EXPERIENCE" },
        { text: "Certifications", next: "CERTIFICATIONS" },
      ]
    },
    //tax services state with individual/business options
    TAX_SERVICES: {
      message: "We help with tax filing, planning, and compliance for individuals and businesses. Please choose an option:",
      options: [
        { text: "Individual Tax", next: "INDIVIDUAL_TAX" },
        { text: "Business Tax", next: "BUSINESS_TAX" }
      ]
    },
    //individual tax services state
    INDIVIDUAL_TAX: {
      message: "What type of individual tax service do you need?",
      options: [
        { text: "Tax Filing", next: "CONSULTATION" },
        { text: "Tax Planning", next: "WELCOME" }
      ]
    },
    //business tax services state
    BUSINESS_TAX: {
      message: "What type of business tax service do you need?",
      options: [
        { text: "Tax Filing", next: "CONSULTATION" },
        { text: "Compliance Support", next: "WELCOME" }
      ]
    },
    //accounting services state
    ACCOUNTING: {
      message: "We provide monthly and annual accounting services.",
      options: [
        { text: "Book Consultation", next: "CONSULTATION" },
        { text: "Not Now", next: "END" }
      ]
    },
    //consultation services state
    CONSULTATION: {
      message: "Would you like to book a consultation with our accountant?",
      options: [
        { text: "Yes", next: "HUMAN" },
        { text: "Not Now", next: "END" }
      ]
    },
    //human expert contact state
    HUMAN: {
      message: "Please contact us directly:",
      contact: true
    },
    //end state
    END: {
      message: "Thank you for visiting. You may contact us anytime.",
      end: true
    },
    //fallback state for unrecognized inputs
    FALLBACK: {
      message: "I'm sorry, I didn't understand that. Could you please select an option from the menu?",
      options: [
        { text: "Go Back to Main Menu", next: "WELCOME" }
      ]
    },
    // FAQ and Feedback states
    FAQ: {
      message: "Here are some frequently asked questions:",
      options: [
        { text: "What services do you offer?", next: "SERVICES" },
        { text: "How can I book a session?", next: "SESSION" },
        { text: "Contact a human expert", next: "HUMAN" }
      ]
    },
    FEEDBACK: {
      message: "We value your feedback. Please share your thoughts:",
      options: [
        { text: "Provide Feedback", next: "FEEDBACK_FORM" },
        { text: "Not Now", next: "END" }
      ]
    }
  },

  //Sinhala language content
  si: {
    //first welcome state with company services and other options
    WELCOME: {
      message: "අපගේ ගිණුම්කරණ ආයතනයට සාදරයෙන් පිළිගනිමු. අපි ඔබට සහය වන්නේ කොහොමද?",
      options: [
        { text: "අපගේ සේවාවන්", next: "SERVICES" },
        { text: "සාකච්චාවක් වෙන්කරන්න", next: "SESSION" },
        { text: "අපගේ වෘත්තීය විශේෂඥයෙකු සමඟ කතා කරන්න", next: "HUMAN" },
        { text: "අපගේ AI සහායකයා සමඟ කතා කරන්න", next: "AI_ASSISTANT" },
        { text: "අප ගැන විස්තර", next: "ABOUT_US" }
      ]
    },
    //services state with service options
    SERVICES: {
      message: "ඔබට අවශ්‍ය සේවාව කුමක්ද?",
      options: [
        { text: "බදු සේවාවන්", next: "TAX_SERVICES" },
        { text: "ගිණුම්කරණය සහ පොත් තැබීම", next: "ACCOUNTING" },
        { text: "වැටුප් ලේඛන", next: "PAYROLL" },
        { text: "විගණනය", next: "AUDITING" },
        { text: "ව්‍යාපාර ලියාපදිංචිය", next: "BUSINESS_REGISTRATION" },
        { text: "උපදේශන සේවාව", next: "CONSULTATION" }
      ]
    },
    //session booking state
    SESSION: {
      message: "ඔබ වෙන්කරගන්නා සැසි වර්ගය කුමක්ද?",
      options: [
        { text: "උපදේශන සැසිය (අන්තර්ජාලය)", next: "CONSULTATION" },
        { text: "කාර්යාල හමුවීම", next: "OFFICE_VISIT" },
        { text: "ආපසු ඇමතුම් ඉල්ලීම", next: "CALL_BACK_REQUEST" },
      ]
    },
    //human expert contact method state
    EXPERT: {
      message: "ඔබ සම්බන්ධ වීමට කැමති ක්‍රමය කුමක්ද?",
      options: [
        { text: "සාමාන්‍ය ඇමතුම", next: "CALL" },
        { text: "WhatsApp", next: "WHATSAPP" },
        { text: "E-mail", next: "EMAIL" },
      ]
    },
    //location information state
    LOCATION: {
      message: "අපගේ සමාගම ගැන:",
      options: [
        { text: "කාර්යාල වෙලාවන්", next: "OFFICE_HOURS" },
        { text: "කාර්යාල ස්ථාන", next: "LOCATIONS" },
        { text: "අපගේ අත්දැකීම්", next: "EXPERIENCE" },
        { text: "අපගේ ජයග්‍රහණ සහ ඇගයීම්", next: "CERTIFICATIONS" },
      ]
    },
    //tax services state with individual/business options
    TAX_SERVICES: {
      message: "අපි පුද්ගලික සහ ව්‍යාපාරික බදු සඳහා බදු සැකසුම්, සැලසුම් කිරීම, සහ අනුකූලතා සහාය සපයමු. කරුණාකර විකල්පයක් තෝරන්න:",
      options: [
        { text: "පුද්ගලික බදු", next: "INDIVIDUAL_TAX" },
        { text: "ව්‍යාපාරික බදු", next: "BUSINESS_TAX" }
      ]
    },
    //individual tax services state
    INDIVIDUAL_TAX: {
      message: "ඔබට අවශ්‍ය පුද්ගල බදු සේවාව කුමක්ද?",
      options: [
        { text: "බදු සැකසුම", next: "CONSULTATION" },
        { text: "බදු සැලසුම් කිරීම", next: "WELCOME" }
      ]
    },
    //business tax services state
    BUSINESS_TAX: {
      message: "ඔබට අවශ්‍ය ව්‍යාපාර බදු සේවාව කුමක්ද?",
      options: [
        { text: "බදු සැකසුම", next: "CONSULTATION" },
        { text: "අනුකූලතා සහාය", next: "WELCOME" }
      ]
    },
    //accounting services state
    ACCOUNTING: {
      message: "අපි මාසික සහ වාර්ෂික ගිණුම්කරණ සේවාවන් සපයමු.",
      options: [
        { text: "උපදේශන සේවාවක් වෙන්කරන්න", next: "CONSULTATION" },
        { text: "දැන්ම අවශ්‍ය නැත", next: "END" }
      ]
    },
    //consultation services state
    CONSULTATION: {
      message: "ඔබට අප සමඟ උපදේශන සේවාවක් වෙන්කර ගැනීමට අවශ්‍යද?",
      options: [
        { text: "ඔව්", next: "HUMAN" },
        { text: "දැන්ම අවශ්‍ය නැත", next: "END" }
      ]
    },
    //human expert contact state
    HUMAN: {
      message: "කරුණාකර අප අමතන්න:",
      contact: true
    },
    //end state
    END: {
      message: "ස්තූතියි. ඔබට ඕනෑම වෙලාවක අප අමතන්න.",
      end: true
    },
    //fallback state for unrecognized inputs
    FALLBACK: {
      message: "මට කණගාටුයි, මට ඒක තේරුණේ නැහැ. කරුණාකර මෙනුවෙන් විකල්පයක් තෝරන්න:",
      options: [
        { text: "ප්‍රධාන මෙනුවට ආපසු යන්න", next: "WELCOME" }
      ]
    },
    // FAQ and Feedback states
    FAQ: {
      message: "මෙන්න සාමාන්‍යයෙන් අසන ප්‍රශ්න:",
      options: [
        { text: "ඔබ සපයන සේවාවන් මොනවාද?", next: "SERVICES" },
        { text: "මම කෙසේ සෙෂන් එකක් වෙන් කර ගත හැකිද?", next: "SESSION" },
        { text: "වෘත්තීය විශේෂඥයෙකු අමතන්න", next: "HUMAN" }
      ]
    },
    FEEDBACK: {
      message: "අපි ඔබේ ප්‍රතිචාරයට වටිනාකමක් දෙමු. කරුණාකර ඔබේ අදහස් බෙදාගන්න:",
      options: [
        { text: "ප්‍රතිචාර ලබාදෙන්න", next: "FEEDBACK_FORM" },
        { text: "දැන් අවශ්‍ය නැත", next: "END" }
      ]
    }
  }
};
