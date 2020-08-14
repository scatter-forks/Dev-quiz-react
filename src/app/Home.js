import React from 'react';
import './home.less';
import heroImg from '../images/hero-image.png'
import Header from '../component/Header';
import timerImg from '../images/timer.png'
import calculatorImg from '../images/calculator.png'
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import Product from '../component/Product';
import Footer from '../component/Footer';

const Home = () => {
  return (<div className="home">
    <div className='header'>
      <Header></Header>
    </div>
    <div className='products'>
      <Product row='firstRow'></Product>
      <Product row='secondRow'></Product>
      <Product row='threeRow'></Product>
      <Product row='fourRow'></Product>
      <Product row='firstRow'></Product>
      <Product row='secondRow'></Product>
      <Product row='threeRow'></Product>
      <Product row='fourRow'></Product>
    </div>
    <Footer></Footer>
  </div>);
};

export default Home;