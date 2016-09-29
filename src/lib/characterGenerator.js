import config from '../config/character.json';


var yesNo = ["Yes", "No"];
var noChoice = [];

var skillBump = (skills, name) => ({...skills, [name]: (skills[name]) ? skills[name] + 1 : 2});
var traitBump = (traits, name) => ({...traits, [name]: (traits[name]) ? traits[name] + 1 : 1});
var skillReduce = (skills, name) => ({...skills, [name]: (skills[name]) ? skills[name] - 1 : undefined});
var wiseAdd (wises, name) => (...wises, [name]: true);

var bumpSkill = (state, name) => ({...state, Skills: skillBump(state.Skills, name)});
var bumpTrait = (state, name) => ({...state, Traits: traitBump(state.Traits, name)});
var reduceSkill = (state, name) => ({...state, Skills: skillReduce(state.Skills, name)});
var addWise = (state, name) => ({...state, Wises: wiseAdd(state.Wises, name)});

var wiseSuffixMap = (wises) => (wises.map((name) => (name + '-wise')));

var CharacterGeneratror = [{
  question: 'What is your Guard Rank?',
  choices: config.ranks,
  affect: (state, choice) => ({
    ...config.bases.default,
    ...config.bases[choice],
    Rank: choice
  })
}, {
  question: 'Where were you born?',
  choices: () => (Object.keys(config.homes).map(function(home) { return home; })),
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
}, {
  question: 'What is your parent\'s trade?',
  choices: config.parentSkills,
  affect: (state, choice) => (bumpSkill({...state, Parents: `p310 (${choice})`}, choice))
}, {
  question: 'How do you convince people?',
  choices: config.conviceSkills,
  affect: bumpSkill
}, {
  question: 'What was your senior artisan?',
  choices: config.seniorArtisanSkills,
  affect: (state, choice) => (bumpSkill({...state, "Senior Artisan": `p310 (${choice})`}, choice))
}, {
  question: 'What did your mentor stress in training?',
  choices: config.mentorSkills,
  affect: (state, choice) => (bumpSkill({...state, Mentor: `p310 (${choice})`}, choice))
}, {
  question: 'What is your Speciality?',
  choices: (state) => ((state.Rank == "Tenderpaw") ? noChoice : config.mentorSkills),
  affect: (state, choice) => (bumpSkill({...state, Mentor: `p310 (${choice})`}, choice))
}, {
  question: 'Nature: Do you save for later?',
  choices: yesNo,
  affect: (state, choice) => ((choice === 'Yes') ? {...state, Nature: state.Nature + 1, saveForWinter: true} : state)
}, {
  question: 'Nature: What trait do you gain by not saving for later?',
  choices: (state) => (state.saveForWinter ? noChoice : config.generousTraits),
  affect: bumpTrait
}, {
  question: 'Nature: Do you stand your ground?',
  choices: yesNo,
  affect: (state, choice) => ((choice === 'No') ? reduceSkill({...state, Nature: state.Nature + 1}, 'Fighter') : state)
}, {
  question: 'Nature: Do you fear owls, weasels, and wolves?',
  choices: yesNo,
  affect: (state, choice) => ((choice === 'Yes') ? {...state, Nature: state.Nature + 1, fearWeasels: true} : state)
}, {
  question: 'Nature: What trait do you gain for being brave?',
  choices: (state) => (state.fearWeasels ? noChoice : braveTraits),
  affect: bumpTrait
}, {
  question: 'What are you wise about Tenderpaw?',
  choices: (state) => ((state.Rank === 'Tenderpaw') ? wiseSuffixMap(config.tenderpawWises) : noChoice),
  affect: addWise
}, {
  question: 'What are you wise about Guard Captain?',
  choices: (state) => ((state.Rank === 'Guard Captain') ? wiseSuffixMap(config.guardCaptainWises) : noChoice),
  affect: addWise
}, {
  question: (state) => (`What are you wise about? (Choices Remaining: $(state.wiseChoices))`),
  choices: (state) => ((state.wiseChoices > 0) ? wiseSuffixMap(config.wises) : noChoice),
  affect: (state, choice) => (addWise({...state, wiseChoices: state.wiseChoices - 1}, choice)),
  while: (state) => (state.wiseChoices > 1)
}, {
  question: 'Choose a trait you were born with:',
  choices: config.traits,
  affect: bumpTrait
}, {
  question: 'Choose a trait you learned from your parents:',
  choices: (state) => ((state.Rank === 'Tenderpaw') ? config.tenderpawTraits : noChoice),
  affect: bumpTrait
}, {
  question: 'Choose a trait from life on the road:',
  choices: (state) => ((state.Rank === 'Guard Captain') ? config.guardCaptainTraits : noChoice),
  affect: bumpTrait
}, {
  question: 'What is your fur color?',
  choices: config.furColor,
  affect: (state, choice) => ({...state, "Fur Color": choice})
}];

export default CharacterGeneratror;