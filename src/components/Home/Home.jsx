import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import TrendingJobs from "../TrendingJobs/TrendingJobs";
import TabJobs from "../TabJobs/TabJobs";


const Home = () => {
    const jobs = useLoaderData();
    return (
        <div>
            <Slider></Slider>
            <TabJobs jobs={jobs}></TabJobs>
            <TrendingJobs></TrendingJobs>
        </div>
    );
};

export default Home;