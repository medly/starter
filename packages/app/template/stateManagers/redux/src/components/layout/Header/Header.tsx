import { Avatar, Text } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import React, { useCallback, useMemo } from 'react';
import * as Styled from './Header.styled';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> & WithStyle = ({ firstName, lastName }) => {
    const getInitials = useCallback(
            () => (firstName && lastName ? `${firstName[0]}${lastName[0]}`.toUpperCase() : ''),
            [firstName, lastName]
        ),
        nameInitials = useMemo(() => getInitials(), [getInitials]);

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
