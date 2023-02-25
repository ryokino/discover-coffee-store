import React from 'react'

const Banner = (props) => {
  const { buttonText, handleOnClick } = props
  return (
    <div className='mb-24 relative z-20 lg:text-left'>
      <h1 className='tracking-tight font-extrabold text-colorblack text-5xl leading-none sm:text-4xl md:text-6xl lg:text-7xl'>
        <span className='text-[rgba(249,250,251,1)]'>Coffee </span>
        <span className='block text-colorpurple lg:pl-2 xl:inline'>
          Connosieur
        </span>
      </h1>
      <p className='mt-3 text-2xl leading-8 text-colorwhite sm:mt-5 md:max-w-xl lg:mx-0'>
        Discover your local coffee shops!
      </p>
      <div className='mt-5 sm:flex sm:mt-8 lg:justify-start'>
        <button
          className='bg-colorpurple cursor-pointer text-white outline-none border-none py-4 text-lg leading-7 px-10 hover:bg-colorpurpledark md:py-4 md:text-lg '
          onClick={props.handleOnClick}>
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default Banner
