import request from 'supertest';
import app from '../server';

describe('Order endpoints', () => {
    let token = '';
    beforeAll(async () => {
        const res = await request(app).post('/users/').send({
            firstName: 'dinh',
            lastName: 'le',
            password: '123'
        });

        const {body} = res;
        token = body;
    })

    it('should respond with 200 on GET /orders/byUser/:userId', async () => {
        const res = await request(app).get('/orders/byUser/2').set('Authorization', `Bearer ${token}`);
        expect(res.status).toBe(200);
    });
  });