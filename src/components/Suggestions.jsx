
import Task from './Task'
const Suggestions = () => {
   const tasks=["Read one Page","Meditate 5 min","Jogging","Exercise","Wake up early","Go to bed by 11","Cleaning"]

  return (
    <div className='h-[450px] w-[400px] bg-green-400 p-8'>
      <h1 className='text-center text-blue-700'>Suggestions</h1>
    { tasks.map((task,index)=>(
     <Task  key={index} task={task}/>
     ))}
    </div> 
  )
}

export default Suggestions
