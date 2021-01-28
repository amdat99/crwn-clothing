import shopActionTypes from './shop.types'
// import {  collectionsSnapshotToMap, firestore } from '../../firebase/firebase';

export const fetchCollectionsPending =  () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_PENDING
 
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailed = (errorMessage) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILED,
    payload: errorMessage
})

// export const fetchCollectionsPendingAsync = () => {
//     return dispatch => {
//     const collectionRef = firestore.collection('collections')
//         dispatch(fetchCollectionsPending())
//          collectionRef.get().then((snapshot) => { 
//         const collectionsMap = collectionsSnapshotToMap(snapshot)
//         // updateCollections(collectionsMap)
//         dispatch(fetchCollectionsSuccess(collectionsMap))
//           }).catch(error => dispatch(fetchCollectionsFailed(error.errorMessage)))
//       }}
