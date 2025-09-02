import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique:true,
        required: true,
        minLength: 6,
        maxLength: 35
    },
    password: {
        type: String,
        required: true,
        select:false,
        validate: {
            validator: v => v.length >= 6,
            message:"Password must be at least 6 characters"
        }
    },
    email: {
        type:String,
        unique:true,
        required:true,
        match: /.+\@.+\..+/
    },
    role: {
        type: String,
        enum:["user", "admin"],
        default: 'user'
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    isActive: {
        type:Boolean,
        default:true
    }
})


const User = mongoose.model("User", userSchema)

export default User