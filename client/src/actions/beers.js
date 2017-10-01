import axios from 'axios';

// pagination notes
// (number) is passed from BeerList.js "(getBeers(10))"   10 = number
export const getBeers = () => {
  return (dispatch) => {
    axios.get('/api/all_beers')
      .then(res => dispatch({ type: 'BEERS', all_beers: res.data.entries }))
  }
}
