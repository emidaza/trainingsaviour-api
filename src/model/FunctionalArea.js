import mongoose, { Schema } from "mongoose";
import functionalAreaTypes from "../constants/functionalAreaTypes";

const schema = new Schema({
    name: {
        desc: "The functional area name.",
        trim: true,
        type: String,
        index: true,
        unique: false,
        required: true,
    },
    type: {
        type: String,
        enum: functionalAreaTypes
    },
    sportProfiles: [{
        type: Schema.Types.ObjectId,
        ref: 'SportProfile'
    }]
},
    {
        strict: true,
        versionKey: false,
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    });

export default mongoose.model("FunctionalArea", schema);