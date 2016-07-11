import React, {Component} from 'react'
import {connect} from 'react-redux'

class CartSummary extends Component {
  render() {
    const products = this.props.products.filter(p => {
      return this.props.cart.includes(p.get('id'))
    })
    return (
      <div id='cart'>
        <h4>Shopping Cart</h4>
        <div className='products'>
          {products.map((product, idx) => {
            return (
              <div key={idx}>{product.get('name')} | {product.get('quantity')} |
              <button > Delete </button>
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
