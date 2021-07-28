import { fetch } from '@utils/fetch';
import { user } from '@testData';
import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchFailure, fetchSuccess } from '../actions';
import { handleFetch, userSaga } from '../sagas';
import { UserActionTypes } from '../types';

describe('User saga', () => {
    const getGenerator = () => {
        // @ts-ignore
        const gen = handleFetch();
        expect(gen.next().value).toEqual(call(fetch, { url: 'https://run.mocky.io/v3/7937982d-ac84-4657-a1f2-e4fcf5f6d375', method: 'GET' }));
        return gen;
    };

    it('should listen FETCH_USER_ACTION', () => {
        const gen = userSaga();
        expect(gen.next().value).toEqual(takeLatest(UserActionTypes.FETCH_USER_ACTION_REQUEST, handleFetch));
    });

    it('should dispatch fetchSuccess action when we receive response from the API', () => {
        const testUser = user;
        expect(getGenerator().next({ response: { data: { ...testUser } }, error: {} }).value).toEqual(put(fetchSuccess(testUser)));
    });

    it('should dispatch error action when API gives error', () => {
        // @ts-ignore
        const error: AxiosResponse = { data: 'Error' };
        const gen = getGenerator();
        expect(gen.next({ response: {}, error }).value).toEqual(put(fetchFailure(error)));
        expect(gen.next().done).toBeTruthy();
    });
});
