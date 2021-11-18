import { renderWithRouter } from '@test-utils';
import userEvent from '@testing-library/user-event';
import { SideNav } from './SideNav';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockHistoryPush
}));

describe('SideNav', () => {
    it('should call history.push on click on dashboard', async () => {
        const { getByText } = renderWithRouter(<SideNav />);
        userEvent.click(getByText('Dashboard'));
        expect(mockHistoryPush).toHaveBeenCalledWith('/');
    });
});
