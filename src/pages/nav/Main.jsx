import React, { Component } from 'react'
import { Flex, SearchBar, Carousel, WhiteSpace, WingBlank } from 'antd-mobile'
import {Link} from 'react-router-dom'
import '../../assets/styles/main.scss'
import { getlike,IP } from '../../api/api'
import {connect} from 'react-redux'

class Main extends Component {
    state = {
        data: ['02', '03', '04'],
        imgHeight: 176,
        likelists: [],
        list:[
            {icon:'cl1',text:'新房',color:'lightblue'},
            {icon:'cl2',text:'二手房',color:'coral'},
            {icon:'cl3',text:'租房',color:'cornflowerblue'},
            {icon:'cl4',text:'商铺写字楼',color:'thistle'},
            {icon:'cl5',text:'卖房',color:'#eff77a'},
            {icon:'cl6',text:'海外房产',color:'lightsalmon'},
            {icon:'cl7',text:'小区房价',color:'pink'},
            {icon:'cl8',text:'问答',color:'lightgreen'},
        ],//分类
        curcity:'定位中',
        relativelist:[
            {icon:'re1',text:'我要贷款'},
            {icon:'re2',text:'房贷计算'},
            {icon:'re3',text:'知识'},
            {icon:'re4',text:'扫一扫'},
        ],//相关
    }
    componentDidMount() {
        // 获取猜你喜欢页面数据
        getlike().then(res => {
            console.log(res.data);
            this.setState({
                likelists: res.data
            })
        });
        // 地图
        this.showCityInfo();                
    }
    render() {
        let {curcity} =this.state
        return (
            <div>
                {/* 头部搜索框 */}
                <Flex className='seachbar' justify='around'>
                    <Flex><Link to='/city'><span>{curcity}</span><span>▼</span></Link></Flex>
                    <SearchBar placeholder="搜索房源" maxLength={8} />
                    <Link to='/map'><img src={require('../../assets/imgs/map.png')} alt="" /></Link>
                </Flex>
                {/* 轮播 */}
                <Carousel
                    autoplay={true}
                    infinite>
                    {this.state.data.map(val => (
                        <img key={val}
                            src={require(`../../assets/imgs/banner${val}.jpg`)}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                //   fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    ))}
                </Carousel>
                {/* 分类 */}
                <div className='classify'>
                    <WhiteSpace />
                    <Flex className='box' justify='around' wrap='wrap'>
                    {this.state.list.map(item=>
                    <Flex direction='column' key={item.icon}>
                        <Flex align='center' justify='center' className='imgBox' style={{backgroundColor:item.color}}>
                            <img src={require('../../assets/imgs/'+item.icon+'.png')} alt="" />
                        </Flex>
                        <span>{item.text}</span>
                    </Flex>
                    )}
                </Flex>
                    <WhiteSpace />
                </div>
                {/* 相关知识 */}
                <div className="relative">
                    <WhiteSpace />
                    <div className='box'>
                        <WhiteSpace />
                        <span className='housetext'>房产全百科</span><span>专业的买房功略</span>
                    </div>
                    <Flex className='box' justify='around'>
                    {this.state.relativelist.map(obj=>
                        <Flex direction='column'  key={obj.text}>
                            <img src={require('../../assets/imgs/'+obj.icon+'.png')} alt="" />
                            <span>{obj.text}</span>
                        </Flex>
                    )}
                    </Flex>
                    <WhiteSpace />
                </div>
                {/* 猜你喜欢 */}
                <div className="like">
                    <p>猜你喜欢</p>
                    <div>
                    {this.state.likelists.map((obj, i) =>
                        <div key={obj.id}  className='likeBox' onClick={this.clickHouse.bind(this,obj)}>
                            <Flex>
                                <WingBlank size='md'>
                                    <img src={IP+obj.imgs} alt="" />
                                </WingBlank>
                                <div>
                                    <Flex className='title'>
                                        <h3>{obj.name}</h3>
                                        <h3 className='htips'>{obj.price}/平</h3>
                                    </Flex>
                                    <p className='text'><span>{obj.area}</span><span>{obj.range}</span></p>
                                    <p className='text'><span>{obj.type}</span><span>{obj.point}平</span></p>
                                </div>
                            </Flex>
                            <WhiteSpace />
                        </div>
                    )}

                    </div>
                </div>
            </div>
        )
    }
    // 头部导航栏点击，跳转地址
    // changePage(url){
    //     window.location.href='/#/'+url
    // }
    // 浏览猜我喜欢数据
    clickHouse(obj){
        console.log(obj.name)
        this.props.dispatch({
            type:'addHouse',
            obj
        })
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

export default  connect()(Main)