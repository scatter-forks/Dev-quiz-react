import React, { Component } from 'react';
import './app.less';
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Order from './Order';
import AddProduct from './AddProduct';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path='/' component={Home} />
          <Route exact path='/order' component={Order} />
          <Route exact path='/add-product' component={AddProduct} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
