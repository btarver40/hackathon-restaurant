// add an item update edit delete 

const ADD_ITEM = 'ADD_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
const TOGGLE_ITEM = 'TOGGLE_ITEM'
const EDIT_ITEM = 'EDIT_ITEM'


export const addItem = (item) => {
  return { type: ADD_ITEM, item}
}

export const editItem = (id) => {
  return { type: EDIT_ITEM, id}
}

export const toggleItem = (name) => {
  return { type: TOGGLE_ITEM, name}
}

export const deleteItem = (id) => {
  return { type: DELETE_ITEM, id}
}

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