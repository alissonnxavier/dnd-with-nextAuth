import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/authentication');
        console.log('Connected to mongoDB');
    } catch (error) {
        console.log('Error connecting to mongoDB: ', error);
    }
};