import React from 'react'

import './Cart-item.scss'

import {connect} from 'react-redux'
import {minusItem, addItem} from '../../redux/cart/cart.actions'



function CartItem({item, decrementItem,incrementItem}) {

    const { name, price, imageUrl, quantity} = item;
    return(
        <div className = 'cart-item'>
            <img src={imageUrl} alt = 'item' />
         
           <div className = 'item-details'>
                <span className= 'name'>{name}</span>
                <div className= 'name'>{quantity}x£{price}</div>
                <div className= 'remove'> 
                    <span className= 'remove-span'onClick ={() => incrementItem(item) } >add</span>
                    <span  className = 'remove-span'onClick ={() => decrementItem(item) } >remove </span>
                </div>
            </div> 
        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    decrementItem: item => dispatch(minusItem(item)),
    incrementItem: item => dispatch(addItem(item)),
})

export default connect(null,mapDispatchToProps)(CartItem);