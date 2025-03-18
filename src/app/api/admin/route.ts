import { NextRequest, NextResponse } from "next/server";

import Admin from "models/Admin";
import { connectDB } from "config/db";
import jwt from "jsonwebtoken";

const SECRET = "ABHASHKUMARDAS";

export async function GET() {
    return NextResponse.json({ message: "Backend is working" });
}

export async function handler(req: NextRequest, res: NextResponse) {
    try {
        await connectDB();
        const { email, password } = await req.json();

        const admin = await Admin.findOne({ email });
        if (admin) {
            return NextResponse.json({ message: "User already exists" }, { status: 401 });
        }

        const newAdmin = new Admin({ email, password });
        await newAdmin.save();

        const token = jwt.sign({ email, role: "admin" }, SECRET, { expiresIn: "1h" });

        return NextResponse.json({ message: "User created successfully", token });
    } catch (error) {
        console.error("Error in admin registration:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
