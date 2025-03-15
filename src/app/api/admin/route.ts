//1. SIgnup
//2. login
//3. me
//4. List of courses -> post and get

import Admin from "models/Admin";
import { NextResponse } from "next/server";
import { connectDB } from "config/db";

connectDB();

export async function GET(res: Response){
    return NextResponse.json({message: "Backend is working"});
}
//Signup -> POST
export async function POST(req: Request) {
    try {
        const { username, password } = await req.json();
        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            return NextResponse.json({ message: "User already exits" }, { status: 400 });
        }
        if(!username || !password){
            return NextResponse.json({message: "Please enter username and password"});
        }

        const newAdmin = new Admin({ username, password });
        await newAdmin.save();
        return NextResponse.json({ message: "User created successfully" }, { status: 201 });

    }
    catch (err) {
        return NextResponse.json(err);
    }
}

//Login
export async function PUT(req: Request){
    try{
        await connectDB();
        const {username, password} = await req.json();

        if(!username || !password){
            return NextResponse.json({message: "Enter username and password"}, {status: 401});
        }

        const admin = Admin.findOne({username});
        if(!admin){
            return NextResponse.json({message: "Admin do not exists"}, {status: 401});
        }
        if(admin.password!==password){
            return NextResponse.json({message: "Incorrect Password"}, {status: 401});
        }
        return NextResponse.json({message: "User login successful"}, {status: 200});
    }
    catch(err){
        return NextResponse.json(err);
    }
}
