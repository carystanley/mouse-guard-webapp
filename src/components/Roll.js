import React, { PropTypes } from 'react'

const Roll = ({ values, successes }) => (
  <li>
    {values.map(value => <span>{value}</span>)}
    {successes} Successes
  </li>
)

Roll.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Roll
