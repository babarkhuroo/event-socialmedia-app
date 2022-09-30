import React from 'react'

const CreateEvent = () => {
  return (
    <main>
      <h2>Create Event</h2>
      <form>
        <p>
          <label htmlFor=''>Event Name</label>
          <input type='text' />
        </p>
        <p>
          <label htmlFor=''>Host Name</label>
          <input type='text' />
        </p>
        <p>
          <label htmlFor=''>Start date</label>
          <input type='date' />
        </p>
        <p>
          <label htmlFor=''>End date</label>
          <input type='date' />
        </p>
        <p>
          <label htmlFor=''>Location</label>
          <input type='text' />
        </p>
        <p>
          <label htmlFor=''>Event Photo</label>
          <input type='file' />
        </p>
        <button type='submit'>Add Event</button>
      </form>
    </main>
  )
}

export default CreateEvent
