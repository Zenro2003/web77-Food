import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://vulehuy0102:01234567@cluster0.uwrfbc0.mongodb.net/food').then(()=>console.log("DB Connected"));
}