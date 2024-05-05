import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    if (!data.mobile) {
      errors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(data.mobile)) {
      errors.mobile = 'Mobile number must be 10 digits';
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
    if (!data.confirmPassword) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-100'>
        <h1 className="mb-8 text-3xl font-bold text-black">User SignUp</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">UserName</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="username" type="text" placeholder="Enter your Name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">Mobile number</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mobile" name="mobile" type="text" placeholder="Enter your mobile number" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Enter mail" />
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10" id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter password" />
          <button
            type="button"
            className="absolute inset-y-0 right-0 px-2 py-1"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEyeInvisible className="h-5 w-5 text-gray-400 mt-6" /> : <AiOutlineEye className="h-5 w-5 text-gray-400 mt-6" />}
          </button>
        </div>
        <div className="mb-6 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10" id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} placeholder="Enter password" />
          <button
            type="button"
            className="absolute inset-y-0 right-0 px-2 py-1"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <AiOutlineEyeInvisible className="h-5 w-5 text-gray-400 mt-6" /> : <AiOutlineEye className="h-5 w-5 text-gray-400 mt-6" />}
          </button>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign Up
          </button>
       <Link to="/" >   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Login In
          </button></Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
