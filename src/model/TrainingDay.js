import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    date: {
        desc: "Fecha del entrenamiento",
        type: Date
    },
    trainingSessions: [{
        order: Number,
        title: String,
        workouts: [{
            type: Schema.Types.ObjectId,
            ref: 'Workout'
        }]
    }]
},
    {
        strict: true,
        versionKey: false,
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    });

export default mongoose.model("TrainingDay", schema);