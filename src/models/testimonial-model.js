import mongoose, { Schema } from "mongoose";

const testimonialSchema = new Schema({
    content: {
        required: true,
        type: String,
    },
    user: {
        required: true,
        type: Schema.ObjectId,        
        ref: "User",
    },
    courseId: {
        required: true,
        type: Schema.ObjectId,
    },
    rating: {
        required: true,
        type: Number,
    },
});

export const Testimonial = mongoose.models.Testimonial ?? mongoose.model("Testimonial", testimonialSchema);
