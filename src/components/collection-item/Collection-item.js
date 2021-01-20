import React from 'react';
import CustomButton from '../custom-button/CustomButton' 

import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.actions'

import './collection-item.scss'

function CollectionItem ({item, incrementItem}) {
    const { name, price, imageUrl} = item;
    return (
        <div className="collection-item">
            <div className="image"
                 style={{ 
                    backgroundImage: `url(${imageUrl})`
                     }}>   
                 <div className="collection-footer">
                    <span className='name'>{name} </span>
                    <span className= 'price'>£{price} </span>
                </div> 
                <CustomButton onClick={() => incrementItem(item)} inverted >
                    Add to Cart
                </CustomButton>
            </div> 
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    incrementItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);