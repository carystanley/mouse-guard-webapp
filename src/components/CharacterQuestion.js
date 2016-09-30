import React from 'react'

const CharacterQuestions = ({character, onChoose}) => (
  (character.question) ?
    <div>
      <div className="progress-container"><div className="progressbar" style={{width: (character.step / character.totalSteps) * 100 + '%'}}></div></div>
      <div className="question">{character.question}</div>
      <div className="choices">{character.choices ? character.choices.map((choice) => <button onClick={() => onChoose(choice)}>{choice}</button>) : null}</div>
    </div>
  : null
)

export default CharacterQuestions