import React from "react";

export default function Cards() {
  return (
    <div className="flex justify-center gap-6 p-6">
      {/* Card 1 */}
      <div className="relative w-80 h-60 overflow-hidden rounded-xl shadow-lg">
        <img
          src="https://cdn.mos.cms.futurecdn.net/vZLMcEg5JqfGeXydVkkxhk-1200-80.jpg"
          alt="Website Designers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-end p-6">
          <h2 className="text-2xl font-bold">Website Designers</h2>
          <p className="mt-2 text-sm">
            Create your desired website with talented people
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative w-80 h-60 overflow-hidden rounded-xl shadow-lg">
        <img
          src="https://www.uplers.com/wp-content/uploads/2022/06/Python-Developer-Resume-Tips.jpg"
          alt="Freelance Developers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-end p-6">
          <h2 className="text-2xl font-bold">Freelance Developers</h2>
          <p className="mt-2 text-sm">
            Make software with young and independent people
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative w-80 h-60 overflow-hidden rounded-xl shadow-lg">
        <img
          src="https://experis.be/wp-content/uploads/2023/05/Online-web-developer-profile-1200x675.jpg"
          alt="Photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-end p-6">
          <h2 className="text-2xl font-bold">Photography</h2>
          <p className="mt-2 text-sm">Find your perfect scenarios</p>
        </div>
      </div>
    </div>
  );
}
