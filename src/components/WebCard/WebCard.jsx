/* eslint-disable react/prop-types */


const WebCard = ({ job }) => {
    const { title, deadline, price, description } = job;
    return (
        <div>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white mx-auto my-10">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-base font-medium text-red-400">Deadline : {deadline}</p>
                    <p className="text-green-400 text-base font-medium">Price : {price}</p>
                    <p className="text-gray-500 text-sm">Description : {description}</p>
                </div>
                <div className="px-6 py-4">
                    <button className="bg-green-300 hover:bg-green-400 font-bold py-2 px-4 rounded w-full">
                        Bid Now
                    </button>
                </div>
            </div>

        </div>
    );
};

export default WebCard;