import axios from 'axios'

export function getCart() {
   return (dispatch) => {
    axios.get('/api/carts')
    .then( res => dispatch({ type: 'GET', item: res.data }) )
 }
}

export function addToCart(item) {
   return (dispatch) => {
    axios.post('/api/carts', item)
    .then( res => dispatch({ type: 'ADD', item: res.data }) )
 }
}

export function removeFromCart(item) {
   return (dispatch) => {
     axios.delete(`/api/carts/${item.id}`)
     .then( () => dispatch({ type: 'REMOVE', item }) )
 }
}
