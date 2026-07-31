// Certification.Model.js


import mongoose from 'mongoose';

const certificationSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true, 
        trim: true        
     },
    organization: { 
        type: String, 
        required: true, trim: true         
    },
    date: { 
        type: String, 
        required: true         
    },
    details: { 
        type: String, 
        required: true         
    },
    certificateUrl: {  // ← ADD THIS FIELD
        type: String,
        required: false // Not required for all certifications
    },
    Affiliation: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Certification = mongoose.model('Certification', certificationSchema);
export default Certification;