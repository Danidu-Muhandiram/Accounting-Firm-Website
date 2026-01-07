//conversation rules for the accounting firm website chatbot

const flows = {
  //home buttons for language selection
  HOME: {
    message: "Hi, Please select your preferred language before proceeding further\n\nආයුබෝවන්, ඉදිරියට යාමට පෙර කරුණාකර ඔබ කැමති භාෂාව තෝරන්න.",
    options: [
      { text: "English", next: "WELCOME", lang: "en" },
      { text: "සිංහල", next: "WELCOME", lang: "si" }
    ]
  },

  //English language content
  en: {
    //first welcome state with company services and other options
    WELCOME: {
      message: "Welcome to our accounting firm. How can we assist you?",
      options: [
        { text: "Our Services", next: "SERVICES" },
        { text: "Book a Session", next: "SESSION" },
        { text: "Talk to a Professional Expert", next: "HUMAN" },
        { text: "Chat with our AI Assistant", next: "AI_ASSISTANT" },
        { text: "About Us", next: "ABOUT_US" }
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
      message: "Are you an Individual or a Business?",
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
    TAX: {
      message: "ඔබට දැනගැනීමට අවශ්‍ය පුද්ගල බදුද නැතිනම් ව්‍යාපාර බදුද?",
      options: [
        { text: "පුද්ගල බදු", next: "INDIVIDUAL_TAX" },
        { text: "ව්‍යාපාර බදු", next: "BUSINESS_TAX" }
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
    }
  }
};
