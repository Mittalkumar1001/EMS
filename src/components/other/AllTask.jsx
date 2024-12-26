import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const authData = useContext(AuthContext);

  if (!authData || !authData.employees) {
    return <div>No tasks available</div>;
  }

  return (
    <div className='bg-[#1c1c1c] h-60  p-5'>

       <div  className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
          <h2 className='text-xl font-medium w-1/5 '>Employee name</h2>
          <h3 className='text-xl font-medium w-1/5 '>New Task</h3>
          <h5 className='text-xl font-medium w-1/5 '>Active Task</h5>
            <h5 className='text-xl font-medium w-1/5 '>Completed</h5>
            <h5 className='text-xl font-medium w-1/5 '>Failed</h5>
        </div>

        <div className='h-[80%] overflow-auto '>
        {authData.employees.map((elem, index) => (
        <div key={index} className=' border-2 border-emerald-400  mb-2 py-2 px-4 flex justify-between rounded'>
          <h3 className='text-xl font-medium w-1/5 text-yellow-400'>{elem.firstname}</h3>
          <h2 className='text-xl font-medium w-1/5 '>{elem.taskSummary.newTask}</h2>
          <h5 className='text-xl font-medium w-1/5 text-red-600'>{elem.taskSummary.active }</h5>
          <h3 className='text-xl font-medium w-1/5 text-blue-600'>{elem.taskSummary.completed}</h3>
            <h5 className='text-xl font-medium w-1/5 text-white'>{elem.taskSummary.failed}</h5>
        </div>
      ))}
        </div>

    </div>
  );
};

export default AllTask;