import * as Actions from './actions';

import {call, put, takeEvery} from 'redux-saga/effects';

import {getUser} from './service';
import {setUser} from './slice';

/**
 * Send Verify Code saga
 * Doğrulama Kodu Gönder
 * @param payload
 * @returns {IterableIterator<*>}
 */
function* getUserSaga({payload}) {
  try {
    //pending true
    const name = payload;
    const response = yield call(getUser);
    if (response.status === 200) {
      yield put(setUser(response.data.results));
    }
  } catch (error) {
    console.log('sendVerifyCodeSaga error : ' + error);
  }
}

export default function* authSaga() {
  yield takeEvery(Actions.getUserAction.type, getUserSaga);
}
