import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Search from '@/components/Search';
import CategorySection from "@/components/CategorySection";
import PortfolioDetailCard from "@/components/portfolioDetailCard"; 

const PortfolioDetailPage = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <Navbar />

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Search />
        <CategorySection />

        {/* Portfolio Detail Card Component */}
        <PortfolioDetailCard
          name="Andre Valerix"
          description="project info project info project info project info..."
          image="/images/Three.jpg"
        />

      </div>

      <Footer />
    </div>
  );
};

export default PortfolioDetailPage;
