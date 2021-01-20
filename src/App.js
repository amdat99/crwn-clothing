import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'

import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/Shop'
import CheckoutPage from './pages/checkout/Checkout'

import Header from './components/header/Header';
import SigninAndSignup from './pages/signin&signup/Signin&Signup'
import { auth , createUserProfileDoc } from './firebase/firebase';

import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentUser: null
  //     }
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser} =this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
     if(userAuth){
       const userRef = await createUserProfileDoc(userAuth)
       userRef.onSnapshot(snapshot => {
          setCurrentUser ({
              id: snapshot.id,
              ...snapshot.data()
            }
          
          
          )})
     }
    //  this.setState({currentUser: userAuth})
        setCurrentUser(userAuth)
    }
  )}

  componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component = {HomePage} />
          <Route  path='/shop' component = {Shop} />
          <Route  path='/checkout' component = {CheckoutPage} />
          <Route exact path='/signin' 
          render = {() => this.props.currentUser ? (
          <Redirect to= '/'/> ) : ( <SigninAndSignup/> )
          }/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user}) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

})

export default connect(  mapStateToProps,
  mapDispatchToProps)(App);
