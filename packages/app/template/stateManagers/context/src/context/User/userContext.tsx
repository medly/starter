import React, { createContext, useContext, useReducer } from 'react';
import { Dispatch, UserActions, UserActionTypes, User } from './types';

export const initialState: User = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
};

const UserContext = createContext<{ state: User; dispatch: Dispatch } | undefined>(undefined);

export const userReducer = (state: User, { type, ...payload }: UserActions) => {
    switch (type) {
        case UserActionTypes.ADD_USER:
            return {
                ...state,
                ...payload
            };
        case UserActionTypes.REMOVE_USER:
            return {
                ...initialState
            };
        default:
            return state;
    }
};

const UserProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);
    const value = { state, dispatch };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export { UserProvider, useUser };
