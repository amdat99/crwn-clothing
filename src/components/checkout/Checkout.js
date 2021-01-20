import React from 'react';


import { connect } from 'react-redux'
import {clearItemFromCart, addItem, minusItem} from '../../redux/cart/cart.actions'

import './Checkout.scss';

const CheckoutItem = ( {cartItem, clearItem, decrementItem,incrementItem} ) => {
    const {name,quantity,price, imageUrl} = cartItem

    
return (
  
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
        <span className='name'>{name}</span>
        <span className='price'>£{price}</span>
        
        <div className='arrow' onClick={ () => decrementItem(cartItem)}>&#10094;</div>   
            <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => incrementItem(cartItem)}>&#10095; </div>
           
      
    <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
  </div>

   
) }

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    decrementItem: (item) => dispatch(minusItem(item)),
    incrementItem: (item) => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);