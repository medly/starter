import { Avatar, Text } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { useEffect, useMemo } from 'react';
import * as Styled from './Header.styled';
import { HeaderProps } from './types';

const Component: FC<HeaderProps> = ({ fetchUser, firstName, lastName }) => {
    const nameInitials = useMemo(() => (firstName && lastName ? `${firstName[0]}${lastName[0]}`.toUpperCase() : ''), [firstName, lastName]);

    useEffect(() => {
        fetchUser('7937982d-ac84-4657-a1f2-e4fcf5f6d375');
    }, [fetchUser]);

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

Component.displayName = 'Header';
export const Header: FC<HeaderProps> & WithStyle = Object.assign(Component, { Style: Styled.Header });
