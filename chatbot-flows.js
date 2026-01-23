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
      message: "Hello {name}! Welcome to one of Sri Lanka’s leading accounting firms. We provide a wide range of professional services tailored to your needs. How may we assist you today?",
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
    //Feedback state
    FEEDBACK: {
      message: "We value your feedback. Please share your thoughts:",
      options: [
        { text: "Provide Feedback", next: "FEEDBACK_FORM" },
        { text: "Not Now", next: "END" }
      ]
    }
  },

    //payroll services state
    PAYROLL: {
    message: "We provide payroll management services, handling employee salary calculations and records.",
    options: [
      { text: "Book Consultation", next: "CONSULTATION" },
      { text: "Not Now", next: "END" }
    ]
  },

  //auditing services state
  AUDITING: {
    message: "We provide auditing services to ensure your reports and accounting systems are accurate and compliant.",
    options: [
      { text: "Book Consultation", next: "CONSULTATION" },
      { text: "Not Now", next: "END" }
    ]
  },

  //business registration services state
  BUSINESS_REGISTRATION: {
    message: "We provide business registration services, assisting with new business registration and obtaining necessary licenses.",
    options: [
      { text: "Book Consultation", next: "CONSULTATION" },
      { text: "Not Now", next: "END" }
    ]
  },

  //office visit booking state
  OFFICE_VISIT: {
    message: "Our office is located at 123 Main Street, Colombo. We are open from 8:00 AM to 6:00 PM every day (excluding public holidays). Please visit us at your convenience.",
    options: [
      { text: "Back to Session Options", next: "SESSION" },
      { text: "End", next: "END" }
    ]
  },

  //call back request state
  CALL_BACK_REQUEST: {
    message: "Please provide your preferred contact method via the options below. Our team will get back to you as soon as possible.",
    options: [
      { text: "Phone", next: "CONTACT_PHONE" },
      { text: "Email", next: "CONTACT_EMAIL" },
      { text: "WhatsApp", next: "CONTACT_WHATSAPP" },
      { text: "Back to Session Options", next: "SESSION" }
    ]
  },

  //contact via phone state
    CONTACT_PHONE: {
    message: "Please enter your phone number. Our team will contact you as soon as possible.",
    input: "text",
    inputType: "phone",
    placeholder: "e.g., +94 77 123 4567",
    next: "CONTACT_CONFIRMATION"
  },

  //contact via email state
    CONTACT_EMAIL: {
    message: "Please enter your email address. Our team will get back to you as soon as possible.",
    input: "text",
    inputType: "email",
    placeholder: "e.g., example@email.com",
    next: "CONTACT_CONFIRMATION"
  },

  //contact via whatsapp state
    CONTACT_WHATSAPP: {
    message: "Please enter your WhatsApp number. Our team will contact you as soon as possible.",
    input: "text",
    inputType: "phone",
    placeholder: "e.g., +94 77 123 4567",
    next: "CONTACT_CONFIRMATION"
  },

  //contact confirmation state
    CONTACT_CONFIRMATION: {
    message: "Thank you! We have received your contact details and will get back to you shortly.",
    options: [
      { text: "Back to Main Menu", next: "WELCOME" },
      { text: "End Chat", next: "END" }
    ]
  },






  //Sinhala language content
  si: {

    INITIAL: {
    message: "අපගේ ගිණුම්කරණ සමාගමට සාදරයෙන් පිළිගනිමු. අපි ආරම්භ කිරීමට පෙර, කරුණාකර ඔබේ නම මට කියන්න.",
    type: "capture_name",
    next: "WELCOME"
},

    //first welcome state with company services and other options
    WELCOME: {
      message: "හෙලෝ {name}! අපි ශ්‍රී ලංකාවේ ප්‍රමුඛ ගණකාධිකරණ ආයතනයක් වන අතර, විවිධ සේවාවන් ලබා දෙන්නෙමු. අද ඔබට කෙසේ උපකාර කළ හැකිද?",
      /*options: [
        { text: "අපගේ සේවාවන්", next: "SERVICES" },
        { text: "සාකච්චාවක් වෙන්කරන්න", next: "SESSION" },
        { text: "අපගේ වෘත්තීය විශේෂඥයෙකු සමඟ කතා කරන්න", next: "HUMAN" },
        { text: "අපගේ AI සහායකයා සමඟ කතා කරන්න", next: "AI_ASSISTANT" },
        { text: "අප ගැන විස්තර", next: "ABOUT_US" }
      ]*/

      carousel: [
        {
          image: "images/chatbot-our_services.jpg",
          title: "අපගේ සේවාවන්",
          description: "පුද්ගලයන් සහ ව්‍යාපාර සඳහා අප සපයන සියලුම සේවාවන් සොයා බලන්න.",
          button: { text: "සේවාවන් බැලීම", action: function() { renderState('SERVICES'); } }
        },
        {
          image: "images/chatbot-book_session.jpg",
          title: "සෙෂන් එකක් වෙන් කරන්න",
          description: "අපගේ විශේෂඥයින් සමඟ හමුවීම හෝ උපදේශන සෙෂන් එකක් පහසුවෙන් වෙන් කරගන්න.",
          button: { text: "දැන් වෙන් කරන්න", action: function() { renderState('SESSION'); } }
        },
        {
          image: "images/chatbot-expert.jpg",
          title: "වෘත්තීය විශේෂඥයෙකු සමඟ කතා කරන්න",
          description: "ඔබට සෙෂන් එකක් වෙන් කරගැනීමට පෙර අපගේ වෘත්තීය විශේෂඥයකුගේ උපදෙස් දැන ගැනිමට අවශ්‍යද?",
          button: { text: "දැන් කතා කරන්න", action: function() { renderState('HUMAN'); } }
        },
        {
          image: "images/chatbot-AI.jpg",
          title: "අපගේ AI සහකරු සමඟ කතා කරන්න",
          description: "ඉක්මන් පිළිතුරු සහ සහාය ලබා ගැනීමට PALO, AI සහකරු සමඟ කතා කරන්න.",
          button: { text: "කතා කරන්න", action: function() { renderState('AI_ASSISTANT'); } }
        },
        {
          image: "images/chatbot-about_us.jpg",
          title: "අප ගැන",
          description: "අපගේ ආයතනය, අපගේ අගයන් සහ අපගේ විශේෂඥයින්ගේ කණ්ඩායම ගැන වැඩි විස්තර දැනගන්න.",
          button: { text: "අප ගැන", action: function() { renderState('ABOUT_US'); } }
        }
      ]
    
    },
    //services state with service options
    SERVICES: {
      message: "ඔබට අවශ්‍ය සේවාව කුමක්ද?",
      options: [
        { text: "බදු සේවාවන්", next: "TAX_SERVICES" },
        { text: "ගිණුම්කරණය සහ පොත් පවත්වා ගැනීම", next: "ACCOUNTING" },
        { text: "වැටුප් කළමනාකරණය", next: "PAYROLL" },
        { text: "විගණන සේවාවන්", next: "AUDITING" },
        { text: "ව්‍යාපාර ලියාපදිංචි කිරීම", next: "BUSINESS_REGISTRATION" },
        { text: "උපදේශන සේවාව", next: "CONSULTATION" }
      ]
    },
    //session booking state
    SESSION: {
      message: "ඔබට වෙන්කර ගැනීමට අවශ්‍ය සැසි වර්ගය කුමක්ද?",
      options: [
        { text: "උපදේශන සැසිය (අන්තර්ජාලය හරහා)", next: "CONSULTATION" },
        { text: "කාර්යාල හමුවීම", next: "OFFICE_VISIT" },
        { text: "ආපසු ඇමතුමක් ඉල්ලීම", next: "CALL_BACK_REQUEST" },
      ]
    },
    //human expert contact method state
    EXPERT: {
      message: "අපි ඔබට සම්බන්ධ වීමට කැමති ක්‍රමය කුමක්ද?",
      options: [
        { text: "සාමාන්‍ය ඇමතුම", next: "CALL" },
        { text: "WhatsApp", next: "WHATSAPP" },
        { text: "E-mail", next: "EMAIL" },
      ]
    },
    //location information state
    LOCATION: {
      message: "අපගේ සමාගම ගැන වැඩි විස්තර:",
      options: [
        { text: "කාර්යාල වේලාවන්", next: "OFFICE_HOURS" },
        { text: "කාර්යාල ස්ථාන", next: "LOCATIONS" },
        { text: "අපගේ අත්දැකීම්", next: "EXPERIENCE" },
        { text: "අපගේ ජයග්‍රහණ සහ ඇගයීම්", next: "CERTIFICATIONS" },
      ]
    },
    //tax services state with individual/business options
    TAX_SERVICES: {
      message: "අපි පුද්ගලික සහ ව්‍යාපාරික බදු සඳහා බදු සැකසුම්, බදු සැලසුම් කිරීම, සහ අනුකූලතා සහාය සපයන්නෙමු. කරුණාකර පහත විකල්ප වලින් එකක් තෝරන්න:",
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
      message: "අපි මාසික සහ වාර්ෂික ගිණුම්කරණ සේවාවන් සපයන්නෙමු.",
      options: [
        { text: "උපදේශන සේවාවක් වෙන්කරන්න", next: "CONSULTATION" },
        { text: "දැනට අවශ්‍ය නොවේ", next: "END" }
      ]
    },
    //consultation services state
    CONSULTATION: {
      message: "ඔබට අප සමඟ උපදේශන සේවාවක් වෙන්කර ගැනීමට අවශ්‍යද?",
      options: [
        { text: "ඔව්", next: "HUMAN" },
        { text: "දැනට අවශ්‍ය නොවේ", next: "END" }
      ]
    },
    //human expert contact state
    HUMAN: {
      message: "වැඩි විස්තර සඳහා කරුණාකර අප හා සම්බන්ධ වන්න:",
      contact: true
    },
    //end state
    END: {
      message: "ස්තූතියි. ඔබට ඕනෑම වේලාවක අප හා සම්බන්ධ විය හැක.",
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
        { text: "මට සෙෂන් එකක් වෙන් කරගන්න කොහොමද?", next: "SESSION" },
        { text: "වෘත්තීය විශේෂඥයෙකුට සම්බන්ධ වන්න", next: "HUMAN" }
      ]
    },

    //feedback state
    FEEDBACK: {
      message: "අපි ඔබේ ප්‍රතිචාරයට වටිනාකමක් දෙමු. කරුණාකර ඔබේ අදහස් බෙදාගන්න:",
      options: [
        { text: "ප්‍රතිචාර ලබාදෙන්න", next: "FEEDBACK_FORM" },
        { text: "දැනට අවශ්‍ය නොවේ", next: "END" }
      ]
    },

    //payroll services state
    PAYROLL: {
      message: "අපි වැටුප් කළමනාකරණ සේවාවන් සපයන්නෙමු, ඔබේ සේවක වැටුප් ගණනය සහ නඩත්තු කිරීම අපගේ වගකීම වේ.",
      options: [
        { text: "උපදේශන සේවාවක් වෙන්කරන්න", next: "CONSULTATION" },
        { text: "දැනට අවශ්‍ය නැහැ", next: "END" }
      ]
    },


    //auditing services state
    AUDITING: {
      message: "අපි විගණන සේවාවන් සපයන්නෙමු, ඔබේ වාර්තා සහ ගිණුම් පද්ධතිය නිවැරදිව පරීක්ෂා කරවීම සඳහා.",
      options: [
        { text: "උපදේශන සේවාවක් වෙන්කරන්න", next: "CONSULTATION" },
        { text: "දැනට අවශ්‍ය නැහැ", next: "END" }
      ]
    },


    //business registration services state
    BUSINESS_REGISTRATION: {
      message: "අපි ව්‍යාපාර ලියාපදිංචි කිරීමේ සේවාවන් සපයන්නෙමු, නව ව්‍යාපාර ලියාපදිංචි කිරීම සහ නියමිත බලපත්‍ර ලබා ගැනීම සඳහා.",
      options: [
        { text: "උපදේශන සේවාවක් වෙන්කරන්න", next: "CONSULTATION" },
        { text: "දැනට අවශ්‍ය නැහැ", next: "END" }
      ]
    },

    //office visit booking state
    OFFICE_VISIT: {
      message: "අපගේ කාර්යාලය කොළඹ, ප්‍රධාන වීදිය 123 අංකය යි. අපි සෑම දිනකම උදෑසන 8 සිට සවස 6 දක්වා සේවය කරමු (ජනතා නිවාඩු වලින් ඉවත්). කරුණාකර ඔබට සුදුසු වේලාවේ පැමිණෙන්න.",
      options: [
        { text: "සෙෂන් විකල්ප වෙත ආපසු යන්න", next: "SESSION" },
        { text: "නිම කරන්න", next: "END" }
      ]
    },

    //call back request state
    CALL_BACK_REQUEST: {
      message: "කරුණාකර පහත දක්වා ඇති සම්බන්ධතා විකල්ප වලින් ඔබේ කැමති සම්බන්ධ කිරීමේ ක්‍රමය ලබා දෙන්න. අපගේ කණ්ඩායම හැකි ඉක්මනින් ඔබව අමතා පිළිතුරු ලබා දෙයි.",
      options: [
        { text: "දුරකථන", next: "CONTACT_CONFIRMATION" },
        { text: "ඊ-මේල්", next: "CONTACT_CONFIRMATION" },
        { text: "WhatsApp", next: "CONTACT_CONFIRMATION" },
        { text: "සෙෂන් විකල්ප වෙත ආපසු යන්න", next: "SESSION" }
      ]
    },

    //contact via phone state
    /*CONTACT_PHONE: {
      message: "කරුණාකර ඔබේ දුරකථන අංකය ඇතුළත් කරන්න. අපගේ කණ්ඩායම හැකි ඉක්මනින් ඔබව අමතා පිළිතුරු ලබා දෙයි.",
      input: "text",
      inputType: "phone",
      placeholder: "උදාහරණය: +94 77 123 4567",
      next: "CONTACT_CONFIRMATION"
    },

    //contact via email state
    CONTACT_EMAIL: {
      message: "කරුණාකර ඔබේ ඊ-මේල් ලිපිනය ඇතුළත් කරන්න. අපගේ කණ්ඩායම හැකි ඉක්මනින් ඔබව අමතා පිළිතුරු ලබා දෙයි.",
      input: "text",
      inputType: "email",
      placeholder: "උදාහරණය: example@email.com",
      next: "CONTACT_CONFIRMATION"
    },

    //contact via whatsapp state
    CONTACT_WHATSAPP: {
      message: "කරුණාකර ඔබේ WhatsApp අංකය ඇතුළත් කරන්න. අපගේ කණ්ඩායම හැකි ඉක්මනින් ඔබව අමතා පිළිතුරු ලබා දෙයි.",
      input: "text",
      inputType: "phone",
      placeholder: "උදාහරණය: +94 77 123 4567",
      next: "CONTACT_CONFIRMATION"
    },*/

    //contact confirmation state
    CONTACT_CONFIRMATION: {
      message: "කණගාටුයි. ආපසු ඇමතුම් ලබාදීමේ සේවාව තාවකාලිකව නවතා ඇත. කරුණාකර CONTACT US මගින් හෝ paloaccounting@gmail.com මගින් ඔබගේ අවශ්‍යතාව විමසන්න. අපගේ ඔබ හා ඉක්මනින් සම්බන්ද වෙනු ඇත.",
      options: [
        { text: "ප්‍රධාන මෙනුවට ආපසු යන්න", next: "WELCOME" },
        { text: "නිම කරන්න", next: "END" }
      ]
    }




  }
};
