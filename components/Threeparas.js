import React from 'react';

export default function Threeparas() {
  return (
    <div className="space-y-10 px-4 sm:px-8 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 py-4 mx-auto max-w-5xl">
        <div className="flex flex-col items-start">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Talented People</h2>
          <p className="text-gray-700 font-semibold text-sm sm:text-base">
            Showcasing the brilliance of individuals across diverse industries, highlighting their unique skills and inspiring journeys.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Latest trend</h2>
          <p className="text-gray-700 font-semibold text-sm sm:text-base">
            Stay ahead of the curve with insights into cutting-edge innovations and evolving trends shaping multiple domains.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Multiple fields</h2>
          <p className="text-gray-700 font-semibold text-sm sm:text-base">
            Explore a dynamic range of expertise and creativity, bridging the gap between different industries and disciplines.
          </p>
        </div>
      </div>
    </div>
  );
}
