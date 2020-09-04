import React, { Component } from 'react'
import MyTable from '../utils/MyTable.js'

export default class Order extends Component {
    render() {
        return (
            <div>
                {/* <CardSpin></CardSpin> */}
                <MyTable cartList = {this.props.cartList}></MyTable>
            </div>
        )
    }
}
