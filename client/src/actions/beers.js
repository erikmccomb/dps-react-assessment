import axios from 'axios';

export const getBeers = () => {
  return (dispatch) => {
    axios.get('/api/all_beers')
      .then( res => dispatch({ type: 'ALL_BEERS', all_beers: res.data }) )
  }
}

export const addBeer = (beer) => {
  return (dispatch) => {
    axios.post('/api/all_beers', { beer } )
     .then( res => dispatch({ type: 'ADD_BEER', beer: res.data }) )
  }
}

export const updateBeer = (beer) => {
  return (dispatch) => {
    axios.put(`/api/all_beers/${beer.id}`, { beer } )
      .then( res => dispatch({ type: 'UPDATE_BEER', beer: res.data }) )
  }
}

export const deleteBeer = (beer) => {
  return (dispatch) => {
    axios.delete(`/api/all_beers/${id}`)
      .then( () => dispatch({ type: 'DELETE_BEER', id }) )
  }
}