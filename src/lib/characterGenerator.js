import config from '../config/character.json';



var bumpSkill = (state, name) => ({
  ...state,
  Skills: (state.Skills[name]) ? state.Skills[name] + 1 : 2
});

var bumpTrait = (state, name) => ({
    ...state,
    Traits: (state.Traits[name]) ? state.Traits[name] + 1 : 1
});



var CharacterGeneratror = [{
  question: 'What is your Guard Rank?',
  choices: (state) => { return config.ranks; },
  affect: (state, choice) => ({
    ...config.bases.default,
    ...config.bases[choice],
    Rank: choice
  })
}, {
  question: 'Where were you born?',
  choices: (state) => (Object.keys(config.homes).map(function(home) { return home; })),
  affect: (state, choice) => ({...state, Home: choice})
}, {
  question: 'What skill did you learn there?',
  choices: (state) => (config.homes[state.Home].skills),
  affect: bumpSkill
}, {
  question: 'What trait did you inherit there?',
  choices: (state) => (config.homes[state.Home].traits),
  affect: bumpTrait
}, {
  question: 'What is your natural talent?',
  choices: config.skills,
  affect: bumpSkill
}];

export default CharacterGeneratror;