import React from 'react'

const displayOrder = [
  "Name", "Parents", "Age", "Senior Artisan", "Home", "Mentor",
  "Fur Color", "Friend", "Rank", "Enemy", "Cloak", "Belief",
  "Goal", "Instinct",  "Nature", "Will", "Health", "Resources",
  "Circles", "Skills", "Wises", "Traits", "Gear"
];

const CharacterSheet = ({character}) => (
  <ul>
    {displayOrder.map((field => {
      let value = character[field];
      return <li>{field}: {value}</li> 
    }))}
  </ul>
)

export default CharacterSheet