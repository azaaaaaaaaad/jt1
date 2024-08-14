
import { CiSearch } from "react-icons/ci";
import { FaBook, FaDollarSign, FaRegAddressBook, FaRegBell } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { FcStatistics } from "react-icons/fc";
import { GiGraduateCap } from "react-icons/gi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoMdExit, IoMdSunny } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { MdKeyboardArrowDown, MdOutlineFormatOverline } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";
import Table from "./Table";


// export default Dashboard;


const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-violet-50 p-10">
                <div className="p-4">
                    <h1 className="font-bold flex items-center  text-2xl"><IoMdSunny className="text-violet-500 text-3xl" /> <span className="text-violet-500">ON</span>Course</h1>
                </div>
                <ul className="menu p-4 flex items justify-center font-semibold">
                    <>
                        <li className="text-violet-500">

                            <a href=""><MdOutlineFormatOverline />
                                Overview</a>
                        </li>
                        <li>

                            <a href=""><FaRegAddressBook />
                                My Course</a>
                        </li>
                        <li>

                            <a href=""><GiGraduateCap />
                                Completed</a>
                        </li>
                        <li>

                            <a href=""><FaBook></FaBook>
                                Financial Aid</a>
                        </li>
                        <li>

                            <a href=""><FaDollarSign />
                                Transactions</a>
                        </li>
                        <li>

                            <a href=""><HiOutlineDocumentReport />
                                Reports</a>
                        </li>
                        <li>

                            <a href=""><FcStatistics />
                                Statistic</a>
                        </li>
                    </>

                    <div className="mt-56">
                        <li>

                            <a href=""><IoMdExit />
                                Support</a>
                        </li>
                        <li>

                            <a href=""><IoSettingsSharp />
                                Setting</a>
                        </li>
                    </div>


                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                {/* navbar  */}
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <a className="btn btn-ghost text-xl text-violet-500">Overview</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <div className=" border-2 rounded-3xl">
                            <button className=" btn-wide  flex items-center"><CiSearch className="mr-2" />Search......</button>
                        </div>
                    </div>
                    <div className="navbar-end gap-6">
                        <a href=""><FaRegBell className="text-violet-500 text-xl" /></a>
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold">Alexa calen</p>
                            <p className="font-thin">Student</p>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-4">

                    {/* cards */}
                    <div className="">
                        <div className="card bg-base-100 w-96 shadow-xl mt-6 ">
                            <div className="card-body bg-gradient-to-r from-blue-600 to-white rounded-xl">
                                <h2 className="card-title text-white">Foundation Of The User Experience</h2>
                                <p className="text-white">(UX) Design</p>
                                <p className="text-white">4 Assignment | 20 Videos</p>
                                <div className="card-actions justify-around">
                                    <div className="">
                                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-black ">Continue Course</button>
                                    </div>
                                    <div >
                                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">
                                            <div>
                                                <h1>80%</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-96 shadow-xl mt-6">
                            <div className="card-body bg-violet-100 rounded-xl">
                                <h2 className="card-title">Start the UX Design Process: Expathize, Define, and Ideate</h2>
                                <p className="">4 Assignment | 20 Videos</p>
                                <div className="card-actions justify-around">
                                    <div className="">
                                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white bg-gradient-to-r from-blue-600 to-white ">Continue Course</button>
                                    </div>
                                    <div >
                                        <div className="radial-progress" style={{ "--value": 65 }} role="progressbar">
                                            <div>
                                                <h1>65%</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-96 shadow-xl mt-6">
                            <div className="card-body bg-violet-100 rounded-xl">
                                <h2 className="card-title">Build Wireframes and Low- <br /> Fidelity Prototypes</h2>
                                <p className="">4 Assignment | 20 Videos</p>
                                <div className="card-actions justify-around">
                                    <div className="">
                                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white bg-gradient-to-r from-blue-600 to-white ">Continue Course</button>
                                    </div>
                                    <div >
                                        <div className="radial-progress fontbold" style={{ "--value": 85 }} role="progressbar">
                                            <div>
                                                <h1>85%</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-96 shadow-xl mt-6">
                            <div className="card-body bg-violet-100 rounded-xl">
                                <h2 className="card-title">Build Wireframes and Low- <br /> Fidelity Prototypes</h2>
                                <p className="">4 Assignment | 20 Videos</p>
                                <div className="card-actions justify-around">
                                    <div className="">
                                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white bg-gradient-to-r from-blue-600 to-white ">Continue Course</button>
                                    </div>
                                    <div >
                                        <div className="radial-progress fontbold" style={{ "--value": 85 }} role="progressbar">
                                            <div>
                                                <h1>85%</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right cards */}
                    <div className="mt-6 col-span-3">
                        <div className="flex items-center justify-around">
                            <div className="card bg-base-100 w-96 shadow-xl">
                                <div className="card-body bg-violet-100 rounded-lg">
                                    <div className="flex justify-between">
                                        <h2 className="card-title font-bold text-4xl">04</h2>
                                        <h2> <GiGraduateCap className="text-3xl" /></h2>
                                    </div>
                                    <p>Completed <br />Course</p>
                                    <div className="card-actions justify-end">
                                        <h1 className="flex items-center gap-4">20% Increase <TfiStatsUp /></h1>
                                    </div>
                                </div>
                            </div>
                            <div className=" card bg-base-100 w-96 shadow-xl">
                                <div className="card-body bg-violet-100 rounded-lg">
                                    <div className="flex justify-between">
                                        <h2 className="card-title font-bold text-4xl">12</h2>
                                        <h2> <FaBarsProgress className="text-3xl" /></h2>
                                    </div>
                                    <p>Course <br /> in Progress</p>
                                    <div className="card-actions justify-end">
                                        <h1 className="flex items-center gap-4">20% Increase <TfiStatsUp /></h1>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* chart  */}
                        <div>

                        </div>


                        {/* table  */}

                        <div className="lg:p-32 b">
                            <div className="bg-violet-100 rounded-lg">
                                <div className="flex justify-between">
                                    <h1>Reminders</h1>
                                    <button className="flex items-cente">Monthly <MdKeyboardArrowDown /></button>
                                </div>
                                <Table />
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </div>
    );
};

export default Dashboard;