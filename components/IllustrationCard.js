import React from "react";

export default function IllustrationCard() {
  return (
    <div className="flex justify-center items-start ">
      {/* Card Container */}
      <div className="w-[1200px] h-[300px] md:w-2/3 lg:w-1/2 xl:w-[65%] rounded-3xl shadow-md p-10 mt-10 flex justify-center items-center bg-light-green">
        {/* Image Inside the Card */}
        <img
          src="/images/study.png"
          alt="Illustration"
          className="w-[200px] h-[150px]" // Custom width and height
        />
      </div>
    </div>
  );
}
