import mongoose, { Schema } from "mongoose";
import microCycleObjectives from "../constants/microcycleObjective";
import TrainingDaySchema from "./TrainingDaySchema";

const schema = new Schema({
    objective: {
        desc: "The microcyle objective.",
        trim: true,
        type: String,
        enum: microCycleObjectives,
        unique: false,
    },
    initDate: {
        desc: "Fecha de inicio del microcyle",
        type: Date,
        required: true
    },
    endDate: {
        desc: "Fecha de fin del microcyle",
        type: Date,
        required: true
    },
    programmedAerobic: {
        type: Number
    },
    programmedAnaerobic: {
        type: Number
    },
    trainingDays: [TrainingDaySchema]
},
    {
        strict: true,
        versionKey: false,
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    });

export default mongoose.model("MicroCycle", schema);