import { Avatar, Text } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import * as Styled from './Header.styled';
const Component: FC = () => {
    return (
        <Styled.Header>
            <Styled.LeftSide>
                <Text textWeight="Strong" textVariant="h4">
                    Boilerplate
                </Text>
            </Styled.LeftSide>
            <Styled.RightSide>
                <Avatar size="M">JD</Avatar>
            </Styled.RightSide>
        </Styled.Header>
    );
};

Component.displayName = 'Header';
export const Header: FC & WithStyle = Object.assign(Component, { Style: Styled.Header });
