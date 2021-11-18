import { renderWithRouter } from '@test-utils';
import { Routes } from './Routes';

describe('Routes', () => {
    it('should render dashboard page properly', async () => {
        const { findByText } = renderWithRouter(<Routes />);
        const dashboard = await findByText('Dashboard Content', {}, { timeout: 5000 });
        expect(dashboard).toBeInTheDocument();
    });
});
