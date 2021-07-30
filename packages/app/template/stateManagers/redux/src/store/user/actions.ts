import { AxiosResponse } from 'axios';
import { FetchSuccessAction, FetchUserAction, User, UserActionTypes, FetchFailureAction } from './types';

export const fetchUser = (id: string): FetchUserAction => ({
    id,
    type: UserActionTypes.FETCH_USER_ACTION_REQUEST
});

export const fetchSuccess = (user: User): FetchSuccessAction => ({
    user,
    type: UserActionTypes.FETCH_SUCCESS
});

export const fetchFailure = (error: AxiosResponse['data']): FetchFailureAction => ({
    error,
    type: UserActionTypes.FETCH_FAILURE
});
