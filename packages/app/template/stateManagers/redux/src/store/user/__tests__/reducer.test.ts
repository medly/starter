import { user as mockUser } from '@testData';
import { fetchFailure, fetchSuccess, fetchUser } from '../actions';
import { initialState, user } from '../reducer';

describe('User reducer', () => {
    it('should handle FETCH_USER_ACTION action', () => {
        expect(user(initialState, fetchUser('dummy'))).toEqual(initialState);
    });

    it('should handle FETCH_SUCCESS action', () => {
        expect(user(initialState, fetchSuccess(mockUser))).toEqual(mockUser);
    });

    it('should handle FETCH_FAILURE action', () => {
        expect(user(initialState, fetchFailure({ data: 'API Call Failed' }))).toEqual(initialState);
    });
});
