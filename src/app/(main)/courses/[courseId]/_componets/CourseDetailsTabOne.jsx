import { CheckCheck } from "lucide-react";

const CourseDetailsTabOne = ({ description, learning }) => {
    return (
        <>
            <h3 className=" text-2xl">Course Description</h3>
            <p className="mt-4">
                {description}
            </p>
            <div className="bg-gray-100 space-y-6 p-8 rounded-md mt-8">
                <h4 className="text-2xl">What You will Learn?</h4>
                <ul className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                    {
                        learning.map((item, index) => (
                            <li className="flex space-x-3" key={index}>
                                <div className="flex-none relative top-1">
                                    <CheckCheck />
                                </div>
                                <div className="flex-1">
                                    {item}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}
export default CourseDetailsTabOne;