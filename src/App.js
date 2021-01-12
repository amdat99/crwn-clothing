import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage';

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
          <Route  path='/hats' component = {HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
