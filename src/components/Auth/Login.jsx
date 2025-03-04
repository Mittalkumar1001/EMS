import React, { useState } from 'react';

const Login = ({handleLogin}) => {
  
const[email,setEmail] = useState('')
const[password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    

    setEmail("")
    setPassword("")
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20">
        <form
          onSubmit={(e)=>{
            submitHandler(e)
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
            }}
            required
            className="text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white"
            type="email"
            placeholder="Enter your email"
          />
          <input
          value = {password}
          onChange = {(e)=>{
            setPassword(e.target.value)
          }}
            required
            className="text-white outline-none bg-transparent border-2 mt-3 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white"
            type="password"
            placeholder="Enter password"
          />
          <button
            className="text-white mt-8 border-none outline-none hover:bg-emerald-600 font-semibold bg-emerald-500 border-emerald-700 text-lg py-3 px-5 w-full text-center rounded-full"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
