 
 import productActionTypes from './products.types'
 
 export const setProductInfo = (items)=>({
		
    type: productActionTypes.CHANGE_SEARCH_FIELD,
    payload: items

})