import React, { Component } from 'react'
import { Card, Row, Col, Rate, } from 'antd';
import { createFromIconfontCN as IconFont } from '@ant-design/icons';

const { Meta } = Card;
const Icon = IconFont({
    scriptUrl: [
        '//at.alicdn.com/t/font_1874562_iwoj7kz2ysk.js'
      ],
})

export default class Book extends Component {
    render() {
        const {product} = this.props
        return(
            product.book.map(item =>{
                return (
                    <Col className="gutter-row" span={6} offset={0} xxl={true} >
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={item.src} />}>
                            <Meta title={item.title} description={item.description} />
                            <Rate allowHalf disabled defaultValue={4.5} style={{marginTop:'5px'}}/>
                            <div style={{fontSize:'30px',display:'flex',justifyContent:'center', alignItems:'baseline'}}>
                                <Icon type="icon-money" style={{float:'left'}}/>
                                <span style={{fontSize:'40px',margin:'0 22px', color:'red'}}>{item.price}</span>
                                <Icon type="icon-zengjia"style={{float:'right'}} />
                            </div>
                        </Card>
                    </Col>
                )
            })
        )
    }
}
