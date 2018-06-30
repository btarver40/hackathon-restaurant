export function addToCart(item) {
    debugger
 return {
     type: 'ADD',
     item: item
 }
}

export function removeFromCart(item) {
 return {
     type: 'REMOVE',
     item: item
 }
}