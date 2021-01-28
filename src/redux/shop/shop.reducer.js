
import shopActionTypes from './shop.types'


const INITIAL_STATE = {
    collections: null,
    isPending: false,
    hasFailed: ''

}

 const shopReducer = (state= INITIAL_STATE, action) => {
    switch (action.type){
        case shopActionTypes.FETCH_COLLECTIONS_PENDING:
            return{
                ...state,
                isPending: true
            }
        case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return{
                ...state,
                isPending: false,
                collections: action.payload
            }
            case shopActionTypes.FETCH_COLLECTIONS_FAILED:
                return{
                ...state,
                isPending: false,
                hasFailed: action.payload
                }
        default:
            return state
    }
}

export default shopReducer;
