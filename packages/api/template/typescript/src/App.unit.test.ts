import request from 'supertest';
import app from './app';

describe('app', () => {
    it('should be listening', async () => {
        const { status } = await request(app).get('/').send();
        expect(status).toBe(200);
    });
});