import React, { Component } from 'react'

export default class Map extends Component {
    state={
        curcity:'定位中'
    }
    componentDidMount(){
        this.showCityInfo()
    }
    render() {
        return (
            <div>
                <h3 style={{lineHeight:'30px',paddingLeft:'20px'}}>当前所在地：{this.state.curcity}</h3>
                <div id="map" style={{width:'100%',height:'420px',marginTop:'30px'}}></div>
            </div>
        )
       
    }
    //获取用户所在城市信息
    showCityInfo() {
        //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        var that=this
        var map = new window.AMap.Map("map", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    console.log(cityinfo);     
                    that.setState({
                        curcity:cityinfo
                    })              
                    //地图显示当前城市
                    map.setBounds(citybounds);
                }
            } else {
                console.log(result.info);
            }
        });
    }
}
