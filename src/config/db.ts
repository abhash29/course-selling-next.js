import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI!;
if(!MONGO_URI){
    throw new Error("Mongodb string is not defined");
}

export const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        console.log("Mongodb is already connected");
        return;
    }
    try{
        await mongoose.connect(MONGO_URI);
    }
    catch(err){
        console.log(err);
    }
};