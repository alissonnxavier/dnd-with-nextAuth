import mongoose, {Schema, models} from "mongoose";

const formSchama = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: [String],
            required: true,
        },
    },
    {timestamps: true}
);

const Form = models.Form || mongoose.model("Form", formSchama);
export default Form;