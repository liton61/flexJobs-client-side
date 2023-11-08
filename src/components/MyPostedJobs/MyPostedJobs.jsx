import { useLoaderData } from "react-router-dom";
import MyPostedJobsCard from "../MyPostedJobsCard/MyPostedJobsCard";
import { useState } from "react";
import { Helmet } from "react-helmet";


const MyPostedJobs = () => {
    const jobs = useLoaderData();
    const [singleJob, setSingleJob] = useState(jobs)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
                {
                    singleJob.map(job => <MyPostedJobsCard key={job._id} job={job} singleJob={singleJob}
                        setSingleJob={setSingleJob}></MyPostedJobsCard>)
                }
            </div>
            <Helmet>
                <title>Flex Jobs | My Posted Jobs</title>
            </Helmet>
        </div>
    );
};

export default MyPostedJobs;