import { combineReducers } from 'redux'
import rollHistory from './rollHistory'
import character from './character'

const reducers = combineReducers({
  rollHistory,
  character
})

export default reducers
