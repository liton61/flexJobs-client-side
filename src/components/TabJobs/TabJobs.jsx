

import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from 'prop-types';
let categoryName = [

    { id: "Web Development", label: "Web Development" },
    { id: "Digital Marketing", label: "Digital Marketing" },
    { id: "Graphics Design", label: "Graphics Design" },

];

const TabJobs = ({ jobs }) => {
    let [activeTab, setActiveTab] = useState(categoryName[0].id);

    const jobsCurrentTab = jobs.filter(job => job.category === activeTab);

    return (
        <div className="flex flex-col items-center justify-center py-10">
            <div className="flex space-x-1 mb-2 mx-5">
                {categoryName.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => {
                            setActiveTab(tab.id);

                        }}
                        className={`${activeTab === tab.id ? "" : ""}
                            relative px-2 py-2 text-base font-medium black transition focus-visible:outline-2`}
                        style={{
                            WebkitTapHighlightColor: "transparent",
                        }}
                    >
                        {activeTab === tab.id && (
                            <motion.span
                                layoutId="bubble"
                                className="absolute inset-0 z-10 bg-green-300 mix-blend-multiply"
                                style={{ borderRadius: 5 }}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 ">
                {jobsCurrentTab
                    .map((job, index) => (
                        <div key={index}>
                            <div key={job._id}>
                                <div className="  ">

                                    <div>
                                        <div className="w-96 rounded-lg overflow-hidden shadow-lg bg-white mx-auto my-10">
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-xl mb-2">{job.title}</div>
                                                <p className="text-base font-medium text-red-400">Deadline : {job.deadline}</p>
                                                <p className="text-green-400 text-base font-medium">Price : {job.minPrice} - <span>{job.maxPrice}</span></p>
                                                <p className="text-gray-500 text-sm">Description : {job.description}</p>
                                            </div>
                                            <div className="px-6 py-4">
                                                <button className="bg-green-300 hover:bg-green-400 font-bold py-2 px-4 rounded w-full">
                                                    Bid Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

        </div>
    );
};
TabJobs.propTypes = {
    jobs: PropTypes.object
}

export default TabJobs;