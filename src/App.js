import React from 'react'
import Title from './components/Title'
import Navigation from './components/Navigation'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Title content="Tinder for Codaisseur" />
      </div>
    )
  }
}

export default App
