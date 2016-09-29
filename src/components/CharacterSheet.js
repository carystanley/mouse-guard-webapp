import React from 'react'

const displayOrder = [
  "Name", "Parents", "Age", "Senior Artisan", "Home", "Mentor",
  "Fur Color", "Friend", "Rank", "Enemy", "Cloak", "Belief",
  "Goal", "Instinct",  "Nature", "Will", "Health", "Resources",
  "Circles", "Skills", "Wises", "Traits", "Gear"
];

const AttributeList = ({list}) => (
  <ul>
    {Object.keys(list).map((field => {
      let value = list[field];
      return value ? ((typeof value === 'boolean') ?
        <li>{field}</li> :
        <li><span>{field}</span><span>{value}</span></li>
      ) : null;
    }))}
  </ul>
)

const CharacterSheet = ({character}) => (
  <ul className="sheet">
    {displayOrder.map(field => {
      let value = character[field];
      return <li><span className="field">{field}</span><span>{(typeof value === 'object' ? <AttributeList list={value} /> : value )}</span></li> 
    })}
  </ul>
)

export default CharacterSheet