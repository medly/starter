import { addUser, removeUser } from '../actions';
import { initialState, user } from '../reducer';
import { UserState } from '../types';

describe('User reducer', () => {
    it('should return initial on first load', () => {
        expect(user(undefined, { type: undefined })).toEqual(initialState);
    });

    it('should handle ADD_USER action', () => {
        const expected = {
            email: 'john@domain.com',
            phoneNumber: '+913434398394834',
            userName: 'John Doe'
        };
        expect(user(initialState, addUser('John Doe', 'john@domain.com', '+913434398394834'))).toEqual(expected);
    });

    it('should handle REMOVE_USER action', () => {
        const userSate: UserState = {
            userName: 'John Doe',
            email: 'john@domain.com',
            phoneNumber: '+919082375498'
        };
        expect(user(userSate, removeUser())).toEqual(initialState);
    });
});
