import productActionTypes from './products.types'

const initialState = {
	items: ''
}


 const getProducts = (state= initialState, action= {})=> {
	switch(action.type){
	 case productActionTypes.GET_ITEMS:
	   return {
		   ...state,
		items: action.payload 
	   }
	 default: 
		return state
 }
} 

export default getProducts
