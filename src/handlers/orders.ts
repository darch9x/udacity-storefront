import express, { Request, Response } from 'express';
import { Order, OrderProduct, OrderStore } from '../models/order';
import verifyAuthToken from './verifyAuthToken';

const store = new OrderStore();

const index = async (_req: Request, res: Response) => {
    try {
        const orders = await store.index();
        res.json(orders);
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

const show = async (req: Request, res: Response) => {
    try {
        const order = await store.getCurrentOrderByUser(req.params.userId);
        res.json(order);
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

const create = async (req: Request, res: Response) => {
    try {
        const order: Order = {
            user_id: req.body.userId,
            status: req.body.status
        }
        const newOrder = await store.create(order);
        res.json(newOrder);
    } catch (err) {
        res.status(400)
        res.json('err: ' + err)
    }
}

const addProductToOrder = async (req: Request, res: Response) => {
    try {
        const orderProduct: OrderProduct = {
            product_id: req.body.productId,
            order_id: req.body.orderId,
            quantity: req.body.quantity
        }
        const newProduct = await store.addProduct(orderProduct);
        res.json(newProduct);
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

const orderRoutes = (app: express.Application) => {
    app.get('/orders', verifyAuthToken, index);
    app.get('/orders/byUser/:userId', verifyAuthToken, show);
    app.post('/orders', verifyAuthToken, create);
    app.post('/orders/addProductToOrder', verifyAuthToken, addProductToOrder);
}

export default orderRoutes