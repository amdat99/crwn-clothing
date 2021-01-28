import React,{ useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/Shop'
import CheckoutPage from './pages/checkout/Checkout'
import Header from './components/header/Header';
import ProductPage from './pages/product-page/Product-page'


import SigninAndSignup from './pages/signin&signup/Signin&Signup'
import ProductsPage from './pages/products/ProductsPage'

import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux'
import {checkUserSession } from './redux/user/user.actions';
import { setSearchField } from './redux/search/search.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import {  fetchCollectionsPending } from './redux/shop/shop.actions'
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors'


import './App.css';




const  App = ({fetchCollectionsPending, checkUserSession,onSearchChange,currentUser}) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentUser: null
  //     }
  // }

  // state = {
  //   loading: true,
   
  // }
  

  // unsubscribeFromAuth = null;
  // unsubscribeFromSnapshot = null;

  useEffect(() => {

    // getting user data from firestore

    // this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
    //  if(userAuth){
    //    const userRef = await createUserProfileDoc(userAuth)
    //    userRef.onSnapshot(snapshot => {
    //       setCurrentUser ({
    //           id: snapshot.id,
    //           ...snapshot.data()
    //         })
    //       }) }setCurrentUser(userAuth)
    //     })
   
    
        //getting shop data
    //  const {updateCollections} = this.props
    //     const collectionRef = firestore.collection('collections')
    //     // collectionRef.Snapshot(async snapshot =>{    
    //     //  const collectionsMap = collectionsSnapshotToMap(snapshot)
    //    // })
    //    this.unsubscribeFromSnapshot =  collectionRef.get().then((snapshot) => { 
    //         const collectionsMap = collectionsSnapshotToMap(snapshot)
    //         updateCollections(collectionsMap)
    //           this.setState({loading:false})
    //        }) 

        checkUserSession();
        fetchCollectionsPending();
        
      
          // eslint-disable-next-line
           } ,[fetchCollectionsPending] )
  
//       componentWillUnmount(){
//   this.unsubscribeFromAuth();
// }




   
    return (
      <div className="app">
       
        <Header searchChange= {onSearchChange} />
        
        <Switch>
          <Route exact path='/' component = {HomePage} />
          <Route  path='/shop' component = {Shop}  />
          <Route exact path = '/products' component = {ProductsPage} />
          <Route  path='/checkout' component = {CheckoutPage} />
          <Route exact path='/signin' 
          render = {() => currentUser ? (
          <Redirect to= '/'/> ) : ( <SigninAndSignup/> )
          }/>
      

        <Route   path = '/product' component = {ProductPage} />

 


        </Switch>
   
      </div>
    );
  }


 const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
  // collections : selectCollectionsForPreview
  
 })


const mapDispatchToProps = (dispatch) => ({
  // setCurrentUser: user => dispatch(setCurrentUser(user)),
  onSearchChange: (event)=> dispatch(setSearchField(event.target.value)),
//   updateCollections: collectionsMap => {
//     dispatch(updateCollections(collectionsMap))
// // }
checkUserSession: () => dispatch(checkUserSession()),
fetchCollectionsPending: () => dispatch(fetchCollectionsPending())
  })
  

export default connect( mapStateToProps,
  mapDispatchToProps)(App);
