import React from 'react';
import CartItem from '../cart-item/Cart-item'
import CustomButton from '../custom-button/CustomButton'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux';
import { selectCartItems} from '../../redux/cart/cart.selectors'
import {toggleCartHidden}  from '../../redux/cart/cart.actions'


import './CartDropdown.scss'
function CartDropdown({cartItems, toggleCartHidden, history}) {
    return (
        <div className = 'cart-dropdown' onMouseLeave = {toggleCartHidden}>
            <div className = 'cart-items hide-scroll' >  
            {   
                cartItems.length ?
                cartItems.map(cartItem => {
                return <CartItem key ={cartItem.id} item = {cartItem}  />
                } )
                : <span className = 'empty-message'>Your cart is empty</span>
            } 

             </div>
             
            <CustomButton onClick = {() =>{
                 history.push('/checkout');
                toggleCartHidden()}}> CHECKOUT 
            </CustomButton> 
            
           
            
        </div>
    );
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
    
  });

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


//   const mapStateToProps = ({ cart: { cartItems } }) => ({
//     cartItems
//   });
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));