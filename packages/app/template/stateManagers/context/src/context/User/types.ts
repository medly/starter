export enum UserActionTypes {
    ADD_USER = 'ADD_USER',
    REMOVE_USER = 'REMOVE_USER'
}

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

export interface AddUserAction extends User {
    type: typeof UserActionTypes.ADD_USER;
}

export interface RemoveUserAction {
    type: typeof UserActionTypes.REMOVE_USER;
}

export type UserActions = AddUserAction | RemoveUserAction;

export type Dispatch = (action: UserActions) => void;
