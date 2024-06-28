import { Description } from "@radix-ui/react-dialog"
import { Schema } from "mongoose"
const lessonSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    Description: {
        required: false,
        type: String
    },
    duration: {
        required: true,
        type: Number
    },
    video_url: {
        required: true,
        type: String
    },
    published: {
        required: true,
        type: Boolean
    },
    slug: {
        required: true,
        type: String
    },
    access: {
        required: true,
        type: String
    }
})

export const Lesson = mongoose.models.Lesson ?? mongoose.model("Lesson", lessonSchema)