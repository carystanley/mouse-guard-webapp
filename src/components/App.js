import React from 'react'
import '../css/main.css';

import AddRoll from '../containers/AddRoll'
import RollHistory from '../containers/RollHistory'

const App = () => (
  <div>
    <RollHistory />
    <AddRoll />
  </div>
)

export default App
