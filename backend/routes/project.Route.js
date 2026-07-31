// project.Route.js


// import express from 'express';
// import { createProject, getProject } from '../controllers/project.Controller.js';

// const router = express.Router();

// router.route('/')
//     .get(getProject)
//     .post(createProject);

// export default router;




// ============================================================ new =====================================================



// backend/routes/project.Route.js
import express from 'express';
// import { createProject, getProject } from '../controllers/project.Controller.js';
import { createProject, getProject } from '../controllers/project.Controller.js';

const router = express.Router();

router.route('/')
    .get(getProject)
    .post(createProject);

export default router;