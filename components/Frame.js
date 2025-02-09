import React from "react";

export default function Frame() {
  return (
    <div className="p-4 flex flex-col items-center bg-gray-100">
      {/* White Background Frame (Wrapping all Cards) */}
      <div className="w-full md:w-3/5 bg-white rounded-lg p-6 shadow-md">
        {/* Cards Section Inside the Frame */}
        <div className="space-y-6">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-green-100 p-4 rounded-lg shadow-md h-64"
            >
              {/* Top Section (Card) */}
              <div className="flex flex-col md:flex-row">
                {/* Left Section */}
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    {/* Name and Button */}
                    <div>
                      <h2 className="text-lg font-semibold">Andre Valerix</h2>
                      <button className="mt-1 px-3 py-1 bg-green-300 text-green-800 rounded text-sm">
                        Get in Touch
                      </button>
                    </div>
                  </div>
                  {/* Project Info */}
                  <div className="text-sm text-gray-600">
                    <p>
                      project info project info project info project info project info
                      project info project info project info project info project info
                    </p>
                  </div>
                  {/* Read More */}
                  <div>
                    <button className="text-blue-500 text-sm">Read more...</button>
                  </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-wrap items-center justify-center md:ml-auto gap-2 mt-4 md:mt-0">
                  {/* Placeholder for images */}
                  {[1, 2, 3, 4].map((_, idx) => (
                    <div key={idx} className="w-16 h-16 bg-gray-300 rounded-lg"></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> {/* End of White Background Frame */}
    </div>
  );
}
