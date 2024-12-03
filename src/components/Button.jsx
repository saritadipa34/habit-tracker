import React from 'react'
import Image from './Image'
const Button = ({handleBtn}) => {
  return (
    <div>
      <button onClick={handleBtn} className='border rounded-lg bg-slate-400 ml-[90%] my-1 text-sm'>
        {<Image /> ? "Add Habbit" : "Cancel"}</button>
    </div>
  )
}

export default Button
