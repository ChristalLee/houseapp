import React, { Component } from 'react'
import {HashRouter,Switch,Route} from 'react-router-dom'
import Nav from './pages/Nav.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Error404 from './pages/Error404.jsx'

export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path='/' component={Nav}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
            <Route component={Error404}></Route>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

