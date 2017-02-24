import React from 'react'
import store from './store'
import Title from './components/Title'
import Navigation from './components/Navigation'
import Match from './components/Match'
import './App.sass'

// Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'

class App extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app">
          <Navigation />
          { this.props.children }
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
