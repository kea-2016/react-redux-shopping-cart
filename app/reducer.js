import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti'},
    {id: 2, name:'gold'},
    {id: 3, name:'rake'},
    {id: 4, name:'car'},
    {id: 5, name:'falcon'}
  ],
  cart: [1,4]
})

// Storing action type in a constant
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'
// This is an action creator that RETURNS an action (object).
export const removeProductFromCart = (id) => {
  return {
    id,
    type: REMOVE_PRODUCT_FROM_CART
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return state.set('cart', state.get('cart').push(action.id))
    case 'REMOVE_PRODUCT_FROM_CART':
      // state.get('cart') is a LIST not an array. delete() deletes the index of the list.
      return state.set('cart', state.get('cart').delete(action.id))
    default:
      return state
  }
}
