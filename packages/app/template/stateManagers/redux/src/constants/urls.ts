export const API_URLS = (key: string, params?: Record<string, unknown>): string => {
    const urls: Record<string, string> = {
        USER: `https://run.mocky.io/v3/${params.id}`
    };
    return urls[key];
};
