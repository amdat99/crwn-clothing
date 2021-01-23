import React from 'react';
import CollectionProduct from '../collection-item/Collection-product'


import {connect} from 'react-redux'

import './Collection-items.scss';



function CollectionItems({items, searchField}) {

   const filteredProducts= () =>{
        return items.filter( item =>{ 
        return item.name.toLowerCase().includes(searchField.toLowerCase());
        })
    }
    return (
        <div className='products'>
            
            
            <div className="preview1">
                { 
                filteredProducts().map((item) =>(
                <CollectionProduct key= {item.id} item={item} />                
                )) }
             </div>
        </div>
    );
}

const mapStateToProps = ({ search }) => ({
    searchField: search.searchField
  });

export default connect(mapStateToProps)(CollectionItems)