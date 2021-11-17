import { mockAxios, renderWithUserProvider, screen } from '@test-utils';
import { Header } from './Header';

const mockResponse = {
    firstName: 'Jon',
    lastName: 'Doe',
    email: 'jon@doe.com',
    phoneNumber: '849489283131'
};

describe('Header', () => {
    beforeAll(() => {
        mockAxios.onGet('https://run.mocky.io/v3/7937982d-ac84-4657-a1f2-e4fcf5f6d375').reply(200, { ...mockResponse });
    });

    it('should render properly', () => {
        const { container } = renderWithUserProvider(<Header />);
        expect(container).toMatchSnapshot();
    });

    it('should get user data on mount', async () => {
        renderWithUserProvider(<Header />);
        const initials = await screen.findByText(/JD/i);
        expect(initials).toBeInTheDocument();
    });
});
