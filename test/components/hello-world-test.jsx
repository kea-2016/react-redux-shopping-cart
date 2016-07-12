import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import HelloWorld from '../../app/components/hello-world.jsx'

describe('<HelloWorld />', () => {
  it('says hello world', () => {
    const wrapper = shallow(<HelloWorld />)
    expect(wrapper).to.contain('Hello World')
  })
})
