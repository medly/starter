import { renderWithRouter } from '@test-utils';
import React from 'react';
import Dashboard from './';

describe('Dashboard', () => {
    const renderDashboard = (isLoading: boolean) => renderWithRouter(<Dashboard isLoading={isLoading} />);

    it('should render properly', () => {
        const { container } = renderDashboard(false);
        expect(container).toMatchSnapshot();
    });

    it('should show loading if isLoading Prop is true', () => {
        const { container } = renderDashboard(true);
        expect(container).toMatchSnapshot();
    });
});
