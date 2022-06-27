import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        sobrenome:{
            type: String,
            required: true
        },
        email:{
            type: String,
            unique: true,
            required: true,
            lowercase: true,
        },
        celular:{
            type: String,
        },
        password:{
            type: String,
            required: true,
            select: false,
        },
        cep:{
            type: String,
        },
    }
)

const User = mongoose.model('User', UserSchema);

export default User;