import React from 'react'
import './Cart-item.scss'

import {connect} from 'react-redux'
import {minusItem} from '../../redux/cart/cart.actions'



function CartItem({item, decrementItem}) {

    const { name, price, imageUrl, quantity} = item;
    return(
        <div className = 'cart-item'>
            <img src={imageUrl} alt = 'item' />
         
           <div className = 'item-details'>
                <span className= 'name'>{name}</span>
                <div className= 'name'>{quantity}x£{price}</div>
                <span className= 'remove'onClick ={() => decrementItem(item) } >remove item</span>
            </div> 
        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    decrementItem: item => dispatch(minusItem(item)),
})

export default connect(null,mapDispatchToProps)(CartItem);