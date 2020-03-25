import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import app from './components/sylefiles/app.scss'

import HomePage from './components/HomePage';
import Footer from './components/Footer';
import SummarySeasons from './components/SummarySeasons';


function App() {
  return (
    <div className="App">
      
      <HomePage />
      {/* <Route exact path="/summaryseasons" component={SummarySeasons} /> */}
      <Footer />

    </div>
  );
}

export default withRouter(App);
