
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner';
import Main from './pages//Main';
import CatalogPage from './pages/CatalogPage';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Footer from './components/Footer/Footer';
import ItemProductPage from './pages/ItemProductPage';
import ShoppingCart from './pages/ShoppingCart';

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
        <main className='container'>
          <div className='row'>
            <div className='col'>
              <Banner/>
              <Switch>
                <Route exact path='/' component={Main}/>
                <Route exact path='/catalog' component={CatalogPage}/>
                <Route exact path='/catalog/:id([0-9]+)?' component={ItemProductPage}/>
                <Route exact path='/cart'  component={ShoppingCart}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contacts' component={Contacts}/>
                <Route component={404}/>
              </Switch>
            </div>
          </div>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
