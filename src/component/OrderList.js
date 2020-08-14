import React, { Component } from 'react'
import './orderList.less';

export default class OrderList extends Component {
    render() {
        return (
            <div className='orderList'>
                <p>松鼠</p>
                <p>10</p>
                <p>1</p>
                <p>打</p>
                <input type='button' value='删除'></input>
            </div>
        )
    }
}
