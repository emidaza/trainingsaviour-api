import { Schema } from "mongoose";

const trainingDaySchema = new Schema({
    date: {
        desc: "Fecha del entrenamiento",
        type: Date
    },
    trainingSessions: [{
        order: Number,
        title: String,
        workouts: [{
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
        }]
    }]
});

export default trainingDaySchema;