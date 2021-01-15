import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/Shop'
import Header from './components/header/Header';
import SigninAndSignup from './pages/signin&signup/Signin&Signup'
import { auth , createUserProfileDoc } from './firebase/firebase';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
     if(userAuth){
       const userRef = await createUserProfileDoc(userAuth)
       userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser:{
              id: snapshot.id,
              ...snapshot.data()
            }
          } , () =>{
            console.log(this.state)
          }
          )})
     }
     this.setState({currentUser: userAuth})
    }
  )}

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
