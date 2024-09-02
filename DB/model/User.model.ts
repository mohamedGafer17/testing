import {Schema , model} from 'mongoose'
const userSchema = new Schema({
    userName:{
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique : true
    },
    password:{
        type: String,
        required: true
    },
    age:{ 
        type: Number,
        default : 25
    },
    phone:{
        type: Number
    },
    gender: {
        type: String,
        default : "Male",
        enum: ['Male','Female']
    },
    confirmEmail : {
        type : Boolean,
        default : false
    },
    number: {
        type : Number
    }
},  {
    timestamps : true 
})
const userModel = model("User",  userSchema)
export default userModel