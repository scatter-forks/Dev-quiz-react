import React, { Component } from 'react';
import { Menu, Avatar, Button } from 'antd';
import { HeartTwoTone ,SmileTwoTone , CheckCircleTwoTone, ShoppingCartOutlined, } from '@ant-design/icons';
import { Link } from 'react-router-dom';


export default class Nav extends Component {
    state = {
        current: 'home',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
        if(e.key === 'cart'){
            this.setState({ current: 'order' });
        }else if(e.key === 'user') {
            this.setState({ current: 'home' });
        }        
    };

    
      render() {
        const {count} = this.props
        const { current } = this.state;
        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" style={{width: '100%'}}>
                <Menu.Item key="home" icon={<SmileTwoTone />} style={{fontSize : '20px'}}>
                    <Link to='/'>商城</Link> 
                </Menu.Item>
                <Menu.Item key="order" icon={<CheckCircleTwoTone />} style={{fontSize : '20px'}}>
                    <Link to='/order'></Link>订单
                </Menu.Item>
                <Menu.Item key="product" icon={<HeartTwoTone />} style={{fontSize : '20px'}}>
                    <Link to='/product'>添加商品</Link>
                </Menu.Item>
                <Menu.Item key='cart'  icon={<ShoppingCartOutlined  style={{fontSize : '30px',}}/>} style={{fontSize : '25px', marginBottom:'2px', transform: 'translateY(2px)', float:'right',position:'relative'}}>
                    <Button type="primary" 
                        shape="round" 
                        size='small' 
                        href='/order'
                        style={{backgroundColor:'red',
                            color:'white',
                            position:'absolute',
                            padding:'0',
                            left:'20px',
                            height:'17px',
                            width:'26px',
                            lineHeight:'14px',
                            borderColor:'transparent'
                        }}
                    >{count}</Button>
                    <Link to='/order'></Link>
                </Menu.Item>
                <Menu.Item key="user" style={{fontSize : '20px',float:'right'}}>
                    <Avatar size='small' src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1558022566,848686799&fm=26&gp=0.jpg" />
                    用户
                    <Link to='/'></Link>
                </Menu.Item>
            </Menu>
        );
      }
}
