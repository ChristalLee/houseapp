import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/index'
import {Provider} from 'react-redux'
import './assets/styles/common.scss'
import 'antd-mobile/dist/antd-mobile.css';//引入UI框架样式

// 只要是Provider中的子组件，不管层级有多深，都能直接访问到此store，以此实现数据共享
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

