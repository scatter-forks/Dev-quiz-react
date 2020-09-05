import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import productInfo from './data/product.json'
import orderListInfo from './data/orderList.json'
import Home from '../src/component/Home'
import Layout from './component/Layout'
import Product from './component/AddProduct';
import Order from './component/Order';


class App extends React.Component {

state = {
  count: 0,
  product:{
    book:productInfo.book,
    toy:productInfo.toy,
  },
  cartList:orderListInfo,
}

addProduct = () => {
  this.setState({
      count: this.state.count+1,
  })
}

  render() {
    console.log(productInfo);
    return (
      <div>
        <Router>
          <Layout  count = {this.state.count}>
            <Switch>
              <Route exact path="/" render={() => (<Home addProduct = {this.addProduct} product={this.state.product}/>)} ></Route>
              <Route exact path="/order" render={() => (<Order  cartList={this.state.cartList}/>)} ></Route>
              <Route exact path="/product" component={Product} ></Route>
              <Route render={()=><div>404</div>} ></Route>
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
