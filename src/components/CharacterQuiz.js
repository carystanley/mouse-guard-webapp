import React from 'react'
import CharacterQuestion from './CharacterQuestion'
import CharacterSheet from './CharacterSheet'

const CharacterQuiz = (props) => (
  <div id="layout">
    <div id="primary"><div className="roomy"><CharacterQuestion {...props} /></div></div>
    <div id="secondary"><div className="roomy"><CharacterSheet {...props} /></div></div>
  </div>
)

export default CharacterQuiz