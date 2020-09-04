import { Router } from 'express';
// Rotas: Receber a requisição, chamar outro arquivo ou devolver uma resposta.

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appoitmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appoitmentsController.create);

export default appointmentsRouter;
