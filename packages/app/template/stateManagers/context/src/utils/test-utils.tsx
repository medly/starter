import { UserProvider } from '@context';
import { ToastContainer } from '@medly-components/core';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { defaultTheme } from '@theme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import type { FC, ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
export const mockAxios = new MockAdapter(axios);

const WithThemeProvider: FC = props => (
    <ThemeProvider theme={defaultTheme}>
        <>
            <ToastContainer position="top-end" />
            {props.children}
        </>
    </ThemeProvider>
);

const WithRouter: FC = props => (
    <MemoryRouter>
        <WithThemeProvider>{props.children}</WithThemeProvider>
    </MemoryRouter>
);

const WithUserProvider: FC = props => {
    return (
        <WithRouter>
            <UserProvider {...props} />
        </WithRouter>
    );
};

const customRender = (ui: ReactElement, options?: RenderOptions): RenderResult => render(ui, { wrapper: WithThemeProvider, ...options });

export const renderWithUserProvider = (ui: ReactElement, options?: RenderOptions): RenderResult =>
    render(ui, { wrapper: WithUserProvider, ...options });

export const renderWithRouter = (ui: ReactElement, options?: RenderOptions): RenderResult =>
    render(ui, { wrapper: WithRouter, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
