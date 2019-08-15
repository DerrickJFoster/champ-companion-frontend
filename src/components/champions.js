import React, { Component } from 'react'

class Champions extends Component {
  state = {

  }

   componentDidMount() {
     this.getChampion()
   }

   getChampion = () => {
     fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
       .then(response => response.json())
       .then(json => this.setState({data: json}))
       .catch(err => console.log(err))
   }


  render() {
    return (
      this.state.data ?
      <div className='allChampContainer'>
        {Object.entries(this.state.data.data).map(champion => {
          return (
            <div className='Champions'>
              <div key={champion.id} className='champCards'>
                <h2>{champion[0]}</h2>
                <p>{champion[1].blurb}</p>
              </div>
            </div>
           )
        })
      }
    </div>
      :null
    )
  }
}


export default Champions;
