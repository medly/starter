import { initialState } from '@store';
import { mockAxios, render, screen } from '@test-utils';
import { user } from '@testData';
import { Provider } from 'react-redux';
import reduxMockStore from 'redux-mock-store';
import Header from './Header.container';

describe('Header', () => {
    const mockResponse = {
            firstName: 'Jon',
            lastName: 'Doe',
            email: 'jon@doe.com',
            phoneNumber: '849489283131'
        },
        mockStore = reduxMockStore(),
        renderHeader = (store: ReturnType<typeof mockStore>) =>
            render(
                <Provider store={store}>
                    <Header />
                </Provider>
            );

    beforeAll(() => {
        mockAxios.onGet('https://run.mocky.io/v3/7937982d-ac84-4657-a1f2-e4fcf5f6d375').reply(200, mockResponse);
    });

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
