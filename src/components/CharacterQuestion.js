import React from 'react'

const CharacterQuestions = ({character, onChoose}) => (
  <div>
    <div className="question">{character.question}</div>
    <div className="choices">{character.choices ? character.choices.map((choice) => <button onClick={() => onChoose(choice)}>{choice}</button>) : null}</div>
  </div>
)

export default CharacterQuestions