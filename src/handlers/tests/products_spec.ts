import request from 'supertest';
import app from '../../server';

describe('Product endpoints', () => {
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

    it('should return a list of product on GET /products', async () => {
      const res = await request(app).get('/products/');
      expect(res.body).toBeInstanceOf(Array);
    });

    it('should respond with 200 on GET /products/2', async () => {
        const res = await request(app).get('/products/2');
        expect(res.status).toBe(200);
    });

    it('should respond with 200 on POST /products', async () => {
        const res = await request(app).post('/products/').set('Authorization', `Bearer ${token}`).send({
            name: 'apple',
            price: 299,
            category: 'fruit'
        });
        expect(res.status).toBe(200);
    });
  });