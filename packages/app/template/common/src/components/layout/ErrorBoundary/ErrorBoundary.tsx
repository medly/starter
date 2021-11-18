import type { FC } from 'react';
import { ErrorBoundary as ReactErrorBoundary, FallbackProps } from 'react-error-boundary';
const ErrorFallback: FC<FallbackProps> = ({ error }) => {
    return <p>{error.message}</p>;
};
const ErrorBoundary: FC = ({ children }) => {
    return <ReactErrorBoundary FallbackComponent={ErrorFallback}>{children}</ReactErrorBoundary>;
};

export default ErrorBoundary;
