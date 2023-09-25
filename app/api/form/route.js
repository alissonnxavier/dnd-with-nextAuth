import { connectMongoDB } from '@/lib/mongodb';
import Form from '@/models/form';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req) {
    try {
        const { title, description, image } = await req.json();
        await connectMongoDB();
        await Form.create({title, description, image});

        return NextResponse.json({ message: 'Post created!' }, { status: 201 })
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "An error occured while creating a new post." },
            { status: 500 }
        )
    }
}