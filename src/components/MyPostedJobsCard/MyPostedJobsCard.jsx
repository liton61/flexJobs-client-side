/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const MyPostedJobsCard = ({ job }) => {
    const { _id, title, deadline, price, description } = job
    return (
        <div>
            <div className="lg:w-96 md:w-80 w-96 rounded-lg overflow-hidden shadow-lg bg-white mx-auto my-5">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-base font-medium text-red-400">Deadline : {deadline}</p>
                    <p className="text-green-400 text-base font-medium">Price : {price}</p>
                    <p className="text-gray-500 text-sm">Description : {description}</p>
                    <div className="flex justify-end gap-5 mt-5">
                        <Link to={`/updateJob/${_id}`}>
                            <button className="bg-green-300 py-1 px-3 rounded font-medium text-sm">Update</button>
                        </Link>
                        <button className="bg-green-300 py-1 px-3 rounded font-medium text-sm">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPostedJobsCard;