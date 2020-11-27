import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

import Navigation from './components/navigation/navigation.component';
import WareHouse from './pages/warehouse/warehouse.component';
import ContactUs from './pages/contact/contact.component';


function App() {
  return (

    <div className="App">
      <Navigation />

     <Switch>
       <Route exact path='/' component={HomePage} />
       <Route exact path="/warehouse" component={WareHouse} />
       <Route exact path="/contact" component={ContactUs} />
     </Switch>
    </div>
  );
}

export default App;
