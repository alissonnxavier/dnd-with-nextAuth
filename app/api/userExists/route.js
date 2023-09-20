import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        await connectMongoDB();
        const { email } = await req.json();
        console.log(email);
        const user = await User.findOne({ email }).select("_id");
        console.log("user: ", user);
        return NextResponse.json({ user: user });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ user: "user not found" });
    }
}