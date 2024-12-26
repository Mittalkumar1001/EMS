import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='overflow-x-auto flex item-center justify-start gap-5 w-full flex-nowrap  py-5 w-full  mt-10 h-[55%]'>
       {data.tasks.map((elem,idx)=>{
        
        if(elem.active){
            return <AcceptTask key={idx} data={elem}/>
        }
        if(elem.newTask){
            return <NewTask key={idx} data={elem}/>
        }
        if(elem.completed){
            return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.failed){
            return <FailedTask key={idx} data={elem}/>
        }
       })}
        {/* <div className=' flex-shrink-0 h-full w-[300px] bg-red-600 rounded-xl'>
            <div className='mt-2  flex justify-between items-center'>
                <h3 className='ml-3 bg-red-600 text-sm  px-3 py-1 rounded'> high </h3>
                <h4 className='mr-4'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 ml-3 text-xl font-semibold'>Make a youtube video</h2>
            <p className='ml-3 text-sm mt-2'> 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam mollitia totam necessitatibus officia perspiciatis sint.
            </p>
        </div>
        <div className=' flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl'>
            <div className='mt-2  flex justify-between items-center'>
                <h3 className='ml-3 bg-red-600 text-sm  px-3 py-1 rounded'> high </h3>
                <h4 className='mr-4'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 ml-3 text-xl font-semibold'>Make a youtube video</h2>
            <p className='ml-3 text-sm mt-2'> 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam mollitia totam necessitatibus officia perspiciatis sint.
            </p>
        </div>
         */}
        
        
    </div>
  )
}

export default TaskList