import { renderWithRouter } from '@test-utils';
import { MemoryRouter } from 'react-router-dom';
import { Routes } from './Routes';

describe('Routes', () => {
    it('should render dashboard page properly', async () => {
        const { findByText } = renderWithRouter(
            <MemoryRouter initialEntries={[{ pathname: `/` }]}>
                <Routes />
            </MemoryRouter>
        );
        const dashboard = await findByText('Dashboard Content', {}, { timeout: 5000 });
        expect(dashboard).toBeInTheDocument();
    });
});
