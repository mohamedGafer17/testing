import mongoose from "mongoose";


const connectDB = async () => {
    return await mongoose.connect('mongodb://127.0.0.1:27017/testing')
    .then(result => {
        console.log(`DB Connected`)
        // console.log(result)
    }).catch(err => {
        console.log(`Fail to connect DB`)
        console.log(err)
    })
}
export default connectDB;