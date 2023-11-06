import { useLoaderData } from "react-router-dom";
import JobDetailsCard from "../JobDetailsCard/JobDetailsCard";


const JobDetails = () => {
    const jobs = useLoaderData();
    return (
        <div>
            <JobDetailsCard jobs={jobs}></JobDetailsCard>
        </div>
    );
};

export default JobDetails;