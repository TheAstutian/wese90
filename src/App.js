import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

import Navigation from './components/navigation/navigation.component';
function App() {
  return (
    <div className="App">
      <Navigation />
      
     <HomePage />
    </div>
  );
}

export default App;
