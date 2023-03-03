import { put, takeEvery } from 'redux-saga/effects';
import { actionTypes, fetchDataSuccess, fetchDataFailure } from './actions';

function* fetchUserData(action) {
  try {
    const response = yield call
    (fetch, `https://jsonplaceholder.typicode.com/users/${action.payload}`);
    const data = yield response.json();
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

function* watchFetchUserData() {
  yield takeEvery(actionTypes.FETCH_DATA_REQUEST, fetchUserData);
}

export default function* rootSaga() {
  yield all([
    watchFetchUserData(),
  ]);
}
