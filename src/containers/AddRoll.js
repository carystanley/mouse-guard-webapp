import React from 'react'
import { connect } from 'react-redux'
import { addRoll } from '../actions'

let AddRoll = ({ dispatch }) => {
  return (
    <div>
      <button onClick={e => { dispatch(addRoll(1)); }}>1</button>
      <button onClick={e => { dispatch(addRoll(2)); }}>2</button>
      <button onClick={e => { dispatch(addRoll(3)); }}>3</button>
      <button onClick={e => { dispatch(addRoll(4)); }}>4</button>
      <button onClick={e => { dispatch(addRoll(5)); }}>5</button>
      <button onClick={e => { dispatch(addRoll(6)); }}>6</button>
      <button onClick={e => { dispatch(addRoll(7)); }}>7</button>
      <button onClick={e => { dispatch(addRoll(8)); }}>8</button>
      <button onClick={e => { dispatch(addRoll(9)); }}>9</button>
      <button onClick={e => { dispatch(addRoll(10)); }}>10</button>
    </div>
  )
}
AddRoll = connect()(AddRoll)

export default AddRoll
