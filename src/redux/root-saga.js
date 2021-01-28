import { all , call } from 'redux-saga/effects';
// import { fetchCollectionsPendingAsync } from './shop/shop.actions';

import { shopSagas } from './shop/shop.sagas'
import { userSagas } from './user/user.sagas'

export default function * rootSaga() {

        yield all([call(shopSagas), call(userSagas)]);
    } 
