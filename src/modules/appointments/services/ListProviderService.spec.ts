import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ShowProfileService from '@modules/users/services/ShowProfileService';
import AppError from '@shared/errors/AppError';
import ListProviderService from './ListProviderService';

let fakeUsersRepository: FakeUsersRepository;
let listProviderService: ListProviderService;

describe('UpdateProfile', () => {
    beforeEach(() => {
        fakeUsersRepository = new FakeUsersRepository();
        listProviderService = new ListProviderService(fakeUsersRepository);
    });

    it('should be able to list the providers', async () => {
        const user1 = await fakeUsersRepository.create({
            name: 'John Doe',
            email: 'john@example.com',
            password: '123456',
        });
        const user2 = await fakeUsersRepository.create({
            name: 'John Trê',
            email: 'johntre@example.com',
            password: '123456',
        });
        const loggedUser = await fakeUsersRepository.create({
            name: 'John Qua',
            email: 'johnqua@example.com',
            password: '123456',
        });

        const providers = await listProviderService.execute({
            user_id: loggedUser.id,
        });

        expect(providers).toEqual([user1, user2]);
    });
});
