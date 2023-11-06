

const JobDetailsCard = ({jobs}) => {
    const {title} = jobs;
    return (
        <div>
            <h1>Job Details Card:{title}</h1>
        </div>
    );
};

export default JobDetailsCard;