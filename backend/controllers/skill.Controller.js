// skill.Controller.js

import Skill from '../model/Skill.Model.js';

export async function createSkill(req, res) {
  try {
    const { category, skills } = req.body;
    const newSkill = await Skill.create({ category, skills });
    return res.status(201).json({ success: true, data: newSkill });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
}

export async function getSkills(req, res) {
  try {
    const skillList = await Skill.find({}).sort({ createdAt: 1 });
    return res.status(200).json({ success: true, data: skillList });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}