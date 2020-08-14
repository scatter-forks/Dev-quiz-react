import React, { Component } from 'react'
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import imgUrl from '../images/product.jpg'
import cartUrl from '../images/cart.png'

import './product.less';

export default class Product extends Component {
    render() {
        return (
            <div className={this.props.row} >
                <img src={imgUrl}></img>
                <h4>三只松鼠</h4>
                <p>单价:10元/三只</p>
                <img src={cartUrl}></img>
            </div>
        )
    }
}
