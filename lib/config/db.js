import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://Modev:mobucks2525@cluster0.zsg8ril.mongodb.net/blog-app')
    console.log("Db Connected!")
}