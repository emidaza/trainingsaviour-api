import mongoose, { Schema } from "mongoose";

class MacroCycle {
    initSchema() {
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
        },
            {
                strict: true,
                versionKey: false,
                timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
            })

        mongoose.model("Macrocycle", schema);
    }

    getInstance() {
        this.initSchema();
        return mongoose.model("Macrocycle");
    }
}

export default MacroCycle;