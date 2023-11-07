import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import TrendingJobs from "../TrendingJobs/TrendingJobs";
import TabJobs from "../TabJobs/TabJobs";
import Developer from "../Developer/Developer";


const Home = () => {
    const jobs = useLoaderData();
    return (
        <div>
            <Slider></Slider>
            <TabJobs jobs={jobs}></TabJobs>
            <TrendingJobs></TrendingJobs>
            <Developer></Developer>
        </div>
    );
};

export default Home;