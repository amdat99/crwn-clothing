import React, { useState,useEffect } from 'react';

import CollectionItems from '../../components/collection-items/Collection-items';


import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'



import './Products.scss'


function Products({collections}) {



  const [filteredCollections, setFilteredCollections] = useState(collections)
  
  useEffect(() => {
    filterCollections()
    // eslint-disable-next-line
  },[collections]);
  
  const filterCollections = (params) => {
    switch(params){
      case 'hats':
        return setFilteredCollections(collections.filter( collection => {
          return collection.title.includes('Hats')}))
      case 'sneakers':
        return setFilteredCollections(collections.filter( collection => {
          return collection.title.includes('Sneakers')}))
      case 'jackets':
        return setFilteredCollections(collections.filter( collection => {
          return collection.title.includes('Jackets')}))
     default:
          return setFilteredCollections(collections)
        }
    }
  

  return (  
        <div className="products">
          
          <div className="button">
            <span params= 'hats' onClick={()=> filterCollections('hats')}>hats</span>
            <span params= 'sneakers' onClick={()=> filterCollections('sneakers')}>sneakers</span>
            <span params= 'jackets' onClick={()=> filterCollections('jackets')}>jackets</span>
            <span  onClick={() => filterCollections()}>reset</span>
        </div>
      { 
      filteredCollections.map(({ id, ...otherCollectionProps }) => (
      <CollectionItems key={id} {...otherCollectionProps}
     />
    ))}  
  </div>
);
      }

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(Products);