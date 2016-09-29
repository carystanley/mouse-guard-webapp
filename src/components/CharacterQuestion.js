import React from 'react'

const CharacterQuestions = ({character, onChoose}) => (
  <div>
    <div>{character.question}</div>
    <div>{character.choices ? character.choices.map((choice) => <button onClick={() => onChoose(choice)}>{choice}</button>) : null}</div>
  </div>
)

export default CharacterQuestions