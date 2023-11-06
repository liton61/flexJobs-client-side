import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateJob = () => {
    const job = useLoaderData([]);
    const { _id, email, title, deadline, description, category, price } = job;
    const handleUpdateJob = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const title = form.title.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const category = form.category.value;
        const price = form.price.value;

        const updateJob = { email, title, deadline, description, category, price };

        fetch(`http://localhost:5000/jobs/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateJob),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0)
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Job successfully updated !',
                        showConfirmButton: false,
                        timer: 2000
                    })
            });
    }
    return (
        <div>
            <div className="lg:w-3/4 mx-auto p-5 my-10">
                <form onSubmit={handleUpdateJob} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input className="w-full bg-white text-gray-700 border rounded py-2 px-3 focus:outline-none" type="email" name="email" defaultValue={email} readOnly={true} placeholder="Enter your email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Job Title
                        </label>
                        <input className="w-full bg-white text-gray-700 border rounded py-2 px-3 focus:outline-none" type="text" name="title" defaultValue={title} placeholder="Enter job title" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Deadline
                        </label>
                        <input className="w-full bg-white text-gray-700 border rounded py-2 px-3 focus:outline-none" type="date" name="deadline" defaultValue={deadline} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Description
                        </label>
                        <textarea className="w-full h-36 bg-white text-gray-700 border rounded py-2 px-3 focus:outline-none" name="description" defaultValue={description} placeholder="Enter job description" required></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Category
                        </label>
                        <select className="w-full bg-white text-gray-700 border rounded py-2 px-3 focus:outline-none" name="category" defaultValue={category} required>
                            <option value="Web Development"> Web Development</option>
                            <option value="Digital Marketing"> Digital Marketing</option>
                            <option value="Graphics Design"> Graphics Design</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Price
                        </label>
                        <input className="w-full bg-white text-gray-700 border rounded py-2 px-3 focus:outline-none" type="text" name="price" defaultValue={price} placeholder="Price" required />
                    </div>
                    <div className="text-center">
                        <button className="bg-green-300 hover:bg-green-400 w-full font-bold py-2 px-4 rounded" type="submit">
                            Update Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateJob;