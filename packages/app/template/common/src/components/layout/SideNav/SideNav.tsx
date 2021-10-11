import { Text } from '@medly-components/core';
import { DashboardIcon } from '@medly-components/icons';
import { MedlySidenavHeader, SideNav as MedlySideNav } from '@medly-components/layout';
import React, { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Component: React.FC = React.memo(() => {
    const { pathname } = useLocation(),
        history = useHistory(),
        handlePathChange = useCallback((page: string) => history.push(page), [history]);
    return (
        <MedlySideNav onChange={handlePathChange} active={pathname} defaultActive="/">
            <MedlySidenavHeader />
            <MedlySideNav.List>
                <MedlySideNav.Nav path="/">
                    <DashboardIcon />
                    <Text>Dashboard</Text>
                </MedlySideNav.Nav>
            </MedlySideNav.List>
        </MedlySideNav>
    );
});
Component.displayName = 'AppSideNav';

export const SideNav = Object.assign(Component, { Style: MedlySideNav.Style });
