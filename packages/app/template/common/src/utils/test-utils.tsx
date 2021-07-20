import { ToastContainer } from '@medly-components/core';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { defaultTheme } from '@theme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

export const mockAxios = new MockAdapter(axios);

const WithThemeProvider: React.FunctionComponent = props => (
    <ThemeProvider theme={defaultTheme}>
        <>
            <ToastContainer position="top-end" />
            {props.children}
        </>
    </ThemeProvider>
);

const WithRouter: React.FunctionComponent = props => (
    <MemoryRouter>
        <WithThemeProvider>{props.children}</WithThemeProvider>
    </MemoryRouter>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions): RenderResult =>
    render(ui, { wrapper: WithThemeProvider, ...options });

export const renderWithRouter = (ui: React.ReactElement, options?: RenderOptions): RenderResult =>
    render(ui, { wrapper: WithRouter, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
