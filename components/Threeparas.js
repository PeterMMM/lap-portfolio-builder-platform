import React from 'react';

export default function Threeparas() {
  return (
    <div className="space-y-10"> 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-24 px-8 py-1 mt-4 ml-52 mr-52 ">
        <div>
          <h2 className="text-xl font-semibold mb-4">Talented People</h2>
          <p className="text-gray-700 font-semibold text-sm">
            Showcasing the brilliance of individuals across diverse industries, highlighting their unique skills and inspiring journeys.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Latest trend</h2>
          <p className="text-gray-700 font-semibold text-sm">
            Stay ahead of the curve with insights into cutting-edge innovations and evolving trends shaping multiple domains.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 ">Multiple fields</h2>
          <p className="text-gray-700 font-semibold text-sm ">
            Explore a dynamic range of expertise and creativity, bridging the gap between different industries and disciplines.
          </p>
        </div>
      </div>
    </div>
  );
}
