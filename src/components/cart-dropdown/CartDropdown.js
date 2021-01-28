import React from 'react'
import CartItem from '../cart-item/Cart-item'
import CustomButton from '../custom-button/CustomButton'
import { withRouter, Link } from 'react-router-dom'
import ScrollToBottom from 'react-scroll-to-bottom';

import { connect } from 'react-redux';
import { selectCartItems} from '../../redux/cart/cart.selectors'
import {cartHiddenTrue,cartHiddenFalse,clearAllItemsFromCart}  from '../../redux/cart/cart.actions'


import './CartDropdown.scss'
function CartDropdown({cartItems, cartHiddenTrue,clearCart, history}) {
    

     
        return (
        <div className = 'cart-dropdown' onBlur ={cartHiddenTrue} tabIndex={'0'} > 
            <Link className = 'dropdown-clear-cart'onClick = { clearCart }> CLEAR CART &#9746; 
            </Link>
            <ScrollToBottom className = 'cart-items hide-scroll'  >  
            
           
            {   
                cartItems.length ?
                cartItems.map((cartItem, i) => {
                return <CartItem  key ={cartItem.id} item = {cartItem} />
                } )
                : <span className = 'empty-message'>Your cart is empty</span>
            } 

             </ScrollToBottom>
             
            <CustomButton onClick = {() =>{
                 history.push('/checkout');
                 cartHiddenTrue()}}> CHECKOUT 
            </CustomButton> 
         
            
           
            
        </div>
    );
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
    
  });

const mapDispatchToProps = (dispatch) => ({
    cartHiddenTrue: () => dispatch(cartHiddenTrue()),
    cartHiddenFalse: () => dispatch(cartHiddenFalse()),
    clearCart: items => dispatch(clearAllItemsFromCart(items))
})


//   const mapStateToProps = ({ cart: { cartItems } }) => ({
//     cartItems
//   });
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));

