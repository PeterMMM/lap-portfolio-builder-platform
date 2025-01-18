import React from "react";

export default function IllustrationCard() {
  return (
    <div className="flex justify-center items-start ">
      {/* Card Container */}
      <div className="w-[1200px] h-[300px] md:w-2/3 lg:w-1/2 xl:w-[65%] rounded-3xl shadow-md p-10 mt-10 flex justify-center items-center bg-green-100">
        {/* Image Inside the Card */}
        <img
          src="https://img.lovepik.com/free-png/20210924/lovepik-vector-work-people-illustration-png-image_401321431_wh1200.png"
          alt="Illustration"
          className="w-[200px] h-[150px]" // Custom width and height
        />
      </div>
    </div>
  );
}
