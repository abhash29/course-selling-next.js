import mongoose, { Schema } from "mongoose";

export interface IAdmin extends Document{
    username: string;
    password: string;
    courses: [];
}

const AdminSchema: Schema = new Schema(
    {
        username: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        courses: {type: Array, required: false},
    }
)

export default mongoose.model<IAdmin>("Admin", AdminSchema);