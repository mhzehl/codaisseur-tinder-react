import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchMatches from '../actions/matches/fetch-matches'
import Match from './Match'
import PreviousMatches from './PreviousMatches'
import Title from '../components/Title'
import './MatchContainer.sass'

class MatchContainer extends PureComponent {

  componentDidMount() {
    this.props.fetchMatches()
  }

  renderMatches(match, index) {
    return <Match key={ index } { ...match } />
  }

  render() {
    return(
      <div className="matches wrapper">
        <header>
          <Title content="Match of the Day" className="match-title" />
        </header>
        <Match />
        <div className="previous-match-wrapper">
          <PreviousMatches />
          { this.props.matches.map(this.renderMatches.bind(this)) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ matches }) => ({ matches })

export default connect(mapStateToProps, { fetchMatches })(MatchContainer)
