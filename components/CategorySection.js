import React from "react";

const categories = [
  {
    id: 1,
    name: "Web Developers",
    image: "/images/green.png", // Replace with actual image path
    link: "/categories/web-developers",
  },
  {
    id: 2,
    name: "Freelancers",
    image: "/images/green.png",
    link: "/categories/freelancers",
  },
  {
    id: 3,
    name: "Photography",
    image: "/images/green.png",
    link: "/categories/photography",
  },
];

const CategorySection = () => {
  return (
    <div className="flex space-x-4 items-center overflow-x-auto py-4">
      {/* Add Post Button */}
      <div className="flex flex-col items-center cursor-pointer">
        <div className="w-16 h-16 flex items-center justify-center bg-green-700 rounded-full">
          <svg
            width="40"  // Adjusted size for bigger icon
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5" // Adjust for thinner lines
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
        <p className="text-sm text-green-700 mt-1">Add your post</p>
      </div>

      {/* Category Items */}
      {categories.map((category) => (
        <a
          key={category.id}
          href={category.link}
          className="flex flex-col items-center"
        >
          <div
            className="w-40 h-16 bg-cover bg-center rounded-full border-2 border-transparent hover:border-blue-400 transition"
            style={{ backgroundImage: `url(${category.image})` }}
          ></div>
          <p className="text-sm text-green-700 font-semibold mt-1">
            #{category.name}
          </p>
        </a>
      ))}
    </div>
  );
};

export default CategorySection;
