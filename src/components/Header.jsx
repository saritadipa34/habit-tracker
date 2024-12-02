import React from 'react'
import logo from '../assets/logo.jpg'
const Header = () => {
  return (
    <div className='h-[80px] w-[100vw] bg-green-200 flex justify-between pr-[50px] mb-[25px]'>
        <div>
            <img className='h-[80px] w-[80px]' src={logo} alt="logo" />
        </div>
      <ul className='flex my-[25px] justify-between'>
        <li className='mx-[50px]'>Home</li>
        <li>Your Habits</li>
      </ul>
    </div>
  )
}

export default Header
