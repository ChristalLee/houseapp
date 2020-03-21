import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Flex, SearchBar, Carousel, WhiteSpace,WingBlank } from 'antd-mobile'
import '../../assets/styles/main.scss'
import { getlike } from '../../api/api'

export default class Main extends Component {
    state = {
        data: ['02', '03', '04'],
        imgHeight: 176,
        likelists: []
    }
    componentDidMount() {
        getlike().then(res => {
            console.log(res.data);
            this.setState({
                likelists: res.data
            })
        })
    }
    render() {
        return (
            <div>
                {/* 头部搜索框 */}
                <Flex className='seachbar'>
                    <Flex><Link to='/city'>成都市 </Link> <img src={require('../../assets/imgs/icon1.png')} alt="" /> </Flex>
                    <SearchBar placeholder="Search" maxLength={8} />
                    <img src={require('../../assets/imgs/map.png')} alt="" />
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
                <div className='classify'>
                    <WhiteSpace />
                    <Flex className='box' justify='around'>
                        <Flex direction='column'>
                            <Flex align='center' justify='center' className='imgBox'>
                                <img src={require('../../assets/imgs/cl1.png')} alt="" />
                            </Flex>
                            <span>新房</span>
                        </Flex>
                        <Flex direction='column'>
                            <Flex align='center' justify='center' className='imgBox'>
                                <img src={require('../../assets/imgs/cl2.png')} alt="" />
                            </Flex>
                            二手房
                        </Flex>
                        <Flex direction='column'>
                            <Flex align='center' justify='center' className='imgBox'>
                                <img src={require('../../assets/imgs/cl3.png')} alt="" />
                            </Flex>
                            租房
                        </Flex>
                        <Flex direction='column'>
                            <Flex align='center' justify='center' className='imgBox'>
                                <img src={require('../../assets/imgs/cl4.png')} alt="" />
                            </Flex>
                            商铺写字楼
                        </Flex>
                    </Flex>
                    <WhiteSpace />
                    <Flex className='box' justify='around'>
                        <Flex direction='column'>
                            <Flex align='center' justify='center' className='imgBox'>
                                <img src={require('../../assets/imgs/cl5.png')} alt="" />
                            </Flex>
                            卖房
                        </Flex>
                        <Flex direction='column'>
                            <Flex align='center' justify='center' className='imgBox'>
                                <img src={require('../../assets/imgs/cl6.png')} alt="" />
                            </Flex>
                            海外房产
                        </Flex>
                        <Flex direction='column'>
                            <Flex align='center' justify='center' className='imgBox'>
                                <img src={require('../../assets/imgs/cl7.png')} alt="" />
                            </Flex>
                            小区房价
                            </Flex>
                        <Flex direction='column'>
                            <Flex align='center' justify='center' className='imgBox'>
                                <img src={require('../../assets/imgs/cl8.png')} alt="" />
                            </Flex>
                            问答
                            </Flex>
                    </Flex>
                    <WhiteSpace />
                </div>
                <div className="relative">
                    <WhiteSpace />
                    <div className='box'>
                        <WhiteSpace />
                        <span>房产全百科</span><span>专业的买房功略</span>
                    </div>
                    <Flex className='box' justify='around'>
                        <Flex direction='column'>
                            <img src={require('../../assets/imgs/re1.png')} alt="" />
                            <span>我要贷款</span>
                        </Flex>
                        <Flex direction='column'>
                            <img src={require('../../assets/imgs/re2.png')} alt="" />
                            <span>房贷计算</span>
                        </Flex>
                        <Flex direction='column'>
                            <img src={require('../../assets/imgs/re3.png')} alt="" />
                            <span>知识</span>
                        </Flex>
                        <Flex direction='column'>
                            <img src={require('../../assets/imgs/re4.png')} alt="" />
                            <span>知识</span>
                        </Flex>
                    </Flex>
                    <WhiteSpace />
                </div>
                <div className="like">
                    <p>猜你喜欢</p>
                    {this.state.likelists.map((obj, i) =>
                    <div key={obj.id}>
                    <Flex className='likeBox'>
                    <WingBlank size='md'>   
                    <img src={`http://192.168.1.6:80/${obj.imgs}`} alt="" />
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
        )
    }
}
