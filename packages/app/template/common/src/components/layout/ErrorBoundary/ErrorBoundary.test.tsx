import { render, screen, waitFor } from '@test-utils';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PageContent from '../PageContent';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary component', () => {
    beforeEach(() => {
        jest.spyOn(console, 'error');
    });

    it('should render properly', () => {
        const dummy = jest
            .fn()
            .mockReturnValueOnce(() => {
                throw new Error('Something went wrong');
            })
            .mockReturnValue(() => 'Success');

        const ErrorComponent = () => (
            <ErrorBoundary>
                <PageContent>
                    <div>{dummy()()}</div>
                </PageContent>
            </ErrorBoundary>
        );
        const NoMatch = () => <pre>Something went wrong</pre>;

        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path={'/'} element={<ErrorComponent />} />
                    <Route path={'/error'} element={<NoMatch />} />
                </Routes>
            </MemoryRouter>
        );
        waitFor(() => expect(screen).toHaveTextContent('Something went wrong'));
    });
});
