import { useUser } from '@context';
import { Avatar, Text } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { useMemo } from 'react';
import * as Styled from './Header.styled';
const Component: FC = () => {
    const {
        state: { firstName, lastName }
    } = useUser();

    const nameInitials = useMemo(() => (firstName && lastName ? `${firstName[0]}${lastName[0]}`.toUpperCase() : ''), [firstName, lastName]);

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
export const Header: FC & WithStyle = Object.assign(Component, { Style: Styled.Header });
