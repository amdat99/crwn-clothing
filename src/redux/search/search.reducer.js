import searchActionTypes from './search.types'

const initialSearchState = {
	searchField: ''
}


 const searchProducts = (state= initialSearchState, action= {})=> {
	switch(action.type){
	 case searchActionTypes.CHANGE_SEARCH_FIELD:
	   return Object.assign({}, state, { searchField: action.payload })
	 default: 
		return state
 }
} 

export default searchProducts
