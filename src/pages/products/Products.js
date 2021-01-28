import React, { useState,useEffect } from 'react';

import CollectionItems from '../../components/collection-items/Collection-items';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForProduct } from '../../redux/shop/shop.selectors'




import './Products.scss'


function Products({collections}) {



  const [filteredCollections, setFilteredCollections] = useState(collections)
  
  useEffect(() => {
    filterCollections()
   
    // eslint-disable-next-line
  },[collections]);
  
  const filterCollections = (params) => {
    switch(params){
      case 'Hats':
        return setFilteredCollections(collections.filter( collection => {
          return collection.title.includes('Hats')}))
      case 'Sneakers':
        return setFilteredCollections(collections.filter( collection => {
          return collection.title.includes('Sneakers')}))
      case 'Jackets':
        return setFilteredCollections(collections.filter( collection => {
          return collection.title.includes('Jackets')}))
      case 'Mens':
        return setFilteredCollections(collections.filter( collection => {
          return collection.title.includes('Mens')}))
      case 'Womens':
          return setFilteredCollections(collections.filter( collection => {
            return collection.title.includes('Womens')}))
     default:
          return setFilteredCollections(collections)
        }
    }
  

  return (  
        <div className= 'product-items'>
        <h1 className= 'product-title'>Products</h1>
        
        <div className = 'product-item'>
         
            <div className="filter-container">
            { collections.map((collection, i) => (
            <span className= 'filter-item'params= {collection.title} key = {i} onClick={()=>filterCollections(collection.title)}> {collection.title}</span>  
            )) 
            }<span  onClick={() => filterCollections()}> reset</span>
        </div >
      
      { 
        filteredCollections.map(({ id, ...otherCollectionProps }) => (
          <CollectionItems key={id} {...otherCollectionProps} />
      ))}  
  </div></div>
);
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForProduct
});

export default connect(mapStateToProps)(Products);