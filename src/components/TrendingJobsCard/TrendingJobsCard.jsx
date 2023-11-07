/* eslint-disable react/prop-types */


const TrendingJobsCard = ({ trendingJob }) => {
    const { img, title, price, rating } = trendingJob;
    return (
        <div>
            <div className="card lg:w-80 lg:h-72 md:w-80 md:h-80 w-96 bg-base-100 shadow-xl mx-auto mt-10">
                <figure><img className="w-full lg:h-48 md:h-48  h-48" src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge bg-green-300">{rating}</div>
                    </h2>
                    <h3 className="text-base font-medium text-gray-600">Price : {price}</h3>
                </div>
            </div>
        </div>
    );
};

export default TrendingJobsCard;