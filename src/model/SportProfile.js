import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        index: true,
        unique: false,
    }
})

export default mongoose.model('SportProfile', schema);