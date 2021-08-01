import { addToast } from '@medly-components/core';
import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { Dispatch, User, UserActions, UserActionTypes } from './types';

const FETCH_USER_URL = 'https://run.mocky.io/v3/7937982d-ac84-4657-a1f2-e4fcf5f6d375';

export const initialState: User = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
};

const UserContext = createContext<{ state: User; dispatch: Dispatch } | undefined>(undefined);

// This reducer is only created for demo purpose. In this scenario it was not needed.
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

    useEffect(() => {
        axios
            .get<User>(FETCH_USER_URL)
            .then(response => {
                dispatch({
                    type: UserActionTypes.ADD_USER,
                    ...response.data
                });
            })
            .catch(() =>
                addToast({
                    variant: 'error',
                    header: 'Error',
                    message: `Unable to fetch user information.`
                })
            );
    }, [dispatch]);

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
