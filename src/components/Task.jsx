import React from 'react'

const Task = ({task}) => {

  return (
    <div className='w-[340px] bg-yellow-200 my-5 p-1'>
      {/* <h3 className='m-4'>Suggestions</h3> */}
      {task}
      
    </div>
  )
}

export default Task
