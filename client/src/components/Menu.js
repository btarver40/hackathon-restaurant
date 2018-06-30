import React from 'react'

class Menu extends React.Component {
  state = { items: [] }

  componentDidMount() {
    axios.get('/api/items/')
      .then( res => )
  }

  render() {

  }


}

export default Menu