import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';
import { Menu } from 'semantic-ui-react'

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item>Welcome, {user.name}</Menu.Item>
          <Link to='/about'>
            <Menu.Item name='About Us' />
          </Link>
          <Link to='/items'>
            <Menu.Item name='Menu' />
          </Link>
          <Link to='/cart'>
            <Menu.Item name='Cart' />
          </Link>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      )
    }
    return (
      <Menu>
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link>
        <Link to='/about'>
          <Menu.Item name='About Us' />
        </Link>
        <Link to='/menu'>
          <Menu.Item name='Menu' />
        </Link>
      </Menu.Menu>
      </Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
