import React from "react";
import Button from "./Button";


export default function Login() {
  return (
    <div
      className="flex flex-col flex-1 justify-center items-center gap-4"
      style={{
        backgroundImage: `url('/components/img/bg.jpg')`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <h4 className={" text-4xl sm:text-5xl md:text-6xl "}>Log In</h4>
      <input
        className="w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-white-600 focus:border-white-600 py-2  sm:py-2 border border-solid border-white-400 rounded-full outline-none"
        placeholder="Email"
      />
      <input
        className="w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-white-600 focus:border-white-600 py-2  sm:py-2 border border-solid border-white-400 rounded-full outline-none"
        placeholder="Password"
        type="password"
      />
      <div className="max-w-[400px] w-full mx-auto flex justify-center items-center px-3  sm:py-2">
        <Button text="Submit" full />
      </div>
      <p className="text-center">
        Don't have an account? <span className="text-indigo-600">Sign in</span>
      </p>
      <p className="text-center">
        <span className="text-indigo-600">I forgot my password</span>
      </p>
    </div>
  );
}
