import React, { Component } from 'react'
import {Flex,WingBlank,WhiteSpace} from 'antd-mobile'
import {IP} from '../../api/api'
import {connect} from 'react-redux'

class History extends Component {
    render() {        
        return (
            <div>
                <div className="like">
                    <p>浏览历史</p>
                    <div>
                    {this.props.list.map((obj, i) =>
                        <div key={obj.id}  className='likeBox'>
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
}

export default connect((state)=>{
    return {
        list:state
    }
})(History)