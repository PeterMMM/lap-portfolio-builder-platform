"use client";
import React, { useState } from "react";
import Button from "./Button";
import { FaPlus, FaEnvelope, FaInfoCircle, FaLink, FaGlobe } from "react-icons/fa";

export default function ProfileEdit() {
    const [profileImage, setProfileImage] = useState(null);
    const [bannerImage, setBannerImage] = useState(null);

    const handleImageChange = (event, setImage) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="p-4 flex flex-col items-center bg-gray-100 min-h-screen">
            <div className="w-full md:w-3/5 mt-6 flex justify-start px-0 ml-0 sm:py-2 text-white">
                <Button text="Go Back to Profile" full />
            </div>
            <div className="w-full md:w-3/5 bg-white rounded-lg p-6 shadow-md">
                {/* Profile and Banner Upload */}
                <div className="flex flex-col sm:flex-row mb-6 gap-8">
                    {/* Profile Upload */}
                    <div className="flex flex-col items-center w-full sm:w-1/4">
                        <label htmlFor="profileUpload" className="w-full h-60 bg-gray-300 rounded-md flex items-center justify-center cursor-pointer overflow-hidden">
                            {profileImage ? <img src={profileImage} alt="Profile" className="w-full h-full object-cover" /> : '+'}
                        </label>
                        <input type="file" id="profileUpload" className="hidden" accept="image/*" onChange={(e) => handleImageChange(e, setProfileImage)} />
                        <p className="text-sm mt-2">Upload profile picture here</p>
                    </div>

                    {/* Banner Upload */}
                    <div className="flex flex-col items-center w-full sm:w-3/4">
                        <label htmlFor="bannerUpload" className="w-full h-60 bg-gray-300 flex items-center justify-center cursor-pointer overflow-hidden">
                            {bannerImage ? <img src={bannerImage} alt="Banner" className="w-full h-full object-cover" /> : '+'}
                        </label>
                        <input type="file" id="bannerUpload" className="hidden" accept="image/*" onChange={(e) => handleImageChange(e, setBannerImage)} />
                        <p className="text-sm mt-2">Upload banner picture here</p>
                    </div>
                </div>

                {/* About Me and Professional Tags */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {/* Left Column: About Me and Profession Tags */}
                    <div className="flex flex-col">
                        {/* About Me Textarea */}
                        <textarea placeholder="Insert your About me info here" className="w-full h-24 p-2 border rounded-md mb-2" />

                        {/* Profession Tags */}
                        <div>
                            <p className="mb-2">Select your profession tag</p>
                            <div className="flex flex-wrap gap-2">
                                {['Freelancer', 'Illustrator', 'Programmer', 'Photographer', 'Editor', 'Writer', 'Artist'].map(tag => (
                                    <span key={tag} className="bg-green-200 px-2 py-1 rounded-md text-sm">#{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Other Inputs */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <FaEnvelope className="text-gray-600" />
                            <input type="text" placeholder="Insert your Email" className="w-full p-2 border rounded-md" />
                        </div>
                        <div className="flex items-center gap-2">
                            <FaInfoCircle className="text-gray-600" />
                            <input type="text" placeholder="Insert more about your work title" className="w-full p-2 border rounded-md" />
                        </div>
                        <div className="flex items-center gap-2">
                            <FaLink className="text-gray-600" />
                            <input type="text" placeholder="Insert your external work links" className="w-full p-2 border rounded-md" />
                        </div>
                        <div className="flex items-center gap-2">
                            <FaGlobe className="text-gray-600" />
                            <input type="text" placeholder="Insert your current location" className="w-full p-2 border rounded-md" />
                        </div>
                    </div>
                </div>

                {/* Portfolio Info */}
                <textarea placeholder="Insert your portfolio's info here" className="w-full h-24 p-2 border rounded-md mb-6" />

                {/* Portfolio Image Upload */}
                <div className="w-full h-80 bg-gray-300 flex items-center justify-center cursor-pointer rounded-md overflow-hidden">
                    <p className="text-sm">Upload portfolio picture here</p>
                </div>

                <div className="flex justify-between mt-4">
                    <div></div> {/* Empty div to push "Done" to the right */}
                    <Button text="Done" full />
                </div>
            </div>
        </div>
    );
}
