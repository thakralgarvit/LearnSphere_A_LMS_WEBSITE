import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full 
    md:pt-36 pt-20 px-7 md:px-0 space-y07 text center bg-gradient-to-b from-cyan-100/70">
      <h1 className="md:text-home-heading-large text-home-heading-small relative
      font-bold text-grey-800 max-w-3xl mx-auto">Your journey to knowledge starts here.</h1>
      <p className="md:block hidden text-grey-500 max-w-2xl mx-auto">
        We bring together world-class instructors, 
        interactive content, and a supportive community 
        to help you achive your personal 7 professional goals.
      </p>

      <p className="md:hidden text-grey-500 max-w-sm mx-auto">We bring together
        world-class instructors to help you achive your professional goals.
      </p>
    </div>
  )
}

export default Hero