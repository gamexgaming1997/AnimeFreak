import express from 'express';

const routes = express.Router();

// models 
import { getDatabase } from '../controllers/clientAuth/client.js';

routes.get('/', getDatabase);

export default routes;