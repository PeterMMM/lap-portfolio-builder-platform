"use client";

import React, { useState } from 'react';
import Layout from './Layout';
import Button from './Button';
import { FaPlus, FaEnvelope, FaInfoCircle, FaLink, FaGlobe } from "react-icons/fa";


export default function Profile() {
    const [bannerImage, setBannerImage] = useState(null);
    const [profileImage, setProfileImage] = useState(null);

    const handleImageChange = (event, setImage) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Layout>
            {/* Banner Section */}
            <div className="relative w-full h-64 bg-gray-200 flex justify-center items-center">
                {bannerImage && (
                    <img src={bannerImage} alt="Banner" className="absolute w-full h-full object-cover" />
                )}
                <label className="flex flex-col items-center justify-center cursor-pointer">
                    <div className="bg-white p-10 rounded-lg">
                        <FaPlus className="text-[#EFD9B8] text-3xl" />
                    </div>
                    <p className="text-white font-bold mt-2">Click To Add Banner Picture</p>
                    <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, setBannerImage)} className="hidden" />
                </label>
            </div>

            {/* Profile Section */}
            <div className="flex flex-col md:flex-row w-full p-4 gap-8 mt-4 mx-0">
                {/* Left Side: Project */}
                <div className="md:w-4/6 lg:h-[100vh] h-[66vh] grid grid-cols-2 gap-4 p-4 bg-green-100 rounded-lg">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="border-2 border-dashed border-gray-400 flex flex-col justify-center items-center p-4 rounded-lg cursor-pointer">
                            <FaPlus className="text-gray-600 text-3xl" />
                            <p className="mt-2 text-gray-600">Create a new Project</p>
                        </div>
                    ))}
                </div>

                {/* Right Side: Profile */}
                <div className="md:w-2/6 text-center mt-8 mx-8 md:mt-0">
                    <label className="relative w-32 h-32 mx-auto block bg-[#E4F5DE] border-2 border-grey-600 cursor-pointer rounded-full overflow-hidden">
                        {profileImage ? (
                            <img src={profileImage} alt="Profile" className="w-full h-full rounded-full  object-cover" />
                        ) : (
                            <div className="w-full h-full flex justify-center items-center rounded-[12px] relative ">
                                <FaPlus className="text-[#EFD9B8] text-2xl" />
                            </div>
                        )}
                        <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, setProfileImage)} className="hidden" />
                    </label>
                    <h2 className="text-[#537156] text-xl font-semibold mt-4">Andre Valerix</h2>

                    <p className="text-gray-600 text-left font-semibold">About me</p>
                    <p className="text-[#62825D] text-left "> Branding & Identity | Web design with an emphasis on creative, emotional solutions. Branding & Identity | Web design with an emphasis on creative, emotional solutions.
                    </p>
                    {/* Tags */}
                    <div className="flex justify-left gap-2 mt-4">
                        <span className="px-4 py-2 bg-green-200 text-green-700 rounded-full text-sm">#Freelancer</span>
                        <span className="px-4 py-2 bg-green-200 text-green-700 rounded-full text-sm">#Illustrator</span>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-6 text-gray-700 space-y-2">
                        <p className="flex items-center justify-left gap-2"><FaEnvelope /> Andre@gmail.com</p>
                        <p className="flex items-center justify-left gap-2"><FaInfoCircle /> Illustrator, etc.</p>
                        <p className="flex items-center justify-left gap-2"><FaLink /> Https:link</p>
                        <p className="flex items-center justify-left gap-2"><FaGlobe /> Myanmar, Yangon</p>
                    </div>

                    <div className="w-full max-w-[300px] mt-6 flex justify-start px-0 sm:py-2 text-white">
                        <Button text="Edit Profile" full />
                    </div>



                </div>
            </div>

        </Layout>
    );
}
