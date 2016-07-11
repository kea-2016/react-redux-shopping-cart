import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti', price:'2$', quantity: 0},
    {id: 2, name:'gold', price:'50$', quantity: 0},
    {id: 3, name:'rake', price:'20$', quantity: 0},
    {id: 4, name:'car', price:'2000$', quantity: 0},
    {id: 5, name:'falcon', price:'10$', quantity: 0}
  ],
  cart: [1,4]
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      {
        const product = state.get('products').find(function(obj){return obj.get('id') === action.id;});
        const quantity = product.quantity + 1
        console.log(quantity)
        const newProduct = product.set("quantity", quantity);
        console.log(newProduct.toJS())
        return state.set('cart', state.get('cart').push(action.id))
      }
    case 'REMOVE_FROM_CART':
      {
        return state.set('cart', state.get('cart').delete(action.id))
      }
    default:
      return state
  }
}
