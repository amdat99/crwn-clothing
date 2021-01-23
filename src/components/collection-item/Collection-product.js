import React from 'react';


import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.actions'
import {cartHiddenFalse}  from '../../redux/cart/cart.actions'

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from './Collection-item.styles';

// import './collection-item.scss'

function CollectionProduct ({item, incrementItem,cartHiddenFalse}) {
    // const { name, price, imageUrl} = item;
    const { name, price, imageUrl } = item;
    
    return (
      
        <CollectionItemContainer>
            
           <BackgroundImage className='image' imageUrl={imageUrl}>
            <CollectionFooterContainer >
                <NameContainer >{name} </NameContainer>
                <PriceContainer >£{price} </PriceContainer>
            </CollectionFooterContainer > 
            <AddButton className ='custom-button'  onClick={() => {
                    incrementItem(item); cartHiddenFalse()  }} inverted >
                    Add to Cart
                </AddButton>
            </BackgroundImage> 
        </CollectionItemContainer>
    );
}

const mapDispatchToProps = (dispatch) => ({
    incrementItem: item => dispatch(addItem(item)),
    cartHiddenFalse: () => dispatch(cartHiddenFalse())
})

export default connect(null,mapDispatchToProps)(CollectionProduct);