import React, { Component } from 'react'
import '../assets/styles/register.scss'
import {Link} from 'react-router-dom'
import {reg,getcode} from '../api/api.js'
import qs from 'qs'
import { InputItem, Checkbox, WingBlank, WhiteSpace, Button, Flex } from 'antd-mobile'
const AgreeItem = Checkbox.AgreeItem;

export default class Register extends Component {
    state={
            acc:'',
            pwd:'',
            code:'',
            newcode:''
    }
    componentDidMount(){
        
    }
    render() {
        let {acc,pwd,code,newcode} =this.state
        return (
            <div>
                <WingBlank size="lg">
                <WhiteSpace size="lg" />  
                <p className='iptBox'>              
                    <input
                        ref='acc'
                        value={acc}
                        onChange={this.accChange}
                        type="phone"
                        placeholder="请输入手机">
                    </input>
                    </p>
                    <p className='iptBox'> 
                    <input
                        ref='pwd'
                        value={pwd}
                        onChange={this.pwdChange}
                        type="password"
                        placeholder="请输入密码">
                    </input>
                    </p>
                    <div className="phoneCode">
                    <p className='iptBox'>
                        <input
                            type="number"
                            value={newcode}
                            onChange={this.codeChange}
                            placeholder="请输入验证码"
                            >
                        </input>
                        </p>
                        <span>{code}</span>
                        <span className="codebtn" onClick={this.getCode.bind(this)}>获取验证码</span>
                    </div>
                    <WhiteSpace size="md" />                    
                    <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                        我已同意 <a className="single" onClick={(e) => { e.preventDefault(); alert('agree it'); }}>《用户服务协议》及《隐私权政策》</a>
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
    // 用户名
    accChange=(e)=>{
        console.log(e.target.value);
        var  acc=e.target.value;
      this.setState({
          acc:acc
      })  
    }
    // 密码
    pwdChange=(e)=>{
        console.log(e.target.value);
        var  pwd=e.target.value;
      this.setState({
          pwd:pwd
      })  
    }
    // 验证码
    codeChange=(e)=>{
        console.log(e.target.value);
        var  code=e.target.value;
      this.setState({
          newcode:code
      })  
    }
    // 注册
    register(){
        var list={acc:this.state.acc,pwd:this.state.pwd}
        if(this.state.code==this.state.newcode){
            reg(list).then(res=>{
                console.log(res.data);
                alert('恭喜你，注册成功，可以登录啦！')
            })
        }else{
            alert('请正确输入验证码！！！')
        }
    }
    // 获取验证码
    getCode(){
        getcode().then(res=>{
            console.log(res.data);
            this.setState({
                code:res.data
            })
        })
    }
}
