import { Router } from 'express';

import GithubController from './app/controllers/GithubController';

const routes = new Router();

routes.get('/', GithubController.index);

export default routes;
