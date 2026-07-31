// experience.Route.js


import express from 'express';
import { createExperience, getExperience } from '../controllers/experience.Controller.js';
const router = express.Router();
router.route('/').get(getExperience).post(createExperience);
export default router;
