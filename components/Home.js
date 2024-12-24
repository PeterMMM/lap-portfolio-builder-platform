import React from 'react'
import Button from './Button'

export default function Home() {
  return (
    <div className="py-4 md:py-10 flex flex-col gap-4 sm:gap-8">
      <div className="grid grid-cols-2 gap-4 w-fit mx-auto ">
        <Button text="Sign up" />
        <Button text="Login" />
      </div>
    </div>  )
}
