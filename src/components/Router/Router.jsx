import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Home from "../Home/Home";
import AddJobs from "../AddJobs/AddJobs";
import MyPostedJobs from "../MyPostedJobs/MyPostedJobs";
import MyBids from "../MyBids/MyBids";
import BideRequests from "../BideRequests/BideRequests";
import Login from "../Login/Login";
import Register from "../Register/Register";
import JobDetails from "../JobDetails/JobDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateJob from "../UpdateJob/UpdateJob";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/jobs')
            },
            {
                path: "/addJob",
                element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>,
            },
            {
                path: "/myPostedJobs",
                element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/jobs')
            },
            {
                path: "/myBids",
                element: <PrivateRoute><MyBids></MyBids></PrivateRoute>,
            },
            {
                path: "/bidRequests",
                element: <PrivateRoute><BideRequests></BideRequests></PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/jobDetails/:id",
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: "/updateJob/:id",
                element: <UpdateJob></UpdateJob>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
        ],
    },
]);

export default router;