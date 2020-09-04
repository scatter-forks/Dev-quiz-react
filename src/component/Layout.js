import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import { Row, Col } from 'antd';

export default class Layout extends Component {
    
    render() {
        const {count} = this.props
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Nav  count = {count}></Nav>
                        { this.props.children }
                    </Col>
                    <Col span={2}></Col>
                </Row>
                
            </div>
        )
    }
}
