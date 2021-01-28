import { takeLatest, put, all, call} from 'redux-saga/effects'

import {  signInSuccess, signInFailure, signOutSuccess, signOutFailure, 
    signUpSuccess, signUpFailure} from './user.actions'
import userActionTypes from './user.types'

import { clearAllItemsFromCart }from '../cart/cart.actions'

import { auth, googleProvider, createUserProfileDoc, getCurrentUser  } from '../../firebase/firebase'//jjj


export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
      const userRef = yield call(
        createUserProfileDoc,
        userAuth,
        additionalData
      );
      const userSnapshot = yield userRef.get();
      yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
      yield put(signInFailure(error));
    }
  }
  
  export function* signInWithGoogle() {
    try {
      const { user } = yield auth.signInWithPopup(googleProvider);
      yield getSnapshotFromUserAuth(user);
    } catch (error) {
      yield put(signInFailure(error));
    }
  }
  
  export function* signInWithEmail({ payload: { email, password } }) {
    try {
      const { user } = yield auth.signInWithEmailAndPassword(email, password);
      yield getSnapshotFromUserAuth(user);
    } catch (error) {
      yield put(signInFailure(error));
    }
  }

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return 
        yield getSnapshotFromUserAuth(userAuth);
    }catch(error){
        yield put(signInFailure(error))

    }
}

export function* signOut(){
    try{
        yield auth.signOut()
        yield put(signOutSuccess())
        yield put(clearAllItemsFromCart())
    }catch(error){
        yield put(signOutFailure(error))

    }
}
export function* signUp({ payload: { email, password, displayName } }) {
    try {
      const { user } = yield auth.createUserWithEmailAndPassword(email, password);
      yield put(signUpSuccess({ user, additionalData: { displayName } }));
    } catch (error) {
      yield put(signUpFailure(error));
    }
  }
  
  export function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield getSnapshotFromUserAuth(user, additionalData);
  }


export function * onGoogleSignInPending() {
    yield takeLatest(userActionTypes.GOOGLE_SIGNIN_PENDING, signInWithGoogle);
}

export function * onEmailSignInPending() {
    yield takeLatest(userActionTypes.EMAIL_SIGNIN_PENDING, signInWithEmail);
}

export function * onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function * onSignOutPending() {
    yield takeLatest(userActionTypes.SIGNOUT_PENDING, signOut)
}

export function * onSignUpPending() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

export function * onSignUpSuccess() {
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}



export function* userSagas() {
    yield all([
      call(onGoogleSignInPending),
      call(onEmailSignInPending),
      call(onCheckUserSession),
      call(onSignOutPending),
      call(onSignUpPending),
      call(onSignUpSuccess)
    ]);
  }