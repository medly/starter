import { ToastContainer } from '@medly-components/core';
import { initialState } from '@store';
import { rootSaga } from '@store/sagas';
import { user } from '@testData';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { defaultTheme } from '@theme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import type { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import reduxMockStore from 'redux-mock-store';
import reduxSaga from 'redux-saga';
import { ThemeProvider } from 'styled-components';
export const mockAxios = new MockAdapter(axios);

const sagaMiddleware = reduxSaga();

const mockStore = reduxMockStore([sagaMiddleware]),
    store = mockStore({
        ...initialState,
        user
    });
sagaMiddleware.run(rootSaga);

const WithThemeProvider: FC = props => (
    <ThemeProvider theme={defaultTheme}>
        <>
            <ToastContainer position="top-end" />
            {props.children}
        </>
    </ThemeProvider>
);

const WithStore: FC = props => (
    <Provider store={store}>
        <WithThemeProvider>{props.children}</WithThemeProvider>
    </Provider>
);

const WithRouter: FC = props => (
    <MemoryRouter>
        <WithThemeProvider>{props.children}</WithThemeProvider>
    </MemoryRouter>
);

const WithStoreAndRouter: FC = props => (
    <Provider store={store}>
        <WithRouter>{props.children}</WithRouter>
    </Provider>
);

const customRender = (ui: ReactElement, options?: RenderOptions): RenderResult => render(ui, { wrapper: WithThemeProvider, ...options });

export const renderWithStore = (ui: ReactElement, options?: RenderOptions): RenderResult => render(ui, { wrapper: WithStore, ...options });

export const renderWithRouter = (ui: ReactElement, options?: RenderOptions): RenderResult =>
    render(ui, { wrapper: WithRouter, ...options });

export const renderWithStoreAndRouter = (ui: ReactElement, options?: RenderOptions): RenderResult =>
    render(ui, { wrapper: WithStoreAndRouter, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render, store };
