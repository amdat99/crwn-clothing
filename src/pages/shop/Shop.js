import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/Collections-overview'
import CollectionPageContainer from '../collection-page/Collection-page.container'
// import WithSpinner from '../../components/loading-spinner/Loading-spinner'

import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux'
import { isCollectionsLoaded } from '../../redux/shop/shop.selectors';

const Shop = ({match ,isCollectionsLoaded}) => {
   return (
            <div className='shop-page'>
       {  <Route
          exact
          path={`${match.path}`}> {isCollectionsLoaded ?
          <CollectionsOverview /> : <h1 style ={{marginTop: '40px'}}>Loading...</h1>}
        </Route>}
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
        );
    
}

const mapStateToProps = createStructuredSelector({
  isCollectionsLoaded: isCollectionsLoaded,
  })

export default connect(mapStateToProps)( Shop)