import request from 'supertest';
import app from '../../server';

describe('User endpoints', () => {
    let token = '';
    beforeAll(async () => {
        const res = await request(app).post('/users/').send({
            firstname: 'dinh',
            lastname: 'le',
            password: '123'
        });

        const {body} = res;
        token = body;
    })

    it('should return a list of user on GET /users', async () => {
      const res = await request(app).get('/users/').set('Authorization', `Bearer ${token}`);
      expect(res.body).toBeInstanceOf(Array);
    });

    it('should respond with 200 on GET /users/2', async () => {
        const res = await request(app).get('/users/2').set('Authorization', `Bearer ${token}`);
        expect(res.status).toBe(200);
    });

    it('should respond with 200 on POST /users', async () => {
        const res = await request(app).post('/users/').set('Authorization', `Bearer ${token}`).send({
            name: 'apple',
            price: 299,
            category: 'fruit'
        });
        expect(res.status).toBe(200);
    });
  });