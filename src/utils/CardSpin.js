import React, { Component } from 'react'
import './cardSpin.css'
import { SyncOutlined } from '@ant-design/icons'

export default class CardSpin extends Component {
    render() {
        return (
            <div className='main'>
                <div className='card'>
                    <div className='card-front'>
                        <p>长按有惊喜</p>
                        <div className='spin'>
                            <SyncOutlined />
                        </div>
                    </div>
                    <div className='card-back'>
                        <p>商品</p>
                        <p>数量</p>
                        <p>单价</p>
                        <p>总计</p>
                    </div>
                </div>
            </div>
        )
    }
}

