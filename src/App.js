import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/Shop'
import Header from './components/header/Header';
import SigninAndSignup from './pages/signin&signup/Signin&Signup'
import { auth } from './firebase/firebase';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
      }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
     this.setState({currentUser: user})
       console.log(user)
  })
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component = {HomePage} />
          <Route  path='/shop' component = {Shop} />
          <Route  path='/signin' component = {SigninAndSignup} />

        </Switch>
      </div>
    );
  }
}

export default App;
