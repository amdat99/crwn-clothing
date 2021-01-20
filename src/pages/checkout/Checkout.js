import React from 'react';
import CheckoutItem from '../../components/checkout/Checkout'
import StripeButton from '../../components/stripe-button/Stripe-button'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'

import './Checkout.scss'

function CheckoutPage({cartItems,total,currentUser}) {
    return (
        <div className='checkout-page'>
            <div className= 'checkout-header'>
                <div className= 'header-block'>
                    <span className= ''>Product</span>
                </div>
                
                <div className= 'header-block'>
                    <span className= ''>Description</span>
                </div>
               
                <div className= 'header-block'>
                    <span className= ''>Price</span>
                </div>
                
                <div className= 'header-block'>
                    <span className= ''>Quantity</span>
                </div>
                
                <div className= 'header-block'>
                    <span className= 'remove'>Remove</span>
                </div>
            </div>
                {cartItems.map(cartItem => 
                <CheckoutItem cartItem = {cartItem} key= {cartItem.id} / >
                )}
            <div className= 'total'>
                <span>Total: £{total}</span>
            </div>
            <div className= 'test-checkout'>
                *To test please use the following card details to pay:<br/>
                4242 4242 4242 4242 - Exp: 01/22 - CVV: 123 <br/>
                *Test user: email: john@gmail.com password: 123123 </div>
                {currentUser ?
              <div> 
                  <StripeButton price = {total} cartItems = {cartItems} />
              </div>: <Link className ='signin'  to='/signin'>please signin to make a purchase</Link>  }
           
            </div>
    );
}

const mapStateToProps = (createStructuredSelector) ({
    cartItems: selectCartItems,
    total: selectCartTotal,
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(CheckoutPage);