import { user as mockUser } from '@testData';
import { fetchFailure, fetchSuccess, fetchUser } from '../actions';
import { initialState, user } from '../reducer';

describe('User reducer', () => {
    it('should handle FETCH_USER_ACTION action', () => {
        expect(user(initialState, fetchUser())).toEqual(initialState);
    });

    it('should handle FETCH_SUCCESS action', () => {
        expect(user(initialState, fetchSuccess(mockUser))).toEqual(mockUser);
    });

    it('should handle FETCH_FAILURE action', () => {
        // @ts-ignore
        const error: AxiosResponse = { data: 'API Call Failed' };
        expect(user(initialState, fetchFailure(error))).toEqual(initialState);
    });
});
