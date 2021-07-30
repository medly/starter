export enum UserActionTypes {
    ADD_USER = 'ADD_USER',
    REMOVE_USER = 'REMOVE_USER'
}

export type User = {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly phoneNumber: string;
};

export type AddUserAction = User & {
    type: typeof UserActionTypes.ADD_USER;
};

export type RemoveUserAction = {
    type: typeof UserActionTypes.REMOVE_USER;
};

export type UserActions = AddUserAction | RemoveUserAction;

export type Dispatch = (action: UserActions) => void;
