import { connectMongoDB } from '@/lib/mongodb';
import Form from '@/models/form';
import { NextResponse, NextRequest } from 'next/server';



export async function POST(req) {
    
        const db = await connectMongoDB();
        const collection = Form;
        let res = await collection.find({});
        
        let changeStream = collection.watch();
        changeStream.on('change', next=>{console.log(next)});
        
        return NextResponse.json({ data: res });  
    
} 