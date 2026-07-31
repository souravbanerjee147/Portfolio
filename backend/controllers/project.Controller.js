// project.Controller.js

import Projects from '../model/Project.Model.js';

export async function createProject(req, res) {
    try {
        const { title, desc, stack, git } = req.body;
        const newProject = await Projects.create({ title, desc, stack, git });
        return res.status(201).json({success: true, data: newProject });
    } catch (err) {
        return res.status(400).json({ success: false, "error" : err.message });
    }
}

export async function getProject(req, res) {
    try {
        const projectItems = await Projects.find({});
        if (projectItems) {
            return res.status(200).json({success: true, data: projectItems });
        }
        return res.status(404).json({ success: false, message: "No data found" });
    } catch (err) {
        return res.status(500).json({"error": err.message });
    }
}