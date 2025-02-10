import React from "react";

export default function Cards() {
  return (
    <div className="flex flex-wrap justify-center gap-12 p-6 ">
      {/* Card 1 */}
      <div className="relative w-80 h-60 overflow-hidden rounded-xl shadow-lg cursor-pointer">
        <img
          src="/images/one.jpg"
          alt="Website Designers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-end p-6">
          <h2 className="text-2xl font-bold text-white">Website Designers</h2>
          <p className="mt-2 text-sm text-white">
            Create your desired website with talented people
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative w-80 h-60 overflow-hidden rounded-xl shadow-lg cursor-pointer">
        <img
          src="/images/Two.jpg"
          alt="Freelance Developers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-end p-6">
          <h2 className="text-2xl font-bold text-white">Freelance Developers</h2>
          <p className="mt-2 text-sm text-white">
            Make software with young and independent people
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative w-80 h-60 overflow-hidden rounded-xl shadow-lg cursor-pointer">
        <img
          src="/images/Three.jpg"
          alt="Photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-end p-6">
          <h2 className="text-2xl font-bold text-white">Photography</h2>
          <p className="mt-2 text-sm text-white">Find your perfect scenarios</p>
        </div>
      </div>
    </div>
  );
}
