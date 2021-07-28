
import { getApiUrl } from '@utils/getApiUrl';
import { fetch } from '@utils/fetch';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchFailure, fetchSuccess } from './actions';
import { UserActionTypes } from './types';

export function* handleFetch() {
    const { response, error } = yield call(fetch, {
        url: getApiUrl('USER'),
        method: 'GET'
    });

    if (response && response.data) {
        yield put(fetchSuccess(response.data));
    } else {
        yield put(fetchFailure(error));

    }
}

export function* userSaga() {
    yield takeLatest(UserActionTypes.FETCH_USER_ACTION_REQUEST, handleFetch);
}
