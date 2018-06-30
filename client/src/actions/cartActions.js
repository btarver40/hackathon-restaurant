import axios from 'axios'
import { setHeaders } from '../reducers/headers'

export function getCart() {
   return (dispatch) => {
    axios.get('/api/carts')
    .then( res => {
      dispatch(setHeaders(res.headers));
      dispatch({ type: 'GET', item: res.data })
    })
 }
}

export function addToCart(item) {
   return (dispatch) => {
    axios.post('/api/carts', item)
    .then( res => {
      dispatch(setHeaders(res.headers));
      dispatch({ type: 'ADD', item: res.data })
    })
 }
}

export function removeFromCart(item) {
   return (dispatch) => {
     axios.delete(`/api/carts/${item.id}`)
     .then( res => {
      dispatch(setHeaders(res.headers));
      dispatch({ type: 'REMOVE', item }) 
    })
 }
}
