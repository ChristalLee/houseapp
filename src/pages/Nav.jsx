import React, { Component } from 'react'
import '../assets/fonts/iconfont.css'
import '../assets/styles/nav.scss'
import { Flex } from 'antd-mobile'
import { Switch, Route, Link, } from 'react-router-dom'
import Main from './nav/Main.jsx'
import Chat from './nav/Chat.jsx'
import History from './nav/History.jsx'
import My from './nav/My.jsx'
import City from './City.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'

export default class Nav extends Component {

    render() {
        return (
            <div>
                <Flex justify="around" align="center" className="Navtab">
                    <Flex direction="column">
                        <i className="iconfont icon-shouye"></i>
                        <Link to='/main'>首页</Link>
                    </Flex>
                    <Flex direction="column">
                        <i className="iconfont icon-liaotian"></i>
                        <Link to='/chat'>微聊</Link>
                    </Flex>
                    <Flex direction="column">
                        <i className="iconfont icon-lishishuju"></i>
                        <Link to='/history'>足迹</Link>
                    </Flex>
                    <Flex direction="column">
                        <i className="iconfont icon-wode"></i>
                        <Link to='/my'>我的</Link>
                    </Flex>
                </Flex>
                <Switch>
                    <Route exact path='/main' component={Main} />                    
                    <Route path='/chat' component={Chat} />
                    <Route path='/history' component={History} />
                    <Route path='/my' component={My} />
                    <Route path='/city' component={City} />
                    <Route path='/login' component={Login} />                    
                    <Route path='/register' component={Register} />
                    <Route component={Main} />
                </Switch>
            </div>
        )
    }
}
