import { User, UserStore } from "../user";

const userStore = new UserStore();
const mockUser: User[] = [
    {
        "firstname": "Jack",
        "lastname": "Bieber",
        "password": "123123"
    }
]

describe('User model', () => {
    it('should have index method',  () => {
        expect(userStore.index).toBeDefined();
    });
    it('should have show method',  () => {
        expect(userStore.show).toBeDefined();
    });
    it('should have create method',  () => {
        expect(userStore.create).toBeDefined();
    });
    it('should add a new user with create method', async () => {
        const result = await userStore.create(mockUser[0]);
        const resultId = result.id;
        mockUser[0].id = resultId;

        expect(result.firstname).toEqual(mockUser[0].firstname);
    });
    it('should return a list with index method', async () => {
        const result = await userStore.index();
        expect(result).toBeInstanceOf(Array);
    });
    it('should return a user with show method', async () => {
        const id = mockUser[0].id!;
        const result = await userStore.show(id.toString());
        expect(result.lastname).toEqual(mockUser[0].lastname);
    });
})