const breweries = (state = [], action) => {
  switch (action.type) {
    case 'BREWERIES':
      return action.all_breweries
    default:
      return state;
  }
}

export default breweries;