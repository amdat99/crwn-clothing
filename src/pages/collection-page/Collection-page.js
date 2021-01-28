import React ,{useEffect} from 'react';
import CollectionItem from '../../components/collection-item/Collection-item'

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors'



import './Collection-page.scss'

const CollectionPage = ({ collection,match }) => {
  const { items, title } = collection;

 useEffect( () => {

 })

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
            <CollectionItem key={item.id} item={item} className='collection-item' />
          ))}
        </div>
      </div>
    );
  };
  
  const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  });
  
  export default connect(mapStateToProps)(CollectionPage);