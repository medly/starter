import { AddUserAction, RemoveUserAction, UserActionTypes } from './types';

export const addUser = (userName: string, email: string, phoneNumber: string): AddUserAction => ({
    userName,
    email,
    phoneNumber,
    type: UserActionTypes.ADD_USER
});

export const removeUser = (): RemoveUserAction => ({
    type: UserActionTypes.REMOVE_USER
});
