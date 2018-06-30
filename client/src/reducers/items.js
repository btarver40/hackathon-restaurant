// add an item update edit delete 
import axios from 'axios'

export const addItem = (item) => {
  return (dispatch) => {
    axios.post('/api/items', { item } )
     .then( res => dispatch({ type: 'ADD_ITEM', app: res.data }) )
  }
}

const ADD_ITEM = 'ADD_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
const TOGGLE_ITEM = 'TOGGLE_ITEM'
const EDIT_ITEM = 'EDIT_ITEM'

export default ( state = [], action ) => {
  switch(action.type) {
    case ADD_ITEM:
      return [action.item, ...state]
    case EDIT_ITEM:
      return [action.item, ...state]
      case TOGGLE_ITEM:
      return state.map( item => { 
        if (item.name === action.name)
        return {...item, complete: !item.complete}
        return item 
      }) 
      case DELETE_ITEM:
        return state.filter( p => p.name !== action.id)
    default: 
      return state
  }
}