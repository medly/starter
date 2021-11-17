import { PageContent } from '@components/layout';
import { Text } from '@medly-components/core';
import type { FC } from 'react';
import { DashboardProps } from './types';
export const Dashboard: FC<DashboardProps> = ({ isLoading }) => (
    <PageContent isLoading={isLoading}>
        <Text textWeight="Strong" textVariant="body1">
            Dashboard Content
        </Text>
    </PageContent>
);
Dashboard.displayName = 'Dashboard';
