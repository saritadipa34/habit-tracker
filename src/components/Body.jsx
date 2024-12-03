import React, { useState } from 'react'
import Quote from './Quote'
import Suggestions from './Suggestions'
import Image from './Image'
import Button from './Button'
import InputTask from './InputTask'

const Body = () => {
  const[imageBox,setImageBox]=useState(true)
  const handleBtn=()=>{
setImageBox(!imageBox)
    console.log("clicked")
  }
  return (
    <div className='flex justify-between'>
    <div className='flex flex-col '>
      <Quote />
      <Button handleBtn={handleBtn} />
      {imageBox ? <Image /> : <InputTask />}
    </div>
      <Suggestions />
      </div>
  )
}

export default Body
