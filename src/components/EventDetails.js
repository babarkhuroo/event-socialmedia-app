import React from 'react'
import cake from '../assets/imgs/birthday_cake.png'
import { HiOutlineCalendarDays } from 'react-icons/hi2'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const EventDetails = () => {
  return (
    <main className='flex flex-col max-w-sm mx-auto'>
      <div>
        <img src={cake} alt='birthday cake' />
      </div>
      <div>
        <h2>Birthday Bash</h2>
        <p>
          Hosted by <span>Elysia</span>
        </p>
        <div>
          <div>
            <HiOutlineCalendarDays />
          </div>
          <div>
            <p></p>
            <p></p>
          </div>
        </div>
        <div>
          <div>
            <HiOutlineLocationMarker />
          </div>
          <div>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default EventDetails
