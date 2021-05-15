import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header/Header'
import Banner from './components/banner/Banner';
import Main from './pages/Main/Main';
import Catalog from './pages/Catalog/Catalog';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Footer from './components/footer/Footer';

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
                <Route exact path='/catalog' component={Catalog}/>
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
