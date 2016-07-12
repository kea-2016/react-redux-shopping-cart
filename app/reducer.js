import {fromJS, List} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti', price: 10.50 },
    {id: 2, name:'gold', price: 100.20 },
    {id: 3, name:'rake', price: 30 },
    {id: 4, name:'car', price: 5000 },
    {id: 5, name:'falcon', price: 70000.50 }
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

// Storing action type in a constant
export const CLEAR_CART = 'CLEAR_CART'
// This is an action creator that RETURNS an action (object).
export const clearCart = () => {
  return {
    type: CLEAR_CART
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return state.set('cart', state.get('cart').push(action.id))
    case 'REMOVE_PRODUCT_FROM_CART':
      // state.get('cart') is a LIST not an array. delete() deletes the index of the list.
      return state.set('cart', state.get('cart').delete(action.id))
    case 'CLEAR_CART':
      // sets the 'cart' part of the state to be a new List (as defined by immutable.js)
      return state.set('cart', List())
    default:
      return state
  }
}
