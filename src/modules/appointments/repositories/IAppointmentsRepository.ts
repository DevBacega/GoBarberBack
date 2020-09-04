import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointDTO from '../dtos/ICreateAppointmentDTO';

export default interface IAppointmentsRepository {
    create(data: ICreateAppointDTO): Promise<Appointment>;
    findByDate(date: Date): Promise<Appointment | undefined>;
}
