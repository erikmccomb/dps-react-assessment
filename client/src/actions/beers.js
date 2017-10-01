import axios from 'axios';

// pagination notes
// (number) is passed from BeerList.js "(getBeers(10))"   10 = number
export const getBeers = (number) => {
  return (dispatch) => {
    axios.get('/api/all_beers')
      .then(res => dispatch({ type: 'BEERS', beers: res.data.entries }))
  }
}

// export const addBeer = (beer) => {
//   return (dispatch) => {
//     axios.post('/api/all_beers', { beer })
//       .then(res => dispatch({ type: 'ADD_BEER', Beer: res.data }))
//   }
// }

// export const updateBeer = (beer) => {
//   return (dispatch) => {
//     axios.put(`/api/all_beers/${beer.id}`, { beer })
//       .then(res => dispatch({ type: 'UPDATE_BEER', Beer: res.data }))
//   }
// }

// export const deleteBeer = (id) => {
//   return (dispatch) => {
//     axios.delete(`/api/all_beers/${id}`)
//       .then(() => dispatch({ type: 'DELETE_BEER', id }))
//   }
// }