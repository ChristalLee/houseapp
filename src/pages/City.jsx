import React, { Component } from 'react'
import data from '../json/city.json'
import '../assets/styles/city.scss'
import { Flex, NavBar, Icon } from 'antd-mobile'
import BScroll from "better-scroll"


export default class city extends Component {
    state = {
        citylist: []
    }
    componentDidMount() {
        console.log(data.city);
        new BScroll(document.querySelector(".rightmenu"), { click: true });
        this.leftBox = new BScroll(document.querySelector(".leftmenu"), {
            probeType: 3 //实时派发滚动事件
        });
        this.setState({
            citylist: data.city
        })
    }
    render() {
        return (
            <div className='cityBox'>
                <div className='leftmenu'>
                <ul className="content">  
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >选择城市</NavBar>              
                    <div className="citytitle">
                        当前定位
                </div>
                    <div className="citytext">
                        <p>成都</p>
                    </div>
                    <div className="citytitle">
                        热门城市
                </div>
                    <div className="citytext">
                        <p>北京</p>
                        <p>上海</p>
                        <p>深圳</p>
                    </div>
                    <div className="leftBox">
                    {this.state.citylist.map((obj,i) =>
                        <div key={obj.title}  id={i}>
                            <div className="citytitle">
                                {obj.title}
                            </div>
                            {obj.lists.map((item) =>
                                <div className="citytext" key={item}>
                                    <p>{item}</p>
                                </div>
                            )}
                        </div>
                    )}
                    </div>
                    </ul>                    
                </div>
                <Flex direction='column' className='rightmenu'>
                    <span>#</span>
                    <span>热</span>
                    <div className="rightBox">
                    <ul className="content">
                    {this.state.citylist.map((obj,i) =>
                        <span onClick={this.clickTitle.bind(this,i)} key={obj.title}>{obj.title}</span>
                    )}
                    </ul>
                    </div>
                </Flex>
            </div>
        )
    }
        //   右侧点击
    clickTitle(index){
        // 左侧随右侧点击滑动到相对应的位置
        this.leftBox.scrollToElement(document.getElementById(index), 600);
      }
}
