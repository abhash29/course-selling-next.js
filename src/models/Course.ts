import mongoose, { Schema } from "mongoose";

export interface ICourse extends Document{
    title: string;
    description: string;
    price: string;
}

const CourseSchema: Schema = new Schema(
    {
        title: {type: String, required: true, unique: true},
        description: {type: String, required: true},
        price: {type: String, required: true}
    }
)

export default mongoose.model<ICourse>("Course", CourseSchema);