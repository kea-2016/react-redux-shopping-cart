import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti', price:'2$'},
    {id: 2, name:'gold', price:'50$'},
    {id: 3, name:'rake', price:'20$'},
    {id: 4, name:'car', price:'2000$'},
    {id: 5, name:'falcon', price:'10$'}
  ],
  cart: [{id:1, quantity:1},{id:4, quantity:2}]
})

export default (state = INITIAL_STATE, action) => {
  const cart = state.get('cart')
  let cartItem = cart.find((obj)=>{return obj.get('id')===action.id});

  switch(action.type) {

    case 'ADD_PRODUCT_TO_CART':
      {
        if(cartItem=== undefined){
          return state.set('cart', state.get('cart').push(fromJS({id:action.id, quantity: 1})))
        }
        else{
          const itemIndex = cart.findIndex((obj)=>obj.get('id')===cartItem.get('id'))
          const quantity = cartItem.get('quantity') + 1
          const newCart = cart.update(itemIndex, (obj)=>obj.set('quantity', quantity))
          return state.set('cart', newCart)
        }
      }
    case 'REMOVE_FROM_CART':
      {
        const quantity = cartItem.get('quantity') - 1
        const itemIndex = cart.findIndex((obj)=>obj.get('id')===cartItem.get('id'))
        if(cartItem.get('quantity')>1){
            const newCart = cart.update(itemIndex, (obj)=>obj.set('quantity', quantity)
          )
          return state.set('cart', newCart)
        }
        else{
          const newCart = cart.splice(itemIndex,1)
          return state.set('cart', newCart)
        }
      }
    default:
      return state
  }
}
