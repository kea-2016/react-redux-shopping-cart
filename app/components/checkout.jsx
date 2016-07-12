import React, {Component} from 'react'
import {Link} from 'react-router'

export default class Checkout extends Component {

  render() {
    return (
      <div>
        <h1>Thanks for checking out with us!</h1>
        <Link to='/'>Back home</Link>
      </div>
    )
  }

}
