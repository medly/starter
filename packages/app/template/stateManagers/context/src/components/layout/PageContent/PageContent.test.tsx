import { renderWithUserProvider } from '@test-utils';
import React from 'react';
import { PageContent } from './PageContent';

describe('PageContent component', () => {
    it('should render properly', () => {
        const { container } = renderWithUserProvider(<PageContent>Demo PageContent</PageContent>);
        expect(container).toMatchSnapshot();
    });
    it('should render with loader properly', () => {
        const { container } = renderWithUserProvider(<PageContent isLoading={true}>Demo PageContent</PageContent>);
        expect(container).toMatchSnapshot();
    });
});
