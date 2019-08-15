import React, { Component } from 'react'
import Champions from './components/champions'
import MyChampions from './components/myChampions'
import './App.css'


class App extends Component {

  render() {
    return (
      <div className='page'>
      <header>Welcome to Champ-companion</header>
        <div>
          <MyChampions />
        </div>

        <div>
          <Champions />
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}

export default App;
