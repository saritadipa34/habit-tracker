import React from 'react'
import Quote from './Quote'
import Suggestions from './Suggestions'
import Image from './Image'
import Button from './Button'

const Body = () => {
  return (
    <div className='flex justify-between'>
    <div className='flex flex-col '>
      <Quote />
      <Button />
      <Image />
    </div>
      <Suggestions />
      </div>
  )
}

export default Body
