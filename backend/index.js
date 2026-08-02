
// backend/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';
import projectRouter from './routes/project.Route.js';
// import certificationRouter from './routes/certification.Route.js';
import certificationRouter from './routes/certification.Route.js';
import contactRouter from './routes/contact.Route.js';
import skillRouter from './routes/skill.Route.js';
import experienceRouter from './routes/experience.Route.js';
import educationRouter from './routes/education.Route.js';

dotenv.config();

const app = express();

// Global Middlewares
app.use(cors());
// app.use(cors({
//   origin: [ 
//     'http://localhost:5173',
//     'http://localhost:5175',
//     'http://localhost:3000'
//   ],
//   credentials: true
// }));
app.use(express.json());

// Initialize Database Connection
connectDB();

// Mount API Endpoints cleanly
app.use('/api/projects', projectRouter);
app.use('/api/certifications', certificationRouter);
app.use('/api/contact', contactRouter);
app.use('/api/skills', skillRouter);
app.use('/api/experience', experienceRouter);
app.use('/api/education', educationRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Portfolio API Running at http://localhost:${PORT}`);
});