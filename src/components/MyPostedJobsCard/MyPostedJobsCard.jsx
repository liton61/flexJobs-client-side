/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyPostedJobsCard = ({ job, singleJob, setSingleJob }) => {
    const { _id, title, deadline, price, description } = job
    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/jobs/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = singleJob.filter(single => single._id !== _id);
                            setSingleJob(remaining)
                        }
                    })
            }
        })
    }
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
                        <button onClick={() => handleDelete(_id)} className="bg-green-300 py-1 px-3 rounded font-medium text-sm">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPostedJobsCard;