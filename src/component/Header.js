import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, NavLink } from 'react-router-dom';
import './header.less';
import homeImg from '../images/catagory1.png';
// import homeImg from '../images/home2.png';
import orderImg from '../images/order.png'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <NavLink exact to='/' activeClassName='inthisPage'>
                    <img src={homeImg} className='icon'></img>
                     商城
                </NavLink>
                <NavLink exact to='/order' activeClassName='inthisPage'>
                    <img src={homeImg} className='icon'></img>
                    订单
                </NavLink>
                <NavLink exact to='/add-product' activeClassName='inthisPage'>
                    <img src={homeImg} className='icon'></img>
                    添加商品
                </NavLink>
            </div>
        );
    }
}
export default Header;