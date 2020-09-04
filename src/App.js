import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from '../src/component/Home'
import Layout from './component/Layout'
import Product from './component/Product';
import Order from './component/Order';
import User from './component/User';


class App extends React.Component {

state = {
  count: 0,
  product:{
    book:[
      {
        title:'康熙-测试',
        description:'测试',
        src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1986239545,3915630820&fm=15&gp=0.jpg",
        price:'0',
        unit:'本'
      },
      {
        title:'康熙',
        description:'测试',
        src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1986239545,3915630820&fm=15&gp=0.jpg",
        price:'110',
        unit:'本'
      },
      {
        title:'康熙',
        description:'测试',
        src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1986239545,3915630820&fm=15&gp=0.jpg",
        price:'110',
        unit:'本'
      },
      {
        title:'康熙',
        description:'测试',
        src:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1986239545,3915630820&fm=15&gp=0.jpg",
        price:'110',
        unit:'本'
      },
    ],
    toy:[],
  },
  cartList:[
    {
      key: '1',
      name: '《康熙》',
      acount: 1,
      unitPrice: '￥33.9',
      unit: ['本'],
    },
    {
      key: '2',
      name: '《出海总动员》',
      acount: 1,
      unitPrice: '￥23.9',
      unit: ['本'],
    },
  ],
}

addProduct = () => {
  this.setState({
      count: this.state.count+1,
  })
}

  render() {
    return (
      <div>
        <Router>
          <Layout  count = {this.state.count}>
            <Switch>
              <Route exact path="/" render={() => (<Home addProduct = {this.addProduct} />)} ></Route>
              <Route exact path="/order" render={() => (<Order  cartList={this.state.cartList}/>)} ></Route>
              <Route exact path="/product" component={Product} ></Route>
              <Route exact path="/u" render={() => (<User  product={this.state.product}/>)} ></Route>
              <Route render={()=><div>404</div>} ></Route>
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
