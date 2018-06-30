import React from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import { addItem } from '../reducers/items'

class ItemForm extends React.Component {
  initialState = { name: '', description: '', price: '' , quantity: ''}

  state = { ...this.initialState }

  componentDidMount() {
    if (this.props.id)
    this.setState({...this.props })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const item = { ...this.state }
    dispatch(addItem(item))

    this.setState({ item, ...this.initialState })
  }

  render() {
    const { name, description, price, quantity } = this.state
  
  return (
    <Form onSubmit={this.handleSubmit}>
      <Form.Input
        name="name"
        placeholder="Name"
        value={name}
        onChange={this.handleChange}
        label="name"
        required
      />
      <Form.Input
        name="description"
        placeholder="Description"
        value={description}
        onChange={this.handleChange}
        label="description"
        required
      />
      <Form.Input
        name="price"
        placeholder="Price"
        value={price}
        onChange={this.handleChange}
        label="price"
        required
      />
    
    <Button 
      basic
      fluid
      content="Add Item"
    />
    </Form>

    )
  }
}


export default connect()(ItemForm)