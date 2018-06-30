import initialState from './initialState';

export default function cart(state = initialState.cart, action) {
    switch (action.type) {
        case 'GET':
            return action.item;
        case 'ADD':
            return [...state, action.item];
        case 'REMOVE':
            return state.filter( i => i.id !== action.item.id);
        default:
            return state;
    }
}