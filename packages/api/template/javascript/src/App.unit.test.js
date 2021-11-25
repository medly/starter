import request from 'supertest';
import app from './app.js';

const Books = [
    { id: '1', title: 'Book 1', author: 'Author 1' },
    { id: '2', title: 'Book 2', author: 'Author 2' },
    { id: '3', title: 'Book 3', author: 'Author 3' },
    { id: '4', title: 'Book 4', author: 'Author 4' }
];
describe('api', () => {
    it('should return 200 on default route', async () => {
        const { status } = await request(app).get('/').send();
        expect(status).toBe(200);
    });

    it('should return all books on GET http://localhost:3000/api/book', async () => {
        const { status, body } = await request(app).get('/api/book');
        expect(status).toBe(200);
        expect(body).toEqual(Books);
    });

    it('should return info of book on GET http://localhost:3000/api/book/1', async () => {
        const { status, body } = await request(app).get('/api/book/1');
        expect(status).toBe(200);
        expect(body).toEqual(Books[0]);
    });

    it('should return 404 on GET http://localhost:3000/api/book/5', async () => {
        const { status } = await request(app).get('/api/book/5');
        expect(status).toBe(404);
    });

    it('should add book on POST http://localhost:3000/api/book', async () => {
        const { status } = await request(app).post('/api/book').send({
            id: '5',
            title: 'Book 5',
            author: 'Author 5'
        });
        expect(status).toBe(201);
    });

    it('should return error on POST http://localhost:3000/api/book', async () => {
        const { status } = await request(app).post('/api/book').send({
            id: '5',
            title: 'Book 5'
        });
        expect(status).toBe(400);
    });

    it('should delete info of book on DELETE http://localhost/api/book/4', async () => {
        const { status } = await request(app).delete('/api/book/4');
        expect(status).toBe(200);
    });

    it('should return 404 on DELETE http://localhost:3000/api/book/10', async () => {
        const { status } = await request(app).delete('/api/book/6');
        expect(status).toBe(404);
    });
});
