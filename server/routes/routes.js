import express from 'express';

const routes = express.Router();

// models 
import { getDatabase, signup } from '../controllers/clientAuth/client.js';

routes.get('/', getDatabase);
routes.post('/signup', signup);

export default routes;