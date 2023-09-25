import { connectMongoDB } from '@/lib/mongodb';
import Form from '@/models/form';
import { NextResponse, NextRequest } from 'next/server';



export async function GET(req) {
    try {
        await connectMongoDB();
        let res = await Form.find();
        

        return NextResponse.json({ data: res });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            data: 'Any data returned',
        })
    }

} 