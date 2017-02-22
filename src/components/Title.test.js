import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Title from './Title'

chai.use(chaiEnzyme())

describe ('<Title />', () => {
  const title = shallow(<Title content='Tinder for Codaisseur' />)

  it('has a wrapping h1 tag', () => {
    expect(title).to.have.tagName('h1')
  })

  it('renders the content', () => {
    expect(title).to.have.text('Tinder for Codaisseur')
  })

  describe('with a different content prop', () => {
    const title = shallow(<Title content='Check me, different content!' />)

    expect(title).to.have.text('Check me, different content!')
  })


})
