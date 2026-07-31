// experience.Controller.js



import Experience from '../model/Experience.Model.js';

export async function createExperience(req, res) {
  try {
    const { role, company, duration, description } = req.body;
    const newExp = await Experience.create({ role, company, duration, description });
    return res.status(201).json({ success: true, data: newExp });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
}

export async function getExperience(req, res) {
  try {
    const expList = await Experience.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: expList });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}