import { initialState } from '@store';
import { render } from '@test-utils';
import React from 'react';
import { Provider } from 'react-redux';
import reduxMockStore from 'redux-mock-store';
import PageContent from '../PageContent';
import PageLayout from './PageLayout.container';
import { user } from '@testData';

describe('PageLayout component', () => {
    const mockStore = reduxMockStore();
    const renderPageLayout = (store: ReturnType<typeof mockStore>) =>
        render(
            <Provider store={store}>
                <PageLayout>
                    <PageContent>
                        <div>Success</div>
                    </PageContent>
                </PageLayout>
            </Provider>
        );

    it('should render properly', () => {
        const { container } = renderPageLayout(mockStore({ ...initialState, user }));
        expect(container).toHaveTextContent('Success');
    });

    it('should show error message when failed to fetch user', () => {
        const { container } = renderPageLayout(mockStore({ ...initialState, user }));
        expect(container).toHaveTextContent('Success');
    });
});
