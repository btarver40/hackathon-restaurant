import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Button, Container, Segment } from 'semantic-ui-react'
import { addToCart } from '../actions/cartActions'


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
      <Container textAlign='center'>
        { items.map( item => (
          <Segment raised key={item.id}>
            <b>{item.name}</b><br />
            {item.description}<br />
            {item.price}<br />
            {item.quantity}<br />
            <Button onClick={() => this.props.dispatch(addToCart(item))}>Add to Cart</Button>
          </Segment>
        ))}
      </Container>
    )
  } else {
    return(
      <div>
        Loading...
      </div>
    )}}
}

function mapStateToProps(state) {
  return { items: state.items }
}

export default connect(mapStateToProps)(Menu)