

// ======================================================= new =================================================================



// backend/routes/certification.Route.js
import express from 'express';

import { createCertification, getCertification } from '../controllers/certification.Controller.js';

const router = express.Router();

router.route('/')
    .get(getCertification)
    .post(createCertification);

export default router;