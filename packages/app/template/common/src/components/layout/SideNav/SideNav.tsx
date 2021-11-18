import { Text } from '@medly-components/core';
import { DashboardIcon } from '@medly-components/icons';
import { MedlySidenavHeader, SideNav as MedlySideNav } from '@medly-components/layout';
import type { FC } from 'react';
import { memo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Component: FC = memo(() => {
    const { pathname } = useLocation(),
        navigate = useNavigate(),
        handlePathChange = useCallback((page: string) => navigate(page), [navigate]);
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
