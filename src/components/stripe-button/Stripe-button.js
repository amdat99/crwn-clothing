import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import { connect } from 'react-redux'
import {clearAllItemsFromCart } from '../../redux/cart/cart.actions'


function StripeButton({ price, cartItems, clearCart  }) {

    const priceforStripe = price * 100;
    const publishableKey = 'pk_test_51IBPzIJu0vryC2wBYlAbpDwAdguPArW50TXuXHXJHt8h76C3c4HAhBWrz7ujFXQ7ZMMPpGW7jGKLaFLBjABznIJ200cY63b1B1'
    
    const onToken = (token) => {
        clearCart(cartItems)
        alert('Your payment was successful')
        console.log(token)

    }

    return (
        <StripeCheckout 
        label = 'Pay Now'
        name= 'Crown Clothing Ltd'
        billingAddress shippingAddress
        image= 'https://sendeyo.com/up/d/f3eb2117da'
        description = {`Your total is £${price}`}
        amount ={priceforStripe}
        panelLabel='Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}
        currency="GBP" />
        
      
    );
}

const mapDispatchToProps = (dispatch) => ({
    clearCart: items => dispatch(clearAllItemsFromCart(items))

})

export default connect(null,mapDispatchToProps)(StripeButton);

