import { API_URLS } from '@constants/urls';
import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchFailure, fetchSuccess } from './actions';
import { FetchUserAction, UserActionTypes } from './types';

export function* handleFetch({ id }: FetchUserAction): any {
    try {
        const response = yield call(axios.get, API_URLS('USER', { id }));
        yield put(fetchSuccess(response.data));
    } catch (error) {
        yield put(fetchFailure(error.data));
    }
}

export function* userSaga() {
    yield takeLatest(UserActionTypes.FETCH_USER_ACTION_REQUEST, handleFetch);
}
