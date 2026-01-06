//conversation rules for the accounting firm website chatbot

const flows = {

  HOME: {
    message: "Hi, Please select your preferred language before proceeding further\n\nආයුබෝවන්, ඉදිරියට යාමට පෙර කරුණාකර ඔබ කැමති භාෂාව තෝරන්න.",
    options: [
      { text: "English", next: "WELCOME", lang: "en" },
      { text: "සිංහල", next: "WELCOME", lang: "si" }
    ]
  },

en: {
  WELCOME: {
    message: "Welcome to our accounting firm. How can we assist you?",
    options: [
      { text: "Tax Services", next: "TAX" },
      { text: "Accounting & Bookkeeping", next: "ACCOUNTING" },
      { text: "Talk to an Accountant", next: "HUMAN" }
    ]
}
  },

  si: {
    WELCOME: {
      message: "අපගේ ගිණුම්කරණ ආයතනයට පිළිගනිමු. අපි ඔබට කෙසේ උදව් කළ හැකිද?",
      options: [
        { text: "බදු සේවාවන්", next: "TAX" },
        { text: "ගිණුම්කරණ සහ පොත් පත් තබා ගැනීම", next: "ACCOUNTING" },
        { text: "ගිණුම්කරු සමඟ කතා කරන්න", next: "HUMAN" }
      ]
    }
  },

  TAX: {
    message: "Are you an Individual or a Business?",
    options: [
      { text: "Individual Tax", next: "INDIVIDUAL_TAX" },
      { text: "Business Tax", next: "BUSINESS_TAX" }
    ]
  },

  INDIVIDUAL_TAX: {
    message: "What type of individual tax service do you need?",
    options: [
      { text: "Tax Filing", next: "CONSULTATION" },
      { text: "Tax Planning", next: "WELCOME" }
    ]
  },

   BUSINESS_TAX: {
    message: "What type of business tax service do you need?",
    options: [
      { text: "Tax Filing", next: "CONSULTATION" },
      { text: "Compliance Support", next: "WELCOME" }
    ]
  },

  ACCOUNTING: {
    message: "We provide monthly and annual accounting services.",
    options: [
      { text: "Book Consultation", next: "CONSULTATION" },
      { text: "Not Now", next: "END" }
    ]
  },

  CONSULTATION: {
    message: "Would you like to book a consultation with our accountant?",
    options: [
      { text: "Yes", next: "HUMAN" },
      { text: "Not Now", next: "END" }
    ]
  },

  HUMAN: {
    message: "Please contact us directly:",
    contact: true
  },

  END: {
    message: "Thank you for visiting. You may contact us anytime.",
    end: true
  }
};
