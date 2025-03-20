import mongoose, { Schema } from "mongoose";

export interface IAdmin extends Document{
    email: string;
    password: string;
    courses: [];
}

const AdminSchema: Schema = new Schema(
    {
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        courses: {type: Array, required: false},
    }
)

const Admin = mongoose.models.Admin || mongoose.model<IAdmin>("Admin", AdminSchema);
export default Admin;