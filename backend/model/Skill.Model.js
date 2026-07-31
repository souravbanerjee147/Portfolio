import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        trim: true
    }, // e.g., "Frontend", "Backend"
    skills: [{
        type: String,
        required: true
    }]            // e.g., ["React", "Redux"]
}, { timestamps: true });

export default mongoose.model("Skill", skillSchema);