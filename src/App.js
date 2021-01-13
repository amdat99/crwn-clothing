import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/Shop'

import './App.css';

const HatsPage = () => {
  return(
  <div> 
    <h1> HatsPage </h1>
  </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component = {HomePage} />
          <Route  path='/shop' component = {Shop} />
        </Switch>
      </div>
    );
  }
}

export default App;
