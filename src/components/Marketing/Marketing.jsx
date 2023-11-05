import { useEffect, useState } from "react";
import MarketingCard from "../MarketingCard/MarketingCard";


const Marketing = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/marketing')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <h1>Digital Marketing</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    jobs.map(job => <MarketingCard key={job._id} job={job}></MarketingCard>)
                }
            </div>
        </div>
    );
};

export default Marketing;