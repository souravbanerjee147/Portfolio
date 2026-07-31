// education.Controller.js 
import Education from '../model/Education.Model.js';

export async function createEducation(req, res) {
  try {
    const { degree, institution, duration, details, url } = req.body;
    const newEdu = await Education.create({ degree, institution, duration, details, url });
    return res.status(201).json({ success: true, data: newEdu });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
}

export async function getEducation(req, res) {
  try {
    const eduList = await Education.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: eduList });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}