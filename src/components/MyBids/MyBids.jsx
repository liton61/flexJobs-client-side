import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BidsTable from "../BidsTable/BidsTable";


const MyBids = () => {
    const [bids, setBids] = useState([]);
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bids?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBids(data))
    }, [url])
    return (
        <div className="overflow-x-auto h-[50vh] mt-20">
            <table className="table table-xs lg:w-3/4 mx-auto">
                <thead>
                    <tr className="bg-neutral text-white">
                        <th>Title</th>
                        <th>Email</th>
                        <th>Deadline</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bids.map(bid => <BidsTable key={bid._id} bid={bid}></BidsTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyBids;