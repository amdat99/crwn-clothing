import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/Collections-overview'
import CollectionPage from '../collection-page/Collection-page'
import LoadingSpinner from '../../components/loading-spinner/Loading-spinner'


 const Shop = ({loading,match ,...otherProps}) => {
   

    
 
        return (
            <div className="shop-page">
                <Route exact path ={`${match.path}`} >
                { loading ? <LoadingSpinner /> :
                 <CollectionsOverview />
                }
                 </Route>
                <Route path ={`${match.path}/:collectionId`} component = {CollectionPage} />

            </div>
        );
    
}



export default Shop