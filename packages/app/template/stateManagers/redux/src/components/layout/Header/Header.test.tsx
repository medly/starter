import { PageLayout } from '@components';
import { initialState } from '@store';
import { user } from '@testData';
import { render, screen } from '@test-utils';
import React from 'react';
import { Provider } from 'react-redux';
import reduxMockStore from 'redux-mock-store';
import Header from './Header.container';

describe('Header', () => {
    const mockStore = reduxMockStore();
    const renderHeader = (store: ReturnType<typeof mockStore>) =>
        render(
            <Provider store={store}>
                <PageLayout>
                    <Header />
                </PageLayout>
            </Provider>
        );

    it('should render properly', () => {
        const { container } = renderHeader(mockStore({ ...initialState, user: null }));
        expect(container).toMatchSnapshot();
    });

    it('should show the users initials after fetching the data', () => {
        renderHeader(mockStore({ ...initialState, user: user }));
        expect(screen.getByText(/JD/i)).toBeInTheDocument();
    });

    it('should show the empty initials if user has no name', () => {
        const { container } = renderHeader(mockStore({ ...initialState, user: { firstName: null, lastName: null } }));
        expect(container).toMatchSnapshot();
    });
});
