import axios from 'axios'
import qs from 'qs'

export var IP='http://192.168.1.6:80'
// 创建一个请求对象
let req=axios.create({
    baseURL:IP,
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
// acc:用户名 pwd:密码
export function loginto(acc,pwd){
    return req.post('/login.php',qs.stringify({acc,pwd}))
} 

// 猜我喜欢
export function getlike(){
    return req.get('/gethouselist.php')
}