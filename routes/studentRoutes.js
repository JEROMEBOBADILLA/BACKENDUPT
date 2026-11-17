import * as studentController from '../controllers/studentController.js';
import express from 'express';

const studentRoutes = express.Router();

studentRoutes.get('/all', studentController.fetchAllstudents);
studentRoutes.post('/', studentController.createstudents);
studentRoutes.put('/:id', studentController.editstudents);
studentRoutes.delete('/:id', studentController.deletestudents);

export default studentRoutes;