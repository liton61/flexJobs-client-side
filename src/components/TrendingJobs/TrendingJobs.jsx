import { useEffect, useState } from "react";
import TrendingJobsCard from "../TrendingJobsCard/TrendingJobsCard";


const TrendingJobs = () => {
    const [trendingJobs, setTrendingJobs] = useState([]);
    useEffect(() => {
        fetch('trendingJobs.json')
            .then(res => res.json())
            .then(data => setTrendingJobs(data))
    }, [])
    return (
        <div>
            <div className="w-72 mx-auto mt-10">
                <h1 className="text-center text-4xl font-semibold">Trending Jobs</h1>
                <hr className="border-t-4 border-green-300 mt-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    trendingJobs.map(trendingJob => <TrendingJobsCard key={trendingJob._id} trendingJob={trendingJob}></TrendingJobsCard>)
                }
            </div>
        </div>
    );
};

export default TrendingJobs;