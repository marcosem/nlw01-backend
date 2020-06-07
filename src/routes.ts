import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsCotroller';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

// Request Param - /:id
// Query Param - ?id=xxx
// Request Body - JSON in the body
 // index, show, create, update, delete
routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

// upload
routes.post('/points', upload.single('image'), pointsController.create);

export default routes;