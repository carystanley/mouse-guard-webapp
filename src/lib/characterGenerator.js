
import config from '../config/character.json';



var bumpSkill = (state, name) => {
  return {
    ...state,
    Skills: (state.Skills[name]) ? state.Skills[name] + 1 : 2
  };
};

var bumpTrait = (state, name) => {
  return {
    ...state,
    Traits: (state.Traits[name]) ? state.Traits[name] + 1 : 1
  };
};



var CharacterGeneratror = [{
  question: 'What is your Guard Rank?',
  choices: (state) => { return config.ranks; },
  affect: (state, choice) => { 
    return {
      ...config.bases.default,
      ...config.bases[choice],
      Rank: choice
    };
  }
}, {
  question: 'Where were you born?',
  choices: (state) => {
    return Object.keys(config.homes).map(function(home) {
      return home;
    }); 
  },
  affect: (state, choice) => { 
    return {
      ...state,
      Home: choice
    };
  }
}, {
  question: 'What skill did you learn there?',
  choices: (state) => {
    return config.homes[state.Home].skills
  },
  affect: bumpSkill
}, {
  question: 'What trait did you inherit there?',
  choices: (state) => {
    return config.homes[state.Home].traits
  },
  affect: bumpTrait
}, {
  question: 'What is your natural talent?',
  choices: (state) => {
    return config.skills
  },
  affect: bumpSkill
}];

export default CharacterGeneratror;