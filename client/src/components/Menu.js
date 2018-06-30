import React from 'react'
import axios from 'axios'

class Menu extends React.Component {
  state = { items: [] }

  componentDidMount() {
    axios.get('/api/items')
      .then( res => this.setState({ items: res.data }))
  }

  render() {
    const { items } = this.state
    if (items.length) {
    return(
      <div>
        { items.map( item => (
          <div key={item.id}>
            {item.name}<br />
            {item.description}<br />
            {item.price}<br />
            {item.quantity}<br />
          </div>
        ))}
      </div>
    )
  } else {
    return(
      <div>
        Loading...
      </div>
    )}}
}

export default Menu