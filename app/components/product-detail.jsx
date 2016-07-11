import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {fromJS} from 'immutable'

class ProductDetail extends Component {
  render() {
    const {id} = this.props.params
    const product = this.props.products.filter(p => p.get('id') == id ).first()
    const name = product.get('name')
    const price = product.get('price')
    const addToCart = (e) => {
      console.log('in add to cart: render')
      product.get('quantity')
      e.preventDefault()
      this.props.addToCart(id)
    }
    return (
      <div className='product' id={id}>
        <div> Detailed view of a product {name}</div>
        <div> Price: {price}</div>
        <div><a href='' onClick={addToCart}>Add to Cart</a></div>
        <div><Link to='/'>View all</Link></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("iam here",state.get('products').toJS())
  console.log("iam here",state.get('cart').toJS())
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
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail)
