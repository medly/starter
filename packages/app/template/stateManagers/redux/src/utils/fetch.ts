/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface AxiosReturn {
    response?: AxiosResponse<any>;
    error?: AxiosResponse<any>;
}

export async function fetch(config: AxiosRequestConfig): Promise<AxiosReturn> {
    try {
        // store your access token here
        const accessToken: any = "2412u8qeuyqhuwhufafjkeabr89qy4";
        const request = {
            ...config,
            baseURL: '/',
            headers: {
                ...(config.headers
                    ? config.headers
                    : {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`
                    })
            }
        };
        const response = await axios(request);
        return { response: { ...(response || { config, status: 500, data: '', headers: '', statusText: '' }) } };
    } catch (error) {
        return { error: { ...(error.response || { status: 500, data: error, variant: 'error' }) } };
    }
}
