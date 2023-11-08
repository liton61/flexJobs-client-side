import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import TrendingJobs from "../TrendingJobs/TrendingJobs";
import TabJobs from "../TabJobs/TabJobs";
import Developer from "../Developer/Developer";
import { Helmet } from "react-helmet";


const Home = () => {
    const jobs = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Flex Jobs | Home</title>
            </Helmet>
            <Slider></Slider>
            <TabJobs jobs={jobs}></TabJobs>
            <TrendingJobs></TrendingJobs>
            <Developer></Developer>
        </div>
    );
};

export default Home;