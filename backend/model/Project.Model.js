// Project.Model.js

import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true, 
        trim: true
    },
    desc: { 
        type: String, 
        required: true 
    },
    stack: [{ 
        type: String 
    }],
    git: { 
        type: String, 
        required: true, 
        trim: true 
    }
}, { timestamps: true });

const Projects = mongoose.model('Projects', projectSchema);
export default Projects;