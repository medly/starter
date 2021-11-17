import { render } from '@test-utils';
import Dashboard from './';

describe('Dashboard', () => {
    it('should render properly', () => {
        const { container } = render(<Dashboard />);
        expect(container).toMatchSnapshot();
    });

    it('should show loading if isLoading Prop is true', () => {
        const { container } = render(<Dashboard isLoading />);
        expect(container).toMatchSnapshot();
    });
});
