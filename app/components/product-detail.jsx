import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import CartSummary from './cart-summary.jsx'
import WishList from './wishlist.jsx'
import {addProductToWishList} from '../reducer'

class ProductDetail extends Component {
  render() {
    const {id} = this.props.params
    const product = this.props.products.filter(p => p.get('id') == id ).first()
    const name = product.get('name')
    const price = product.get('price')
    const addToCart = (e) => {
      e.preventDefault()
      this.props.addToCart(id)
    }
    const addToWishList = (e) => {
      e.preventDefault()
      this.props.addToWishList(id)
    }
    return (
      <div>
        <div id='left'>
          <WishList />
        </div>
        <div id='main'>
          <div className='product' id={id}>
            <div> Detailed view of a product {name}</div>
            <div> Price: ${price.toFixed(2)} </div>
            <div><a href='' onClick={addToCart}>Add to Cart</a></div>
            <div><a href='' onClick={addToWishList}>Add to Wishlist</a></div>
            <div><Link to='/'>View all</Link></div>
          </div>
        </div>
        <div id='side'>
          <CartSummary />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (id) => {
      dispatch({
        type: 'ADD_PRODUCT_TO_CART',
        id: parseInt(id)
      })
    },
    addToWishList: (id) => {
      dispatch(addProductToWishList(parseInt(id)))
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail)
