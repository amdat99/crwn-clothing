import React, { Component } from 'react';
import SHOP_DATA from './Shop.data.js'
import CollectionPreview from '../../components/collection-preview/Collection-Preview'

class Shop extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            collections: SHOP_DATA 
            }
        }
    
    render() {
        return (
            <div>
            { this.state.collections.map(({id, ...otherCollectionProps}) =>(
            <CollectionPreview key= {id} {...otherCollectionProps} />
            )) }
            </div>
        );
    }
}

export default Shop;