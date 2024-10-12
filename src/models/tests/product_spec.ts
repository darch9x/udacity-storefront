import { Product, ProductStore } from "../product";

const productStore = new ProductStore();
const mockProduct: Product[] = [
    {
        "name": "pipeapple",
        "price": 500,
        "category": "fruit"
    }
]

describe('Product model', () => {
    it('should have index method',  () => {
        expect(productStore.index).toBeDefined();
    });
    it('should have show method',  () => {
        expect(productStore.show).toBeDefined();
    });
    it('should have create method',  () => {
        expect(productStore.create).toBeDefined();
    });
    it('should add a new product with create method', async () => {
        const result = await productStore.create(mockProduct[0]);
        const resultId = result.id;
        mockProduct[0].id = resultId;
        expect(result).toEqual(mockProduct[0]);
    });
    it('should return a list with index method', async () => {
        const result = await productStore.index();
        expect(result).toEqual(mockProduct);
    });
    it('should return a product with show method', async () => {
        const id = mockProduct[0].id ?? '';
        const result = await productStore.show(id.toString());
        expect(result).toEqual(mockProduct[0]);
    });
})