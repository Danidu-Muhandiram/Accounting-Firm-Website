//conversation rules for the accounting firm website chatbot

const flows = {
  WELCOME: {
    message: "Welcome to our accounting firm. How can we assist you?",
    options: [
      { text: "Tax Services", next: "TAX" },
      { text: "Accounting & Bookkeeping", next: "ACCOUNTING" },
      { text: "Talk to an Accountant", next: "HUMAN" }
    ]
  },

  TAX: {
    message: "Are you an Individual or a Business?",
    options: [
      { text: "Individual Tax", next: "INDIVIDUAL_TAX" },
      { text: "Business Tax", next: "BUSINESS_TAX" }
    ]
  }
};
