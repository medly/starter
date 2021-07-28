import { fetch } from './fetch';
import { mockAxios } from './test-utils';

describe('fetchData', () => {
    it('fetches successfully data from an API', async () => {
        const data = {
            "email": "john@doe.com",
            "firstName": "John",
            "id": "1",
            "lastName": "Doe",
            "phone": "555-555-555",
        };

        mockAxios.onGet(`https://run.mocky.io/v3/7937982d-ac84-4657-a1f2-e4fcf5f6d375`).reply(200, data);

        const { response } = await fetch({
            url: 'https://run.mocky.io/v3/7937982d-ac84-4657-a1f2-e4fcf5f6d375',
            method: 'GET'
        });

        expect(response.data).toEqual(data);
    });

    it('fetches erroneously data from an API', async () => {
        const errorMessage = 'Network error';

        mockAxios.onGet('/api/v1/fake/broken').reply(500, { message: errorMessage });

        const { error } = await fetch({
            url: '/api/v1/fake/broken',
            method: 'GET'
        });

        expect(error.data.message).toEqual(errorMessage);
    });
});
