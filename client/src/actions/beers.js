import axios from 'axios';

// pagination notes
// (number) is passed from BeerList.js "(getBeers(10))"   10 = number
export const getBeers = (number) => {
  return (dispatch) => {
    axios.get('/api/all_beers')
      .then(res => dispatch({ type: 'BEERS', beers: res.data.entries }))
  }
}
