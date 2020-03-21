import React, { Component } from 'react'
import '../../assets/styles/my.scss'
import { Link } from 'react-router-dom'
import { Flex, WhiteSpace } from 'antd-mobile'

export default class My extends Component {
    render() {
        return (
            <div>
                <div className="topBox">
                    <Flex className="top">
                        <div className="imgBox">
                            <img src={require("../../assets/imgs/banner01.jpg")} alt="" />
                        </div>
                        <div>
                            <p><Link to='/login'>登录</Link>/<Link to='/register'>注册</Link></p>
                            <p>可以与经纪人发起聊天</p>
                        </div>
                        <p className='set'>
                            <img src={require('../../assets/imgs/re3.png')} alt="" />
                        </p>
                    </Flex>
                    <Flex justify="center">
                        <div className='box'>
                            <p>0</p>
                            <p>钱包</p>
                        </div>
                        <div className='box'>
                            <p>0</p>
                            <p>优惠</p>
                        </div>
                        <div className='box'>
                            <p>0</p>
                            <p>积分</p>
                        </div>
                    </Flex>
                </div>
                <div className="content">
                    <WhiteSpace />
                    <div className='singleBox'>
                        <p>
                            <img src={require('../../assets/imgs/re1.png')} alt="" />
                            <span>我的积分</span>
                        </p>
                        <p>></p>
                    </div>
                    <div className='singleBox'>
                        <p>
                            <img src={require('../../assets/imgs/re1.png')} alt="" />
                            <span>我的订阅</span>
                        </p>
                        <p>></p>
                    </div>
                    <div className='singleBox'>
                        <p>
                            <img src={require('../../assets/imgs/re1.png')} alt="" />
                            <span>微聊联系人</span>
                        </p>
                        <p>></p>
                    </div>
                    <WhiteSpace />
                    <div className='singleBox'>
                        <p>
                            <img src={require('../../assets/imgs/re1.png')} alt="" />
                            <span>房贷计算器</span>
                        </p>
                        <p>></p>
                    </div>
                    <div className='singleBox'>
                        <p>
                            <img src={require('../../assets/imgs/re1.png')} alt="" />
                            <span>我的房子</span>
                        </p>
                        <p>></p>
                    </div>
                    <WhiteSpace />
                    <div className='singleBox'>
                        <p>
                            <img src={require('../../assets/imgs/re1.png')} alt="" />
                            <span>我的看房记录</span>
                        </p>
                        <p>></p>
                    </div>
                    <div className='singleBox'>
                        <p>
                            <img src={require('../../assets/imgs/re1.png')} alt="" />
                            <span>我的问答</span>
                        </p>
                        <p>></p>
                    </div>
                    <WhiteSpace />
                    <div className='singleBox'>
                        <p>
                            <img src={require('../../assets/imgs/re1.png')} alt="" />
                            <span>设置</span>
                        </p>
                        <p>></p>
                    </div>
                    <div className='singleBox'>
                        <p>
                            <span>意见反馈</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
