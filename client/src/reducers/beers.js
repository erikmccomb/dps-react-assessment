const beers = (state = [], action) => {
  switch (action.type) {
    case 'ALL_BEERS':
      return action.all_beers
    // case 'ADD_APP':
    //   return [action.app, ...state]
    // case 'UPDATE_APP':
    //   return state.map(a => {
    //     if (a.id === action.app.id)
    //       return action.app
    //     return a
    //   })
    // case 'DELETE_APP':
    //   return state.filter(a => a.id !== action.id)
    default:
      return state;
  }
}

export default beers;