import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

import Navigation from './components/navigation/navigation.component';
import WareHouse from './pages/warehouse/warehouse.component';
import ContactUs from './pages/contact/contact.component';
import Adverts from './components/adverts/adverts.component';
import About from './pages/about/about.component';
import Dispatch from './pages/dispatch/dispatch.component';
import Footer from './components/footer/footer.component';
import ScrollToTop from './scrollToTop';


function App() {
  return (

    <div className="App">
      <Navigation />
      <ScrollToTop>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path="/warehouse" component={WareHouse} />
              <Route exact path="/contact" component={ContactUs} />
              <Route exact path="/about" component={About} />
              <Route exact path="/adspage" component={Adverts} />
              <Route exact path="/dispatch" component={Dispatch} />
            </Switch>
      </ScrollToTop>

     <Footer/>
    </div>
  );
}

export default App;
