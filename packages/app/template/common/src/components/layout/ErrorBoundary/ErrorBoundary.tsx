import { Component, FC, memo } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

class ErrorBoundaryClass extends Component<{ navigate: NavigateFunction }> {
    public componentDidCatch() {
        this.props.navigate('/error');
    }

    public render() {
        return <>{this.props.children}</>;
    }
}
const ErrorBoundary: FC = memo(({ children }) => {
    const navigate = useNavigate();
    return <ErrorBoundaryClass navigate={navigate}>{children}</ErrorBoundaryClass>;
});

ErrorBoundary.displayName = 'ErrorBoundary';
export default ErrorBoundary;
