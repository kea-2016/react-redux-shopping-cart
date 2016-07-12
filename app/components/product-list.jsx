import React, {Component} from 'react'
import ProductSummary from './product-summary.jsx'
import {connect} from 'react-redux'
import CartSummary from './cart-summary.jsx'
import WishList from './wishlist.jsx'

class ProductList extends Component {
  render() {
    const productSummaries = this.props.products.map( product => {
      return <ProductSummary key={product.get('id')} product={product} />
    })
    return (
      //added CartSummary to the ProductList so that it was nested within the Router.
      <div>
        <div id='left'>
          <WishList />
        </div>
        <div id='main'>
          <div id='productList'> { productSummaries } </div>
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

export default connect(mapStateToProps)(ProductList)
