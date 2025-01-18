import React from 'react'
import Layout from './Layout'
import bgImage from "../images/bg.png";
import Button from './Button'

export default function Signup() {
  return (
    <Layout>

    <div
      className="flex flex-col flex-1 justify-center items-center gap-4 bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url(${bgImage.src})`, 
      }}
    >
      <h4 className={" text-4xl text-white sm:text-5xl md:text-6xl "}>Signup</h4>
      <input
        className="w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-white-600 focus:border-white-600 py-2  sm:py-2 border border-solid border-white-400 rounded-full outline-none"
        placeholder="Email"
      />
        <input
        className="w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-white-600 focus:border-white-600 py-2  sm:py-2 border border-solid border-white-400 rounded-full outline-none"
        placeholder="Username"
      />
      <input
        className="w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-white-600 focus:border-white-600 py-2  sm:py-2 border border-solid border-white-400 rounded-full outline-none"
        placeholder="Password"
        type="password"
      />
        <input
        className="w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-white-600 focus:border-white-600 py-2  sm:py-2 border border-solid border-white-400 rounded-full outline-none"
        placeholder="Password"
        type="repassword"
      />
      <div className="max-w-[400px] w-full mx-auto flex justify-center items-center px-3  sm:py-2 text-white">
        <Button text="Sign up" full />
      </div>
      <p className="text-center text-white">
        Already have an account <span className="text-blue-500">Log in</span>
      </p>
      <p className="text-center">
        <span className="text-blue-500">I forgot my password</span>
      </p>
    </div>
    </Layout>
  )
}
