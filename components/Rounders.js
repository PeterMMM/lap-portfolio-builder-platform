import { FaPlus } from "react-icons/fa";

export default function CircleWithPlus() {
  return (

    <div className="relative flex items-center justify-start mt-5 px-16 pb-8 shadow-md">
      <div className="flex flex-col items-center justify-center ">
        {/* Circle */}
        <div className="w-16 h-16 bg-[#C2C896] rounded-full flex items-center justify-center">
          {/* Plus Icon */}
          <FaPlus className="text-white text-xl" />
        </div>
        <p className="mt-2 text-center text-sm font-thin text-[#C2C896]">Add your post</p>
      </div>


      {/* Image Section */}
      <div className="flex gap-4 ml-5">
        <div className="flex flex-col items-center">
          <div className="w-48 h-16 bg-blue-300 rounded-full flex items-center justify-center overflow-hidden">
            <img src="./images/oneone.jpg" alt="#Web Developers" className="w-full h-full object-cover" />
          </div>
          <p className="mt-2 text-center text-sm font-semibold text-[#C2C896]">#Web Developers</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-48 h-16 bg-blue-300 rounded-full flex items-center justify-center overflow-hidden">
            <img src="./images/twotwo.jpg" alt="#Freelancers" className="w-full h-full object-cover" />
          </div>
          <p className="mt-2 text-center text-sm font-semibold text-[#C2C896]">#Freelancers</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-48 h-16 bg-blue-300 rounded-full flex items-center justify-center overflow-hidden">
            <img src="./images/threethree.jpg" alt="#Photography" className="w-full h-full object-cover" />
          </div>
          <p className="mt-2 text-center text-sm font-semibold text-[#C2C896]">#Photography</p>
        </div>
      </div>
    </div>
  );
}
