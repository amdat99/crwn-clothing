import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/Shop'
import CheckoutPage from './pages/checkout/Checkout'
import Header from './components/header/Header';


import SigninAndSignup from './pages/signin&signup/Signin&Signup'
import ProductsPage from './pages/products/ProductsPage'
import { auth , createUserProfileDoc , collectionsSnapshotToMap, firestore } from './firebase/firebase';

import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions';
import { setSearchField } from './redux/search/search.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { updateCollections } from './redux/shop/shop.actions'


import './App.css';




class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentUser: null
  //     }
  // }

  state = {
    loading: true
  }

  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    // getting user data from firestore
    const { setCurrentUser} =this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
     if(userAuth){
       const userRef = await createUserProfileDoc(userAuth)
       userRef.onSnapshot(snapshot => {
          setCurrentUser ({
              id: snapshot.id,
              ...snapshot.data()
            })
          }) }setCurrentUser(userAuth)
        })
    
        //getting shop data
     const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections')
        // collectionRef.Snapshot(async snapshot =>{
        //  const collectionsMap = collectionsSnapshotToMap(snapshot)
       // })
       this.unsubscribeFromSnapshot =  collectionRef.get().then((snapshot) => { 
            const collectionsMap = collectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
              this.setState({loading:false})
           })
          } 
  componentWillUnmount(){
  this.unsubscribeFromAuth();
}
render() {
    return (
      <div className="app">
       
        <Header searchChange= {this.props.onSearchChange} />
        
        <Switch>
          <Route exact path='/' component = {HomePage} />
          <Route  path='/shop' component = {Shop} 
          loading= {this.state.loading}
          />
          <Route exact path = '/products' component = {ProductsPage}
           loading= {this.state.loading} />
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,

})
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  onSearchChange: (event)=> dispatch(setSearchField(event.target.value)),
  updateCollections: collectionsMap => {
    dispatch(updateCollections(collectionsMap))
}
  })
  

export default connect( mapStateToProps,
  mapDispatchToProps)(App);
