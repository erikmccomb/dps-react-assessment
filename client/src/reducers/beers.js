const beers = (state = [], action) => {
  switch (action.type) {
    case 'BEERS':
      return action.all_beers
    default:
      return state;
  }
}

export default beers;