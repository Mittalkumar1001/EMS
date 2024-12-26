import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 screen justify-between gap-5'>
        <div className='h-40 rounded-xl w-[45%]  py-6 px-9 p-10 bg-red-400'>
            <h2 className='text-3xl font-semoibold'>{data.taskSummary.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='h-40 rounded-xl w-[45%]  py-6 px-9 p-10 bg-blue-400'>
            <h2 className='text-3xl font-semoibold'>{data.taskSummary.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='h-40 rounded-xl w-[45%]  py-6 px-9 p-10 bg-yellow-400'>
            <h2 className='text-3xl font-semoibold'>{data.taskSummary.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className='h-40 rounded-xl w-[45%]  py-6 px-9 p-10 bg-green-400'>
            <h2 className='text-3xl font-semoibold'>{data.taskSummary.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers