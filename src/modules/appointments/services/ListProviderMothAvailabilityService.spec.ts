import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMothAvailabilityService from './ListProviderMothAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMothAvailability: ListProviderMothAvailabilityService;

describe('ListProviderMothAvailabilityService', () => {
    beforeEach(() => {
        fakeAppointmentsRepository = new FakeAppointmentsRepository();
        listProviderMothAvailability = new ListProviderMothAvailabilityService(
            fakeAppointmentsRepository,
        );
    });

    it('should be able to list month availability from provider', async () => {
        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            date: new Date(2021, 2, 25, 10, 0, 0),
        });
        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            date: new Date(2021, 2, 20, 8, 0, 0),
        });
        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            date: new Date(2021, 2, 5, 8, 0, 0),
        });
        await fakeAppointmentsRepository.create({
            provider_id: 'user',
            date: new Date(2021, 3, 5, 10, 0, 0),
        });
        const availability = await listProviderMothAvailability.execute({
            provider_id: 'user',
            year: 2021,
            month: 3,
        });

        expect(availability).toEqual(
            expect.arrayContaining([
                { day: 4, available: true },
                { day: 5, available: false },
                { day: 6, available: true },
                { day: 20, available: false },
                { day: 25, available: false },
            ]),
        );
    });
});
