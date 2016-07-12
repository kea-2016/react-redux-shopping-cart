import React, {Component} from 'react'
import {connect} from 'react-redux'
import {removeProductFromCart, clearCart} from '../reducer'
import {Link} from 'react-router'

class CartSummary extends Component {

  handleClick = (index) => {
    return (e) => {
      this.props.removeProductFromCart(index)
    }
  }

  clear = () => {
    // call the function that has been mapped to props through mapDispatchToProps
    this.props.clearCart()
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
    // converts list to array of objects. Then maps this array of objects to "price" key of obj.
    const totalPrices = products.toJS().map(prod => prod.price)
    // reduce array of prices into a single price if there is at least one price, otherwise, the total is 0 (there are no products in cart).
    const total = totalPrices.length === 0 ? 0 : totalPrices.reduce((a, b) => a + b)
    return (
      <div id='cart'>
        <h4>Shopping Cart</h4>
        <div className='products'>
          {products.map((product, index) => {
            return (
            <div key={index}>
              <div>{product.get('name')}</div>
              <div>Price: ${product.get('price').toFixed(2)} </div>
              <button onClick={this.handleClick(index)}> Remove from cart </button>
            </div>
            )
          })}
        <div>
          Total: ${total.toFixed(2)}
        </div>
        <div onClick={this.clear}><Link to='/checkout'>Checkout</Link></div>
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
    // this maps a function to the props of CartSummary, which dispatches the action to the Redux store.
    removeProductFromCart: (index) => {
      dispatch(removeProductFromCart(index))
    },
    // this maps a function (clearCart this time) to the props of CartSummary, which dispatches the action to the Redux store.
    clearCart: () => {
      dispatch(clearCart())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartSummary)
