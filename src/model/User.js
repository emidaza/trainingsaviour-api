import mongoose, { Schema } from "mongoose";
import crypto from "crypto";
import { env } from "../config/environment";

const schema = new Schema({
    firstName: String,
    lastName: String,
    username: {
        type: String,
        unique: true
    },
    password: String,
    email: { type: String, unique: true },
    verificationCode: { type: String },
    verifiedAt: { type: Date },
},
    {
        strict: true,
        versionKey: false,
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    })

schema.methods.validatePassword = function (password) {
    let _password = crypto.pbkdf2Sync(password, "secretpassword", 10000,
        32, 'sha512').toString('hex');
    return this.password === _password;
}

schema.methods.setPassword = function (password) {
    this.password = crypto.pbkdf2Sync(password, env.salt, 10000,
        32, 'sha512').toString('hex');
};

export default mongoose.model("User", schema, "users");