import { Order, OrderProduct, OrderStore } from "../order";

const orderStore = new OrderStore();

const mockOrder: Order[] = [
    {
        "user_id": 2,
        "status": "active"
    }
];
const mockOrderProduct: OrderProduct[] = [
    {
        "quantity": 5,
        "product_id": 1,
        "order_id": 1
    }
];

describe('Order model', () => {
    it('should have index method',  () => {
        expect(orderStore.index).toBeDefined();
    });
    it('should have create method',  () => {
        expect(orderStore.create).toBeDefined();
    });
    it('should add a new order with create method', async () => {
        const result = await orderStore.create(mockOrder[0]);
        const resultId = result.id;
        mockOrder[0].id = resultId;
        expect(result).toEqual(mockOrder[0]);
    });
    it('should return a order product with addProduct method', async () => {
        const result = await orderStore.addProduct(mockOrderProduct[0])
        expect(result.product_id).toEqual(mockOrderProduct[0].product_id);
    });
})