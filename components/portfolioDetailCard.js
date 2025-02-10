    import React from "react";
    import { FaHeart, FaBookmark } from "react-icons/fa";

    const PortfolioDetailCard = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mt-6 relative">
        {/* Header Section */}
        <div className="flex items-center justify-between">
            {/* Profile Section */}
            <div className="flex items-center space-x-4">
            <img
                src="/images/Three.jpg" // Replace with actual profile picture path
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover"
            />
            <h2 className="text-xl font-semibold">Andre Valerix</h2>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
            <button className="bg-green-200 text-green-800 text-sm px-3 py-1 rounded-lg">
                Get in Touch
            </button>
            <FaBookmark className="text-gray-400 hover:text-black cursor-pointer text-xl" />
            <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer text-xl" />
            </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            project info project info project info project info project info project
            info project info project info project info project info project info
            project info project info project info project info
        </p>

        {/* Single Portfolio Image */}
        <div className="mt-6">
            <img
            src="/images/Three.jpg" // Replace with actual portfolio image
            alt="Portfolio"
            className="w-full h-auto rounded-lg"
            />
        </div>

        {/* Footer Section */}
        <div className="mt-4 flex">
            <button className="bg-green-200 text-green-800 text-sm px-3 py-1 rounded-lg">
            Go back to the profile
            </button>
        </div>
        </div>
    );
    };

    export default PortfolioDetailCard;
