import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

import Navigation from './components/navigation/navigation.component';
import Header from './components/header/header.component';


function App() {
  return (

    <div className="App">
      <Navigation />

     <Switch>
       <Route exact path='/' component={HomePage} />
       <Route exact path="/you" component={Header} />
     </Switch>
    </div>
  );
}

export default App;
