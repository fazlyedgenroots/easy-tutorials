import { replaceMongoIdInArray } from "@/lib/formatData";
import { Enrollment } from "@/models/enrollment-model";

export async function getEnrollmentList(courseId) {
    const enrollments = await Enrollment.find({ course: courseId }).lean();
    return replaceMongoIdInArray(enrollments)
}

export async function upsertNewEnrollment(courseId, userId, paymentMethod) {
    const newEnrollment = {
        course: courseId,
        student: userId,
        method: paymentMethod,
        enrollment_date: Date.now(),
        status: "not-started"
    }

    try{
        const response = await Enrollment.create(newEnrollment);
        return response;
    } catch(error) {
       throw new Error(error);
    }
}