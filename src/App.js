import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Title from './components/Title'
import './App.sass'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        { this.props.children }
      </div>
    )
  }
}

export default App
