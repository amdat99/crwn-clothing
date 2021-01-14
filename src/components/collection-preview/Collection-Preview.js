import React from 'react';
import CollectionItem from '../collection-item/Colletion-item'

import './Collection-Preview.scss';



function CollectionPreview({title,items}) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                items.filter((item,i) => i<5)
                .map(({id,...itemProps}) =>(
                <CollectionItem key= {id}{...itemProps} />                
                )) }
             </div>
        </div>
    );
}

export default CollectionPreview;