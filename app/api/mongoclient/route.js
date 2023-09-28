import {MongoClient} from 'mongodb';
import { NextResponse } from 'next/server';

const uri = 'mongodb://localhost:27017';



export async function POST(req) {

    try {
        const client = new MongoClient(uri);
        const db = client.db('authentication');
        let coll = await db.collection('forms');

        let res = await coll.find({});

        return NextResponse.json({ data: res });;
    } catch (error) {
        console.log(error)
    }

}