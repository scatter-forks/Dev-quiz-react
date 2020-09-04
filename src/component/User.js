import React, { Component } from 'react'
import { Card, Row, Col, Rate, } from 'antd';
import { createFromIconfontCN as IconFont } from '@ant-design/icons';
import Book from './Book';


const { Meta } = Card;
const Icon = IconFont({
    scriptUrl: [
        '//at.alicdn.com/t/font_1874562_iwoj7kz2ysk.js'
      ],
})



export default class User extends Component {
    render() {
        
        const product = this.props.product
        return (
            <Row style={{ marginTop:'30px'}} gutter={[96,26]} justify="start" >
                <Book product={product}/>
            </Row>
        )
    }
}
