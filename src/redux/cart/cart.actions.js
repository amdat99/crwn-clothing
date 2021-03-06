
import cartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
})

export const cartHiddenTrue = () => ({
    type: cartActionTypes.TOGGLE_CART_TRUE
})

export const cartHiddenFalse = () => ({
    type: cartActionTypes.TOGGLE_CART_FALSE
})

export const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const minusItem = (item) => ({
    type: cartActionTypes.MINUS_ITEM,
    payload: item
})

export const clearItemFromCart = (id) => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: id
})

export const clearAllItemsFromCart = (items) => ({
    type: cartActionTypes.CLEAR_ITEM_ALL_FROM_CART,
    payload: items
})

export const onPurchase = () => ({
    type: cartActionTypes.VERIFY_PURCHASE
    
})
