import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    
})

export const User = mongoose.model("users", UserSchema)