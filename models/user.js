import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            requered: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            require: false,
        },
    },
    { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;