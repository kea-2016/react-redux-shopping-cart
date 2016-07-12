import React, {Component} from 'react'
import routes from './routes.jsx'
import CartSummary from './cart-summary.jsx'

export default class App extends Component {

  render() {
    return (
      <div>{routes}</div>
    )
  }

}
