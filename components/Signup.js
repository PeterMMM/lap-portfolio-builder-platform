import React from "react";
import Layout from "./Layout";
import Button from "./Button";

export default function Signup() {
  return (
    <Layout>
      <div
        className="flex flex-col flex-1 justify-center items-center gap-4 bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: `url('/images/authbackground.png')`, // Updated background image path
        }}
      >
        <h4 className="text-4xl text-[#537156] font-bold sm:text-5xl md:text-4xl">Signup</h4>
        <br />

        {/* Email Input */}
        <div className="w-full max-w-[300px]">
          <label className="text-[#537156] font-bold block mb-1">Email</label>
          <input
            className="w-full px-3 py-2 border border-solid rounded-[12px] outline-none duration-200 bg-[#E4F5DE] border-[#537156] hover:border-[#40583D] focus:border-[#33472F] placeholder-[#537156]"
            placeholder="Enter your email"
          />
        </div>

        {/* Username Input */}
        <div className="w-full max-w-[300px]">
          <label className="text-[#537156] font-bold block mb-1">Username</label>
          <input
            className="w-full px-3 py-2 border border-solid rounded-[12px] outline-none duration-200 bg-[#E4F5DE] border-[#537156] hover:border-[#40583D] focus:border-[#33472F] placeholder-[#537156]"
            placeholder="Enter your username"
          />
        </div>

        {/* Password Input */}
        <div className="w-full max-w-[300px]">
          <label className="text-[#537156] font-bold block mb-1">Password</label>
          <input
            className="w-full px-3 py-2 border border-solid rounded-[12px] outline-none duration-200 bg-[#E4F5DE] border-[#537156] hover:border-[#40583D] focus:border-[#33472F] placeholder-[#537156]"
            placeholder="Enter your password"
            type="password"
          />
        </div>

        {/* Confirm Password Input */}
        <div className="w-full max-w-[300px]">
          <label className="text-[#537156] font-bold block mb-1">Confirm Password</label>
          <input
            className="w-full px-3 py-2 border border-solid rounded-[12px] outline-none duration-200 bg-[#E4F5DE] border-[#537156] hover:border-[#40583D] focus:border-[#33472F] placeholder-[#537156]"
            placeholder="Confirm your password"
            type="password"
          />
        </div>

        {/* Sign Up Button */}
        <div className="max-w-[300px] w-full mx-auto flex justify-center items-center px-3 sm:py-2 text-white">
          <Button text="Sign up" full />
        </div>

        {/* Login Link */}
        <p className="text-center text-[#537156]">
          Already have an account?{" "}
          <span className="text-[#4A7337] font-bold cursor-pointer">Log in</span>
        </p>
        <p className="text-center">
          <span className="text-[#4A7337] font-bold cursor-pointer">I forgot my password</span>
        </p>
      </div>
    </Layout>
  );
}
