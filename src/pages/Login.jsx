import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const validationErrors = validateFormData(data);
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data is valid:', data);
      // Proceed with form submission
    } else {
      const errorMessage = Object.values(validationErrors).join('\n');
      alert(errorMessage);
    }
  };

  const validateFormData = (data) => {
    let errors = {};
    if (!data.username) {
      errors.username = 'Username is required';
    }
    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }
    if (!data.password) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    return errors;
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-800'>
      <h1 className="mb-8 text-3xl font-bold text-white">User Login</h1>
      <form onSubmit={handleSubmit} className='flex flex-col items-center bg-white p-8 rounded shadow-md'>
        <div className="mb-4 w-full flex justify-between">
          <label htmlFor='username' className='mr-2'>UserName</label>
          <input type='text' id='username' name='username' placeholder='Enter your Name' className='px-3 py-2 border border-gray-300 rounded' />
        </div>
        
        <div className="mb-4 w-full flex justify-between">
          <label htmlFor='email' className='mr-2'>Email</label>
          <input type='email' id='email' name='email' placeholder='Enter mail' className='px-3 py-2 border border-gray-300 rounded' />
        </div>
        
        <div className="mb-4 w-full flex justify-between relative">
          <label htmlFor='password' className='mr-2 pr-10'>Password</label>
          <input type={showPassword ? 'text' : 'password'} id='password' name='password' placeholder='Enter password' className='px-3 py-2 border border-gray-300 rounded pr-10' />
          <button
            type="button"
            className="absolute inset-y-0 right-0 px-2 py-1"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEyeInvisible className="h-5 w-5 text-gray-400" /> : <AiOutlineEye className="h-5 w-5 text-gray-400" />}
          </button>
        </div>
        <div className="mb-4 w-full flex justify-center">
          <button type='submit' id='button' className='px-6 py-3 bg-gray-800 text-white  hover:bg-gray-700 p-8 pl-36 pr-36 rounded-full'>LOGIN</button>
        </div>
        
        <div className="flex justify-between w-full">
          <Link to="/forgot" ><p className="text-sm text-sky-600 underline">Forgot password</p></Link>  
          <Link to="/signup" className="text-sm text-sky-600 underline">Sign up</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
