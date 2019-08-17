import React, { Component } from 'react'

require('dotenv').config()
const HOST = process.env.REACT_APP_DB_HOST ?
  process.env.REACT_APP_DB_HOST : 'http://localhost:3000'

const ITEMHOST = process.env.REACT_APP_ITEM_URL ?
  process.env.REACT_APP_ITEM_URL : 'http://localhost:3000/items'

class MyChampions extends Component {
  state = {

  }

   componentDidMount() {
     this.getChampion()
     this.getItem()
   }

   getChampion = () => {
console.log(HOST);
     fetch(HOST)
       .then(response => response.json())
       .then(json => this.setState({champions: json}))
       .catch(err => console.log(err))
   }

   getItem = () => {
     console.log(ITEMHOST);
     fetch(ITEMHOST)
       .then(response => response.json())
       .then(json => this.setState({items: json}))
       .catch(err => console.log(err))
   }

   handleAddChamp() {
     console.log('Champion added');
   }
   handleAddItem() {
     console.log('Item added');
   }

  render() {
    return (
      <>
        <form>
          <label>Add champions and items to your list</label>
          <br/>
          <input placeholder='Champion Name'/>
          <input placeholder='Items List'/>
        </form>
      <button type='submit'>Add to list</button>
      {/* <button onClick={this.handleAddChamp}>Add Champ</button> */}
      {/* <button onClick={this.handleAddItem}>Add Item</button> */}
<div className="myChampContainer">
      {this.state.champions ?

        this.state.champions.map((champion, index) => {
          return (
        <>
          {/* <button>Edit Champ</button> */}
            <div key={champion.leagueId} className='myChampCards'>
              <h3>Name: {champion.name}</h3>
            </div>

        </>
           )
        })
      :null

    }
</div>
<div className='myChampItemsContainer'>
      {this.state.items ?

        this.state.items.map(item => {
        return (
          <>
          {/* <button>Edit Item</button> */}

          <div key={item.id} className='myChampItems'>
            <h3>Items: {item.name}</h3>
          </div>
        </>
        )
      })
      :null
    }
  </div>
</>
    )
  }
}
export default MyChampions;
