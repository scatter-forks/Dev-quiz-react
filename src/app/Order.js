import React, { Component } from 'react'
import OrderList from '../component/OrderList'
import Header from '../component/Header'
import './order.less';
import Footer from '../component/Footer';


export default class Order extends Component {
    render() {
        return (
            <div className='order'>
                <Header></Header>
                <div className='orderBody'>
                    <br></br>
                    <div className='formInfo'>
                        <p>姓名</p>
                        <p>单价</p>
                        <p>数量</p>
                        <p>单位</p>
                        <p>操作</p>
                    </div>
                    <OrderList></OrderList>
                    <OrderList></OrderList>
                    <OrderList></OrderList>
                    <OrderList></OrderList>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
