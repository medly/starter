import { Reducer } from 'redux';
import { User, UserActions, UserActionTypes } from './types';

export const initialState: User = null;

export const user: Reducer<User, UserActions> = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER_ACTION_REQUEST:
            return state;
        case UserActionTypes.FETCH_SUCCESS:
            return action.user;
        case UserActionTypes.FETCH_FAILURE:
            return state;
        default:
            return state;
    }
};
