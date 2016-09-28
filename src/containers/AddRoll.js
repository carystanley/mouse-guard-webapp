import React from 'react'
import { connect } from 'react-redux'
import { addRoll } from '../actions'

let AddRoll = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addRoll(parseInt(input.value, 10)))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">Roll</button>
      </form>
    </div>
  )
}
AddRoll = connect()(AddRoll)

export default AddRoll
