import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/imgs/landing_page_image.svg'

const LandingPage = () => {
  return (
    <main className='flex flex-col items-center gap-9 md:gap-14 max-w-sm md:max-w-xl mx-auto mt-24'>
      <section className='flex flex-col items-center gap-4 mx-5 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold text-heading'>
          Imagine if
          <span className='block text-transparent bg-clip-text bg-gradient-to-r from-leftGrad to-rightGrad'>
            Snapchat
          </span>
          had events.
        </h1>
        <p className='font-light text-para px-3 md:text-2xl'>
          Easily host and share events with your friends across any social
          media.
        </p>
      </section>
      <div className='w-40 md:w-80 drop-shadow-shadowSmall md:drop-shadow-shadowMedium rounded-xl md:rounded-3xl'>
        <img src={landingImg} alt='landing image' />
      </div>
      <Link
        to='/create'
        className='p-4 font-bold text-white text-center md:text-xl rounded-xl mb-4 md:w-80 bg-gradient-to-r from-leftGrad to-rightGrad'>
        🎉 Create my event
      </Link>
    </main>
  )
}

export default LandingPage
