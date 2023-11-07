import developer1 from '../../assets/developer (1).png';
import developer2 from '../../assets/developer (2).png';
import developer3 from '../../assets/developer (3).png';
import developer4 from '../../assets/developer (4).png';
import developer5 from '../../assets/developer (5).png';

const Developer = () => {
    return (
        <div>
            <div className="w-96 mx-auto mt-28 mb-10">
                <h1 className="text-center text-4xl font-semibold">Most Paid Developer</h1>
                <hr className="border-t-4 border-green-300 mt-2" />
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 mb-10 transition-transform transform hover:scale-125">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="lg:h-48 lg:w-80 md:h-48 h-full w-full object-cover md:w-48" src={developer1} alt="" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">John Doe</div>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">Python Developer</p>
                        <p>Annual Salary : $80,000 - $120,000</p>
                        <div className="mt-5">
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            <i className="fa-solid fa-star text-yellow-400"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 mb-10 transition-transform transform hover:scale-125">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="lg:h-48 lg:w-80 md:h-48 h-full w-full object-cover md:w-48" src={developer2} alt="" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">William Henry</div>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">MERN Stack</p>
                        <p>Annual Salary : $90,000 - $110,000</p>
                        <div className="mt-5">
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            <i className="fa-solid fa-star text-yellow-400"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 mb-10 transition-transform transform hover:scale-125">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="lg:h-48 lg:w-80 md:h-48 h-full w-full object-cover md:w-48" src={developer3} alt="" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Micheal Joe</div>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">Laraval Developer</p>
                        <p>Annual Salary : $70,000 - $100,000</p>
                        <div className="mt-5">
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            <i className="fa-solid fa-star text-yellow-400"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 mb-10 transition-transform transform hover:scale-125">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="lg:h-48 lg:w-80 md:h-48 h-full w-full object-cover md:w-48" src={developer4} alt="" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">David Thome</div>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">React Developer</p>
                        <p>Annual Salary : $60,000 - $90,000</p>
                        <div className="mt-5">
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            <i className="fa-solid fa-star text-yellow-400"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 mb-10 transition-transform transform hover:scale-125">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="lg:h-48 lg:w-80 md:h-48 h-full w-full object-cover md:w-48" src={developer5} alt="" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">John Ean</div>
                        <p className="block mt-1 text-lg leading-tight font-medium text-black">Angular Developer</p>
                        <p>Annual Salary : $50,000 - $80,000</p>
                        <div className="mt-5">
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            <i className="fa-solid fa-star text-yellow-400"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Developer;