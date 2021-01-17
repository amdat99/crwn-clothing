import React from 'react';
import CartItem from '../cart-item/Cart-item'
import CustomButton from '../custom-button/CustomButton'

import { connect } from 'react-redux';
import { selectCartItems} from '../../redux/cart/cart.selectors'


import './CartDropdown.scss'
function CartDropdown({cartItems}) {
    return (
        <div className = 'cart-dropdown'>
            <div className = 'cart-items hide-scroll'>  
            {
                cartItems.map(cartItem => {
                return <CartItem key ={cartItem.id} item = {cartItem} />
                } )
            } 

             </div>
            <CustomButton>CHECKOUT</CustomButton> 

           
            
        </div>
    );
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
  });

//   const mapStateToProps = ({ cart: { cartItems } }) => ({
//     cartItems
//   });
export default connect(mapStateToProps)(CartDropdown);