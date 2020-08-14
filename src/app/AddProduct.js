import React, { Component } from 'react'
import Header from '../component/Header'
import './addProduct.less'
import Footer from '../component/Footer'

export default class AddProduct extends Component {

    render() {
        return (
            <div className='addProduct'>
                <Header></Header>
                <div className='addProductBody'>
                    <h2>添加商品</h2>
                    <label htmlFor='name'>*名称</label>
                    <input type='text' placeholder='名称'></input>
                    <label htmlFor='name'>*价格</label>
                    <input type='text' placeholder='价格'></input>
                    <label htmlFor='name'>*单位</label>
                    <input type='text' placeholder='单位'></input>
                    <label htmlFor='name'>*图片</label>
                    <input type='text' placeholder='URL'></input>
                    <input type='submit'></input>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
