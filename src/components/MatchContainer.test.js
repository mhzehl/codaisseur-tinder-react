import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import MatchContainer from './MatchContainer'

chai.use(chaiEnzyme)

describe('<MatchContainer />', () => {
  const container = shallow(<MatchContainer matches={[]} />)

  it('is wrapped in a div with class name "matches"', () => {
    expect(container).to.have.className('wrapper')
    expect(container).to.have.className('matches')
  })
})
