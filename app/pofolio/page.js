import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Search from '@/components/Search';
import CategorySection from "@/components/CategorySection";
import { FaHeart } from "react-icons/fa"; // For the favorite/like icon

const PortfolioDetailPage = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Search Bar (Using Your Component) */}
        <Search />

        {/* Category Section */}
        <CategorySection />

        {/* Portfolio Card */}
        <div className="bg-white shadow-md rounded-lg p-6 mt-6 relative">
          {/* Header: Profile + Button */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Andre Valerix</h2>
            <button className="bg-green-200 text-green-800 text-sm px-3 py-1 rounded-lg">
              Get in Touch
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mt-2">
            project info project info project info project info project info
            project info project info project info project info project info
            project info project info project info project info project info
          </p>

          {/* Portfolio Image */}
          <div className="mt-4">
            <img
              src="/images/Three.jpg" // Replace with actual image path
              alt="Portfolio"
              className="w-full rounded-lg"
            />
          </div>

          {/* Like / Favorite Icon */}
          <button className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition">
            <FaHeart size={20} />
          </button>

          {/* View Profile Button */}
          <button className="mt-4 bg-green-700 text-white w-full py-2 rounded-lg">
            Go back to the profile
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PortfolioDetailPage;
