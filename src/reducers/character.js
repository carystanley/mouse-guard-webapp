import characterGenerator from '../lib/characterGenerator';

const nonWhile = () => (false); 
const resolve = (value, state) => ((typeof value === 'function') ? value(state) : value);
const currentStep = (state) => (characterGenerator[state.step] || {});
const updateChoices = (state) => ({
  ...state,
  question: resolve(currentStep(state).question, state),
  choices: resolve(currentStep(state).choices, state)
});
const applyChoice = (state, choice) => ((choice) ? currentStep(state).affect(state, choice) : state);
const incStep = (state) => ((currentStep(state).while || nonWhile)(state) ? state : {...state, step: state.step + 1}); 
const updateCharacter = (state, choice) => (updateChoices(incStep(applyChoice(state, choice))));

const intialState = updateChoices({
  totalSteps: characterGenerator.length,
  step: 0
});

const character = (state = intialState, action) => {
  switch (action.type) {
    case 'CHARACTER_CHOICE':
      let choice = action.choice
      let skip = false;
      while (choice || skip) {
        state = updateCharacter(state, choice);
        skip = state.choices && !state.choices.length; // skip when we have no choices
        choice = state.choices && (state.choices.length === 1) && state.choices[0] // choose when there is only one choice
      }
      return state;
    default:
      return state
  }
}

export default character
