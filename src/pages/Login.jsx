import React, { Component } from 'react'
import '../assets/styles/Login.scss'
import { Flex ,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import {Link} from 'react-router-dom'
import {loginto} from '../api/api.js'

export default class Login extends Component {
    state={
            acc:'',
            pwd:'',
    }
    render() {
        return (
            <div>
                <Flex justify="center" className='logo'>
                    <img src={require('../assets/imgs/logo.jpg')} alt=""/>
                </Flex>
                <WingBlank size="lg">
                    <InputItem clear={true}>
                        <div style={{ backgroundImage: `url(${require('../assets/imgs/user.png')})` , backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem clear={true}>
                        <div style={{ backgroundImage: `url(${require('../assets/imgs/pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size="lg" />
                        <Button type="primary">
                            <span className='btnText' onClick={this.submitLogin.bind(this)}>登录</span>
                        </Button>
                    <WhiteSpace size="lg" />
                    <Flex justify="between" className='singleText'>
                        <Link to='/register'>手机快速注册</Link>
                        <span>忘记密码</span>
                    </Flex>   
                    <Flex justify="center" className='logo'>
                        <p className='tips'>登录/注册及代表同意《古城新境房产协议》</p>                     
                    </Flex>
                </WingBlank>
            </div>
        )
    }
    submitLogin(){
        loginto().then(res=>{
            console.log(res.data);
            
        })
    }
}
