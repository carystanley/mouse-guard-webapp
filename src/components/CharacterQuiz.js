import React from 'react'
import CharacterQuestion from './CharacterQuestion'
import CharacterSheet from './CharacterSheet'

const CharacterQuiz = (props) => (
  <div>
    <CharacterQuestion {...props} />
    <CharacterSheet {...props} />
  </div>
)

export default CharacterQuiz