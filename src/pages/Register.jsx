import React, { Component } from 'react'
import '../assets/styles/register.scss'
import { Link } from 'react-router-dom'
import { reg, getcode } from '../api/api.js'
import { Checkbox, WingBlank, WhiteSpace, Button,InputItem } from 'antd-mobile'
const AgreeItem = Checkbox.AgreeItem;

export default class Register extends Component {
    state = {
        acc: '',
        pwd: '',
        code: '',
        newcode: ''
    }
    componentDidMount() {

    }
    render() {
        let { acc, pwd, code, newcode } = this.state
        return (
            <div>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                        <InputItem
                            ref='acc'
                            value={acc}
                            onChange={(val)=>this.setState({acc:val})}
                            type="phone"
                            placeholder="请输入手机">
                        </InputItem>
                        <InputItem
                            ref='pwd'
                            value={pwd}
                            onChange={(val)=>this.setState({pwd:val})}
                            type="password"
                            placeholder="请输入密码">
                        </InputItem>
                    <div className="phoneCode">
                            <InputItem
                                type="number"
                                value={newcode}
                                onChange={(val)=>this.setState({newcode:val})}
                                placeholder="请输入验证码"
                            >
                            </InputItem>
                        <span>{code}</span>
                        <span className="codebtn" onClick={this.getCode.bind(this)}>获取验证码</span>
                    </div>
                    <WhiteSpace size="md" />
                    <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                        我已同意 <span className="single">《用户服务协议》及《隐私权政策》</span>
                    </AgreeItem>
                    <WhiteSpace size="lg" />
                    <Button type="primary">
                        <span className='btnText' onClick={this.register.bind(this)}>注册</span>
                    </Button>
                    <WhiteSpace size="lg" />
                    <Link to='/login' className="single">已有账号</Link>
                </WingBlank>
            </div>
        )
    }
    // 注册
    register() {
        var list = { acc: this.state.acc, pwd: this.state.pwd }
        if (this.state.code == this.state.newcode&&this.state.newcode!='') {
            reg(list).then(res => {
                console.log(res.data);
                alert('恭喜你，注册成功，可以登录啦！')
            })
        } else {
            alert('请正确输入验证码！！！')
        }
    }
    // 获取验证码
    getCode() {
        getcode().then(res => {
            console.log(res.data);
            this.setState({
                code: res.data
            })
        })
    }
}
