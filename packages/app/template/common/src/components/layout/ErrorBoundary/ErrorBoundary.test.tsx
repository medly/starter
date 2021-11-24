import { render, screen, waitFor } from '@test-utils';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PageContent from '../PageContent';
import ErrorBoundary from './ErrorBoundary';
const NoMatch = () => <pre>Something went wrong</pre>;

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

        const ErrorComponent = () => <div>{dummy()()}</div>;
        render(
            <MemoryRouter initialEntries={['/']}>
                <ErrorBoundary>
                    <PageContent>
                        <ErrorComponent />
                    </PageContent>
                </ErrorBoundary>
                <Routes>
                    <Route path={'/error'} element={<NoMatch />} />
                </Routes>
            </MemoryRouter>
        );

        waitFor(() => expect(screen).toHaveTextContent('Something went wrong'));
    });
});
