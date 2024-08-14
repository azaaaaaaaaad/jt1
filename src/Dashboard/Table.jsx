import { FaBook } from "react-icons/fa";


const Table = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <th>Type</th>
                            <th>Due</th>
                            <th>Faculty</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            {/* <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" /> */}

                                            <FaBook className="text-4xl" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Assignment -1</div>
                                        <div className="text-sm opacity-50">Foundation of user experience</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                5 june 2024
                            </td>
                            <td>
                                <div className="flex items-center gap-2">
                                    <img
                                        className="rounded-full w-12"
                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                        alt="Avatar Tailwind CSS Component" />
                                    <p>Same John</p>
                                </div>
                            </td>
                            <th>
                                <button className="btn btn-xs bg-blue-500">Done</button>
                            </th>
                        </tr>
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            {/* <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" /> */}

                                            <FaBook className="text-4xl" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Quiz -2</div>
                                        <div className="text-sm opacity-50">Foundation of user experience</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                5 june 2024
                            </td>
                            <td>
                                <div className="flex items-center gap-2">
                                    <img
                                        className="rounded-full w-12"
                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component"/>
                                    <p>Same John</p>
                                </div>
                            </td>
                            <th>
                                <button className="btn btn-xs bg-orange-500">Coming</button>
                            </th>
                        </tr>
                        {/* row 1 */}
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            {/* <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" /> */}

                                            <FaBook className="text-4xl" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Assignment -1</div>
                                        <div className="text-sm opacity-50">Foundation of user experience</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                5 june 2024
                            </td>
                            <td>
                                <div className="flex items-center gap-2">
                                    <img
                                        className="rounded-full w-12"
                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                        alt="Avatar Tailwind CSS Component" />
                                    <p>Same John</p>
                                </div>
                            </td>
                            <th>
                                <button className="btn btn-xs bg-blue-500">Done</button>
                            </th>
                        </tr>
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            {/* <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" /> */}

                                            <FaBook className="text-4xl" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Quiz -2</div>
                                        <div className="text-sm opacity-50">Foundation of user experience</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                5 june 2024
                            </td>
                            <td>
                                <div className="flex items-center gap-2">
                                    <img
                                        className="rounded-full w-12"
                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component"/>
                                    <p>Same John</p>
                                </div>
                            </td>
                            <th>
                                <button className="btn btn-xs bg-orange-500">Coming</button>
                            </th>
                        </tr>
                        {/* row 1 */}
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            {/* <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" /> */}

                                            <FaBook className="text-4xl" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Assignment -1</div>
                                        <div className="text-sm opacity-50">Foundation of user experience</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                5 june 2024
                            </td>
                            <td>
                                <div className="flex items-center gap-2">
                                    <img
                                        className="rounded-full w-12"
                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                        alt="Avatar Tailwind CSS Component" />
                                    <p>Same John</p>
                                </div>
                            </td>
                            <th>
                                <button className="btn btn-xs bg-blue-500">Done</button>
                            </th>
                        </tr>
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            {/* <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" /> */}

                                            <FaBook className="text-4xl" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Quiz -2</div>
                                        <div className="text-sm opacity-50">Foundation of user experience</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                5 june 2024
                            </td>
                            <td>
                                <div className="flex items-center gap-2">
                                    <img
                                        className="rounded-full w-12"
                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component"/>
                                    <p>Same John</p>
                                </div>
                            </td>
                            <th>
                                <button className="btn btn-xs bg-orange-500">Coming</button>
                            </th>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;