import reducer from '../app/reducer'
import {expect} from 'chai'

describe('Reducer', () => {
  describe('initial state', () => {
    it('has a default product list', () => {
      const state = reducer(undefined,{})
      expect(state.get('products').size).to.equal(5)
      expect(state.get('products').first().get('name')).to.equal('spaghetti')
    })
    it('has a cart with two items', () => {
      const state = reducer(undefined, {})
      expect(state.get('cart').size).to.equal(2)
    })
  })
  describe('cart', () => {
    it('adds a product to the shopping cart', () => {
      const state = reducer(undefined, {
        type: 'ADD_PRODUCT_TO_CART',
        id: 3
      })
      expect(state.get('cart').size).to.equal(3)
      expect(state.get('cart')).to.include(3)
    })
  })
})
