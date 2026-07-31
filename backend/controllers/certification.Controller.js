// certification.Controller.js


import Certification from '../model/Certification.Model.js';

export async function createCertification(req, res) {
    try {
        const { title, organization, date, details, certificateUrl, Affiliation } = req.body;
        const newCertificate = await Certification.create({ title, organization, date, details, certificateUrl, Affiliation });
        return res.status(201).json({ success: true, data: newCertificate });
    } catch (err) {
        return res.status(400).json({ success: false, error: err.message });
    }
}

export async function getCertification(req, res) {
    try {
        const certificates = await Certification.find({}).sort({ createdAt: -1 });
        if (!certificates || certificates.length === 0) {
            return res.status(404).json({ success: false, message: "No data found" });
        }
        return res.status(200).json({ success: true, data: certificates });
    } catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
}