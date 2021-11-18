import { FC, lazy, Suspense } from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';

const Dashboard = lazy(() => import(/* webpackChunkName: "Dashboard" */ /* webpackPrefetch: true */ '@pages/Dashboard'));

export const Routes: FC = () => (
    <Suspense fallback={<span>Loading ...</span>}>
        <ReactRoutes>
            <Route path="/" element={<Dashboard />} />
        </ReactRoutes>
    </Suspense>
);
