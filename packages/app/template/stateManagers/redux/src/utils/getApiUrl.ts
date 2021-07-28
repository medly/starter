import { API_URLS } from '@constants/urls';

export function getApiUrl(key: string, { ...params }: Record<string, string | number> = {}): string {
    return API_URLS(key, params);
}
