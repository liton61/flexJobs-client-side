import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Home from "../Home/Home";
import AddJobs from "../AddJobs/AddJobs";
import MyPostedJobs from "../MyPostedJobs/MyPostedJobs";
import MyBids from "../MyBids/MyBids";
import BideRequests from "../BideRequests/BideRequests";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addJo",
                element: <AddJobs></AddJobs>,
            },
            {
                path: "/myPostedJobs",
                element: <MyPostedJobs></MyPostedJobs>,
            },
            {
                path: "/myBids",
                element: <MyBids></MyBids>,
            },
            {
                path: "/bidRequests",
                element: <BideRequests></BideRequests>,
            },
        ],
    },
]);

export default router;