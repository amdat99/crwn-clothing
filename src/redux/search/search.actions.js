 
 import searchActionTypes from './search.types'
 
 export const setSearchField = (text)=>({
		
    type: searchActionTypes.CHANGE_SEARCH_FIELD,
    payload: text

})