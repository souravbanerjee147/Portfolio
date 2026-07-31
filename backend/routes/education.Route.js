// education.Route.js



import express from 'express';
import { createEducation, getEducation } from '../controllers/education.Controller.js';
const router = express.Router();
router.route('/').get(getEducation).post(createEducation);
export default router;