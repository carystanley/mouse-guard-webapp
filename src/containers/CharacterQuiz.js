import { connect } from 'react-redux'
import { makeCharacterChoice } from '../actions'
import CharacterQuizComponent from '../components/CharacterQuiz'

const mapStateToProps = (state) => ({
  character: state.character
})

const mapDispatchToProps = ({
  onChoose: makeCharacterChoice
})

const CharacterQuiz = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterQuizComponent)

export default CharacterQuiz
