

const AddJobs = () => {
    return (
        <div>
            <div className="lg:w-3/4 mx-auto p-5">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email of the employer
                        </label>
                        <input className="w-full bg-gray-100 text-gray-700 border rounded py-2 px-3 focus:outline-none" type="text" id="employer-email" name="employer-email" value="example@employer.com" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Job Title
                        </label>
                        <input className="w-full bg-white text-gray-700 border rounded py-2 px-3 focus:outline-none" type="text" id="job-title" name="job-title" placeholder="Enter job title" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Deadline
                        </label>
                        <input className="w-full bg-white text-gray-700 border rounded py-2 px-3 focus:outline-none" type="date" id="deadline" name="deadline" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Description
                        </label>
                        <textarea className="w-full h-36 bg-white text-gray-700 border rounded py-2 px-3 focus:outline-none" id="description" name="description" placeholder="Enter job description" required></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Category
                        </label>
                        <select className="w-full bg-white text-gray-700 border rounded py-2 px-3 focus:outline-none" id="category" name="category" required>
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
                            <input className="w-full bg-white text-gray-700 border rounded py-2 px-3 focus:outline-none" type="number" id="min-price" name="min-price" placeholder="Min Price" required />
                        </div>
                        <div className="w-1/2 pl-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Maximum Price
                            </label>
                            <input className="w-full bg-white text-gray-700 border rounded py-2 px-3 focus:outline-none" type="number" id="max-price" name="max-price" placeholder="Max Price" required />
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="bg-green-300 hover:bg-green-400 w-full font-bold py-2 px-4 rounded" type="submit">
                            Add Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJobs;