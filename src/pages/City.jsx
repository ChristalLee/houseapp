import React, { Component } from 'react'
import data from '../json/city.json' //获取json文件中的城市数据
import '../assets/styles/city.scss'
import { Flex, NavBar, Icon } from 'antd-mobile'
import BScroll from "better-scroll"


export default class city extends Component {
    state = {
        curcity:'定位中'//当前城市
    }
    componentDidMount() {
        this.leftBox = new BScroll(document.querySelector(".leftmenu"));//左边城市better-scroll
        // 地图
        this.showCityInfo();                        
    }
    render() {
        return (
            <div className='cityBox'>
            {/* 左侧城市 */}
                <div className='leftmenu'>
                    <ul className="content">
                        <NavBar
                            mode="light"
                            icon={<Icon type="left" />}
                            onLeftClick={() =>  this.props.history.push('/')}
                        >选择城市</NavBar>
                        <div className="citytitle">
                            当前定位
                        </div>
                        <div className="citytext">
                            <p>{this.state.curcity}</p>
                        </div>
                        {data.hotcity.map(item =>
                            <div key={item.title}>
                                <div className="citytitle">
                                    {item.title}
                                </div>
                                {item.lists.map((item) =>
                                    <div className="citytext" key={item}>
                                        <p>{item}</p>
                                    </div>
                                )}
                            </div>
                        )}
                        <div className="leftBox">
                            {data.city.map((obj, i) =>
                                <div key={obj.title} id={obj.title}>
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
                {/* 右侧菜单栏 */}
                <Flex direction='column' className='rightmenu'>
                    <span>#</span>
                    <span>热</span>
                    <div className="rightBox">
                        <ul className="content">
                            {data.city.map((obj, i) =>
                                <span onClick={this.clickCity} key={obj.title}>{obj.title}</span>
                            )}
                        </ul>
                    </div>
                </Flex>
            </div>
        )
    }
    //   右侧点击
    clickCity =(e) =>{
        // 左侧随右侧点击滑动到相对应的位置
        this.leftBox.scrollToElement(document.getElementById(e.target.innerHTML), 600);
    }
    //获取用户所在城市信息
    showCityInfo() {
        //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        var that=this
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    // var citybounds = result.bounds;
                    console.log(cityinfo);        
                    that.setState({
                        curcity:cityinfo
                    });            
                    //地图显示当前城市
                    // map.setBounds(citybounds);
                }
            } else {
                console.log(result.info);
            }
        });
    }
}
