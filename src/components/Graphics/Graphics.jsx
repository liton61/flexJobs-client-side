import { useEffect, useState } from "react";
import GraphicsCard from "../GraphicsCard/GraphicsCard";


const Graphics = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/graphics')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    jobs.map(job => <GraphicsCard key={job._id} job={job}></GraphicsCard>)
                }
            </div>
        </div>
    );
};

export default Graphics;