import { AxiosResponse } from 'axios';
import { FetchFailureAction, FetchSuccessAction, FetchUserAction, User, UserActionTypes } from './types';

export const fetchUser = (): FetchUserAction => ({
    type: UserActionTypes.FETCH_USER_ACTION_REQUEST
});

export const fetchSuccess = (user: User): FetchSuccessAction => ({
    user,
    type: UserActionTypes.FETCH_SUCCESS
});

export const fetchFailure = (error: AxiosResponse): FetchFailureAction => ({
    error,
    type: UserActionTypes.FETCH_FAILURE
});
