import { user } from '@testData';
import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchFailure, fetchSuccess } from '../actions';
import { handleFetch, userSaga } from '../sagas';
import { UserActionTypes } from '../types';

describe('User saga', () => {
    it('should listen FETCH_USER_ACTION', () => {
        const gen = userSaga();
        expect(gen.next().value).toEqual(takeLatest(UserActionTypes.FETCH_USER_ACTION_REQUEST, handleFetch));
    });

    it('should dispatch fetchSuccess action when we receive response from the API', () => {
        const gen = handleFetch({ id: 'dummy', type: UserActionTypes.FETCH_USER_ACTION_REQUEST });
        expect(gen.next().value).toEqual(call(axios.get, 'https://run.mocky.io/v3/dummy'));
        expect(gen.next({ data: user }).value).toEqual(put(fetchSuccess(user)));
    });

    it('should dispatch error action when API gives error', () => {
        const gen = handleFetch({ id: 'dummy', type: UserActionTypes.FETCH_USER_ACTION_REQUEST });
        expect(gen.next().value).toEqual(call(axios.get, 'https://run.mocky.io/v3/dummy'));
        expect(gen.throw({ data: { message: 'Something went wrong' } }).value).toEqual(
            put(fetchFailure({ message: 'Something went wrong' }))
        );
    });
});
