import { Action } from 'redux';

export enum UserActionTypes {
    ADD_USER = '@@user/ADD_USER',
    REMOVE_USER = '@@user/REMOVE_USER'
}

export interface UserState {
    userName: string;
    email: string;
    phoneNumber: string;
}

export interface AddUserAction extends Action {
    userName: string;
    email: string;
    phoneNumber: string;
    type: typeof UserActionTypes.ADD_USER;
}

export interface RemoveUserAction extends Action {
    type: typeof UserActionTypes.REMOVE_USER;
}

export type UserActions = AddUserAction | RemoveUserAction;
