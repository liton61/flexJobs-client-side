/* eslint-disable react/prop-types */


const TrendingJobsCard = ({ trendingJob }) => {
    const { img, title, price, rating } = trendingJob;
    return (
        <div>
            <div className="card lg:w-96 md:w-80 md:h-96 w-96 bg-base-100 shadow-xl mx-auto my-10">
                <figure><img className="h-64 w-full" src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge bg-green-300">{rating}</div>
                    </h2>
                    <h3 className="text-base font-medium text-gray-600">Price : {price}</h3>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingJobsCard;