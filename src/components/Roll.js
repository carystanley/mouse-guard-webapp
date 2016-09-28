import React, { PropTypes } from 'react'

const Roll = ({ values, successes }) => (
  <li>
    <div>{values.map(value => <span>{value}</span>)}</div>
    <div>{successes} Successes</div>
  </li>
)

Roll.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Roll
