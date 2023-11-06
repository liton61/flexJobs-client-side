/* eslint-disable react/prop-types */


const JobDetailsCard = ({ jobs }) => {
    const { title, minPrice, maxPrice, deadline, description } = jobs;
    return (
        <div>
            <div>
                <div className="w-96 rounded-lg overflow-hidden shadow-lg bg-white mx-auto my-10">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-base font-medium text-red-400">Deadline : {deadline}</p>
                        <p className="text-green-400 text-base font-medium">Price : {minPrice} - <span>{maxPrice}</span></p>
                        <p className="text-gray-500 text-sm">Description : {description}</p>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-2xl font-semibold mb-4 text-center">Place Your Bid</h1>
                    <form className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block text-gray-700">Price</label>
                            <input
                                type="text"
                                id="price"
                                name="price"
                                placeholder="Enter Price"
                                className="w-full border p-2 rounded focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Deadline</label>
                            <input
                                type="text"
                                id="deadline"
                                name="deadline"
                                placeholder="Enter Deadline"
                                className="w-full border p-2 rounded focus:outline-non"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                className="w-full border p-2 rounded focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Buyer Email</label>
                            <input
                                type="email"
                                id="buyerEmail"
                                name="buyerEmail"
                                placeholder="Enter Buyer Email"
                                className="w-full border p-2 rounded focus:outline-none"
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