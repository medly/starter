import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

class ErrorBoundary extends React.PureComponent<RouteComponentProps> {
    public componentDidCatch() {
        this.props.history.push('/');
    }

    public render() {
        return <>{this.props.children}</>;
    }
}

export default withRouter(ErrorBoundary);
