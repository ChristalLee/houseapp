import React, { Component } from 'react'
import '../assets/fonts/iconfont.css'
import '../assets/styles/nav.scss'
import { TabBar } from 'antd-mobile'
// import { Switch, Route, Link, } from 'react-router-dom'
import Main from './nav/Main.jsx'
import Chat from './nav/Chat.jsx'
import History from './nav/History.jsx'
import My from './nav/My.jsx'

export default class Nav extends Component {
    state = {
        selectedTab: 'main',
        tablist:[
            {title:'首页',key:'main',icon:'icon_main',sIcon:'icon_main_s',component:<Main/>},
            {title:'微聊',key:'chat',icon:'icon_chat',sIcon:'icon_chat_s',component:<Chat/>},
            {title:'足迹',key:'history',icon:'icon_history',sIcon:'icon_history_s',component:<History/>},
            {title:'我的',key:'my',icon:'icon_my',sIcon:'icon_my_s',component:<My/>}
        ]
    };
    
    render() {
            return (
                // TabBar组件
              <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                  unselectedTintColor="#949494"
                  tintColor="#33A3F4"
                  barTintColor="white"
                >
                 {this.state.tablist.map(obj=>
                      <TabBar.Item
                      title={obj.title}
                      key={obj.key}
                      icon={<div style={{
                        width: '30px',
                        height: '30px',
                        background: `url(${require('../assets/imgs/'+obj.icon+'.png')}) center center /  21px 21px no-repeat` }}
                      />
                      }
                      selectedIcon={<div style={{
                        width: '30px',
                        height: '30px',
                        background: `url(${require('../assets/imgs/'+obj.sIcon+'.png')}) center center /  21px 21px no-repeat` }}
                      />
                      }
                      selected={this.state.selectedTab === obj.key}
                      onPress={() => {
                        this.setState({
                          selectedTab: obj.key,
                        });
                      }}
                      data-seed="logId"
                    >
                      {obj.component}
                    </TabBar.Item>
                 )}
                </TabBar>
              </div>
            )


        // return (
        //     <div>
        //         {/* <Flex justify="around" align="center" className="Navtab">
        //             <Flex direction="column">
        //                 <i className="iconfont icon-shouye"></i>
        //                 <Link to='/nav/main'>首页</Link>
        //             </Flex>
        //             <Flex direction="column">
        //                 <i className="iconfont icon-liaotian"></i>
        //                 <Link to='/nav/chat'>微聊</Link>
        //             </Flex>
        //             <Flex direction="column">
        //                 <i className="iconfont icon-lishishuju"></i>
        //                 <Link to='/nav/history'>足迹</Link>
        //             </Flex>
        //             <Flex direction="column">
        //                 <i className="iconfont icon-wode"></i>
        //                 <Link to='/nav/my'>我的</Link>
        //             </Flex>
        //         </Flex>
        //         <Switch>
        //             <Route path='/nav/main' component={Main} />
        //             <Route path='/nav/chat' component={Chat} />
        //             <Route path='/nav/history' component={History} />
        //             <Route path='/nav/my' component={My} />
        //             <Route component={Main} />
        //         </Switch> */}
        //     </div>
        // )
    }
}
