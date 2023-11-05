import { useEffect, useState } from "react";
import WebCard from "../WebCard/WebCard";


const Web = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/web')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    jobs.map(job => <WebCard key={job._id} job={job}></WebCard>)
                }
            </div>
        </div>
    );
};

export default Web;