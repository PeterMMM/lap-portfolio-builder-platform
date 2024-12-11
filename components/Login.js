import React from 'react'
import Button from './Button';


export default function Login() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4">
      <h3 className={' text-4xl sm:text-5xl md:text-6xl ' }>Log In / Register</h3>
      <input className="w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-white-600 focus:border-white-600 py-2  sm:py-2 border border-solid border-white-400 rounded-full outline-none" placeholder="Email"/>
      <input className="w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-white-600 focus:border-white-600 py-2  sm:py-2 border border-solid border-white-400 rounded-full outline-none" placeholder="Password"/>
      <div className="max-w-[400px] w-full mx-auto">
      <Button text="Submit" full  />
      </div>
      <p className="text-center">Don't have an account? <span className="text-white-600">Sign up</span></p>

    </div> 
  );
}
