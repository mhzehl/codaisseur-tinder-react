import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Title from './components/Title'

class App extends React.Component {
  render() {
    return (
      <div>
        <Title content="Tinder for Codaisseur" />
      </div>
    )
  }
}

export default App
