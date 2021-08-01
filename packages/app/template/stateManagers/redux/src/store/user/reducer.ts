import { Reducer } from 'redux';
import { User, UserActions, UserActionTypes } from './types';

export const initialState: User = null;

export const user: Reducer<User, UserActions> = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.FETCH_SUCCESS:
            return { ...state, ...action.user };
        default:
            return state;
    }
};
