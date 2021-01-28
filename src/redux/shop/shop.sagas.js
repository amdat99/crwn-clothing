import { takeLatest, call, put, all }  from 'redux-saga/effects'
import {firestore, collectionsSnapshotToMap} from '../../firebase/firebase'

import shopActionTypes from './shop.types';
import { fetchCollectionsSuccess, fetchCollectionsFailed } from './shop.actions';

export function* fetchCollectionsAsync() {
   yield console.log('firedS')
try{
   const collectionRef = firestore.collection('collections')
    const snapshot =  yield collectionRef.get();
    const collectionsMap = yield call(collectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap));
}catch (error) {
    yield put(fetchCollectionsFailed(error.message));

}}

//         collectionRef.get().then((snapshot) => { 
//    const collectionsMap = collectionsSnapshotToMap(snapshot)
//    dispatch(fetchCollectionsSuccess(collectionsMap))
//      }).catch(error => dispatch(fetchCollectionsFailed(error.errorMessage)))
// }

export function* fetchCollectionsPending() {
    yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_PENDING, 
   fetchCollectionsAsync
    )
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsPending)
    ])

}