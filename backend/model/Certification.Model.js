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
    certificateUrl: {  
        type: String,
        required: false 
    },
    Affiliation: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Certification = mongoose.model('Certification', certificationSchema);
export default Certification;