import React, { PureComponent } from 'react'
import Student from './Student'
import MatchIcon from '../assets/images/match-icon.png'
import './Match.sass'

class Match extends PureComponent {
  render() {
    return(
      <div className='match wrapper'>
        <Student />
        <img src={ MatchIcon } className='match-icon' />
        <Student name="Johan Ja" />
      </div>
    )
  }
}

export default Match
