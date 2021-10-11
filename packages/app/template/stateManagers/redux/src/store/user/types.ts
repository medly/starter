import { Action } from 'redux';

export enum UserActionTypes {
    FETCH_USER_ACTION_REQUEST = '@@user/FETCH_USER_ACTION_REQUEST',
    FETCH_SUCCESS = '@@user/FETCH_SUCCESS',
    FETCH_FAILURE = '@@user/FETCH_FAILURE'
}

export type User = {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly phone: string;
};

export interface FetchUserAction extends Action {
    id: string;
    type: typeof UserActionTypes.FETCH_USER_ACTION_REQUEST;
}

export interface FetchSuccessAction extends Action {
    user: User;
    type: typeof UserActionTypes.FETCH_SUCCESS;
}

export interface FetchFailureAction extends Action {
    error: unknown;
    type: typeof UserActionTypes.FETCH_FAILURE;
}

export type UserActions = FetchUserAction | FetchSuccessAction | FetchFailureAction;
