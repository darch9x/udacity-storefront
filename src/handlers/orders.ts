import express, { Request, Response } from 'express';
import { Order, OrderStore } from '../models/order';
import verifyAuthToken from './verifyAuthToken';

const store = new OrderStore();

const index = async (_req: Request, res: Response) => {
    const orders = await store.index();
    res.json(orders);
}

const show = async (req: Request, res: Response) => {
    const order = await store.getCurrentOrderByUser(req.params.userId);
    res.json(order);
}

const create = async (req: Request, res: Response) => {
    try {
        const order: Order = {
            product_id: req.body.productId,
            user_id: req.body.userId,
            quantity: req.body.quantity,
            status: req.body.status
        }
        const newOrder = await store.create(order);
        res.json(newOrder);
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

const orderRoutes = (app: express.Application) => {
    app.get('/orders/', verifyAuthToken, index);
    app.get('/orders/byUser/:userId', verifyAuthToken, show);
    app.post('/orders/', verifyAuthToken, create);
}

export default orderRoutes