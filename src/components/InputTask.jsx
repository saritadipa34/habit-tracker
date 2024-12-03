import React from 'react'

const InputTask = () => {
  return (
    <div className='bg-blue-300 p-[50px] m-[70px]'>
        <label htmlFor="habit">habit:</label>
        <br />
      <input className=' p-1 w-[400px] border border-black' type="text" placeholder='add habit' />
    </div>
  )
}

export default InputTask
