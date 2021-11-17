import { ErrorBoundary, Header, PageLayout, SideNav } from '@components';
import { CssBaseline, ToastContainer } from '@medly-components/core';
import Routes from '@routes';
import { defaultTheme } from '@theme';
import { UserProvider } from 'context';
import type { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
const App: FC = () => (
    <ThemeProvider theme={defaultTheme}>
        <>
            <CssBaseline />
            <Router>
                <ErrorBoundary>
                    <UserProvider>
                        <PageLayout>
                            <ToastContainer position="top-end" />
                            <SideNav />
                            <Header />
                            <Routes />
                        </PageLayout>
                    </UserProvider>
                </ErrorBoundary>
            </Router>
        </>
    </ThemeProvider>
);
export default App;
