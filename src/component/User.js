import React, { Component } from 'react'
import { Card, Row, Col, Rate, Divider } from 'antd';
import { createFromIconfontCN as IconFont, BookOutlined } from '@ant-design/icons';
import Book from './Book';
import PandaIcon from '../icon/PandaIcon';


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
            <div>
                <Divider orientation="left" style={{fontSize:'25px'}}><BookOutlined /></Divider>
                <Row style={{ marginTop:'20px'}} gutter={[96,16]} justify="start" >
                    <Book product={product.book}/>
                </Row>
                <Divider orientation="left" style={{fontSize:'25px'}}><PandaIcon /> </Divider>
                <Row style={{ marginTop:'10px'}} gutter={[96,26]} justify="start" >
                    <Book product={product.toy}/>
                </Row>
            </div>
            
        )
    }
}
