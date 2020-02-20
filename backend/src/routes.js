import {Router} from 'express';

import DonorController from './app/controllers/DonorController'

const routes = new Router();

routes.post('/donors', DonorController.store);
routes.get('/donors', DonorController.index);

export default  routes