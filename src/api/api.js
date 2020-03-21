import axios from 'axios'
import qs from 'qs'

// 创建一个请求对象

let req=axios.create({
    baseURL:'http://192.168.1.6:80',
    timeout:10000
})

// axios的封装
//注册
export function reg(data){
    return req.post('/reg.php',qs.stringify(data))
} 

// 获取用户验证码
export function getcode(){
    return req.get('/valitecode.php')
}

//登录
export function loginto(data){
    return req.post('/login.php',qs.stringify(data))
} 

// 猜我喜欢
export function getlike(){
    return req.get('/gethouselist.php')
}