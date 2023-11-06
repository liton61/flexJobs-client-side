

const JobDetailsCard = ({ jobs }) => {
    const { title } = jobs;
    return (
        <div>
            <h1>Job Details Card:{title}</h1>
            <div className=" p-6">
                <div className="max-w-md mx-auto bg-white rounded p-6 border border-green-400">
                    <h1 className="text-2xl font-semibold mb-4 text-center">Place Your Bid</h1>
                    <form className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block text-gray-700">Price</label>
                            <input
                                type="text"
                                id="price"
                                name="price"
                                placeholder="Enter Price"
                                className="w-full border p-2 rounded focus:outline-none focus:border-green-400"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Deadline</label>
                            <input
                                type="text"
                                id="deadline"
                                name="deadline"
                                placeholder="Enter Deadline"
                                className="w-full border p-2 rounded focus:outline-none focus:border-green-400"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                className="w-full border p-2 rounded focus:outline-none focus:border-green-400"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Buyer Email</label>
                            <input
                                type="email"
                                id="buyerEmail"
                                name="buyerEmail"
                                placeholder="Enter Buyer Email"
                                className="w-full border p-2 rounded focus:outline-none focus:border-green-400"
                            />
                        </div>
                        <div className="col-span-2 mt-6">
                            <button
                                type="submit"
                                className="bg-green-300 p-2 rounded hover:bg-green-400 w-full font-medium"
                            >
                                Bid
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default JobDetailsCard;