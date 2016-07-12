import React, {Component} from 'react'
import {connect} from 'react-redux'

class CartSummary extends Component {
  render() {
    const products = this.props.products.filter(p => {
      return this.props.cart.find((obj)=>{return obj.get('id')===p.get('id');})
    })
    const removeFromCart = (id) => {
      this.props.removeFromCart(id)
    }
    return (
      <div id='cart'>
        <h4>Shopping Cart</h4>
        <div className='products'>
          {products.map((product, idx) => {
            const quantity = this.props.cart.find((obj)=>{return obj.get('id')===product.get('id')}).get('quantity')
            return (
              <div key={idx}>{product.get('name')} | quantity: {quantity}
              <button onClick={()=>removeFromCart(product.get('id'))}> Delete </button>
              </div>)
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products'),
    cart: state.get('cart')
  };
}
function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: (id) => {
      dispatch({
        type: 'REMOVE_FROM_CART',
        id: parseInt(id)
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartSummary)
