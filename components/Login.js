import React from "react";
import Button from "./Button";
import Layout from "./Layout";

export default function Login() {
  return (
    <Layout>
      <div
        className="flex flex-col flex-1 justify-center items-center gap-4 bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: `url(/images/authbackground.png)`, // Reference to the public folder
        }}
      >
        <h4 className="text-4xl text-[#537156] font-bold sm:text-5xl md:text-4xl">Login</h4>
        <br />

        {/* Username Input */}
        <div className="w-full max-w-[300px]">
          <label className="text-[#537156] font-bold block mb-1">User name</label>
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

        {/* Remember Me */}
        <div className="w-full max-w-[300px] flex items-center gap-2 text-white">
          <input type="checkbox" id="remember" className="w-4 h-4" />
          <label className=" text-[#537156]" htmlFor="remember">Stay logged in</label>
        </div>

        {/* Login Button */}
        <div className="max-w-[300px] w-full mx-auto flex justify-center items-center px-3 sm:py-2 text-white">
          <Button text="Log In" full />
        </div>

        {/* Signup and Forgot Password Links */}
        <p className="text-center text-[#537156]">
          Don't have an account?{" "}
          <span className="text-[#4A7337] font-bold cursor-pointer">Sign up</span>
        </p>
        <p className="text-center">
          <span className="text-[#4A7337] font-bold cursor-pointer">I forgot my password</span>
        </p>
      </div>
    </Layout>
  );
}
