let currentState = "WELCOME";

function renderState(stateKey) {
  const state = flows[stateKey];
  currentState = stateKey;

  addBotMessage(state.message);
  showOptions(state.options);
}
