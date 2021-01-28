import React from 'react';
import {  Route } from 'react-router-dom';



import ProductCardInfo from './Product-cardinfo'

function ProductCard({item,match,url}) {
   
    return (
        <div>
             <Route path={`${url}/:productId`}>
        <ProductCardInfo data={item} />
      </Route>
      <Route exact path={url}>
        <p>Please select a product.</p>
      </Route>  
    
            
        
    </div>)
}


export default ProductCard;