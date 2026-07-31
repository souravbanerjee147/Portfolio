// Education.Model.js



import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
    degree: {
        type: String,
        required: true,
        trim: true
    },
    institution: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: String,
        required: true,
        trim: true
    },
    details: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    url2: {
        type: String
    }
}, { timestamps: true });

const Education = mongoose.model('Education', educationSchema);
export default Education;