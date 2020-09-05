import React, { Component } from 'react'
import { Input, Tooltip, Button } from 'antd';
import { InfoCircleOutlined, UserOutlined, AreaChartOutlined, AccountBookOutlined, FieldStringOutlined } from '@ant-design/icons';

export default class AddProduct extends Component {
    render() {
        return (
            <div style={{marginTop:'30px'}}>
                <h1 style={{
                    fontWeight:'700',
                    display: 'inline-block',
                    transform: 'translateX(-50%)',
                    marginLeft: '50%',
                }}>
                    添加商品
                </h1>
                <h3 style={{fontWeight:'700'}}>*类别</h3>
                <Input
                    placeholder="Enter your product category: book or toy"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="Extra information">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                />
                <br />
                <br />
                <h3 style={{fontWeight:'700'}}>*名称</h3>
                <Input
                    placeholder="Enter your product name"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="Extra information">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                />
                <br />
                <br />
                <h3 style={{fontWeight:'700'}}>*价格</h3>
                <Input prefix={<AccountBookOutlined />} 
                    placeholder="Enter your product price"
                    suffix="RMB" />
                <br />
                <br />
                <h3 style={{fontWeight:'700'}}>*单位</h3>
                <Input prefix={<FieldStringOutlined />} 
                    placeholder="Enter your product unit"
                    suffix={
                        <Tooltip title="Extra information">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                } />
                <br />
                <br />
                <h3 style={{fontWeight:'700'}}>*图片</h3>
                <Input prefix={<AreaChartOutlined />} 
                    placeholder="Enter your product pic url"
                    suffix="URL" />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Button type="primary" shape="round" size='large' style={
                    {
                        display: 'inline-block',
                        width: '200px',
                        transform: 'translateX(-50%)',
                        marginLeft: '50%',
                        marginBottom: '200px'
                    }
                } >
                    Submit
                </Button>
            </div>
        )
    }
}
