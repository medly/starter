import { addToast } from '@medly-components/core';
import { Avatar, Text } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import axios from 'axios';
import { useUser } from '@context';
import { User, UserActionTypes } from '@context/User/types';
import React, { useEffect, useMemo, useCallback } from 'react';
import * as Styled from './Header.styled';

const FETCH_USER_URL = 'https://run.mocky.io/v3/7937982d-ac84-4657-a1f2-e4fcf5f6d375';

export const Header: React.FC & WithStyle = () => {
    const {
        dispatch,
        state: { firstName, lastName }
    } = useUser();

    const getInitials = useCallback(
            () => (firstName && lastName ? `${firstName[0]}${lastName[0]}`.toUpperCase() : ''),
            [firstName, lastName]
        ),
        nameInitials = useMemo(() => getInitials(), [getInitials]);

    useEffect(() => {
        axios
            .get<User>(FETCH_USER_URL)
            .then(response => {
                dispatch({
                    type: UserActionTypes.ADD_USER,
                    ...response.data
                });
            })
            .catch(error => {
                console.log(error);
                addToast({
                    variant: 'error',
                    header: 'Error',
                    message: `Unable to fetch user information.`
                });
            });
    }, [dispatch]);

    return (
        <Styled.Header>
            <Styled.LeftSide>
                <Text textWeight="Strong" textVariant="h4">
                    Boilerplate
                </Text>
            </Styled.LeftSide>
            <Styled.RightSide>
                <Avatar size="M">{nameInitials}</Avatar>
            </Styled.RightSide>
        </Styled.Header>
    );
};

Header.displayName = 'Header';
Header.Style = Styled.Header;

export default Header;
