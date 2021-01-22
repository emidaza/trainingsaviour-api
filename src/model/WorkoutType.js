import mongoose,{ Schema } from "mongoose";

const schema = new Schema({
    name: {
        trim: true,
        type: String,
        index: true,
        unique: false,
        required: true,
    },
})

export default mongoose.model('WorkoutType', schema);