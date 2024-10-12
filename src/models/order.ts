import Client from "../database";

export type Order = {
    id?: number;
    product_id: number;
    user_id: number;
    quantity: number;
    status: string;
}

export class OrderStore {
    async index(): Promise<Order[]> {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM orders';
            const result = await conn.query(sql);

            conn.release();

            return result.rows;
          } catch (err) {
            throw new Error(`Could not get orders. Error: ${err}`)
          }
    }
    async getCurrentOrderByUser(userId: string):  Promise<Order> {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM orders WHERE user_id=($1)';
            const result = await conn.query(sql, [userId]);

            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not find order by user ${userId}. Error: ${err}`)
        }
    }

    async create(o: Order): Promise<Order> {
        try {
            const sql = 'INSERT INTO orders (product_id, user_id, quantity, status) VALUES ($1, $2, $3, $4) RETURNING *';
            const conn = await Client.connect();
            const result = await conn.query(sql, [o.product_id, o.user_id, o.quantity, o.status]);

            conn.release();

            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not add new order. Error: ${err}`);
        }
    }
}