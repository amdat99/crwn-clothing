import React from 'react';
import CollectionItem from '../collection-item/Collection-item'


import {connect} from 'react-redux'

import './Collection-items.scss';




function CollectionItems({items, searchField,i}) {

   const filteredProducts= () =>{
        return items.filter( item =>{ 
        return item.name.toLowerCase().includes(searchField.toLowerCase());
        })
    }

  
    return (
        <div className='products'>
            
            
            <div className="preview1">
                
                {filteredProducts().flatMap((item,i) =>(
                <div>
                <CollectionItem  key={item.length}
                    id={item.id} item={item} />  
             
                </div>)) }
             </div>
                
        </div>
    );
}

const mapStateToProps = ({ search }) => ({
    searchField: search.searchField
  });

export default connect(mapStateToProps)(CollectionItems)