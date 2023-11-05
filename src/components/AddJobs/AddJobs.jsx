import Swal from "sweetalert2";


const AddJobs = () => {
    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const title = form.title.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const category = form.category.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;

        const jobsInfo = { email, title, deadline, description, category, minPrice, maxPrice };
        console.log(jobsInfo);

        fetch('http://localhost:5000/jobs', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(jobsInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId)
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Job successfully added !',
                        showConfirmButton: false,
                        timer: 2000
                    })
            });
    }

    return (
        <div className="lg:w-3/4 mx-auto p-5">
            <form onSubmit={handleAddJob} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email of the employer
                    </label>
                    <input className="w-full bg-white text-gray-700 border rounded py-2 px-3 focus:outline-none" type="email" name="email" placeholder="Enter your email" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Job Title
                    </label>
                    <input className="w-full bg-white text-gray-700 border rounded py-2 px-3 focus:outline-none" type="text" name="title" placeholder="Enter job title" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Deadline
                    </label>
                    <input className="w-full bg-white text-gray-700 border rounded py-2 px-3 focus:outline-none" type="date" name="deadline" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Description
                    </label>
                    <textarea className="w-full h-36 bg-white text-gray-700 border rounded py-2 px-3 focus:outline-none" name="description" placeholder="Enter job description" required></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Category
                    </label>
                    <select className="w-full bg-white text-gray-700 border rounded py-2 px-3 focus:outline-none" name="category" required>
                        <option value="Web Development"> Web Development</option>
                        <option value="Digital Marketing"> Digital Marketing</option>
                        <option value="Graphics Design"> Graphics Design</option>
                    </select>
                </div>
                <div className="mb-4 flex justify-between">
                    <div className="w-1/2 pr-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Minimum Price
                        </label>
                        <input className="w-full bg-white text-gray-700 border rounded py-2 px-3 focus:outline-none" type="text" name="minPrice" placeholder="Min Price" required />
                    </div>
                    <div className="w-1/2 pl-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Maximum Price
                        </label>
                        <input className="w-full bg-white text-gray-700 border rounded py-2 px-3 focus:outline-none" type="text" name="maxPrice" placeholder="Max Price" required />
                    </div>
                </div>
                <div className="text-center">
                    <button className="bg-green-300 hover:bg-green-400 w-full font-bold py-2 px-4 rounded" type="submit">
                        Add Job
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddJobs;