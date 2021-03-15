import { Router } from 'express';
import speechRouter from './speechRouter';

const routes = Router();

routes.use('/speech', speechRouter);

export default routes;
