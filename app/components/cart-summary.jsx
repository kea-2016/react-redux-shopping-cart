import React, {Component} from 'react'
import {connect} from 'react-redux'
import {removeProductFromCart} from '../reducer'

class CartSummary extends Component {

  handleClick(index) {
    return (e) => {
      this.props.removeProductFromCart(index)
    }
  }

  render() {
    //iterate over each number in the cart (eg. 1, 2)
    const products = this.props.cart.map(c => {
      // c is a number
      const prod = this.props.products.find(p => {
        // find the product based on the number in the cart,
        // comparing to the id of the product.
        return p.get('id') === c
      })
      //return the product found (it is a map, NOT a JS object).
      return prod
    })
    return (
      <div id='cart'>
        <h4>Shopping Cart</h4>
        <div className='products'>
          {products.map((product, index) => {
            return (
            <div key={index}>
              <div>{product.get('name')}</div>
              <button onClick={this.handleClick(index).bind(this)}> Remove from cart </button>
            </div>
            )
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
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeProductFromCart
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartSummary)
