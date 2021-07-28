export const DEFAULT_URL = '/implicit/callback';

export const API_URLS = (key: string, params: Record<string, string | number>): string => {
    const routes: Record<string, string> = {
        USER: 'https://run.mocky.io/v3/7937982d-ac84-4657-a1f2-e4fcf5f6d375',
        DELETE_USER: `/api/v1/user/${params.userId}/delete`
    };
    return routes[key];
};
