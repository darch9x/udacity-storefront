import Client from "../database";

export type Order = {
    id?: number;
    user_id: number;
    status: string;
}
export type OrderProduct = {
    id?: number;
    quantity: number;
    product_id: number;
    order_id: number;
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
            const sql = 'INSERT INTO orders (user_id, status) VALUES ($1, $2) RETURNING *';
            const conn = await Client.connect();
            const result = await conn.query(sql, [o.user_id, o.status]);
            
            conn.release();

            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not add new order. Error: ${err}`);
        }
    }

    async addProduct(op: OrderProduct): Promise<OrderProduct> {
        try {
            const sql = 'INSERT INTO order_products (product_id, order_id, quantity) VALUES ($1, $2, $3) RETURNING *';
            const conn = await Client.connect();
            const result = await conn.query(sql, [op.product_id, op.order_id, op.quantity]);

            conn.release();

            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not add new product. Error: ${err}`);
        }
    }
}