import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <h1 className="text-5xl font-bold">4O4 Not Found</h1>
                <div className="flex justify-center items-center mt-5">
                    <Link to="/">
                        <button className="text-lg font-semibold">Back to Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;