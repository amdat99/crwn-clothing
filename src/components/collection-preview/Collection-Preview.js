import React from 'react';
import CollectionItem from '../collection-item/Collection-item'
import { Link } from 'react-router-dom'

import './Collection-Preview.scss';



function CollectionPreview({title,items}) {
    return (
        <div className="collection-preview">
            <h1 className='title'>
                <Link to={`/shop/${title.toLowerCase()}`}> {title.toUpperCase()} </Link>
            </h1> 
            <div className="preview">
                {
                items.filter((item,i) => i<5)
                .map((item) =>(
                <CollectionItem key= {item.id} item={item} />                
                )) }
             </div>
        </div>
    );
}

export default CollectionPreview