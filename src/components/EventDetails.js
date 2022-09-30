import React from 'react'
import cake from '../assets/imgs/birthday_cake.png'

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
            <img src='' alt='' />
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
