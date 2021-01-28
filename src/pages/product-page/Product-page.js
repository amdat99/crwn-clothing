import React from 'react';
import { Link, Route, useRouteMatch } from "react-router-dom";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCollectionsforProductPage ,isCollectionsLoaded } from '../../redux/shop/shop.selectors'



import './Product-page.scss'
import ProductCard from '../../components/product-card/Product-card';
import ProductCardInfo from '../../components/product-card/Product-cardinfo';

function ProductPage({collection,loaded,match}) {

 const items = collection.flat(10)
 console.log(items)

  return (
    <div>

   {  
   <Route  exact path={`${match.path}`}> {loaded ? 
   

    items.map(item => 
      <ProductCard item={item} /> 
      ) : <h1 style ={{marginTop: '40px'}}>Loading...</h1>}
    
      </Route>}
     
     </div>
  )
  



}
const mapStateToProps = (createStructuredSelector) ({
    collection: selectCollectionsforProductPage,
    loaded: isCollectionsLoaded

})




  export default connect(mapStateToProps)(ProductPage);
