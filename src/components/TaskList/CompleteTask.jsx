import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl'>
    <div className='mt-2  flex justify-between items-center'>
        <h3 className='ml-3 bg-red-600 text-sm  px-3 py-1 rounded'> {data.category}</h3>
        <h4 className='mr-4'>{data.date}</h4>
    </div>
     <h2 className='mt-5 ml-3 text-xl font-semibold'>{data.title}</h2>
     <p className='ml-3 text-sm mt-2'> 
        {data.description}    
     </p>
     <div  className='flex justify-between  mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm ml-4 rounded'> Completed</button>
        {/* <button className='bg-red-500 py-1 px-2 text-sm mr-4 rounded'>Mark as Failed</button> */}
     </div>
</div>
  )
}

export default CompleteTask