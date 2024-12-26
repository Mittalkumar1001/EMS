import React from 'react';

const Header = (props) => {

  // const [username,setUsername] = useState('')

  // if(!dara){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstname)
  // }

const logOutUser = () => {  

  localStorage.setItem("loggedInUser",'')
  // window.location.reload()
  // console.log(props.changeUser)
  props.changeUser('')
}
  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-2xl font-semibold'>
        Hello <br />
        <span className='text-3xl'>{"username"} 👋</span>
      </h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-s-sm'>
        Log Out
      </button>
    </div>
  );
};

export default Header;