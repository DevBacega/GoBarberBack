import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;
describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });
  it('should be able to create a new appointment', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2021, 5, 10, 12).getTime();
    });
    const appointment = await createAppointment.execute({
      date: new Date(2021, 5, 10, 13),
      user_id: '123123',
      provider_id: '123123123',
    });

    expect(appointment).toHaveProperty('id');
  });
  it('should not be able to create two appointment on the same time', async () => {
    const appointmentDate = new Date(2020, 4, 10, 11);
    await createAppointment.execute({
      date: appointmentDate,
      user_id: '123123',
      provider_id: '123123123',
    });

    await expect(
      createAppointment.execute({
        date: appointmentDate,
        user_id: '123123',
        provider_id: '123123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointments on a past date', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2021, 5, 10, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2021, 4, 10, 11),
        user_id: '123123',
        provider_id: '123123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
