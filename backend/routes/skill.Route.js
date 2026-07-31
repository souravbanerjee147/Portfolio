// skill.Route.js


import express from 'express';
import { createSkill, getSkills } from '../controllers/skill.Controller.js';
const router = express.Router();
router.route('/').get(getSkills).post(createSkill);
export default router;