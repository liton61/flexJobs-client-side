import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="navbar bg-green-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="mx-2"><NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink></li>
                            <li className="mx-2"><NavLink
                                to="/addJob"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""}>Add Job</NavLink></li>
                            <li className="mx-2"><NavLink
                                to="/myPostedJobs"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""}>My Posted Jobs</NavLink></li>
                            <li className="mx-2"><NavLink
                                to="/myBids"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""}>My Bids</NavLink></li>
                            <li className="mx-2"><NavLink
                                to="/bidRequests"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""}>Bid Requests</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="mx-2"><NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink></li>
                        <li className="mx-2"><NavLink
                            to="/addJob"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""}>Add Job</NavLink></li>
                        <li className="mx-2"><NavLink
                            to="/myPostedJobs"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""}>My Posted Jobs</NavLink></li>
                        <li className="mx-2"><NavLink
                            to="/myBids"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""}>My Bids</NavLink></li>
                        <li className="mx-2"><NavLink
                            to="/bidRequests"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""}>Bid Requests</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Header;