const roll = (state, action) => {
  switch (action.type) {
    case 'ADD_ROLL':
      let {count} = action;
      let successes = 0;
      let values = [];
      for (let x = 0; x < count; x++) {
        let value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        successes += (value >= 4) ? 1 : 0;
      }
      return {
        count,
        values,
        successes
      }
    default:
      return state
  }
}

const rollHistory = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ROLL':
      return [
        ...state,
        roll(undefined, action)
      ]
    default:
      return state
  }
}

export default rollHistory
