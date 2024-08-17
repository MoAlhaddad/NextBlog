import { Schema, model, models } from "mongoose";


const imageSchema = new Schema(
    {
        imgUrl: {
            type: String,
            require: true,
        },
        fileKey: {
            type: String,
            require: true
        },
    },
    {timestamps: true}
);

const Image = models.Image || model("Image", imageSchema);

export default Image;