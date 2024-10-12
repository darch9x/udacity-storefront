import express, { Request, Response } from 'express';
import { User, UserStore } from '../models/user';
import verifyAuthToken from './verifyAuthToken';
import jwt from 'jsonwebtoken';

const store = new UserStore();

const index = async (_req: Request, res: Response) => {
    const users = await store.index();
    res.json(users);
}

const show = async (req: Request, res: Response) => {
    const users = await store.show(req.params.id);
    res.json(users);
}

const create = async (req: Request, res: Response) => {
    try {
        const user: User = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password
        }
        const newUser = await store.create(user);
        var token = jwt.sign({ user: newUser }, process.env.TOKEN_SECRET as string);
        res.json(token)
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

const userRoutes = (app: express.Application) => {
    app.get('/users', verifyAuthToken, index);
    app.get('/users/:id', verifyAuthToken, show);
    app.post('/users/', create);
}

export default userRoutes