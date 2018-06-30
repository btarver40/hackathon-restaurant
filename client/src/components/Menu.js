import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Button, Container, Loader, Segment } from 'semantic-ui-react'
import { addToCart } from '../actions/cartActions'

class Menu extends React.Component {
  state = { items: [], page: 1 }

  componentDidMount() {
    this.state.page === '' ? 1 : this.state.page
    axios.get(`/api/items?page=${this.state.page}&per_page=5`)
      .then( res => this.setState({ items: res.data }))
  }

  render() {
    const { items } = this.state
    if (items.length) {
    return(
      <Container textAlign='center'>
        <Button onClick={() => {
          if (this.state.page > 1) {
            this.setState({ page: this.state.page - 1 })
            axios.get(`/api/items?page=${this.state.page}&per_page=5`)
              .then(res => this.setState({ items: res.data }))
          } else {
            console.log("Bad clicking.")
          }
        }}>
        Prev
        </Button>
        {"Page "}<b>{`${this.state.page}   `}</b>
        <Button onClick={() => {
          if (this.state.page < 10) {
            this.setState({ page: this.state.page + 1 })
            axios.get(`/api/items?page=${this.state.page}&per_page=5`)
              .then(res => this.setState({ items: res.data }))
          } else {
            console.log("Bad clicking.")
          }
        }}>
        Next
        </Button>

        { items.map( item => (
          <Segment raised key={item.id}>
            Item: <b>{item.name}</b><br />
            Description: <i>{item.description}<br /></i>
            Price: ${item.price}<br />
            Quantity Left: {item.quantity}<br />
            <Button onClick={() => this.props.dispatch(addToCart(item))}>Add to Cart</Button>
          </Segment>
        ))}
      </Container>
    )
  } else {
    return(
      <Loader>
        Loading...
      </Loader>
    )}}
}

function mapStateToProps(state) {
  return { items: state.items }
}

export default connect(mapStateToProps)(Menu)