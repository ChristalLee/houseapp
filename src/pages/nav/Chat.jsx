import React, { Component } from 'react'
import '../../assets/styles/chat.scss'
import { Flex,Button,WhiteSpace } from 'antd-mobile';
export default class Chat extends Component {
    render() {
        return (
            <div>
                <Flex justify='center' align='center' className='chatBox'>
                <div>
                    <div className='topImg'>
                <div className="textCenter imgBox">
                    <img src={require("../../assets/imgs/banner01.jpg")} alt=""/>                
                </div>
                </div>
                <p  className='textCenter'>置业顾问：<span>张小妹</span></p>
                <p>专心服务诚信做人诚心做事！</p>
                <Button type="primary">我要聊天</Button><WhiteSpace />
                </div>
                </Flex>

            </div>
        )
    }
}
