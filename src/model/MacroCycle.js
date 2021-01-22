import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: {
        desc: "The macrocyle name.",
        trim: true,
        type: String,
        index: true,
        unique: false,
        required: true,
    },
    weekCount: {
        desc: "The number of weeks of the macrocycle",
        type: Number,
    },
    initDate: {
        desc: "Fecha de inicio del macrociclo",
        type: Date
    },
    endDate: {
        desc: "Fecha de fin del macrociclo",
        type: Date
    },
    general: {
        type: Number,
        desc: 'Numero de microciclos de preparacion general'
    },
    especial: {
        type: Number,
        desc: 'Numero de microciclos de preparacion especifica'
    },
    competitive: {
        type: Number,
        desc: 'Numero de microciclos de preparacion competitiva'
    },
    transformation: {
        type: Number,
        desc: 'Numero de microciclos de transformacion'
    },
    microcycles: [{
        type: Schema.Types.ObjectId,
        ref: 'MicroCycle'
    }]
},
    {
        strict: true,
        versionKey: false,
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    });

export default mongoose.model("Macrocycle", schema);