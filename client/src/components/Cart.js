import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, getCart } from '../actions/cartActions';
import axios from 'axios';

class Cart extends Component {

  componentDidMount() {

    this.props.dispatch(getCart())
  }

  render() {
  

    const cartList = this.props.cart.map(( item, index) =>{
      return <div key={index}> 
        <p>{item.name} - {item.price} $ </p>
        <button className="button" 
                onClick={ () => this.props.dispatch(removeFromCart(item))} > 
          Remove 
        </button>
      </div>;
    });
    
    return (
      <div>
        <h1>Cart</h1>
        <div className="cart">
          {cartList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { cart: state.cart }
}

export default connect(mapStateToProps)(Cart);
