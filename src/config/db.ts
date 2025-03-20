import mongoose, { mongo } from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI!;
if(!MONGO_URI){
    throw new Error("Mongodb string is not defined");
}

let cached  = (global as any).mongoose || {conn: null, promise: null};
export const connectDB = async () => {
    if (cached.conn) {
        console.log("Mongodb is already connected");
        return cached.conn;
    }
    if(!cached.promise){
        cached.promise = mongoose.connect(MONGO_URI).then(() => console.log("Mongodb is connected now"))
    }
    cached.conn = await cached.promise;
    (global as any).mongoose = cached;
    return cached.conn;
};