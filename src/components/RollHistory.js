import React, { PropTypes } from 'react'
import Roll from './Roll'

const RollHistory = ({ rollHistory }) => (
  <ul className="list-container">
    {rollHistory.map((roll, idx) =>
      <Roll
        key={idx}
        {...roll}
      />
    )}
  </ul>
)

RollHistory.propTypes = {
  rollHistory: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default RollHistory
