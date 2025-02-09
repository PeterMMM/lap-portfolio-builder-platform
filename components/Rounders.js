import { FaPlus } from "react-icons/fa";

export default function CircleWithPlus() {
  return (
    <div className="relative flex items-center justify-start ml-10 mt-5">
      {/* Circle */}
      <div className="w-16 h-16 bg-[#585c37] rounded-full flex items-center justify-center">
        {/* Plus Icon */}
        <FaPlus className="text-black text-xl" />
      </div>
      
      {/* Image Section */}
      <div className="flex gap-4 ml-5">
        <div className="flex flex-col items-center">
          <div className="w-48 h-16 bg-blue-300 rounded-full flex items-center justify-center overflow-hidden">
            <img src="./images/oneone.jpg" alt="#Web Developers" className="w-full h-full object-cover" />
          </div>
          <p className="mt-2 text-center text-sm font-semibold">#Web Developers</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-48 h-16 bg-blue-300 rounded-full flex items-center justify-center overflow-hidden">
            <img src="./images/twotwo.jpg" alt="#Freelancers" className="w-full h-full object-cover" />
          </div>
          <p className="mt-2 text-center text-sm font-semibold">#Freelancers</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-48 h-16 bg-blue-300 rounded-full flex items-center justify-center overflow-hidden">
            <img src="./images/threethree.jpg" alt="#Photography" className="w-full h-full object-cover" />
          </div>
          <p className="mt-2 text-center text-sm font-semibold">#Photography</p>
        </div>
      </div>
    </div>
  );
}
