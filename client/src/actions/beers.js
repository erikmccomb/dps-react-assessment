import axios from 'axios';

export const getBeers = () => {
  return (dispatch) => {
    axios.get('/api/all_beers')
      .then(res => dispatch({ type: 'BEERS', all_beers: res.data.entries }))
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