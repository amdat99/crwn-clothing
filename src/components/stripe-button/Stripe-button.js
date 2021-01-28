import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
// import axios from 'axios';

import { connect } from 'react-redux'
import {clearAllItemsFromCart } from '../../redux/cart/cart.actions'


function StripeButton({ price,  clearCart  }) {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IBPzIJu0vryC2wBYlAbpDwAdguPArW50TXuXHXJHt8h76C3c4HAhBWrz7ujFXQ7ZMMPpGW7jGKLaFLBjABznIJ200cY63b1B1'
    
    const onToken = token => {
      fetch('https://enigmatic-harbor-19952.herokuapp.com/payment',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            amount: priceForStripe,
            token: token
          })
        })
          .then(response => {
            clearCart();
            alert('succesful payment');
          })
          .catch(error => {
            console.log('Payment Error: ', error);
            alert(
              'There was an issue with your payment! Please make sure you use the provided credit card.'
            );
          });
      };

    return (
        <StripeCheckout 
        label = 'Pay Now'
        name= 'Crown Clothing Ltd'
        billingAddress shippingAddress
        image= 'https://sendeyo.com/up/d/f3eb2117da'
        description = {`Your total is £${price}`}
        amount ={priceForStripe}
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

