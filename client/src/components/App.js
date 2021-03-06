import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import NoMatch from './NoMatch'
import NavBar from './NavBar'
import Login from './Login'
import Register from './Register'
import Flash from './Flash'
import Home from './Home'
import About from './About'
import ProtectedRoute from './ProtectedRoute'
import AuthRoute from './AuthRoute'
import FetchUser from './FetchUser'
import Cart from './Cart'
import Menu from './Menu'
import ItemForm from './ItemForm'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/items' component={Menu} />
            <ProtectedRoute exact path ='/updatemenu' component={ItemForm} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/about' component={About} />
            <ProtectedRoute exact path='/updatemenu'component={ItemForm}/>
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    )
  }
}

export default App
