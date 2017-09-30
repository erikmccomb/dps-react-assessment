const beers = (state = [], action) => {
  switch (action.type) {
    case 'BEERS':
      return action.beers
    case 'ADD_BEER':
      return [action.beer, ...state]
    case 'UPDATE_BEER':
      return state.map(a => {
        if (a.id === action.beer.id)
          return action.beer
        return a
      })
    case 'DELETE_BEER':
      return state.filter(a => a.id !== action.id)
    default:
      return state;
  }
}

export default beers;