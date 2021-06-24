import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    order: Number,
    turn: Number,
    type: {
        type: Schema.Types.ObjectId,
        ref: 'WorkoutType'
    },
    name: String,
    repetitions: Number,
    series: Number,
    intensity: Number,
    amount: {
        type: Number,
        desc: 'Los metros de cada repeticion'
    },
    functionalArea: {
        type: Schema.Types.ObjectId,
        ref: 'FunctionalArea'
    },
    micropause: {
        minutes: Number,
        seconds: Number
    },
    macropause: {
        minutes: Number,
        seconds: Number
    }
},
{
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
})

export default mongoose.model("Workout", schema);