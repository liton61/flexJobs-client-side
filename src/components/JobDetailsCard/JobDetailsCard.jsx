/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const JobDetailsCard = ({ jobs }) => {
    const { title, price, deadline, description, email } = jobs;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleBid = e => {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const deadline = form.deadline.value;
        const email = form.email.value;
        const buyerEmail = form.buyerEmail.value

        const from = location.state?.from?.pathname || "/myBids";

        const details = { price, deadline, email, buyerEmail };
        console.log(details);

        fetch('http://localhost:5000/bids', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(details),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId)
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Bid successfully done !',
                        showConfirmButton: false,
                        timer: 2000
                    })
                navigate(from, { replace: true });
            });
    }
    return (
        <div>
            <div>
                <div className="w-96 rounded-lg overflow-hidden shadow-lg bg-white mx-auto my-10">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-base font-medium text-red-400">Deadline : {deadline}</p>
                        <p className="text-green-400 text-base font-medium">Price : {price}</p>
                        <p className="text-gray-500 text-sm">Description : {description}</p>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-2xl font-semibold mb-4 text-center">Place Your Bid</h1>
                    <form onSubmit={handleBid} className="grid grid-cols-2 gap-4">
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
                                type="date"
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
                                defaultValue={user?.email}
                                placeholder="Enter Email"
                                className="w-full border p-2 rounded focus:outline-none"
                                readOnly={true}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Buyer Email</label>
                            <input
                                type="email"
                                id="buyerEmail"
                                name="buyerEmail"
                                defaultValue={email}
                                placeholder="Enter Buyer Email"
                                className="w-full border p-2 rounded focus:outline-none"
                                readOnly={true}
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