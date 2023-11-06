import { useLoaderData } from "react-router-dom";
import MyPostedJobsCard from "../MyPostedJobsCard/MyPostedJobsCard";


const MyPostedJobs = () => {
    const jobs = useLoaderData([]);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    jobs.map(job => <MyPostedJobsCard key={job._id} job={job}></MyPostedJobsCard>)
                }
            </div>
        </div>
    );
};

export default MyPostedJobs;