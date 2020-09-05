import React, { Component } from 'react'
import { Row, Divider, message } from 'antd';
import { BookOutlined, } from '@ant-design/icons';
import PandaIcon from '../icon/PandaIcon';
import Product from './Product';


export default class Home extends Component {

    state = {
        product: this.props.product,
    }

    componentDidMount(){
        fetch('http://localhost:8080/product')
            .then((response) => {
                if (response.ok) {
                    console.log(Object.keys(response));
                    console.log(response);
                    console.log(response.json);
                    console.log(response.json.length);
                    return Promise.resolve();
                }
                return Promise.reject();
            })
            .then(() => {
                message.success('添加成功')
            })
            .catch(() => {
                message.error('添加失败')
            });
    }
    
    render() {
        const { addProduct, product } = this.props
        
        return (
            <div>
                <Divider orientation="left" style={{ fontSize: '25px' }}><BookOutlined /></Divider>
                <Row style={{ marginTop: '20px' }} gutter={[96, 16]} justify="start" >
                    <Product product={product.book} addProduct={addProduct} />
                </Row>
                <Divider orientation="left" style={{ fontSize: '25px' }}><PandaIcon /> </Divider>
                <Row style={{ marginTop: '10px' }} gutter={[96, 26]} justify="start" >
                    <Product product={product.toy} addProduct={addProduct} />
                </Row>
            </div>
        )
    }
}
