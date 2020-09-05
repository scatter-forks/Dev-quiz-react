import React, { Component } from 'react'
import { Input, Tooltip, Button, message } from 'antd';
import { InfoCircleOutlined, UserOutlined, AreaChartOutlined, AccountBookOutlined, FieldStringOutlined } from '@ant-design/icons';

export default class AddProduct extends Component {

    state = {
        name: "",
        price: null,
        unit: "",
        imgUrl:"",
        category:"",
    }

    onChange = (event) =>{
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    submitProduct = () =>{
            fetch('http://localhost:8080/product/add',{
                method:'POST',
                mode:'cors',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body:JSON.stringify(this.state)
            })
            .then((response) => {
                if (response.ok) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error(response.status + response.statusText));
            })
            .then(() => {
                message.success('添加成功')
            })
            .catch((err) => {
                console.error(err);
        });
    }


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
                    id='category'
                    onChange={this.onChange}
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
                    id='name'
                    onChange={this.onChange}
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
                    id='price'
                    onChange={this.onChange}
                    placeholder="Enter your product price"
                    suffix="RMB" />
                <br />
                <br />
                <h3 style={{fontWeight:'700'}}>*单位</h3>
                <Input prefix={<FieldStringOutlined />} 
                    id='unit'
                    onChange={this.onChange}
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
                    id='imgUrl'
                    onChange={this.onChange}
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
                    }  
                    onClick={this.submitProduct}
                    disabled={!this.state.name || !this.state.category || !this.state.price || !this.state.unit|| !this.state.imgUrl}
                >
                    Submit
                </Button>
            </div>
        )
    }
}
