import React, { Component } from 'react'
import {HashRouter,Switch,Route} from 'react-router-dom'
import Nav from './pages/Nav.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Error404 from './pages/Error404.jsx'
import City from './pages/City.jsx'
import Map from './pages/map/Map.jsx'

export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            {/* <Route path='/nav' component={Nav}></Route> // 二级路由不能有/和react */}
            <Route exact path='/' component={Nav}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
            <Route path='/city' component={City} />            
            <Route path='/map' component={Map} />            
            <Route component={Error404}></Route>
            {/* 重定向url,只要访问from里面的指定url就回跳转到to的url里面 */}
            {/* <Redirect from='/' to='nav/main'></Redirect> */}
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

